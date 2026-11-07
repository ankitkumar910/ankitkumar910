import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" onClick={toggleTheme} className={`inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-transparent text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${className}`} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}</button>;
}
export default ThemeToggle;
