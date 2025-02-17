import React from "react";
import { FaHeart } from "react-icons/fa6";
export const ReviewCard = ({ image, name, occupation }) => {
  return (
    <div className="carousel-item">
        <img src={image} alt="image.png" className="avatar" />
      <div className="details">
        
          <h3>{name} <FaHeart /></h3>
        
      </div>

    </div>
  );
};
