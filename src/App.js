import React, { useContext, useEffect } from 'react';
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
  const { theme, setTheme1, setTheme2, setTheme3, setThemeNumber } =
    useContext(themeContext);
  useEffect(() => {
    const savedTheme = parseInt(localStorage.getItem('theme'));
    if (savedTheme === 1) {
      setTheme1();
      setThemeNumber(1);
    }
    if (savedTheme === 2) {
      setTheme2();
      setThemeNumber(2);
    }
    if (savedTheme === 3) {
      setTheme3();
      setThemeNumber(3);
    }
  }, [setTheme1, setTheme2, setTheme3, setThemeNumber]);
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Calculator />
      </Body>
    </ThemeProvider>
  );
}

export default App;
