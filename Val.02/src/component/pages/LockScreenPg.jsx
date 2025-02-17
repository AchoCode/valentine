import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import "../styles/LockScreen.css";
import { Button } from "../utilities/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "../utilities/Timer";
import { useNavigate } from "react-router-dom";

export const LockScreenPg = () => {
  const [loading, setLoading] = useState(false);
  const [nickName, setNickName] = useState(0);
  const sweetNames = [
    "Pookie",
    "Babycake",
    "Booboo",
    "Mammi",
    "Darling",
    "Omalicha",
    "Asa",
  ];
  const [overlay, setOverlay] = useState(false);
  const navigate = useNavigate();
  const heartdetails = [
    {
      func: () => setOverlay(true),
    },
    { func: () => navigate("/stats") },
    { func: () => navigate("/timeline") },
    { func: () => navigate("/lovequiz") },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setNickName((previndex) => (previndex + 1) % sweetNames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      {overlay && (
        <div className="timer-overlay" onClick={() => setOverlay(false)}>
          <Timer />
        </div>
      )}
      <h1 className="heading">Happy Valentine’s Day</h1>
      <AnimatePresence mode="wait">
        <motion.span
          key={sweetNames[nickName]}
          initial={{ opacity: 0, y: -20 }} // Start slightly below
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          exit={{ opacity: 0, y: 20 }} // Fade out moving upwards
          transition={{ duration: 0.5 }} // Smooth transition
          className="sweet-name"
        >
          {sweetNames[nickName]}
          <FaHeart />
        </motion.span>
      </AnimatePresence>
      <p className="text">Pick a heart.</p>
      <div className="tile-container">
        {heartdetails.map((heart, index) => (
          <motion.div
            animate={{
              scale: [1, 1.05, 1], // Grows and shrinks
            }}
            transition={{
              duration: 0.8, // Speed of the heartbeat
              repeat: Infinity, // Loops forever
              repeatType: "reverse", // Smooth bounce effect
              ease: "easeInOut",
            }}
            key={index}
          >
            <FaHeart onClick={heart.func} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
