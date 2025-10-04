import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

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
    border-top: 1px solid #333;
    @media (max-width: 960px) {
        padding: 30px 20px;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0 0 8px 0;
`;

const Description = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0 0 24px 0;
    line-height: 1.5;
`;

const DownloadButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.bg};
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${({ theme }) => theme.text_secondary};
        transform: translateY(-1px);
    }
    
    &::before {
        content: '⬇️';
        font-size: 14px;
    }
`;


const ResumeDownload = () => {
    return (
        <Container id="resume">
            <Title>Download My Resume</Title>
            <Description>A concise snapshot of my experience and skills.</Description>
            <DownloadButton href={Bio.resume} target="_blank">
                Download
            </DownloadButton>
        </Container>
    )
}

export default ResumeDownload
