import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%);
  border-radius: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;

  h3 {
    margin-bottom: 1rem;
    color: #2d2d2d;
    font-weight: 600;
  }

  p {
    color: #666;
    position: relative;
    padding: 0.5rem;
    background: linear-gradient(90deg, #f0f0f0 ${props => props.progress}%, transparent ${props => props.progress}%);
    border-radius: 20px;
  }
`;

const Skills = () => {
  const skills = [
    { name: "React", level: "Advanced", progress: 90 },
    { name: "JavaScript", level: "Advanced", progress: 85 },
    { name: "Node.js", level: "Intermediate", progress: 70 },
    { name: "HTML/CSS", level: "Advanced", progress: 90 },
    { name: "TypeScript", level: "Intermediate", progress: 75 },
    { name: "Git", level: "Intermediate", progress: 80 }
  ];

  return (
    <SkillsContainer>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem'
        }}
      >
        Skills & Technologies
      </motion.h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            progress={skill.progress}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(31, 38, 135, 0.25)',
              transform: 'translateY(-5px)'
            }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;