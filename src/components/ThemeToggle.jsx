import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2   border-amber-200 dark:border-amber-800/50 text-gray-700 dark:text-amber-400  transition-colors cursor-pointer ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <LightModeOutlinedIcon fontSize="medium" />
      ) : (
        <DarkModeOutlinedIcon fontSize="medium" />
      )}
    </button>
  );
}

export default ThemeToggle;
