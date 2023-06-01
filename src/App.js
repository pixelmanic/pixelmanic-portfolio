import { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import PreLoader from "./Components/PreLoader";
import Projects from "./Components/Projects";
import Social from "./Components/Social";

function App() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      }
    })
  },[])
  return (
    <>
    <PreLoader />
      <div className="App">
        <progress max="100" value="0" ></progress>
        <Home />
        <Projects />
        <About />
        <Contact />
        <Social />
        <Footer />
      </div>
    </>
  );
}

export default App;
