import React, { useState, useEffect } from "react";
import { dialogMessages, DialogMessage } from "../data/dialogData";

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
            msg.speaker === "AI" ? "tw-chat-start" : "tw-chat-end"
          }`}
        >
          <div className="tw-chat-image tw-avatar">
            <div className="tw-w-10 tw-rounded-full tw-bg-gray-300">
              {/* Placeholder for image */}
              <span className="tw-text-sm tw-font-bold tw-text-gray-500">
                {msg.speaker === "AI" ? "S" : "P"}
              </span>
            </div>
          </div>
          <div className="tw-chat-header">
            {msg.speaker === "AI" ? "Ship" : "Starbot"}
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
