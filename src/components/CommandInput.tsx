import React, { useState } from "react";

interface CommandInputProps {
  onCommand: (command: string) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onCommand(input.toLowerCase());
      setInput("");
    }
  };

  return (
    <input
      className="tw-m-2 tw-p-1 tw-input tw-input-bordered tw-w-full tw-max-w-[500px]"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Type a command and press Enter"
    />
  );
};

export default CommandInput;
