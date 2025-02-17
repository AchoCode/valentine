import { useState, useEffect } from "react";
import "../styles/timer.css";

export const Timer = () => {
  const getElapsedTime = () => {
    const startTime = new Date(new Date().getFullYear() - 1, 0, 1); // Jan 1st of last year
    const now = new Date();
    const diff = now - startTime;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    return { days, hours, minutes, seconds };
  };

  const [timeElapsed, setTimeElapsed] = useState(getElapsedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(getElapsedTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="timer-container">
      <h2>IT'S BEEN</h2>
      <h3>
        {timeElapsed.days}d : {timeElapsed.hours}h : {timeElapsed.minutes}m :{" "}
        {timeElapsed.seconds}s
      </h3>
      <h2>SINCE YOU SAID YES</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        architecto excepturi quibusdam obcaecati voluptas doloremque sapiente,
        dolore exercitationem at dolorem enim maxime modi quasi? Magni vero
        illum consectetur amet sed?
      </p>
    </div>
  );
};
