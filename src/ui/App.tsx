import React, { useEffect, useRef, useState } from "react";
import useGameLoop from "./hooks/useGameLoop";
import Ball from "./Pong/Ball";
import Paddle from "./Pong/Paddle";
import { BoxCircleCollision } from "./Pong/colliders";
export default function App() {
  const canvas = useRef();

  const [initialized, setInitialized] = useState(false);
  const [ball, setBall] = useState<any>(null);

  const [leftPaddle, setLeftPaddle] = useState<any>(null);
  const [rightPaddle, setRightPaddle] = useState<any>(null);

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Controls
  const [keys, setKeys] = useState<any>([]);
  const [attached, setAttached] = useState(false);

  // Attach control event listeners
  useEffect(() => {
    if (!attached) {
      document.body.addEventListener("keydown", (e) => (keys[e.key] = true));
      document.body.addEventListener("keyup", (e) => (keys[e.key] = false));
    }
  }, []);

  // // Resize Canvas
  useEffect(() => {
    //@ts-ignore
    const ctx = canvas.current.getContext("2d");
    ctx.canvas.width = 700;
    ctx.canvas.height = 500;
  }, []);

  // Initiallize game objects
  useEffect(() => {
    //@ts-ignore
    const ctx = canvas.current.getContext("2d");
    if (!initialized) {
      setBall(new Ball(ctx, ctx.canvas.width / 2, ctx.canvas.height / 2, 8));
      setLeftPaddle(new Paddle(ctx, 0, ctx.canvas.height / 2, 10, 80));
      setRightPaddle(new Paddle(ctx, 1, ctx.canvas.height / 2, 10, 80));

      setInitialized(false);
    }
  }, []);

  // Renders game objects each frame
  function renderGameObjects(ctx) {
    if (ball) {
      ball.update(player1Score, player2Score, setPlayer1Score, setPlayer2Score);
      ball.draw();
    }

    if (leftPaddle) {
      if (keys["w"]) leftPaddle.up();
      if (keys["s"]) leftPaddle.down();
      leftPaddle.draw();
      // leftPaddle.collider.draw();
    }

    if (rightPaddle) {
      if (keys["ArrowUp"]) rightPaddle.up();
      if (keys["ArrowDown"]) rightPaddle.down();
      rightPaddle.draw();
      // rightPaddle.collider.draw();
    }
  }

  // Handle collisions
  function handleCollisions() {
    if (BoxCircleCollision(leftPaddle, ball)) {
      ball.directionX *= -1;
    }

    if (BoxCircleCollision(rightPaddle, ball)) {
      ball.directionX *= -1;
    }
  }

  // Main game loop
  useGameLoop(
    (time, fps) => {
      // @ts-ignore
      const ctx = canvas.current.getContext("2d");

      // Clear canvas each frame
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Handle collisions
      handleCollisions();

      // Draw and update game objects
      renderGameObjects(ctx);
    },
    [ball, player1Score, player2Score, leftPaddle, rightPaddle]
  );

  return (
    <main className="flex flex-col gap-16 items-center justify-center h-[100vh] w-[100vw]">
      <h1 className="text-5xl text-center leading-relaxed">
        Backbone Pong
        <br />
        <span className="text-[#1A1A1A]">
          {"("}Demo{")"}
        </span>
      </h1>
      <div className="w-[700px] flex flex-col gap-4">
        <div className="flex justify-between">
          <span>Sam</span>
          <span>Jensen</span>
        </div>
        <div className="relative h-[500px] border-white border-8 flex justify-center">
          <span className="absolute top-4 text-4xl text-center">
            {player1Score} {player2Score}
          </span>
          <div className="h-full border-r-4 border-dotted border-[#1A1A1A]"></div>
          <canvas
            /* @ts-ignore */
            ref={canvas}
            className="w-full h-full absolute top-0"
          ></canvas>
        </div>
      </div>
    </main>
  );
}
