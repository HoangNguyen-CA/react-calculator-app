import React, { useState } from 'react';

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
