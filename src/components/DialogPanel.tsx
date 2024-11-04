import React, { useState, useEffect } from "react";
import { dialogMessages, DialogMessage } from "../data/dialogData";
import { SHIP, PLAYER } from "../types/speaker";
import ShipImage from "../assets/ship_portrait_32x32.png";
import StarbotImage from "../assets/starbot_portrait_32x32.png";

const DialogPanel: React.FC = () => {
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [dialog, setDialog] = useState<DialogMessage[]>([]);

  const playerHasWokenUp = true; // start condition for game

  useEffect(() => {
    const filteredDialog = dialogMessages.filter(
      (msg, index) =>
        index <= currentDialogIndex && (!msg.condition || msg.condition())
    );
    setDialog(filteredDialog);
  }, [currentDialogIndex, playerHasWokenUp]);

  const handleNextDialog = () => {
    if (currentDialogIndex < dialogMessages.length - 1) {
      setCurrentDialogIndex(currentDialogIndex + 1);
    }
  };

  return (
    <div className="tw-w-full tw-max-w-[500px] tw-p-2.5 tw-bg-[#f9f9f9] tw-border tw-border-[#ccc] tw-h-[400px] tw-overflow-y-auto">
      {dialog.map((msg, index) => (
        <div
          key={index}
          className={`tw-chat ${
            msg.speaker === SHIP ? "tw-chat-start" : "tw-chat-end"
          }`}
        >
          <div className="tw-chat-image tw-avatar">
            <div className="tw-w-10 tw-rounded-full">
              <img
                src={msg.speaker === SHIP ? ShipImage : StarbotImage}
                alt={msg.speaker === SHIP ? "Ship" : "Starbot"}
              />
            </div>
          </div>
          <div className="tw-chat-header">
            {msg.speaker === SHIP ? "Ship" : "Starbot"}
          </div>
          <div className="tw-chat-bubble">{msg.text}</div>
        </div>
      ))}
      <button className="tw-btn tw-btn-primary" onClick={handleNextDialog}>
        Next
      </button>
    </div>
  );
};

export default DialogPanel;
