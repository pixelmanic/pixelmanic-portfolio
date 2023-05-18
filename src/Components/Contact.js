import React from "react";
import "../Styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-hero-text">
        <span>Onbaord?</span>
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
