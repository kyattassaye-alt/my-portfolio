
function About() {
  return (
    <section id="about" className="bg-[#F5F1E7] text-[#0C3B2E]">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#6D9773]">
          A Little About Me
        </p>

        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

          {/* Heading */}
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Curious by nature.
              <span className="text-[#6D9773]"> Engineer by passion.</span>
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg leading-8 text-[#40594A]">
              I'm a Computer Engineering student at Illinois Institute
              of Technology with an interest in software engineering,
              cloud computing, artificial intelligence, and embedded systems.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#40594A]">
              I enjoy exploring new technologies, tackling technical
              challenges, and building projects that connect software
              with the physical world.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solving", "Technology", "Innovation", "Continuous Learning"].map((item) => (
                <span
                  key={item}
                  className="border border-[#6D9773]/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#0C3B2E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
