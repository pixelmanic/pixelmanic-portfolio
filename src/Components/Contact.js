import React, { useEffect } from "react";
import "../Styles/Contact.css";
import { contactAnim } from "../Animations";

export default function Contact() {
  useEffect(()=>{
    contactAnim()
  },[])
  return (
    <section className="contact-section">
      <h1 className="contact-hero-text">
        <span>Sold Yet?</span>
        <small>👍</small>
      </h1>
      <p className="contact-para">
        I'm currently seeking opportunities to further develop my skills and
        broaden my experience. Please don't hesitate to contact me at{" "}
        <a href="mailto:pixelmanic7@gmail.com">📧Email</a> to discuss any potential collaborations or
        opportunities.
      </p>
    </section>
  );
}
