import React from "react";
import styled from "styled-components/macro";
import Navbar from "./components/Navbar";
import PhotoName from "./components/PhotoName";
import Description from "./components/Description";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectContainer from "./components/ProjectContainer";
import { Projects, SkillList } from "./data/UserInfo";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  padding: 15px;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
`;

const AppBoundary = styled(motion.div)`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Wrapper>
      <AppBoundary variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Navbar />
        </motion.div>
        <motion.div variants={item}>
          <PhotoName />
        </motion.div>
        <motion.div variants={item}>
          <Description />
        </motion.div>
        <motion.div variants={item}>
          <Skills skills={SkillList} />
        </motion.div>
        <motion.div variants={item}>
          <ProjectContainer projects={Projects} />
        </motion.div>
        <motion.div variants={item}>
          <Contact />
        </motion.div>
      </AppBoundary>
    </Wrapper>
  );
}

export default App;
