import { ReactNode, createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { githubTheme, starcraftTheme } from "../styles/Theme";

type ThemeName = 'github' | 'starcraft';
export type ThemeContextType = {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode}) {
  const [themeName, setThemeName] = useState<ThemeName>('github');

  const themes = {
    github: githubTheme,
    starcraft: starcraftTheme,
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={themes[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
