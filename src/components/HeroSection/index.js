import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialLinks, SocialLink, StatusIndicator, StatusDot, StatusText } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <StatusIndicator>
                    <StatusDot />
                    <StatusText>available for work</StatusText>
                </StatusIndicator>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}.</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        
                        <SocialLinks>
                            <SocialLink href={`mailto:rds0429@mavs.uta.edu`}>
                                📧 E-mail
                            </SocialLink>
                            <SocialLink href={Bio.github} target="_blank">
                                🔗 Github
                            </SocialLink>
                            <SocialLink href={Bio.linkedin} target="_blank">
                                💼 LinkedIn
                            </SocialLink>
                        </SocialLinks>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection