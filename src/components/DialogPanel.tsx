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
          className={`tw-my-2 ${
            msg.speaker === "AI" ? "tw-text-left" : "tw-text-right"
          }`}
        >
          <span>{msg.text}</span>
        </div>
      ))}
      <button onClick={handleNextDialog}>Next</button>
    </div>
  );
};

export default DialogPanel;
