import React from "react";
import { NavBar } from "../utilities/NavBar";
import image from "../../assets/2022.jpg";
import "../styles/timeline.css";
import { Carousel } from "../utilities/Carousel";
export const Timeline = () => {
  return (
    <div className="timeline">
      <NavBar />
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Our Timeline</h2>
      <Carousel />
    </div>
  );
};
