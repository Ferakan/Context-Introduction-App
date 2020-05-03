import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleHook';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider
      // ONE VALUE PER CONTEXT
      value={{ isDarkMode, toggleTheme}}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

