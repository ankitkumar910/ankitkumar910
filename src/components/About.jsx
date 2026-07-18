import { personalInfo, stats } from "../data/portfolio";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-[#242019] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="ubuntu-regular text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="noto-serif-oriya-400 text-gray-700 dark:text-gray-300 text-lg leading-8 mb-6">
              {personalInfo.longBio}
            </p>
            <p className="noto-serif-oriya-400 text-gray-600 dark:text-gray-400 leading-7 mb-6">
              When I&apos;m not coding, you&apos;ll find me solving algorithm
              challenges, reading tech blogs, or exploring new frameworks. I
              believe in writing clean, maintainable code and continuous
              learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="ubuntu-regular text-sm bg-[#F8F1E4] dark:bg-[#1a1814] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-800/40">
                📍 {personalInfo.location}
              </span>
              <span className="ubuntu-regular text-sm bg-[#F8F1E4] dark:bg-[#1a1814] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-800/40">
                💼 Open to opportunities
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F8F1E4] dark:bg-[#1a1814] rounded-2xl p-6 text-center border border-amber-100 dark:border-amber-900/40 hover:border-amber-400 dark:hover:border-amber-600 transition-colors group"
              >
                <div className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="ubuntu-regular text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
