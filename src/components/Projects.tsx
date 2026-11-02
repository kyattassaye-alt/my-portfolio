
const projects = [
  {
    title: "Seismo AI",
    category: "Embedded Systems · AI",
    description:
      "An AI-powered seismometer combining embedded hardware and machine learning to detect seismic activity, with a mobile application for visualization. Awarded 2nd place among 140+ students and a $10,000 prize.",
    technologies: ["Python", "ESP32", "Raspberry Pi", "Flutter"],
    github: "",
    status: "Completed",
  },
  {
    title: "CloudPulse",
    category: "Cloud Engineering · Platform Engineering",
    description:
      "A cloud infrastructure and monitoring project focused on deploying and observing applications on AWS. Exploring infrastructure as code, containerization, automated deployment, and monitoring with Prometheus and Grafana.",
    technologies: ["AWS", "Terraform", "Docker", "Prometheus", "Grafana"],
    github: "",
    status: "In Progress",
  },
  {
    title: "Flight Booking Database",
    category: "Backend · Databases",
    description:
      "A flight booking web application built around relational database design and backend routes for managing flight information.",
    technologies: ["Python", "Flask", "PostgreSQL"],
    github: "",
    status: "Completed",
  },
  {
    title: "Systems Programming",
    category: "Systems · C",
    description:
      "Systems programming projects exploring process creation, Unix signals, shell behavior, memory management, and CPU scheduling.",
    technologies: ["C", "Linux/Unix", "Operating Systems"],
    github: "",
    status: "Completed",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#0C3B2E] text-[#F5F3EB]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#BBAA82]">
          A Few Things I've Built
        </p>

        <h2 className="font-serif text-4xl font-bold text-[#FFBA00] md:text-5xl">
          Selected Projects
        </h2>

        <p className="mb-12 mt-5 max-w-2xl leading-7 text-[#D5DDCF]">
          From intelligent hardware to cloud infrastructure,
          here's a look at what I've been working on.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-[#6D9773]/30 bg-[#092F25] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FFBA00]/60"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-sm text-[#BBAA82]">
                  {project.category}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "In Progress"
                      ? "border border-[#FFBA00]/40 bg-[#FFBA00]/10 text-[#FFBA00]"
                      : "border border-[#6D9773]/40 bg-[#6D9773]/10 text-[#A9C5A9]"
                  }`}
                >
                  {project.status === "In Progress"
                    ? "↗ In Progress"
                    : "Completed"}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <span className="font-serif text-3xl text-[#6D9773]">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-semibold text-[#F5F3EB]">
                  {project.title}
                </h3>
              </div>

              <p className="mb-7 flex-1 leading-7 text-[#BBAA82]">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#6D9773]/30 px-3 py-2 text-xs text-[#D5DDCF]"
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
                  className="w-fit text-sm font-semibold text-[#FFBA00] transition hover:text-[#BBAA82]"
                >
                  View on GitHub ↗
                </a>
              )}

              {project.status === "In Progress" && !project.github && (
                <p className="text-sm italic text-[#6D9773]">
                  Currently under development...
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
