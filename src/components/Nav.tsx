"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f4ede0]/85 backdrop-blur-md py-3 border-b border-black/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff2e4c] animate-pulse-ring" />
          Emilia <span className="italic">Marcovici</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Werke</a>
          <a href="#studio" className="nav-link">Studio</a>
          <a href="#contact" className="nav-link">Kontakt</a>
        </nav>
        <a
          href="#contact"
          className="text-sm px-5 py-2.5 bg-[#0a0a0a] text-[#f4ede0] rounded-full hover:bg-[#ff2e4c] transition-colors"
        >
          Anfrage
        </a>
      </div>
    </header>
  );
}
