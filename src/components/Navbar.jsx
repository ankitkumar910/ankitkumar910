import imgUrl from "/ankit.png";
import {
  Description,
  GitHub,
  LinkedIn,
  ArrowDownward,
} from "@mui/icons-material";
import { personalInfo } from "../data/portfolio";

function Introduction() {
  return (
    <div className="bg-[var(--bg)]">
      <section
        id="home"
        className="section-shell px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <p className="section-tag">{personalInfo.title}</p>

            <h1 className="text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-7xl">
              Hi, I&apos;m <span className="text-[var(--accent)]">{personalInfo.name}</span>
            </h1>

            <p className="mt-5 text-lg text-[var(--muted)] sm:text-xl">
              {personalInfo.tagline}
            </p>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
              {personalInfo.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button"
              >
                <Description fontSize="small" />
                See Resume
              </a>

              <a href="#projects" className="ghost-button">
                View Projects
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <GitHub fontSize="small" />
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--line)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <LinkedIn fontSize="small" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-3 -z-10 border border-[var(--line)] bg-[var(--accent-soft)]" />
              <img
                src={imgUrl}
                alt={personalInfo.name}
                className="relative h-[22rem] w-full rounded-[12px] border border-[var(--line)] bg-[var(--paper)] object-cover sm:h-[26rem]"
              />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-12 flex flex-col items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          aria-label="Scroll to about"
        >
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em]">
            Scroll
          </span>
          <ArrowDownward fontSize="small" />
        </a>
      </section>
    </div>
  );
}

export default Introduction;
