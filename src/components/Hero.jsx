import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding-top: 8vh;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 5.5rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.15;
    filter: blur(25px);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  letter-spacing: 1px;
`;

const CyberButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  background: transparent;
  color: var(--primary);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--primary);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 246, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const GlitchText = styled(motion.span)`
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
  }
  
  &::before {
    left: 2px;
    text-shadow: -2px 0 var(--primary);
    clip: rect(24px, 1000px, 90px, 0);
    animation: glitch-anim 3s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -2px 0 var(--secondary);
    clip: rect(85px, 1000px, 140px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
  }
  
  @keyframes glitch-anim {
    0% {
      clip: rect(24px, 1000px, 90px, 0);
    }
    20% {
      clip: rect(85px, 1000px, 140px, 0);
    }
    100% {
      clip: rect(24px, 1000px, 90px, 0);
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title
        data-text="Jouri Saad"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GlitchText data-text="Jouri Saad">Jouri Saad</GlitchText>
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Frontend Developer & Designer
      </Subtitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <CyberButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </CyberButton>
      </motion.div>
    </HeroContainer>
  );
};

export default Hero; 