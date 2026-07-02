"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { BorderBeam } from "@/components/ui/border-beam";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { heroTabs, personalInfo, stats } from "@/data/personal";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"developer" | "taekwondo">(
    "developer",
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const currentTab = heroTabs.find((t) => t.id === activeTab)!;
  const categoryMap: Record<string, "dev" | "tkd"> = {
    developer: "dev",
    taekwondo: "tkd",
  };
  const currentStats = stats.filter(
    (s) => s.category === categoryMap[activeTab] || s.category === "all",
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#d4af37"
      />
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <RetroGrid
          angle={65}
          cellSize={60}
          opacity={0.15}
          lightLineColor="#d4af37"
          darkLineColor="#d4af37"
        />
      </motion.div>
      <BackgroundBeams className="opacity-30" />

      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark pointer-events-none z-[2]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
              >
                &mdash; {personalInfo.tagline}
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>
                  <SparklesText
                    colors={{ first: "#d4af37", second: "#c5a028" }}
                    sparklesCount={8}
                    className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-left"
                  >
                    Muhammad Izhhar
                    <br />
                    Sya&apos;ban Lubis
                  </SparklesText>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-2 mt-8"
              >
                {heroTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                      activeTab === tab.id
                        ? "bg-gold text-dark shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        : "border border-gold/30 text-gold/70 hover:border-gold/60 hover:text-gold",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="mt-6"
                  >
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-2">
                      <span className="text-gold font-bold text-[10px] uppercase tracking-widest">
                        &#10022; {currentTab.badge}
                      </span>
                    </div>
                    <WordRotate
                      words={currentTab.rotatingWords}
                      duration={3000}
                      className="text-xl md:text-2xl font-heading font-bold text-gold tracking-wide text-left"
                    />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-6 text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed text-left"
                  >
                    {currentTab.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="mt-8 flex flex-wrap items-center gap-5"
                  >
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      {currentStats.map((stat, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {stat.value}
                          {stat.suffix} {stat.label}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    {currentTab.cta.map((btn, i) =>
                      i === 0 ? (
                        <a
                          key={i}
                          href={btn.href}
                          className="bg-gradient-to-r from-gold to-premium text-dark font-bold px-6 py-3 rounded-full text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                        >
                          {btn.label}
                        </a>
                      ) : (
                        <a
                          key={i}
                          href={btn.href}
                          className="border border-gold/40 text-gold font-bold px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-gold/10 transition-all"
                        >
                          {btn.label}
                        </a>
                      ),
                    )}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{ y: photoY, opacity: photoOpacity }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className="relative overflow-hidden rounded-2xl glass-gold p-3 md:p-4"
                  style={{ rotate: "2deg" }}
                >
                  <BorderBeam
                    size={120}
                    duration={8}
                    delay={0}
                    colorFrom="#d4af37"
                    colorTo="#c5a028"
                    borderWidth={1.5}
                  />
                  <div
                    className="relative overflow-hidden rounded-xl bg-dark"
                    style={{
                      clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
                    }}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Muhammad Izhhar Sya'ban Lubis - Web Developer & Taekwondo Coach"
                      width={320}
                      height={384}
                      unoptimized
                      className="w-72 h-80 md:w-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-3 md:mt-4 text-center">
                    <span className="text-xs text-slate-400 font-heading tracking-widest">
                      {activeTab === "developer"
                        ? "\u201CCode. Analyze. Innovate.\u201D"
                        : "\u201CDiscipline. Lead. Compete.\u201D"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
