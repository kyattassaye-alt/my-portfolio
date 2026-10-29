function Contact(){
    return(
        <section id="contact" className="border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Let's connect.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
          I'm interested in software engineering, cloud computing, and
          systems engineering opportunities. I'd love to connect and discuss
          projects, internships, or opportunities to collaborate.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="kyattassaye@hawk.illinoistech.edu"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/kadidjatou-yattassaye-8b11582b1/"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-900"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/kyattassaye-alt"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>

        <p className="mt-16 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Kadidjatou Yattassaye
        </p>
      </div>
    </section>
  );


}
export default Contact;