import React from "react";
import styled from "styled-components";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import ProjectContainer from "./Components/ProjectContainer";
import Projects from "./Components/Projects";

const Wrapper = styled.section`
  background: #f1f1f3;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

const AppBoundary = styled.section`
  width: 70%;
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
