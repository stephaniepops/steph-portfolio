import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PhotoName />
        <Description />
        <Skills />
        <Projects />
      </header>
    </div>
  );
}

export default App;
