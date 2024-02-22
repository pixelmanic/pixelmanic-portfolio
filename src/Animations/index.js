import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation

export const preLoaderAnim = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "power3.easeOut",
      },
      "-=1"
    );
};

export const scrollProgressAnim = () => {
  gsap.to("progress", {
    value: 100,
    scrollTrigger: {
      scrub: 0.5,
    },
  });
};

export const homeContentAnim = () => {
  tl.fromTo(
    ".header-line",
    { x: 500, y: -160, opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: .7, ease: "power1.out" }
  ).fromTo(
    ".header-texts",
    { opacity: 0, xPercent: -100 },
    { opacity: 1, xPercent: 0, duration: 0.5, ease: "power1.out" }
  );
  gsap.to(".header-content-box", {
    opacity:0,
    scrollTrigger: {
      trigger: ".header-content-box",
      start: "top 20%",
      scrub: true
    },
  });
};

const menuOpenTl = gsap.timeline();
export const menuOpenAnim = () => {
  menuOpenTl
    .to(".main-menu", { width: "100%", duration: .7, ease: "power1.out" })
    .to(".menu-contents", { opacity: 1, duration: .7, ease: "ease" })
    .to("body", { css: { overflowY: "hidden" } });
};

export const menuCloseAnim = () => {  
  menuOpenTl
  .to(".menu-contents", { opacity: 0, duration: .7, ease: "ease" })
  .to(".main-menu", { width: "0%", duration: .7, ease: "power1.out" })
  .to("body", { css: { overflowY: "scroll" } });
};

export const projectsAnim = () => {
  gsap.fromTo(
    ".intro-text",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".intro-text",
        start: "top 80%",
      },
    }
  );
  gsap.fromTo(
    ".para",
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".para",
        start: "top 80%",
      },
    }
  );
  gsap.fromTo(
    ".heading-1",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".heading-1",
        start: "top 80%",
      },
    }
  );
  gsap.fromTo(
    "#card1",
    {
      y: -50,
      opacity: 0,
      ease: "power1.out",
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#card1",
        start: "top 65%",
      },
    }
  );
  gsap.fromTo(
    "#card2",
    {
      y: -50,
      opacity: 0,
      ease: "power1.out",
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#card2",
        start: "top 65%",
      },
    }
  );
  gsap.fromTo(
    "#card3",
    {
      y: -50,
      opacity: 0,
      ease: "power1.out",
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#card3",
        start: "top 65%"
      },
    }
  );
};

export const aboutAnim = () => {
  gsap.to("#about", {
    backgroundColor: "#0a192f",
    scrollTrigger: {
      trigger: "#about",
      start: "top 65%",
      end: "top 65%",
      onEnter: () => {
        gsap.to("#about", { backgroundColor: "#050810", duration: 0.8 });
      },
      onLeaveBack: () => {
        gsap.to("#about", { backgroundColor: "#000000", duration: 0.5 });
      },
    },
  });
  gsap.fromTo(
    ".about-content-box",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-content-box",
        start: "top 80%",
      },
    }
  );
};

export const contactAnim = () => {
  gsap.fromTo(
    ".contact-hero-text",
    {
      y: -60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".contact-hero-text",
        start: "top 70%",
      },
    }
  );
  gsap.fromTo(
    ".contact-para",
    {
      y: -60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".contact-para",
        start: "top 70%",
      },
    }
  );
};

export const socialAnim = () => {
  gsap.fromTo(
    ".social-hero-text",
    { y: -60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: { trigger: ".social-hero-text", start: "top 70%" },
    }
  );
  gsap.fromTo(
    ".social-sub-title",
    { y: -60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay: 0.5,
      scrollTrigger: { trigger: ".social-hero-text", start: "top 70%" },
    }
  );
};
