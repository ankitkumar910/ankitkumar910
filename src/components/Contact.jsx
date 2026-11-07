import { School, Work, Code } from "@mui/icons-material";
import { experience } from "../data/portfolio";

const iconMap = {
  education: School,
  work: Work,
};

function Experience() {
  return (
    <section id="experience" className="bg-[var(--bg-alt)] py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12">
          <p className="section-tag">My journey</p>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-7">
            {experience.map((item, index) => {
              const Icon = iconMap[item.type] || Code;
              return (
                <div key={index} className="relative pl-0 sm:pl-16">
                  <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--line)] sm:block" />

                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--accent)] sm:absolute sm:left-0 sm:flex">
                    <Icon fontSize="small" />
                  </div>

                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-lg font-medium text-[var(--text)]">{item.title}</h3>
                      <span className="border border-[var(--line)] px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--muted)]">
                        {item.period}
                      </span>
                    </div>

                    <p className="mb-3 text-sm font-medium text-[var(--accent)]">
                      {item.organization}
                    </p>
                    <p className="text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
