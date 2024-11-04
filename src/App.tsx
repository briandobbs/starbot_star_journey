import React, { useState } from "react";
import "./App.css";
import DialogPanel from "./components/DialogPanel";
import GameCanvas from "./components/GameCanvas";
import CommandInput from "./components/CommandInput";

const gridSize = 40;

const App: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 });
  const [dialogMessages, setDialogMessages] = useState<string[]>([
    "Welcome to the game! Use commands like 'up', 'down', 'left', 'right' to move.",
  ]);

  const handleCommand = (command: string) => {
    const newMessages = [...dialogMessages];
    switch (command) {
      case "up":
        setPlayerPosition((prev) => ({ ...prev, y: Math.max(0, prev.y - 1) }));
        newMessages.push("You moved up.");
        break;
      case "down":
        setPlayerPosition((prev) => ({ ...prev, y: Math.min(9, prev.y + 1) }));
        newMessages.push("You moved down.");
        break;
      case "left":
        setPlayerPosition((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
        newMessages.push("You moved left.");
        break;
      case "right":
        setPlayerPosition((prev) => ({ ...prev, x: Math.min(9, prev.x + 1) }));
        newMessages.push("You moved right.");
        break;
      default:
        newMessages.push("Unknown command.");
        break;
    }
    setDialogMessages(newMessages);
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-m-4">
      <DialogPanel dialogMessages={dialogMessages} />
      <CommandInput onCommand={handleCommand} />
      <GameCanvas playerPosition={playerPosition} gridSize={gridSize} />
    </div>
  );
};

export default App;
