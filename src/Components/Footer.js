import { GithubFilled } from "@ant-design/icons";
import React from "react";
import "../Styles/Footer.css";
import mark from "../Images/mark.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div">
        <a href="https://pixelmanic.com" className="footer-one-div">
          <img src={mark} alt="Pixel Manic" />
          <span>Design & Development</span>
        </a>
        <div className="footer-two-div">
          <a
            href="https://github.com/pixelmanic/pixelmanic-portfolio.git"
            rel="noreferrer"
            target="_blank"
          >
            <GithubFilled />
          </a>
        </div>
      </div>
    </footer>
  );
}
