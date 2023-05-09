import React, { useState } from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };
  const menuStyle = {
    width: isCrossed ? "100%" : "0",
  };
  return (
    <>
      <nav className="navbar">
        <img className="navbar-brand" alt="logo" src="\logo text.png" />
        <button
          className={`menu-button ${isCrossed ? "crossed" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {/* Main Menu */}
      <div className="main-menu" style={menuStyle}></div>
    </>
  );
}
