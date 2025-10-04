import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants'

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
        content: '💼';
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

const ExperienceList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ExperienceCard = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    background: ${({ theme }) => theme.card};
    border: 1px solid #333;
    border-radius: 12px;
    transition: all 0.2s ease;
    
    &:hover {
        border-color: #555;
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        padding: 16px;
    }
`;

const CompanyLogo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: ${({ theme }) => theme.bgLight};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    }
    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

const ExperienceContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const JobTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const DateLocation = styled.div`
    display: flex;
    gap: 16px;
    margin: 8px 0;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 4px;
    }
`;

const Date = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 4px;
    
    &::before {
        content: '📅';
        font-size: 12px;
    }
`;

const Location = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 4px;
    
    &::before {
        content: '📍';
        font-size: 12px;
    }
`;


const WorkExperience = () => {
    return (
        <Container id="work-experience">
            <SectionHeader>
                <Title>Work Experience</Title>
            </SectionHeader>
            <ExperienceList>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index}>
                        <CompanyLogo>
                            {experience.img && (
                                <img 
                                    src={experience.img} 
                                    alt={`${experience.company} logo`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            )}
                        </CompanyLogo>
                        <ExperienceContent>
                            <JobTitle>{experience.role}</JobTitle>
                            <Company>{experience.company}</Company>
                            <DateLocation>
                                <Date>{experience.date}</Date>
                                <Location>
                                    {experience.company.includes('Trading Technologies') ? 'Chicago, IL' :
                                     experience.company.includes('University of North Texas') ? 'Denton, TX' :
                                     experience.company.includes('University of Texas at Arlington') ? 'Arlington, TX' :
                                     experience.company.includes('IT Lab') ? 'Arlington, TX' : 'Remote'}
                                </Location>
                            </DateLocation>
                        </ExperienceContent>
                    </ExperienceCard>
                ))}
            </ExperienceList>
        </Container>
    )
}

export default WorkExperience
