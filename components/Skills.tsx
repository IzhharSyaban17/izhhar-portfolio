"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Code2, BarChart3, Brain, Sword, Megaphone } from "lucide-react";
import { skillCategories as categories, iconSlugs } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BarChart3,
  Brain,
  Sword,
  Megaphone,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.3 },
  },
};

type Level = "Expert" | "Advanced" | "Intermediate";

const levelConfig: Record<Level, string> = {
  Expert: "level-expert",
  Advanced: "level-advanced",
  Intermediate: "level-intermediate",
};

function LevelChip({ level }: { level: Level }) {
  return (
    <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${levelConfig[level]}`}>
      {level}
    </span>
  );
}

export default function Skills() {
  const images = iconSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-dark border-y border-gold/10 overflow-hidden relative"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gold/[0.03] blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/[0.02] blur-[100px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] text-gold/30 font-heading font-semibold block mb-2 tracking-[0.25em]">02 // SKILLS</span>
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
            &mdash; TOOLKIT & EXPERTISE
          </h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Alat yang <span className="text-gold">Membangun</span> & Bakat yang{" "}
            <span className="text-gold">Memimpin</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-5"
          >
            {categories.map((cat, idx) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl glass glass-gold-hover transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-premium origin-left scroll-shine" />
                  <div className="absolute top-0 right-0 p-5 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <Icon size={80} />
                  </div>

                  <div className="p-5 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-gold/[0.08] border border-gold/20 text-gold">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-heading font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="space-y-3.5">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-slate-300 font-semibold truncate">
                              {skill.name}
                            </span>
                            <LevelChip level={skill.level} />
                          </div>
                          <div className="h-[3px] w-full bg-white/[0.04] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width:
                                  skill.level === "Expert"
                                    ? "92%"
                                    : skill.level === "Advanced"
                                    ? "78%"
                                    : "62%",
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: sIdx * 0.05, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-gold to-premium rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-heading font-bold text-white/5 select-none">
                  SKILLS
                </span>
              </div>
              <IconCloud images={images} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
