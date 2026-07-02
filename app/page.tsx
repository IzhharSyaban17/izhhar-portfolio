import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white scroll-smooth relative overflow-x-hidden">
      <JsonLd />
      <Navbar />
      <div id="home"><Hero /></div>
      <Stats />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="gallery"><Gallery /></div>
      <div id="certificates"><Certificates /></div>
      <div id="work"><CaseStudies /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}
