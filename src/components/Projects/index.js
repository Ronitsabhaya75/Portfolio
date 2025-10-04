import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 40px;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 960px) {
        padding: 30px 20px;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    
    &::before {
        content: '💻';
        font-size: 20px;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
`;

const Projects = () => {
  return (
    <Container id="projects">
        <SectionHeader>
            <Title>Projects</Title>
        </SectionHeader>
        <CardContainer>
          {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
          ))}
        </CardContainer>
    </Container>
  )
}

export default Projects
