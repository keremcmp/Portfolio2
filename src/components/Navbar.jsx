import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavList>
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <NavItem
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navbar; 