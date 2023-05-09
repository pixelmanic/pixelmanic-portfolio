import React, { useState } from "react";
import {
  FacebookFilled,
  GithubFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "../Styles/Home.css";
import Navbar from "./Navbar";

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
              <span className="miraculous">Miraculous</span>
              <br></br>
              <span>Websites are</span>
              <br></br>
              <span>what I build.</span>
            </div>
            <a className="header-hero-btn" href="/projects">
              view projects
            </a>
          </div>
        </div>
      </header>
      {/* home Footer */}
      <div className="header-footer">
        <div>
          <div class="icon-scroll"></div>
          <img alt="arrow" className="arrow" src="Artboard 1.png"></img>
        </div>
        <div className="icons-div">
          <a
            href="https://www.facebook.com/codezilla7"
            className="icon"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookFilled />
          </a>
          <a
            href="https://www.instagram.com/codezilla_7/"
            className="icon"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://twitter.com/Mustafa_nazari7"
            className="icon"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://github.com/codezilla7"
            className="icon"
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
