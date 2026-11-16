import { skills, skillCategories } from "../data/portfolio";
import TechLogo from "./TechLogo";

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12"><p className="section-tag">What I work with</p><h2 className="section-title">Skills &amp; Stack</h2></div>
        <div className="mb-10 flex flex-wrap gap-3">{skills.map((skill) => <div key={skill.name} className="skill-card inline-flex items-center gap-3 border border-[var(--line)] bg-[var(--paper)] px-4 py-3"><TechLogo name={skill.name} size={26} /><span className="text-base text-[var(--text)]">{skill.name}</span></div>)}</div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{skillCategories.map((category) => <div key={category.title} className="skill-category-card border border-[var(--line)] bg-[var(--paper)] p-5"><h3 className="mb-4 border-b border-[var(--line)] pb-3 text-base font-medium text-[var(--text)]">{category.title}</h3><ul className="space-y-2.5">{category.items.map((item) => <li key={item} className="flex items-center gap-3 text-base text-[var(--muted)]"><TechLogo name={item} size={20} />{item}</li>)}</ul></div>)}</div>
      </div>
    </section>
  );
}
export default Skills;
