import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { githubTheme, starbucksTheme, starcraftTheme } from "../styles/Theme";

type ThemeName = 'github' | 'starcraft' | 'starbucks';
export type ThemeContextType = {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode}) {
  
  const [themeName, setThemeName] = useState<ThemeName>(() => getThemeFromSessionStorage());


  useEffect(() => {
    sessionStorage.setItem('theme', JSON.stringify(themeName));
    
  }, [themeName])

  const themes = {
    github: githubTheme,
    starcraft: starcraftTheme,
    starbucks: starbucksTheme,
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={themes[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

function getThemeFromSessionStorage(): ThemeName {
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme !== null) {
    return JSON.parse(savedTheme);
  }
  return 'github'
}