import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialLinks, SocialLink, StatusIndicator, StatusDot, StatusText } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <StatusIndicator>
                        <StatusDot />
                        <StatusText>available for work</StatusText>
                    </StatusIndicator>
                </motion.div>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <Title>{Bio.name}.</Title>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
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
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <SocialLinks>
                                <SocialLink href={`mailto: ronitsabhaya75@gmail.com`}>
                                    E-mail
                                </SocialLink>
                                <SocialLink href={Bio.github} target="_blank">
                                    Github
                                </SocialLink>
                                <SocialLink href={Bio.linkedin} target="_blank">
                                    LinkedIn
                                </SocialLink>
                            </SocialLinks>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                                x: 0,
                                y: [0, -15, 0],
                            }}
                            transition={{ 
                                opacity: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.3 },
                                scale: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.3 },
                                x: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.3 },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: [0, -2, 2, -2, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}


export default HeroSection
