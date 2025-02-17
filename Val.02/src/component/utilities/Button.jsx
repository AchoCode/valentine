import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
export const Button = ({ text, link }) => {
  return (
    <div className="btn-container">
      <Link to={link}>
        {text}
        <FaHeart />
      </Link>
    </div>
  );
};
