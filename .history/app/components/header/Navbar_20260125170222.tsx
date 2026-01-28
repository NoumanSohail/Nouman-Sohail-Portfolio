"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-white/20 shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full mx-auto max-w-384 flex items-center justify-between px-5 md:px-10 lg:px-15 text-white tracking-widest">
        <h1 className="font-bold text-2xl">Portfolio</h1>

        {/* large displays like laptops */}
        <nav className="hidden lg:flex">
          {navLinks.map((links) => (
            <div key={links.name} className="flex ml-10 font-semibold hover:text-blue-500 transition-all duration-300">
              <Link href={links.id} className="py-2">{links.name}</Link>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-400"
          >
            <Menu size={30} />
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 h-screen flex justify-end bg-black/40 backdrop-blur-sm">
            <div className="relative h-full w-[60%] bg-[#0f172a] text-white flex items-center transition-transform duration-300 translate-x-0">
              <button
                onClick={() => setMenuOpen(false)}
                className={`absolute top right-5 md:right-10 text-white ${isScrolled ? "top-3" : "top-6"}`}
              >
                <X size={30} />
              </button>

              <nav className="flex flex-col p-10 gap-10 mt-20">
                {navLinks.map((links) => (
                  <Link
                    key={links.name}
                    href={links.id}
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold"
                  >
                    {links.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
