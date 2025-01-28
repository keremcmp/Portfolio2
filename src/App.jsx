import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContainer = styled.div`
  overflow-x: hidden;
  background: var(--background);
`;

const Section = styled.section`
  min-height: 80vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.id === 'home' ? 
      'radial-gradient(circle at 50% 50%, rgba(114, 26, 255, 0.1) 0%, rgba(0, 246, 255, 0.05) 100%)' : 
      'none'};
    pointer-events: none;
  }

  &#projects {
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
                url('/grid-pattern.png');
    background-size: cover;
    background-attachment: fixed;
  }

  &#skills {
    background: linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.95));
  }
`;

const GlowingOrb = styled(motion.div)`
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at center, 
    var(--primary) 0%, 
    rgba(0, 246, 255, 0) 70%);
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
`;

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <AppContainer onMouseMove={handleMouseMove}>
      <GlowingOrb 
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <Navbar />
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </AppContainer>
  );
}

export default App; 