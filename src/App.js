import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import Projects from "./components/Projects";
import ResumeDownload from "./components/ResumeDownload";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  const [darkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Body>
          <HeroSection />
          <WorkExperience />
          <EducationSection />
          <Projects />
          <ResumeDownload />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
