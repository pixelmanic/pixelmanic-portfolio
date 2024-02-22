import React, { useEffect } from "react";
import { Link } from "react-scroll";
import {
  GithubFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import { homeContentAnim } from "../Animations";

export default function Home() {

  useEffect(()=>{
    homeContentAnim();
  },[])

  return (
    <div id="home-page" className="Header-wrapper">
      {/* Navbar */}
      <Navbar />
      {/* Contents Div */}
      <header className="header">
        <div className="header-content-box">
          <span className="header-line"></span>
          <div className="header-texts">
            <div className="header-hero-text">
              <span>Where </span>
              <span className="creativity">Creativity</span>
              <br></br>
              <span>meets functionality</span>
              <br></br>
              <span>in Web Development.</span>
            </div>
            <Link
              key="projects"
              to="projects-section"
              sp={true}
              smooth={true}
              duration={500}
              className="header-hero-btn"
            >
              view projects
            </Link>
          </div>
        </div>
      </header>
      {/* home Footer */}
      <div className="header-footer">
        <div>
          <div class="icon-scroll"></div>
        </div>
        <div className="icons-div">
          <a
            href="https://www.instagram.com/pixel_manic/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://twitter.com/pixelmanicdev"
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
  );
}
