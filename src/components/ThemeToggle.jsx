import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "../context/useTheme";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const iconColor = isDark ? "#f59e0b" : "#6366f1";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-button ${isDark ? "sun" : "moon"} inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[var(--line)] bg-transparent transition-colors ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <LightModeOutlinedIcon fontSize="small" style={{ color: iconColor }} />
      ) : (
        <DarkModeOutlinedIcon fontSize="small" style={{ color: iconColor }} />
      )}
    </button>
  );
}

export default ThemeToggle;
