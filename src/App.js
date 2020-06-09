import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PhotoName />
        <Description />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </header>
    </div>
  );
}

export default App;
