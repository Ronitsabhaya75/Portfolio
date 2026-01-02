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
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
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
  border: 3px solid rgba(255, 255, 255, 0.2);
  object-fit: cover;
  object-position: center;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    0 0 60px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

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
  gap: 16px;
  margin-top: 32px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 640px) {
    font-size: 14px;
    padding: 10px 24px;
  }
`;

