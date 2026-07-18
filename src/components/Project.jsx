import { GitHub, OpenInNew, Star } from "@mui/icons-material";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {

 


  return (
    <article
      className={`group bg-white dark:bg-[#242019] rounded-2xl border border-amber-100 dark:border-amber-900/40 overflow-hidden hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-lg dark:hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 ${
        project.featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="ubuntu-medium text-lg text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <Star className="text-amber-500 shrink-0" fontSize="small" />
          )}
        </div>

        <p className="noto-serif-oriya-400 text-sm text-gray-600 dark:text-gray-400 leading-6 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="ubuntu-regular text-xs bg-[#F8F1E4] dark:bg-[#1a1814] text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm ubuntu-regular text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
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
              className="inline-flex items-center gap-1.5 text-sm ubuntu-regular text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              <OpenInNew fontSize="small" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Project() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-[#242019] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="ubuntu-regular text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase mb-2">
            My work
          </p>
          <h2 className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="noto-serif-oriya-400 text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development and problem solving.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div> */}

        {/* {others.length > 0 && (
          <>
            <h3 className="ubuntu-medium text-xl text-gray-900 dark:text-gray-100 mb-6 text-center">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )} */}
      </div>
    </section>
  );
}

export default Project;
