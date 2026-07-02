"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Code,
  Trophy,
  Users,
  Sword,
  Laptop,
} from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { aboutCards, personalInfo, heroTabs } from "@/data/personal";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Code,
  Trophy,
  Users,
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const developerCards = aboutCards.slice(0, 2);
  const taekwondoCards = aboutCards.slice(2);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-dark relative overflow-hidden"
    >
      <motion.div style={{ y: bgY }}>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.04}
          duration={3}
          className="fill-gold/20 stroke-gold/20"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 italic">
            &mdash; ABOUT ME
          </h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight text-white">
            Logika <span className="text-gold">Terstruktur</span> <br /> Bertemu{" "}
            <span className="text-white">Energi Disiplin</span>.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {personalInfo.bioShort}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] glass-gold p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 p-8 hidden md:block">
              <Code className="w-24 h-24 text-gold opacity-5" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <Laptop className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Developer
                </h3>
                <p className="text-xs text-gold uppercase tracking-widest">
                  Tech Stack &amp; Tools
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
              {heroTabs[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {developerCards.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="relative overflow-hidden rounded-2xl glass-inner hover:border-gold/30 transition-all duration-300 group cursor-default p-5"
                  >
                    {Icon && (
                      <Icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <h5 className="font-bold text-sm text-white">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] glass-gold p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 p-8 hidden md:block">
              <Trophy className="w-24 h-24 text-gold opacity-5" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <Sword className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Taekwondoin
                </h3>
                <p className="text-xs text-gold uppercase tracking-widest">
                  Coaching &amp; Leadership
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
              {heroTabs[1].description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {taekwondoCards.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="relative overflow-hidden rounded-2xl glass-inner hover:border-gold/30 transition-all duration-300 group cursor-default p-5"
                  >
                    {Icon && (
                      <Icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <h5 className="font-bold text-sm text-white">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-300 leading-relaxed mb-6 text-center">
            {personalInfo.bioParagraphs[0]}
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 text-center">
            {personalInfo.bioParagraphs[1]}
          </p>

          <div className="relative rounded-xl mb-8">
            <ShineBorder
              shineColor={["#d4af37", "#c5a028", "#ffd700"]}
              borderWidth={1.5}
              duration={14}
            />
            <blockquote className="border-l-4 border-gold pl-6 py-4 pr-4 bg-gradient-to-r from-gold/8 to-transparent rounded-r-xl relative z-10">
              <p className="italic text-xl text-white font-heading leading-relaxed">
                &ldquo;{personalInfo.quote.replace(/^"|"$/g, "")}&rdquo;
              </p>
            </blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-2 text-center"
          >
            <a
              href="/details"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-premium text-dark font-bold px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <span>Know me more</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
