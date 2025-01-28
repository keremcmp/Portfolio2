import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #0a0a0a;
    --primary: #00f6ff;
    --secondary: #721aff;
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #ff006a;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-hover: rgba(255, 255, 255, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background: var(--background);
    color: var(--text);
    background: linear-gradient(
      to bottom right,
      #0a0a0a,
      #1a1a2e,
      #16213e
    );
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::selection {
    background: var(--primary);
    color: var(--background);
  }
`;

export default GlobalStyles;