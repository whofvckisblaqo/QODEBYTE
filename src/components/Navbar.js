"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home",             href: "#home"     },
    { label: "Our Courses",      href: "#programs" },
    { label: "Student Projects", href: "#projects" },
  ];

  const navLinkClass = "relative text-sm font-medium text-slate-700 hover:text-[#137fec] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#137fec] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-slate-200 transition-all duration-300 ${scrolled ? "bg-[#f6f7f8]/95 backdrop-blur-md shadow-md" : "bg-[#f6f7f8]/80 backdrop-blur-md shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <span className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#137fec]">Qodebyte Academy</span>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={navLinkClass}>{link.label}</a>
            ))}
          </nav>

          {/* Apply Now + Hamburger */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex bg-[#137fec] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#137fec]/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#137fec]/30 no-underline">
              Apply Now
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-700 hover:text-[#137fec] transition-colors duration-200 p-1"
              aria-label="Toggle menu">
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#f6f7f8] border-t border-slate-200 px-6 pb-6 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="text-slate-700 hover:text-[#137fec] text-base font-medium no-underline py-3 border-b border-slate-100 transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#137fec] text-white text-[15px] font-bold px-5 py-3 rounded-lg no-underline text-center hover:bg-[#137fec]/90 transition-all duration-300 hover:scale-[1.02]">
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}