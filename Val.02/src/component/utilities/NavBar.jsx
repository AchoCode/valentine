import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <Link to="/" className='nav-back'>
      <FaArrowLeft />
    </Link>
  );
};
