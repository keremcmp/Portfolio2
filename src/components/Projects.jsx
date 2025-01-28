import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%);
  border-radius: 20px;
  padding: 2rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00f2fe, #4facfe);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const TechBadge = styled.span`
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin: 0.2rem;
  font-size: 0.8rem;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 242, 254, 0.3);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      tech: ["React", "Firebase", "Tailwind"]
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      tech: ["Next.js", "TypeScript", "Prisma"]
    }
  ];

  return (
    <ProjectsContainer>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          fontWeight: 'bold'
        }}
      >
        My Projects
      </motion.h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.h3
              style={{ 
                marginBottom: '1rem',
                fontSize: '1.4rem',
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {project.title}
            </motion.h3>
            <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>{project.description}</p>
            <div style={{ marginTop: '1.5rem' }}>
              {project.tech.map((tech, i) => (
                <TechBadge key={i}>
                  {tech}
                </TechBadge>
              ))}
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;