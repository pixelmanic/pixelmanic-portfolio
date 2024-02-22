import React, { useEffect } from "react";
import "../Styles/PreLoader.css";
import { preLoaderAnim } from "../Animations";

export default function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Designer</span>
        <span>&</span>
        <span>Developer</span>
      </div>
    </div>
  );
}