import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import PreLoader from "./Components/PreLoader";
import { scrollProgressAnim } from "./Animations";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    scrollProgressAnim();
  }, []);
  return (
    <>
      <PreLoader />
      <div className="App">
        <progress max="100" value="0"></progress>
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
