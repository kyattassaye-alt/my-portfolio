
const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    skills: ["Python", "C", "Java", "SQL", "TypeScript", "Bash"],
  },
  {
    number: "02",
    title: "Systems & Cloud",
    skills: ["Linux", "Azure", "Docker", "TCP/IP", "Git"],
  },
  {
    number: "03",
    title: "Frameworks & Databases",
    skills: ["React", "Tailwind CSS", "Flask", "PostgreSQL", "TensorFlow"],
  },
  {
    number: "04",
    title: "Embedded Systems",
    skills: ["Raspberry Pi", "ESP32", "Arduino", "FPGA"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#F5F1E7] text-[#0C3B2E]">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Section heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#6D9773]">
          My Toolkit
        </p>

        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-xl text-[#617566]">
          Technologies I use to explore, develop, and bring projects to life.
        </p>

        {/* Skills categories */}
        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="border-t border-[#BBAA82] pt-5"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-serif text-2xl text-[#6D9773]">
                  {group.number}
                </span>

                <h3 className="text-lg font-semibold">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#6D9773]/40 px-4 py-2 text-sm text-[#0C3B2E] transition duration-300 hover:border-[#0C3B2E] hover:bg-[#0C3B2E] hover:text-[#F5F1E7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
