"use client";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  // 1. Kunci struktur dan tipe transisi menggunakan Variants resmi dari Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring", // Tipe ini sekarang aman dan dikenali penuh
      },
    },
  };

  return (
    <section className="py-24 bg-navy/20 border-y border-gold/10 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
            — KEAHLIAN & TEKNOLOGI
          </h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Alat yang <span className="text-gold">Membangun</span> & Bakat yang{" "}
            <span className="text-gold">Memimpin</span>.
          </h2>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {/* Kartu Web Dev */}
          <motion.div
            variants={itemVariants}
            className="bg-navy/40 p-8 rounded-3xl border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-colors"
          >
            <h3 className="text-xl font-heading font-bold mb-6 text-white tracking-wide">
              WEB DEVELOPMENT
            </h3>
            <div className="space-y-6">
              <SkillBar title="Laravel & PHP" percentage="90%" />
              <SkillBar title="React & Next.js" percentage="75%" />
              <SkillBar title="Tailwind CSS" percentage="85%" />
            </div>
          </motion.div>

          {/* Kartu Data Analysis */}
          <motion.div
            variants={itemVariants}
            className="bg-navy/40 p-8 rounded-3xl border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-colors"
          >
            <h3 className="text-xl font-heading font-bold mb-6 text-white tracking-wide">
              DATA ANALYSIS
            </h3>
            <div className="space-y-6">
              <SkillBar title="PostgreSQL & PostGIS" percentage="60%" />
              <SkillBar title="Tableau / Pentaho" percentage="50%" />
              <SkillBar title="Excel / Google Sheets" percentage="95%" />
            </div>
          </motion.div>

          {/* Kartu Leadership */}
          <motion.div
            variants={itemVariants}
            className="bg-navy/40 p-8 rounded-3xl border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-colors"
          >
            <h3 className="text-xl font-heading font-bold mb-6 text-white tracking-wide">
              LEADERSHIP & SPORTS
            </h3>
            <div className="space-y-6">
              <SkillBar title="Taekwondo Coaching" percentage="95%" />
              <SkillBar title="Club Management" percentage="90%" />
              <SkillBar title="Event Organizing (Try In)" percentage="88%" />
            </div>
          </motion.div>

          {/* Kartu BARU: Creative & Social Media */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-navy/40 to-gold/5 p-8 rounded-3xl border border-gold/30 backdrop-blur-sm hover:border-gold transition-colors relative overflow-hidden"
          >
            {/* Aksen bintang kecil di sudut untuk kartu kreatif */}
            <div className="absolute top-4 right-6 text-gold opacity-50">✦</div>
            <h3 className="text-xl font-heading font-bold mb-6 text-gold tracking-wide">
              CREATIVE & SOCIAL MEDIA
            </h3>
            <div className="space-y-6">
              <SkillBar title="Video Editing (CapCut)" percentage="90%" />
              <SkillBar
                title="Content Strategy (TikTok 600k+ Views)"
                percentage="95%"
              />
              <SkillBar title="Social Media Management (IG)" percentage="85%" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Komponen kecil untuk Bar Progress
function SkillBar({
  title,
  percentage,
}: {
  title: string;
  percentage: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-2 font-bold">
        <span className="text-slate-300">{title}</span>
        <span className="text-gold">{percentage}</span>
      </div>
      <div className="h-1.5 w-full bg-dark rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: percentage }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
        />
      </div>
    </div>
  );
}
