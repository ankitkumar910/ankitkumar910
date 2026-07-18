import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks, personalInfo } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F1E4]/90 dark:bg-[#1a1814]/90 backdrop-blur-md shadow-sm border-b border-amber-200/50 dark:border-amber-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="noto-serif-oriya-600 text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
        >
          {personalInfo.name}
          <span className="text-amber-600 dark:text-amber-500">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`ubuntu-regular text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-amber-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-800 dark:hover:text-amber-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
         
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F1E4] dark:bg-[#1a1814] border-t border-amber-200/50 dark:border-amber-900/30 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`block ubuntu-regular text-sm px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-amber-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block text-center ubuntu-medium text-sm bg-gray-900 dark:bg-amber-600 text-white px-4 py-3 rounded-lg mt-2 hover:bg-amber-700 dark:hover:bg-amber-500 transition-colors"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
