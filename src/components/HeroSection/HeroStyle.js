import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px 60px 30px;
  @media (max-width: 960px) {
    padding: 60px 16px 40px 16px;
  }
  @media (max-width: 640px) {
    padding: 40px 16px 30px 16px;
  }
  z-index: 1;
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 960px) {
    margin-bottom: 32px;
    justify-content: center;
  }
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

export const StatusText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;


export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`;
export const HeroLeftContainer = styled.div`
  flex: 1;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 0;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 0;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 400px;
  height: 400px;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 64px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 1.3;
    margin-bottom: 16px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 400;
  font-size: 24px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
  margin-bottom: 16px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 12px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
  
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

