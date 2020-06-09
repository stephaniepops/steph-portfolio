import React, { Component } from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import ProjectContainer from "./Components/ProjectContainer";
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <PhotoName />
          <Description />
          <Skills />
          <ProjectContainer projects={Projects} />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
