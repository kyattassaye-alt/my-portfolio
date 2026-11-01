
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden bg-[#0C3B2E] px-6 py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#6D9773]/15 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] lg:gap-16">

        {/* Profile picture */}
        <div className="mx-auto">
          <div className="h-56 w-56 overflow-hidden rounded-full border-[5px] border-[#6D9773] bg-[#BBAA82] shadow-2xl shadow-black/20 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            <img
              src="/images/profile.jpg"
              alt="Kadidjatou Yattassaye"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center md:text-left">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FFBA00]">
            Hello, welcome to my portfolio
          </p>

          <h1 className="font-serif text-4xl font-bold text-[#F5F3EB] sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-[#FFBA00]">Kadidjatou.</span>
          </h1>

          <p className="mt-5 text-lg text-[#BBAA82] sm:text-xl">
            Computer Engineering Student & Aspiring Engineer
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#D5DDCF]">
            Exploring the intersection of software, cloud computing,
            artificial intelligence, and embedded systems.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FFBA00] px-7 py-3 font-semibold text-[#0C3B2E] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD04A]"
          >
            See My Work <span>↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
