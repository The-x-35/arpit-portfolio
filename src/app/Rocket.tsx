"use client";

import React, { useEffect, useRef, useState } from 'react';
import './Rocket.css';

const Rocket: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });
  const [rocketSize, setRocketSize] = useState({ width: 0, height: 0 });
  const [initialized, setInitialized] = useState(false);

  const fumeCount = 20;
  const fps = 60;
  const fumeFrequency = 0.5; // Adjusted frequency for fume generation
  const [tick, setTick] = useState(0);

  const mousePosition = useRef({ x: 0, y: 0 });
  const fumes = useRef<HTMLDivElement[]>([]);
  const fumeSizes = useRef<number[]>(Array.from({ length: fumeCount }, () => Math.random() * 20 + 10));

  useEffect(() => {
    const rocket = rocketRef.current;
    const heart = heartRef.current;
    const body = document.querySelector("body");

    if (!rocket || !heart || !body) return;

    if (!initialized) {
      const rocketBoundingRect = rocket.getBoundingClientRect();
      setRocketPosition({
        x: rocketBoundingRect.left,
        y: rocketBoundingRect.top,
      });
      setRocketSize({
        width: rocketBoundingRect.width,
        height: rocketBoundingRect.height,
      });
      setInitialized(true);
    }

    const calculateNewRocketPosition = (
      rocketX: number,
      rocketY: number,
      mouseX: number,
      mouseY: number,
      currentFps: number
    ) => {
      let xSpeed = (mouseX - rocketX) / (currentFps / 2);
      let ySpeed = (mouseY - rocketY) / (currentFps / 2);
      let x = rocketX + xSpeed;
      let y = rocketY + ySpeed;
      return { x, y };
    };

    const calculateRotationAngle = (
      rocketX: number,
      rocketY: number,
      mouseX: number,
      mouseY: number
    ) => {
      const dx = mouseX - rocketX;
      const dy = mouseY - rocketY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radian to degree
      return angle + 45; // Adjust for rocket's orientation
    };

    const calculateTailPosition = (
      rocketX: number,
      rocketY: number,
      angle: number
    ) => {
      const radians = angle * (Math.PI / 180);
      const tailOffset = -33; // Distance from the rocket's end to the fume's center
      const offsetX = (rocketSize.height / 2 + tailOffset) * Math.cos(radians);
      const offsetY = (rocketSize.height / 2 + tailOffset) * Math.sin(radians);

      return {
        x: rocketX - offsetX,
        y: rocketY - offsetY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.pageX,
        y: event.pageY,
      };
    };

    const removeFume = (fumeElement: HTMLDivElement) => {
      fumeElement.remove();
      fumes.current = fumes.current.filter(fume => fume !== fumeElement);
    };

    const updatePosition = () => {
      if (rocketRef.current) {
        const { x, y } = rocketPosition;
        const { x: mouseX, y: mouseY } = mousePosition.current;

        const newPosition = calculateNewRocketPosition(x, y, mouseX, mouseY, fps);
        const rotationAngle = calculateRotationAngle(x, y, mouseX, mouseY);

        setRocketPosition(newPosition);
        rocketRef.current.style.transform = `translate(${newPosition.x - rocketSize.width / 2}px, ${newPosition.y - rocketSize.height / 2}px)`;

        if (rocketRef.current.firstChild) {
          (rocketRef.current.firstChild as HTMLElement).style.transform = `rotate(${rotationAngle}deg)`;
        }

        const tailPosition = calculateTailPosition(newPosition.x, newPosition.y, rotationAngle);

        // Create fume effect behind the rocket at intervals
        if (tick % fumeFrequency === 0) { // More rapid fume generation
          const div = document.createElement("div");
          div.style.cssText = `
            width: 32px; 
            height: 44px; 
            position: fixed; 
            top: ${tailPosition.y}px; 
            left: ${tailPosition.x}px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            transform: translate(-50%, -50%);
          `;

          const span = document.createElement("span");
          const fumeIndex = tick % fumeCount;
          const fumeSize = fumeSizes.current[fumeIndex];
          span.style.cssText = `
            width: ${fumeSize}px; 
            height: ${fumeSize}px; 
            border-radius: ${fumeSize}px; 
            background-color: white; 
            animation: fadeout 1s ease-in forwards; 
            opacity: 0.6; 
            box-shadow: 0 0 100px #ffffff20;
          `;
          div.append(span);
          body.append(div);
          fumes.current.push(div);

          // Remove the fume after the animation ends
          span.addEventListener("animationend", () => removeFume(div));

          // Ensure the number of fumes remains constant
          if (fumes.current.length > fumeCount) {
            const oldestFume = fumes.current.shift(); // Remove the oldest fume
            if (oldestFume) removeFume(oldestFume);
          }
        }

        setTick(tick + 1);
        requestAnimationFrame(updatePosition);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Start the position update loop
    requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rocketSize, initialized, rocketPosition, tick]);

  return (
    <div className="rocket-container" style={{ position: 'absolute', left: rocketPosition.x - rocketSize.width / 2 - 20, top: rocketPosition.y - rocketSize.height / 2 }}>
      <div className="rocket" ref={rocketRef}>
        <img src='/cursor.svg' alt="Rocket" />
        <div className="glow"></div>
        <div className="heart" ref={heartRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon icon-tabler icons-tabler-filled icon-tabler-heart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path fill="#dd2d4a" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
