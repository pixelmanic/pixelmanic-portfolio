import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import PreLoader from "./Components/PreLoader";
import Projects from "./Components/Projects";
import Social from "./Components/Social";

function App() {
  return (
    <>
    <PreLoader />
      <div className="App">
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
