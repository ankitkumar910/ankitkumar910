import imgUrl from "../assets/ankit.svg";
import { Description, GitHub, LinkedIn, ArrowDownward } from "@mui/icons-material";
import { personalInfo } from "../data/portfolio";

function Intro() {
  return (
    <div className=" transition-colors duration-300">
      <section
        id="home"
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto"
      >
        <div className="flex-1 order-2 lg:order-1">
          <p className="ubuntu-regular text-zinc-600 dark:text-zinc-400 text-sm tracking-widest uppercase mb-3 animate-fade-in">
            {personalInfo.title}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 noto-serif-oriya-600 text-gray-900 dark:text-gray-100 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-zinc-700 dark:text-zinc-300">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-2 dm-sans-400">
            {personalInfo.tagline}
          </p>

          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 max-w-xl noto-serif-oriya-400 mb-8">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 ubuntu-medium shadow-sm"
            >
              <Description fontSize="small" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 px-6 py-3 rounded-xl transition-all duration-200 ubuntu-medium"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 shrink-0">
          <div className="absolute   rounded-3xl rotate-6 scale-95" />
          <img
            src={imgUrl}
            alt={personalInfo.name}
            className="relative h-64 sm:h-80 lg:h-[28rem] select-none object-cover rounded-3xl border border-zinc-200 dark:border-zinc-800"
          />
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors animate-bounce"
          aria-label="Scroll to about"
        >
          <span className="ubuntu-regular text-xs">Scroll</span>
          <ArrowDownward fontSize="small" />
        </a>
      </section>
    </div>
  );
}

export default Intro;
