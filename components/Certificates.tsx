"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { certificates } from "@/data/personal";

export default function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      aria-label="Sertifikasi dan Kredibilitas"
      className="py-24 bg-dark relative z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 -left-40 w-80 h-80 bg-gold/[0.02] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left mb-4"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-2 lg:mb-4">
            &mdash; SERTIFIKASI
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Kredibilitas <span className="text-gold">Terverifikasi</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gold/[0.08] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full overflow-hidden bg-navy/30 border border-gold/10 group-hover:border-gold/30 relative z-20 transition-colors duration-300">
                <div className="relative z-50 p-4 flex flex-col h-full">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-dark/50">
                    <Image
                      src={cert.image}
                      alt={`Sertifikat ${cert.title} - ${cert.issuer} ${cert.year}`}
                      width={400}
                      height={300}
                      loading="lazy"
                      unoptimized
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="text-white font-bold tracking-wide mt-2">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-slate-400 tracking-wide leading-relaxed text-sm flex-grow">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
