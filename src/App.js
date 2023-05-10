import "./App.css";
import Home from "./Components/Home";
import PreLoader from "./Components/PreLoader";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
    <PreLoader />
      <div className="App">
        <Home />
        <Projects />
      </div>
    </>
  );
}

export default App;
