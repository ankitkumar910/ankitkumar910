import { School, Work, Code } from "@mui/icons-material";
import { experience } from "../data/portfolio";

const iconMap = {
  education: School,
  work: Work,
};

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 bg-[#F8F1E4] dark:bg-[#1a1814] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="ubuntu-regular text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase mb-2">
            My journey
          </p>
          <h2 className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Experience & Education
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-300 dark:bg-amber-800 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const Icon = iconMap[item.type] || Code;
              return (
                <div key={index} className="relative flex gap-6 sm:pl-16">
                  <div className="hidden sm:flex absolute left-0 w-12 h-12 bg-amber-600 rounded-full items-center justify-center text-white shadow-md shadow-amber-600/30">
                    <Icon fontSize="small" />
                  </div>

                  <div className="bg-white dark:bg-[#242019] rounded-2xl p-6 border border-amber-100 dark:border-amber-900/40 hover:border-amber-400 dark:hover:border-amber-600 transition-colors flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="ubuntu-medium text-lg text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <span className="ubuntu-regular text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="ubuntu-regular text-sm text-amber-700 dark:text-amber-400 mb-3">
                      {item.organization}
                    </p>
                    <p className="noto-serif-oriya-400 text-sm text-gray-600 dark:text-gray-400 leading-6">
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
