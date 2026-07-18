import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border border-amber-200 dark:border-amber-800/50 text-gray-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <LightModeOutlinedIcon fontSize="small" />
      ) : (
        <DarkModeOutlinedIcon fontSize="small" />
      )}
    </button>
  );
}

export default ThemeToggle;
