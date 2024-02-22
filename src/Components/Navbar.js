import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import {
  GithubFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import logoName from "../Images/logo name.png";
import velvet from "../Images/velvetMain.jpg";
import pact from "../Images/pact.jpg";
import craig from "../Images/craigmain.png";
import { menuCloseAnim, menuOpenAnim } from "../Animations";

export default function Navbar() {
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
    if (!isCrossed) {
      menuOpenAnim();
    } else {
      menuCloseAnim();
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link
          key="Home"
          to="home-page"
          sp={true}
          smooth={true}
          duration={800}
          className="navbar-brand"
        >
          <img className="logo" alt="logo" src={logoName} />
        </Link>
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
      <div className="main-menu">
        <div className="menu-contents">
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
                  href="https://twitter.com/Mustafa_nazari7"
                  style={{ textAlign: "start" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterOutlined />
                </a>
                <a
                  href="https://github.com/pixelmanic"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubFilled />
                </a>
              </div>
            </div>
          </div>
          <div className="menu-projects">
            <div className="line-div">
              <div></div>
              <span>Featured Projects</span>
              <div></div>
            </div>
            <div className="projects-box">
              <a
                href="https://wearpact.com/"
                target="_blank"
                rel="noreferrer"
                className="projects-box-card"
              >
                <img src={pact} alt="pact clothing" />
                <span>
                  Pact Cloting <br></br> Store
                </span>
              </a>
              <a
                href="https://craig.black/"
                target="_blank"
                rel="noreferrer"
                className="projects-box-card"
              >
                <img src={craig} alt="Craig Black" />
                <span>Craig Black</span>
              </a>
              <a
                href="https://www.velvetspectrum.com/"
                target="_blank"
                rel="noreferrer"
                className="projects-box-card"
              >
                <img src={velvet} alt="velvet Spectrum" />
                <span>Velvet Spectrum</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
