"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Carousel, Card } from "@/components/ui/aceternity/apple-cards-carousel";
import { gallery } from "@/data/personal";

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const cards = gallery.map((item, index) => (
    <Card
      key={item.src}
      card={{
        src: item.src,
        title: item.title,
        category: item.category,
        content: (
          <div className="p-4 md:p-8">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        ),
      }}
      index={index}
      layout
    />
  ));

  return (
    <section
      id="gallery"
      ref={sectionRef}
      aria-label="Gallery Dokumentasi"
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
            &mdash; DOKUMENTASI
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Jejak Visual <span className="text-gold">Saya</span>.
          </h2>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}
