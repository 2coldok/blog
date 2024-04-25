import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useThemeChange() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeProvider 반경 이탈');
  }
  
  return context;
}
