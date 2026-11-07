import { School, Work, Code } from "@mui/icons-material";
import { experience } from "../data/portfolio";

const iconMap = { education: School, work: Work };
function Experience() {
  return <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8"><div className="section-shell"><div className="mb-12"><p className="section-tag">My journey</p><h2 className="section-title">Experience &amp; Education</h2></div><div className="mx-auto max-w-3xl space-y-6">{experience.map((item, index) => { const Icon = iconMap[item.type] || Code; return <article key={`${item.title}-${index}`} className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[3rem_1fr]"><div className="hidden h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--accent)] sm:flex"><Icon fontSize="small" /></div><div><div className="mb-2 flex flex-wrap items-start justify-between gap-3"><h3 className="text-lg font-medium text-[var(--text)]">{item.title}</h3><span className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">{item.period}</span></div><p className="mb-3 text-sm font-medium text-[var(--accent)]">{item.organization}</p><p className="text-sm leading-6 text-[var(--muted)]">{item.description}</p></div></article>; })}</div></div></section>;
}
export default Experience;
