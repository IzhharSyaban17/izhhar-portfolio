"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, Eye, Heart, Users,
  PlaySquare, Server, FileText, CalendarCheck, UtensilsCrossed, Building2, ShoppingCart,
} from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { projects } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  Server,
  FileText,
  CalendarCheck,
  UtensilsCrossed,
  Building2,
  ShoppingCart,
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"tiktok" | "instagram">("tiktok");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-dark relative z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 -right-40 w-80 h-80 bg-gold/[0.02] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-2 lg:mb-4">
              &mdash; SELECTED WORKS
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Sistem yang <span className="text-gold">Bekerja</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-full lg:max-w-sm text-sm sm:text-base text-left mt-2 lg:mt-0 leading-relaxed"
          >
            Solusi digital berupa perancangan dan pengembangan aplikasi berbasis
            website.
          </motion.p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.3, delay: idx * 0.1 }}
              className={`group relative col-span-1 overflow-hidden rounded-[2rem] glass transition-all duration-500 ${project.accent}`}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-premium origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3.5 glass-inner rounded-2xl ${project.accent} transition duration-300 ${project.iconBg}`}
                  >
                    {(() => {
                      const Icon = iconMap[project.icon];
                      return Icon ? <Icon size={28} /> : null;
                    })()}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${project.labelColor}`}
                  >
                    {project.label}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 glass-inner rounded-full text-[10px] text-slate-300 font-bold tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-gold group/link mt-auto"
                >
                  {project.cta || "Lihat Detail"}{" "}
                  <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-16 mt-16 border-t border-gold/10"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              &mdash; CONTENT STRATEGY
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Engagement yang <span className="text-gold">Nyata</span>.
            </h2>

            <div className="flex space-x-4 glass rounded-2xl p-2">
              <button
                onClick={() => setActiveTab("tiktok")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "tiktok" ? "bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "text-white hover:text-gold"}`}
              >
                <Image
                  src="https://cdn.simpleicons.org/tiktok/currentColor"
                  alt="TikTok"
                  width={20}
                  height={20}
                  loading="lazy"
                  unoptimized
                  className="w-5 h-5"
                />
                <span>TikTok</span>
              </button>
              <button
                onClick={() => setActiveTab("instagram")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "instagram" ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-[0_0_15px_rgba(253,29,29,0.4)]" : "text-white hover:text-gold"}`}
              >
                <Image
                  src="https://cdn.simpleicons.org/instagram/currentColor"
                  alt="Instagram"
                  width={20}
                  height={20}
                  loading="lazy"
                  unoptimized
                  className="w-5 h-5"
                />
                <span>Instagram</span>
              </button>
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "tiktok" && (
                <motion.div
                  key="tiktok"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <a
                    href="https://www.tiktok.com/@kkn.nadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-[2rem] glass-gold glass-gold-hover group cursor-pointer p-8"
                  >
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition">
                      <PlaySquare size={150} />
                    </div>
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                      <span className="bg-gold text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        PDD Account (KKN)
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-gold transition-colors relative z-10">
                      KKN Documentation{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">
                      Viral content execution strategy. Blending FYP sound trends
                      with cinematic social documentation using CapCut.
                    </p>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <div className="glass-inner p-4 rounded-xl">
                        <Eye className="text-gold mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          600K+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Total Views
                        </p>
                      </div>
                      <div className="glass-inner p-4 rounded-xl">
                        <Heart className="text-gold mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          Viral
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Engagement
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@ijaarajaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-[2rem] glass glass-hover group cursor-pointer p-8"
                  >
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                      <span className="bg-slate-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Main Account
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-gold transition-colors relative z-10">
                      Personal Branding{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">
                      Focused on building a visual identity as a Developer and
                      Taekwondo Coach, delivering clean, character-driven content.
                    </p>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <div className="glass-inner p-4 rounded-xl">
                        <Users className="text-white mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          200+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Followers
                        </p>
                      </div>
                      <div className="glass-inner p-4 rounded-xl">
                        <Heart className="text-white mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          3.000+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Total Likes
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              )}

              {activeTab === "instagram" && (
                <motion.div
                  key="instagram"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <a
                    href="https://www.instagram.com/iz_sybn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-[2rem] glass glass-hover group cursor-pointer p-8"
                  >
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                      <span className="bg-slate-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Main Account
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-pink-400 transition-colors relative z-10">
                      Aesthetic Feed{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">
                      Showcasing active involvement in Taekwondo with consistent
                      visual aesthetics, dark palettes, and clean layouts for a
                      strong identity.
                    </p>
                    <div className="glass-inner p-6 rounded-xl flex justify-between items-center group-hover:border-pink-500/30 transition-colors relative z-10">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Portfolio & Life
                        </h4>
                        <p className="text-xs text-slate-400">
                          Feed & Story Design
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center p-0.5">
                        <div className="w-full h-full bg-dark rounded-full border-2 border-dark"></div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/kkn.nadi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-[2rem] glass-gold glass-gold-hover group cursor-pointer p-8"
                  >
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                      <span className="bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        PDD Account (KKN)
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-pink-400 transition-colors relative z-10">
                      Feed Campaign Design{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10">
                      Daily digital publication management. Creating interactive
                      carousel content and Reels to summarize community service
                      agendas for the public.
                    </p>
                    <div className="glass-inner p-6 rounded-xl flex justify-between items-center group-hover:bg-pink-500/10 transition-colors relative z-10">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Visual Storytelling
                        </h4>
                        <p className="text-xs text-slate-400">
                          Carousel & Copywriting
                        </p>
                      </div>
                      <FileText className="text-pink-500" size={32} />
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
