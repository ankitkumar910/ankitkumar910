import { skills, skillCategories } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg-alt)] py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12">
          <p className="section-tag">What I work with</p>
          <h2 className="section-title">Skills & Stack</h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-3 border border-[var(--line)] bg-[var(--paper)] px-4 py-3"
            >
              <img src={skill.icon} alt={skill.name} className="h-7 w-7 object-contain" />
              <span className="text-sm text-[var(--text)]">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="border border-[var(--line)] bg-[var(--paper)] p-5">
              <h3 className="mb-4 border-b border-[var(--line)] pb-3 text-base font-medium text-[var(--text)]">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
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
