
function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#BBAA82]/20 bg-[#0C3B2E]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6 sm:px-10">

        {/* Logo / Name */}
        <a
          href="#home"
          className="font-serif text-2xl font-bold tracking-wide text-[#FFBA00] transition hover:opacity-80"
        >
          KY.
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-widest text-[#F5F3EB] transition-colors duration-300 hover:text-[#FFBA00] sm:text-xs"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
