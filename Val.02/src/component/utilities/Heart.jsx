import React from "react";
export const Heart = ({ text, handleOnclick }) => {
  return (
    <div className="tile">
      <div className="heart" onClick={() => handleOnclick()}></div>
      <span>{text}</span>
    </div>
  );
};
