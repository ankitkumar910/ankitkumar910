import { useEffect, useRef, useState } from "react";
import { Menu } from "@mui/icons-material";
import { navLinks, navSectionIds, personalInfo } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerRendered, setDrawerRendered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navSectionIds);
  const touchStart = useRef(null);
  const closeTimer = useRef(null);
  const openFrame = useRef(null);

  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setDrawerRendered(true);
    openFrame.current = window.requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => {
    window.cancelAnimationFrame(openFrame.current);
    setMenuOpen(false);
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setDrawerRendered(false);
    }, 250);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(closeTimer.current);
      window.cancelAnimationFrame(openFrame.current);
    },
    [],
  );

  useEffect(() => {
    if (!drawerRendered) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => event.key === "Escape" && closeMenu();

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerRendered]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = Math.abs(touch.clientY - start.y);
    if (deltaX > 70 && deltaY < 80) closeMenu();
  };
  const linkClass = (isActive) =>
    `block rounded-lg px-4 py-3 text-sm transition-colors ${
      isActive
        ? "nav-link-active"
        : "text-[var(--muted)] hover:bg-[var(--nav-hover)] hover:text-[var(--text)]"
    }`;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed left-0 right-0 top-0 z-50 hidden transition-all duration-200 sm:block ${
          scrolled
            ? "border-b border-[var(--line)] bg-[var(--bg)]/95"
            : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]"
          >
            {personalInfo.name}
            <span className="text-[var(--accent)]">.</span>
          </a>
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "nav-link-active"
                        : "text-[var(--muted)] hover:bg-[var(--nav-hover)] hover:text-[var(--text)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {!menuOpen && (
        <button
          type="button"
          onClick={openMenu}
          className="fixed right-4 top-4 z-[70] inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:hidden"
          aria-label="Open navigation"
          aria-expanded={false}
          aria-controls="mobile-navigation"
        >
          <Menu />
        </button>
      )}

      {drawerRendered && (
        <div
          aria-hidden={!menuOpen}
          className={`fixed inset-0 z-[60] sm:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            onClick={closeMenu}
            className={`absolute inset-0 h-full w-full bg-black/45 transition-opacity duration-[250ms] motion-reduce:transition-none ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Close navigation menu"
            tabIndex={menuOpen ? 0 : -1}
          />
          <aside
            id="mobile-navigation"
            aria-label="Mobile navigation"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={`absolute inset-y-0 right-0 w-[min(20rem,85vw)] overflow-y-auto border-l border-[var(--line)] bg-[var(--bg)] px-5 pb-8 pt-6 shadow-2xl transition-transform duration-[250ms] ease-out motion-reduce:transition-none ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="mb-8 flex min-h-11 items-center justify-between pr-12">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]"
              >
                {personalInfo.name}
                <span className="text-[var(--accent)]">.</span>
              </a>
              <ThemeToggle />
            </div>
            <nav aria-label="Mobile sections">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={linkClass(isActive)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
