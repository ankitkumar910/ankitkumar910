@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --bg: #f5f0e8;
  --bg-alt: #f8f4ee;
  --paper: #fffdf9;
  --panel: #f0e9e1;
  --text: #171412;
  --muted: #5f564f;
  --line: rgba(23, 20, 18, 0.14);
  --accent: #9d5d3a;
  --accent-strong: #7e4730;
  --accent-soft: #f1e1d3;
  --shadow: 0 18px 40px -28px rgba(17, 17, 17, 0.35);
}

.dark {
  --bg: #11100f;
  --bg-alt: #171512;
  --paper: #1b1917;
  --panel: #221f1d;
  --text: #f3efe8;
  --muted: #c8c0b5;
  --line: rgba(255, 255, 255, 0.08);
  --accent: #d28f5b;
  --accent-strong: #efb97d;
  --accent-soft: rgba(210, 143, 91, 0.12);
  --shadow: 0 18px 40px -28px rgba(0, 0, 0, 0.7);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

section {
  scroll-margin-top: 96px;
}

.section-shell {
  max-width: 1200px;
  margin: 0 auto;
}

.section-tag {
  margin: 0 0 0.75rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.section-title {
  margin: 0;
  font-family: "Georgia", "Times New Roman", serif;
  letter-spacing: -0.05em;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 0.98;
  color: var(--text);
}

.section-copy {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.8;
}

.noto-serif-oriya-400 {
  font-family: "Noto Serif Oriya", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.noto-serif-oriya-600 {
  font-family: "Noto Serif Oriya", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.dm-sans-400 {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.ubuntu-light {
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.ubuntu-regular {
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.ubuntu-medium {
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.ubuntu-bold {
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.stack-sans-headline-500 {
  font-family: "Stack Sans Headline", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.soft-card {
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.soft-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  background: var(--text);
  color: var(--bg);
  padding: 0.9rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 10px;
  transition: transform 180ms ease, opacity 180ms ease;
}

.soft-button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  padding: 0.9rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  transition: border-color 180ms ease, background 180ms ease;
}

.ghost-button:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.minimal-chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line);
  background: transparent;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.02em;
  color: var(--muted);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
