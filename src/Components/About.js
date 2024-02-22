import React, { useEffect } from "react";
import "../Styles/About.css";
import mustafa from "../Images/Mustafa.png"
import { aboutAnim } from "../Animations";

export default function About() {
  useEffect(()=>{
    aboutAnim()
  },[])
  return (
    <section id="about">
      <h1 className="about-hero-text"><span>My Journey</span><small>🚀</small></h1>
      <div className="about-content-box">
        <div className="main-about-wrapper">
          <div className="about-texts-wrapper">
            <p className="main-para">
              Greetings! I'm Mustafa Nazari, and I take immense pleasure in
              crafting beautiful websites. My journey in web development
              began in mid 2021, fueled by a newfound passion for digital
              design. As fate would have it, one day, while casually scrolling
              through{" "}
              <a href="https://pin.it/3TSVWRR" rel="noreferrer" target="_blank">
                Pinterest
              </a>{" "}
              for design inspiration for my graphic design project, I stumbled
              upon the wonders of web development. And just like that, I was
              hooked!
            </p>
            <p className="main-para">
              I’m also available on freelancing websites like{" "}
              <a
                href="https://www.fiverr.com/codezilla7"
                rel="noreferrer"
                target="_blank"
              >
                fiverr
              </a>{" "}
              and{" "}
              <a
                href="https://www.upwork.com/freelancers/~01e2d0baaa7c66ee5c"
                rel="noreferrer"
                target="_blank"
              >
                upwork
              </a>
              , where I also provide website development services.
            </p>
            <p>Here are some of the technologies I have been working with recently:</p>
          </div>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>GSAP(Animation)</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className="about-image-wrapper">
          <div className="dev-wrapper">
            <img className="developer" alt="developer" src={mustafa} />
          </div>
        </div>
      </div>
    </section>
  );
}
