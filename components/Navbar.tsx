"use client";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Briefcase, Mail, Home, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup menu mobile setelah link diklik
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold tracking-tighter text-white">
          Zar<span className="text-gold">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-widest text-slate-300 hover:text-gold hover:bg-gold/10 transition-colors"
            >
              <span className="text-gold/70">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="hidden md:inline-flex bg-gradient-to-r from-gold to-premium text-dark px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-0.5"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-gold focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Animasi Buka-Tutup) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-gold/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="flex items-center space-x-4 text-lg text-white hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  <span className="text-gold">{link.icon}</span>
                  <span className="font-heading font-bold uppercase tracking-widest">
                    {link.name}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="bg-gold text-dark font-bold py-3 rounded-xl text-center uppercase tracking-widest mt-4"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
