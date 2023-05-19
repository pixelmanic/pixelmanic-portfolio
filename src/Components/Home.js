import React from "react";
import { Link } from "react-scroll";
import {
  FacebookFilled,
  GithubFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import arrow from "../Images/arrow.png"

export default function Home() {
  return (
    <div className="Header-wrapper">
      {/* Navbar */}
      <Navbar />
      {/* Contents Div */}
      <header className="header">
        <div className="header-content-box">
          <span className="header-line"></span>
          <div className="header-texts">
            <div className="header-hero-text">
              <span>Where </span>
              <span className="miraculous">Creativity</span>
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
          <img alt="arrow" className="arrow" src={arrow}></img>
        </div>
        <div className="icons-div">
          <a
            href="https://www.facebook.com/pixelmanic"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookFilled />
          </a>
          <a
            href="https://www.instagram.com/pixel_manic/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://twitter.com/Mustafa_nazari7"
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
