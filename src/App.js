import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeContext } from './context/themeContext';

import Calculator from './calculator/Calculator';

const Body = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  min-width: 320px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2em 1em;
  }
`;

function App() {
  const { theme } = useContext(themeContext);
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Calculator />
      </Body>
    </ThemeProvider>
  );
}

export default App;
