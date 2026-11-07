import { GitHub, OpenInNew, Star } from "@mui/icons-material";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {
  return (
    <article
      className={`group border border-[var(--line)] bg-[var(--paper)] p-6 transition-colors duration-200 hover:border-[var(--accent)] ${
        project.featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <h3 className="text-xl font-medium tracking-[-0.04em] text-[var(--text)]">
          {project.title}
        </h3>
        {project.featured && (
          <Star className="text-[var(--accent)]" fontSize="small" />
        )}
      </div>

      <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-[var(--line)] px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text)] hover:text-[var(--accent)]"
          >
            <GitHub fontSize="small" />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text)] hover:text-[var(--accent)]"
          >
            <OpenInNew fontSize="small" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

function Project() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12">
          <p className="section-tag">My work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-14 mb-6 text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">
              Other Projects
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Project;
