import { personalInfo, stats } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="bg-[var(--bg-alt)] py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12"><p className="section-tag">Get to know me</p><h2 className="section-title">About</h2></div>
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div><p className="text-lg leading-8 text-[var(--muted)]">{personalInfo.longBio}</p><p className="mt-6 text-base leading-7 text-[var(--muted)]">When I&apos;m not coding, I&apos;m solving algorithm problems, reading through backend systems, and refining how I build software with clarity, maintainability, and purpose.</p><div className="mt-8 flex flex-wrap gap-3"><span className="minimal-chip">📍 {personalInfo.location}</span><span className="minimal-chip">💼 Open to opportunities</span></div></div>
          <div className="grid grid-cols-2 gap-4">{stats.map((stat) => <div key={stat.label} className="border border-[var(--line)] bg-[var(--paper)] px-5 py-7 text-center"><div className="text-3xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-4xl">{stat.value}</div><div className="mt-2 text-sm text-[var(--muted)]">{stat.label}</div></div>)}</div>
        </div>
      </div>
    </section>
  );
}
export default About;
