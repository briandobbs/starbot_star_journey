import React from "react";

interface DialogPanelProps {
  dialogMessages: string[];
}

const DialogPanel: React.FC<DialogPanelProps> = ({ dialogMessages }) => {
  return (
    <div className="tw-w-full tw-max-w-[500px] tw-p-2.5 tw-bg-[#f9f9f9] tw-border tw-border-[#ccc] tw-h-[400px] tw-overflow-y-auto">
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
