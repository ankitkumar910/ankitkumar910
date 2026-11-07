import { useState, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import { navLinks, personalInfo } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.id));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${scrolled ? "border-b border-[var(--line)] bg-[var(--bg)]/95" : "bg-transparent"}`}>
      <div className="section-shell flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">{personalInfo.name}<span className="text-[var(--accent)]">.</span></a>
        <ul className="hidden items-center gap-2 sm:flex">
          {navLinks.map((link) => <li key={link.id}><a href={`#${link.id}`} className={`inline-flex rounded-[8px] px-3 py-2 text-sm transition-colors ${activeSection === link.id ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--text)]"}`}>{link.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2"><ThemeToggle /><button type="button" className="inline-flex h-10 w-10 items-center justify-center text-[var(--text)] sm:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <Close /> : <Menu />}</button></div>
      </div>
      {menuOpen && <div className="border-t border-[var(--line)] bg-[var(--bg)] px-4 pb-4 sm:hidden"><ul className="flex flex-col gap-1 pt-3">{navLinks.map((link) => <li key={link.id}><a href={`#${link.id}`} onClick={closeMenu} className={`block rounded-[8px] px-3 py-3 text-sm ${activeSection === link.id ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--muted)] hover:bg-[var(--panel)]"}`}>{link.label}</a></li>)}</ul></div>}
    </nav>
  );
}
export default Navbar;
