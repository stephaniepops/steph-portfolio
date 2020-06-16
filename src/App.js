import React from "react";
import styled from "styled-components/macro";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import ProjectContainer from "./Components/ProjectContainer";
import Projects from "./Components/Projects";

const Wrapper = styled.div`
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
