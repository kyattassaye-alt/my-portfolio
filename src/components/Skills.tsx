const skillGroups =[
    {
        title: "Programing Languages",
        skills:["Python", "C", "Java", "SQL", "TypeScript", "Bash"],
    },
    {
        title:"Systems & cloud",
        skills:["Linux", "Azure", "Docker","TCP/IP", "Git"],
    },
    {
        title:"Frameworks & Databases",
        skills:["React", "Tailwind CSS", "Flask", "PostgreSQL", "TensorFlow"],

    },
    {
        title:"Embedded Systems",
        skills:["Raspberry Pi", "ESP32", "Arduino","FPGA"],
    },
];
function Skills(){
    return (
        <section id="skills" className="border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Technical Expertise
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Skills & Technologies
        </h2>

        <p className="mb-10 max-w-2xl text-gray-400 leading-relaxed">
          Tools and technologies I use to build software, work with systems,
          and develop hardware-connected applications.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300"
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
export default Skills 