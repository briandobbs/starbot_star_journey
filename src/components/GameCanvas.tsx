import React, { useRef, useEffect } from "react";

interface GameCanvasProps {
  playerPosition: { x: number; y: number };
  gridSize: number;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
  playerPosition,
  gridSize,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      canvas.width = 400;
      canvas.height = 400;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      // Draw player character
      ctx.beginPath();
      ctx.arc(
        playerPosition.x * gridSize + gridSize / 2,
        playerPosition.y * gridSize + gridSize / 2,
        10,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "blue";
      ctx.fill();
    }
  }, [playerPosition, gridSize]);

  return <canvas id="gameCanvas" ref={canvasRef} />;
};

export default GameCanvas;
