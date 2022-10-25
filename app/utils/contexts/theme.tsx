import React from "react";
import { darkTheme, lightTheme } from "~/styles/stitches.config";

type ThemeContextType = [unknown, () => void];

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<unknown>(darkTheme);

  const toggleTheme = () => setTheme(theme === darkTheme ? lightTheme : darkTheme);
  
  return <ThemeContext.Provider value={[theme, toggleTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context == undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context;
}

export {ThemeProvider, useTheme}