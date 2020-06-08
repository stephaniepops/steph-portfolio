import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PhotoName />
        <Description />
        <Skills />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
