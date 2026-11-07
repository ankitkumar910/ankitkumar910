import {
  AlternateEmail,
  Construction,
  HomeFilled,
  Person,
  Work,
} from "@mui/icons-material";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

function Bottombar() {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--bg)] sm:hidden">
      <div className="flex h-16 items-center justify-around px-3">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`flex flex-col items-center gap-1 text-[0.64rem] uppercase tracking-[0.08em] ${
              activeSection === link.id ? "text-[var(--text)]" : "text-[var(--muted)]"
            }`}
          >
            {link.label === "Home" && <HomeFilled fontSize="small" />}
            {link.label === "About" && <Person fontSize="small" />}
            {link.label === "Skills" && <Construction fontSize="small" />}
            {link.label === "Experience" && <Work fontSize="small" />}
            {link.label === "Contact" && <AlternateEmail fontSize="small" />}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Bottombar;
