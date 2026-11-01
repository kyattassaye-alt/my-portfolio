
function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden bg-[#0C3B2E] px-6 text-center">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(109,151,115,0.16),_transparent_65%)]" />

      {/* Decorative frame */}
      <div className="pointer-events-none absolute inset-6 border border-[#BBAA82]/20 sm:inset-8" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">

        <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-[#BBAA82] sm:text-sm">
          Hello, I'm
        </p>

        <h1 className="font-serif text-6xl font-bold tracking-tight text-[#FFBA00] sm:text-8xl md:text-9xl">
          KADIDJATOU
        </h1>

        <p className="mt-6 text-sm font-light uppercase tracking-[0.35em] text-[#E6E1D3] sm:text-lg">
          Computer Engineering Student
        </p>

        <div className="my-8 h-px w-20 bg-[#BBAA82]/70" />

        <p className="text-xs uppercase tracking-[0.25em] text-[#BBAA82] sm:text-sm">
          Software · Cloud · AI · Embedded Systems
        </p>

        <a
          href="#projects"
          className="mt-14 border border-[#BBAA82]/50 px-8 py-4 text-xs font-medium uppercase tracking-widest text-[#FFBA00] transition duration-300 hover:border-[#FFBA00] hover:bg-[#FFBA00] hover:text-[#0C3B2E]"
        >
          Explore My Work ↗
        </a>

      </div>

      {/* Bottom scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-12 z-10 text-xs uppercase tracking-[0.3em] text-[#BBAA82] transition hover:text-[#FFBA00]"
      >
        ↓ Scroll to explore
      </a>

    </section>
  );
}

export default Hero;
