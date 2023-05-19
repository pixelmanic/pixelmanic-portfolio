import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import {
  FacebookFilled,
  GithubFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import logoName from "../Images/logo name.png"
import mustafaNazari from "../Images/mustafaNazari.png"
import mrLens from "../Images/mr lens.png"
import movieMania from "../Images/movie mania.png"

export default function Navbar() {
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  const menuOpen = {
    width: '100%',
    transition: 'width 1s', // Apply transition to the width property
  };

  const menuClose = {
    width : '0%',
    transition: 'width 1s',
    transitionDelay: '1s'
  }

  const ContentOpen = {
    opacity: '1',
    transition: 'opacity 1s', // Apply transition to the opacity property
    transitionDelay: '1s'// Add a 1s delay to the opacity transition when isCrossed is true
  };

  const ContentClose = {
    opacity: '0',
    transition: 'opacity 1s',
  }
  return (
    <>
      <nav className="navbar">
        <img className="navbar-brand" alt="logo" src={logoName} />
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
      <div className="main-menu" style={isCrossed ? menuOpen : menuClose}>
        <div className="menu-contents" style={isCrossed ? ContentOpen : ContentClose}>
          <div className="menu-links">
            <div className="menu-contact">
              <span>Looking for a Web Developer</span>
              <a href="mailto:pixelmanic7@gmail.com">Let's chat</a>
            </div>
            <div className="menu-sociallinks">
              <span>Stay in touch!</span>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/pixel_manic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramOutlined />
                </a>
                <a
                  href="https://github.com/pixelmanic"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubFilled />
                </a>
                <a
                  href="https://www.facebook.com/pixelmanic"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FacebookFilled />
                </a>
                <a
                  href="https://twitter.com/Mustafa_nazari7"
                  style={{ textAlign: "start" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterOutlined />
                </a>
              </div>
            </div>
          </div>
          <div className="menu-projects">
            <div className="line-div">
              <div></div>
              <span>Recent Projects</span>
              <div></div>
            </div>
            <div className="projects-box">
              <a href="https://github.com/pixelmanic/mr-lens-production.git" target="_blank" rel="noreferrer" className="projects-box-card">
                <img src={mrLens} />
                <span>Mr Lens Production</span>
              </a>
              <a href="https://github.com/pixelmanic/full_stack_react_movie_website.git" target="_blank" rel="noreferrer" className="projects-box-card">
                <img src={movieMania}/>
                <span>Movie Mania</span>
              </a>
              <a href="https://pixelmanic.com" className="projects-box-card">
                <img src={mustafaNazari} />
                <span>Pixel Manic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
