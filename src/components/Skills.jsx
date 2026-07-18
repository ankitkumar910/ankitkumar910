import { skills, skillCategories } from "../data/portfolio";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 bg-[#F8F1E4] dark:bg-[#1a1814] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="ubuntu-regular text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Skills & Tech Stack
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 mb-16">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="bg-white dark:bg-[#242019] flex flex-col items-center justify-center p-5 rounded-2xl border border-transparent dark:border-amber-900/30 hover:border-amber-500 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-amber-900/20 transition-all duration-200 hover:-translate-y-1 w-28"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`h-8 w-8 object-contain ${skill.name === "React" ? "hover:animate-spin" : "hover:scale-110"} transition-transform`}
              />
              <span className="text-sm text-center mt-2 text-gray-900 dark:text-gray-200 ubuntu-regular">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-[#242019] rounded-2xl p-6 border border-amber-100 dark:border-amber-900/40 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
            >
              <h3 className="ubuntu-medium text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-amber-100 dark:border-amber-900/40">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="ubuntu-regular text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
