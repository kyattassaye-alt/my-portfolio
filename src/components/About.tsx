function About(){
    return(
        <section id="about" className="border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          About Me
        </p>

        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Engineering ideas into reality.
        </h2>

        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-gray-400">
          <p>
            I'm a Computer Engineering student at Illinois Institute of
            Technology, interested in software engineering, cloud computing,
            and intelligent systems.
          </p>

          <p>
            I enjoy solving technical problems and building projects that
            combine software, hardware, and practical applications.
          </p>

          <p>
            Through my coursework and projects, I'm developing my skills in
            programming, systems, databases, and embedded technologies.
          </p>
        </div>
      </div>
    </section>
  );
        

}
export default About;