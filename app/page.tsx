// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import SkillDock from "@/components/SkillDock"; // Kita akan buat ini

export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white scroll-smooth relative overflow-x-hidden">
      <Navbar /> {/* Navbar utama tetap di atas */}
      <div id="home">
        <Hero />
      </div>
      <About />
      <div id="skills">
        <Skills />
        {/* Letakkan SkillDock di bawah komponen Skills */}
        <SkillDock />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
