import React from "react";

interface DialogPanelProps {
  dialogMessages: string[];
}

const DialogPanel: React.FC<DialogPanelProps> = ({ dialogMessages }) => {
  return (
    <div className="dialog-panel">
      <h2>Dialog</h2>
      <div id="dialogContent">
        {dialogMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default DialogPanel;
