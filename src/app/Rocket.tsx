// "use client" directive at the top of the file
"use client";

import React, { useEffect, useRef, useState } from 'react';
import './Rocket.css'; // Assuming you have a CSS file for styling

const Rocket = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  // Initialize variables for later use
  let angle = 0;
  let tick = 0; // A counter to keep track of frames
  const fumeCount = 20; // Number of fume particles

  // Define a state to manage fume particles
  const [fumes, setFumes] = useState<number[]>(Array(fumeCount).fill(0));

  useEffect(() => {
    const mouseMargin = 5;

    const rocket = rocketRef.current;
    const heart = heartRef.current;

    const updatePosition = (event: MouseEvent) => {
      if (rocket && heart) {
        const { clientX: mouseX, clientY: mouseY } = event;

        rocket.style.left = `${mouseX - rocket.offsetWidth / 2}px`;
        rocket.style.top = `${mouseY - rocket.offsetHeight / 2}px`;

        heart.style.left = `${mouseX - heart.offsetWidth / 2}px`;
        heart.style.top = `${mouseY - heart.offsetHeight / 2}px`;
      }
    };

    const animate = () => {
      // Update angle and tick
      angle += 0.05;
      tick++;

      // Update fume particles (just an example of animation logic)
      setFumes((prevFumes) => prevFumes.map((fume, index) => (index + tick) % 100));

      // Request the next frame
      requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="rocket" ref={rocketRef}>
      <svg viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C16 0 25 4.08 25 21C25 25.98 22.92 32.14 21.8 35H10.2C9.08 32.14 7 25.98 7 21C7 4.08 16 0 16 0ZM20 17C20 14.8 18.2 13 16 13C13.8 13 12 14.8 12 17C12 19.2 13.8 21 16 21C18.2 21 20 19.2 20 17ZM7.38 36.04C6.42 33.58 4.34 27.7 4.04 22.3L1.78 23.8C0.66 24.56 0 25.8 0 27.14V39L7.38 36.04ZM32 39V27.14C32 25.8 31.34 24.56 30.22 23.82L27.96 22.32C27.66 27.7 25.56 33.6 24.62 36.06L32 39Z" />
      </svg>
      <div className="glow"></div>
      <div className="heart" ref={heartRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon icon-tabler icons-tabler-filled icon-tabler-heart">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path fill="#dd2d4a" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
        </svg>
      </div>
    </div>
  );
}

export default Rocket;
