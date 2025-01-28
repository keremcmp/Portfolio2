import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

const AboutContent = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #00f5ff;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          stiffness: 100 
        }}
        style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(45deg, #00f5ff, #b300ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem'
        }}
      >
        About Me
      </motion.h2>
      <AboutContent>
        <AboutSection
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>Who I Am</h3>
          <p>
            I'm an innovative developer pushing the boundaries of web technology.
            With a passion for cutting-edge solutions, I transform ideas into 
            immersive digital experiences that define the future of web development.
          </p>
        </AboutSection>
        
        <AboutSection
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>What I Do</h3>
          <p>
            I architect next-generation web applications using bleeding-edge technologies
            and frameworks. My expertise lies in creating scalable, performant, and 
            future-proof solutions that push technical boundaries.
          </p>
        </AboutSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;