"use client";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Briefcase, Mail, Home, Menu, X, BookOpen, Camera, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      const sections = ["home", "about", "skills", "projects", "experience", "gallery", "certificates", "work", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    { name: "Experience", href: "#experience", icon: <BookOpen size={18} /> },
    { name: "Gallery", href: "#gallery", icon: <Camera size={18} /> },
    { name: "Certificates", href: "#certificates", icon: <Award size={18} /> },
    { name: "Work", href: "#work", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[3.5px] z-[60] bg-gradient-to-r from-gold via-premium to-gold transition-all duration-150 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-heading font-bold tracking-tighter text-white relative"
          >
            Zar
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-gold"
            >
              .
            </motion.span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium uppercase tracking-widest transition-all duration-300"
                >
                  <span
                    className={`relative z-10 flex items-center space-x-2 ${
                      isActive ? "text-gold" : "text-slate-400 hover:text-gold"
                    }`}
                  >
                    <span className="text-gold/50">{link.icon}</span>
                    <span>{link.name}</span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold to-premium rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-gold to-premium text-dark px-5 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all"
            >
              Hire Me
            </motion.a>
          </div>

          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-gold focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed inset-0 w-full h-[100dvh] bg-dark/98 backdrop-blur-3xl md:hidden z-50 overflow-y-auto flex flex-col"
            >
              {/* Header inside full-screen menu */}
              <div className="container mx-auto px-6 py-5 flex justify-between items-center border-b border-white/5 shrink-0">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-2xl font-heading font-bold tracking-tighter text-white"
                >
                  Zar<span className="text-gold">.</span>
                </a>
                <button
                  aria-label="Close navigation menu"
                  className="text-gold focus:outline-none p-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Centered links container */}
              <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 max-w-lg mx-auto w-full">
                <div className="grid grid-cols-2 gap-3 w-full">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className={`flex items-center space-x-3 text-sm py-3.5 px-4 rounded-xl border transition-all ${
                          isActive
                            ? "text-gold bg-gold/15 border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] font-bold"
                            : "text-white/70 bg-white/[0.02] border-white/5 hover:text-gold hover:bg-gold/5"
                        }`}
                      >
                        <span className="text-gold shrink-0">{link.icon}</span>
                        <span className="font-heading uppercase tracking-wider truncate">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
                
                {/* CTA inside menu */}
                <div className="w-full mt-6">
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="block bg-gradient-to-r from-gold to-premium text-dark font-bold py-4 rounded-xl text-center uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
