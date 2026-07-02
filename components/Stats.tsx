"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Briefcase, Eye, Code2, Calendar } from "lucide-react";

const stats = [
  {
    value: 6,
    suffix: "",
    label: "Projects Completed",
    icon: Briefcase,
  },
  {
    value: 600,
    suffix: "K+",
    label: "TikTok Views",
    icon: Eye,
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
    icon: Code2,
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Active",
    icon: Calendar,
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden bg-dark"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">
            &mdash; METRICS & IMPACT
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Dampak dalam <span className="text-gold">Angka</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl glass glass-hover transition-all duration-500 p-6 md:p-8 flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-premium origin-left scroll-shine" />
                <div className="p-2.5 rounded-xl bg-gold/[0.06] border border-gold/20 text-gold/60 group-hover:text-gold transition-colors mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 flex items-baseline">
                  <NumberTicker
                    value={stat.value}
                    className="text-white font-heading"
                  />
                  <span className="text-gold ml-0.5">{stat.suffix}</span>
                </div>
                <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
