function Hero(){
    return(
        <section className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr]">
        {/* Intro */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/70 px-4 py-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Computer Engineering · Illinois Tech
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Curious mind.
            <br />
            <span className="text-cyan-300">Builder's</span> energy.
            <br />
            <span className="text-violet-300">Engineer</span> in progress.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            I connect code, cloud, AI, and hardware to turn ideas
            into things people can actually use. Always learning,
            always building, always asking "what if?"
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              Explore my work ↗
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-violet-300 hover:bg-violet-300/10"
            >
              Let's connect
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Currently exploring: Enterprise Software · cloud systems · Embedded Systems
          </p>
        </div>

        {/* Engineering playground */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-3 -top-4 rotate-6 rounded-xl bg-violet-300 px-4 py-2 text-sm font-bold text-gray-950 shadow-lg">
            BUILT WITH CURIOSITY 
          </div>

          <div className="rounded-3xl border border-gray-700/80 bg-gray-900/80 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">MY ENGINEERING PLAYGROUND</p>
              <span className="text-xl">✳</span>
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              Different worlds. One engineer.
            </h2>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 transition hover:-translate-x-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15 text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-200">AI + Software</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    From smart ideas to useful apps
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4 transition hover:-translate-x-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-300/15 text-2xl">
                  ☁️
                </div>
                <div>
                  <h3 className="font-semibold text-violet-200">Cloud + Systems</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Infrastructure, networks, and code
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4 transition hover:-translate-x-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-300/15 text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="font-semibold text-lime-200">Hardware + Embedded</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Bringing software into the real world
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "C/C++", "Linux", "ESP32", "Docker"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-gray-800 px-3 py-1.5 text-xs text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs tracking-wide text-gray-500">
            LEARN · EXPERIMENT · BUILD · REPEAT
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero