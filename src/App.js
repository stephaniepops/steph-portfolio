import React from "react";
import styled from "styled-components/macro";
import Navbar from "./components/Navbar";
import PhotoName from "./components/PhotoName";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectContainer from "./components/ProjectContainer";
import { Projects } from "./data/UserInfo";

import Navbar from "./components/Navbar";
import PhotoName from "./components/PhotoName";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectContainer from "./components/ProjectContainer";
import Projects from "./components/Projects";

const Wrapper = styled.section`
  background: #f1f1f3;
  padding: 15px;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
`;

const AppBoundary = styled.div`
  max-width: 1000px;
`;

function App() {
  return (
    <Wrapper>
      <AppBoundary>
        <header>
          <Navbar />
          <PhotoName />
          <Description />
        </header>
        <Skills />
        <Contact />
        <ProjectContainer projects={Projects} />
      </AppBoundary>
    </Wrapper>
  );
}

export default App;
