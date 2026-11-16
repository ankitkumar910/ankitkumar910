import { useLayoutEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import { getInitialTheme } from "./themeUtils";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage failures so the UI keeps working in restricted browsers.
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
