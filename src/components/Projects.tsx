const projects = [
  {
    title: "Seismo AI",
    category: "Embedded Systems · AI",
    description:
      "An AI-powered seismometer combining embedded hardware and machine learning to detect seismic activity, with a mobile application for visualization.",
    technologies: ["Python", "ESP32", "Raspberry Pi", "Flutter"],
    github: "", // Add your repository URL
  },
  {
    title: "Gas Loyalty Platform",
    category: "Full-Stack Development",
    description:
      "A loyalty platform concept for a fuel company, designed to help customers track transactions and rewards.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    github: "", // Add your repository URL
  },
  {
    title: "Flight Booking Database",
    category: "Backend · Databases",
    description:
      "A flight booking web application built around relational database design and backend routes for managing flight information.",
    technologies: ["Python", "Flask", "PostgreSQL"],
    github: "", // Add your repository URL
  },
  {
    title: "Systems Programming",
    category: "Systems · C",
    description:
      "Systems programming assignments exploring process creation, Unix signals, shell behavior, memory management, and CPU scheduling.",
    technologies: ["C", "Linux/Unix", "Operating Systems"],
    github: "", // Add a relevant public repository URL
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Selected Work
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Projects
        </h2>

        <p className="mb-12 max-w-2xl text-gray-400">
          A selection of projects where I explore software, embedded systems,
          databases, and intelligent technology.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition hover:border-gray-600"
            >
              <p className="mb-3 text-sm text-gray-500">
                {project.category}
              </p>

              <h3 className="mb-3 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit font-medium text-white underline underline-offset-4 hover:text-gray-300"
                >
                  View on GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;