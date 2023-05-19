import React from "react";
import "../Styles/Projects.css";
import mustafaNazari from "../Images/mustafaNazari.png"
import mrLens from "../Images/mr lens.png"
import movieMania from "../Images/movie mania.png"

export default function Projects() {
  return (
    <section id="projects-section" className="Works">
      <p className="intro-text">
        Hey buddy👋, I'm Mustafa Nazari, a full-stack web developer and graphic
        designer. I'm <br />
        passionate about crafting unique designs that elevate brand identities
        and bring ideas to life.✨
      </p>
      <div className="projects-section">
        <h1 className="heading-1">
          <span>Working hard is just part of who I am</span>
          <small>💪</small>
        </h1>
        <p className="para">take a look at some of my recent projects</p>
        <a href="https://github.com/pixelmanic/mr-lens-production.git" target="_blank" rel="noreferrer" className="main-project-card">
          <div className="project-card">
            <h1 className="card-h1">Mr Lens Production</h1>
            <h3 className="card-h3">MERN Website</h3>
            <div className="img-div">
              <img className="image-1" alt="mr lens" src={mrLens}></img>
              <span className="image-text">Visit</span>
            </div>
          </div>
        </a>
        <a href="https://github.com/pixelmanic/full_stack_react_movie_website.git" target="_blank" rel="noreferrer" className="main-project-card-2">
          <div className="project-card-2">
            <h1 className="card2-h1">Movie Mania</h1>
            <h3 className="card2-h3">MERN Website</h3>
            <div className="img-div-2">
              <img
                className="image-2"
                alt="movie mania"
                src={movieMania}
              ></img>
              <span className="image2-text">Visit</span>
            </div>
          </div>
        </a>
        <a href="https://www.pixelmanic.com" target="_blank" rel="noreferrer" className="main-project-card-3">
          <div className="project-card-3">
            <h1 className="card3-h1">Pixel Manic</h1>
            <h3 className="card3-h3">React Website</h3>
            <div className="img-div">
              <img className="image-1" alt="mr lens" src={mustafaNazari}></img>
              <span className="image-text">Visit</span>
            </div>
          </div>
        </a>
        <p className="fact-text"><span>- Fun Fact:</span> Spiders are the only true Web Developers.🕷️</p>
      </div>
    </section>
  );
}
