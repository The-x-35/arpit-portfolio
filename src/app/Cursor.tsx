"use client";
import React, { useEffect } from 'react';
import styles from './Cursor.module.css'; // Ensure this is the correct path

const Cursor: React.FC = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(`.${styles.circle}`);

    const colors = [
      "#b0b0b0", "#a8a8a8", "#a0a0a0", "#989898", "#909090", "#888888", "#808080",
      "#787878", "#707070", "#686868", "#606060", "#585858", "#505050", "#484848",
      "#404040", "#383838", "#303030", "#282828", "#202020", "#181818", "#101010",
      "#080808"
    ];

    circles.forEach((circle, index) => {
      (circle as HTMLElement).style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        const circleElement = circle as HTMLElement;
        circleElement.style.left = `${x + 9}px`;
        circleElement.style.top = `${y + 15}px`;
        circleElement.style.transform = `scale(${(circles.length - index) / circles.length})`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (parseFloat(nextCircle.getAttribute("data-x")!) - x) * 0.3;
        y += (parseFloat(nextCircle.getAttribute("data-y")!) - y) * 0.3;

        circleElement.setAttribute("data-x", x.toString());
        circleElement.setAttribute("data-y", y.toString());
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <>
      <div className={styles.cursor}>
      </div>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={styles.circle} data-x="0" data-y="0"></div>
      ))}
    </>
  );
};

export default Cursor;
