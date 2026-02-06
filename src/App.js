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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
    animation: moveGrid 20s linear infinite;
  }
  
  @keyframes moveGrid {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`

function App() {
  const [darkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Body>
          <ContentWrapper>
            <HeroSection />
            <WorkExperience />
            <EducationSection />
            <Projects />
            <ResumeDownload />
          </ContentWrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
