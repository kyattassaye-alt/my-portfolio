
function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0C3B2E] text-[#F5F3EB]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Heading */}
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#BBAA82]">
          What's Next?
        </p>

        <h2 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">
          Let's make
          <br />
          <span className="text-[#FFBA00]">something happen.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#D5DDCF]">
          Interested in collaborating, discussing technology,
          or exploring opportunities? I'd love to hear from you.
        </p>

        {/* Contact links */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="mailto:kyattassaye@hawk.illinoistech.edu"
            className="inline-flex items-center gap-3 bg-[#FFBA00] px-6 py-3 font-semibold text-[#0C3B2E] transition hover:-translate-y-1 hover:bg-[#FFD04A]"
          >
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/kadidjatou-yattassaye-8b11582b1/"
            target="_blank"
            rel="noreferrer"
            className="border border-[#BBAA82]/50 px-6 py-3 font-medium text-[#F5F3EB] transition hover:border-[#FFBA00] hover:text-[#FFBA00]"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/kyattassaye-alt"
            target="_blank"
            rel="noreferrer"
            className="border border-[#BBAA82]/50 px-6 py-3 font-medium text-[#F5F3EB] transition hover:border-[#FFBA00] hover:text-[#FFBA00]"
          >
            GitHub ↗
          </a>

        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[#6D9773]/40 pt-6 sm:flex-row sm:items-center">
          <p className="font-serif text-xl font-bold text-[#FFBA00]">
            KADIDJATOU.
          </p>

          <p className="text-sm text-[#BBAA82]">
            © {new Date().getFullYear()} Kadidjatou Yattassaye
          </p>

          <a
            href="#home"
            className="text-sm text-[#D5DDCF] transition hover:text-[#FFBA00]"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
