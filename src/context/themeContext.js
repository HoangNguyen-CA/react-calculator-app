import React, { useState, useLayoutEffect } from 'react';

import { theme1, theme2, theme3 } from '../themes';

export const themeContext = React.createContext(theme1);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(theme1);
  const [themeNumber, setThemeNumber] = useState(1);

  const setTheme1 = () => {
    setTheme(theme1);
  };
  const setTheme2 = () => {
    setTheme(theme2);
  };
  const setTheme3 = () => {
    setTheme(theme3);
  };

  useLayoutEffect(() => {
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
  }, []);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme1,
        setTheme2,
        setTheme3,
        themeNumber,
        setThemeNumber,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
