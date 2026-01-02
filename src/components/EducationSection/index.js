import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants'
import { motion } from 'framer-motion'

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
        content: '🎓';
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

const EducationList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const EducationCard = styled.div`
    display: flex;
    gap: 20px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    
    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        padding: 20px;
    }
`;

const UniversityLogo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
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

const EducationContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const University = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Degree = styled.div`
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

const Details = styled.div`
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const EducationSection = () => {
    return (
        <Container id="education">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <SectionHeader>
                    <Title>Education</Title>
                </SectionHeader>
            </motion.div>
            <EducationList>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <EducationCard>
                            <UniversityLogo>
                                {edu.img && (
                                    <img 
                                        src={edu.img} 
                                        alt={`${edu.school} logo`}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                            </UniversityLogo>
                            <EducationContent>
                                <University>{edu.school}</University>
                                <Degree>{edu.degree}</Degree>
                                <DateLocation>
                                    <Date>{edu.date}</Date>
                                    <Location>
                                        {edu.school.includes('North Texas') ? 'Denton, Texas' : 'Arlington, Texas'}
                                    </Location>
                                </DateLocation>
                                <Details>
                                    {edu.grade && `GPA: ${edu.grade}`}
                                </Details>
                            </EducationContent>
                        </EducationCard>
                    </motion.div>
                ))}
            </EducationList>
        </Container>
    )
}

export default EducationSection
