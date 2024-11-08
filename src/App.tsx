import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.css";
import DialogPanel from "./components/DialogPanel";
import GameCanvas from "./components/GameCanvas";
import CommandInput from "./components/CommandInput";
import Map from "./components/Map";

const gridSize = 40;

const App: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 });
  const [dialogMessages, setDialogMessages] = useState<string[]>([
    "Welcome to the game! Use commands like 'up', 'down', 'left', 'right' to move.",
  ]);

  let character: HTMLDivElement | null = null;
  let map: HTMLDivElement | null = null;

  // Initialize character position and movement states
  let x = 90;
  let y = 34;
  const held_directions: any[] = [];
  const speed = 1;

  const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  };

  const keys: { [key: number]: string } = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };

  useEffect(() => {
    // Select character and map elements after the component mounts
    character = document.querySelector(".character");
    map = document.querySelector(".map");

    // Set up key event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      const dir = keys[e.which];
      if (dir && held_directions.indexOf(dir) === -1) {
        held_directions.unshift(dir);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const dir = keys[e.which];
      const index = held_directions.indexOf(dir);
      if (index > -1) {
        held_directions.splice(index, 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Start the game loop
    step();

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const placeCharacter = () => {
    const pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--pixel-size"
      )
    );

    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) x += speed;
      if (held_direction === directions.left) x -= speed;
      if (held_direction === directions.down) y += speed;
      if (held_direction === directions.up) y -= speed;

      character?.setAttribute("facing", held_direction);
    }
    character?.setAttribute("walking", held_direction ? "true" : "false");

    // Limits (gives the illusion of walls)
    const leftLimit = -8;
    const rightLimit = 16 * 11 + 8;
    const topLimit = -8 + 32;
    const bottomLimit = 16 * 7;
    x = Math.max(leftLimit, Math.min(rightLimit, x));
    y = Math.max(topLimit, Math.min(bottomLimit, y));

    // Position map and character based on movement
    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;

    if (map) {
      map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
        -y * pixelSize + camera_top
      }px, 0 )`;
    }

    if (character) {
      character.style.transform = `translate3d( ${x * pixelSize}px, ${
        y * pixelSize
      }px, 0 )`;
    }
  };

  // Game loop
  const step = () => {
    placeCharacter();
    window.requestAnimationFrame(step);
  };

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
    <div className="frame">
      <Provider store={store}>
        {/* <DialogPanel />
        <CommandInput onCommand={handleCommand} />
        <GameCanvas playerPosition={playerPosition} gridSize={gridSize} /> */}
        <div className="corner_topleft"></div>
        <div className="corner_topright"></div>
        <div className="corner_bottomleft"></div>
        <div className="corner_bottomright"></div>

        <div className="camera">
          <Map />
          <div className="character"></div>
        </div>
      </Provider>
    </div>
  );
};

export default App;
