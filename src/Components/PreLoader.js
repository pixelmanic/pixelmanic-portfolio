import React, { useEffect } from 'react'
import "../Styles/PreLoader.css"
import { preLoaderAnim } from '../Animations';

export default function PreLoader() {
  // useEffect(() => {
  //   const animate = () => {
  //     const body = document.querySelector("body");
  //     const preloader = document.querySelector(".preloader");
  //     const textSpans = document.querySelectorAll(".texts-container span");

  //     // Disable vertical scrolling
  //     body.style.overflowY = "hidden";

  //     // Animate text spans
  //     let delay = 1000;
  //     for (let i = 0; i < textSpans.length; i++) {
  //       const span = textSpans[i];
  //       span.style.transition = "transform 1.5s ease";
  //       span.style.transform = "translateY(70px) skewY(10deg)";
  //       span.style.transitionDelay = delay + "ms";
  //       delay += 400;
  //     }

  //     // Reset text spans
  //     setTimeout(function () {
  //       for (let i = 0; i < textSpans.length; i++) {
  //         const span = textSpans[i];
  //         span.style.transform = "translateY(70px) skewY(-20deg)";
  //         span.style.transitionDelay = "";
  //       }
  //     }, delay);

  //     // Enable vertical scrolling
  //     body.style.overflowY = "scroll";

  //     // Hide preloader
  //     setTimeout(function () {
  //       preloader.style.transition = "height 1.5s ease";
  //       preloader.style.height = "0vh";
  //     }, 2000);
  //   };

  //   animate();
  // }, []);
  useEffect(()=>{
    preLoaderAnim()
  },[])
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Designer,</span>
        <span>&</span>
        <span>Developer,</span>
      </div>
    </div>
  );
}
