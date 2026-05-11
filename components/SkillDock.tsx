"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SkillDock() {
  const categories = [
    {
      title: "Full-Stack Development",
      description:
        "Membangun sistem informasi dan manajemen yang kokoh, dari perancangan database hingga antarmuka responsif yang elegan.",
      logos: [
        {
          name: "Laravel",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "PHP",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          name: "Tailwind",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        { name: "GitHub", src: "https://cdn.simpleicons.org/github/white" },
      ],
    },
    {
      title: "Data & Systems Analysis",
      description:
        "Mengolah data mentah menjadi wawasan strategis. Menganalisis alur kerja birokrasi dan mendigitalkannya menjadi sistem yang efisien.",
      logos: [
        {
          name: "PostgreSQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Tableau",
          src: "https://api.iconify.design/logos:tableau.svg",
        },
        {
          name: "Excel",
          src: "https://api.iconify.design/vscode-icons:file-type-excel.svg",
        },
        {
          name: "Google Sheets",
          src: "https://cdn.simpleicons.org/googlesheets/34A853",
        },
      ],
    },
    {
      title: "Creative & Content Strategy",
      description:
        "Mengeksekusi desain visual dan strategi media sosial. Pernah meraih 600.000+ views organik untuk campaign digital KKN dan mengelola engagement audiens.",
      logos: [
        {
          name: "CapCut",
          src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg",
        },
        { name: "TikTok", src: "https://cdn.simpleicons.org/tiktok/white" },
        {
          name: "Instagram",
          src: "https://cdn.simpleicons.org/instagram/white",
        },
        { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E" },
      ],
    },
  ];

  return (
    <div className="w-full py-24 bg-dark relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">
            Tech, Data & Creative Stack
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Arsenal <span className="text-gold">Digital</span> Saya.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-navy/40 backdrop-blur-sm border border-gold/20 rounded-[2rem] p-8 hover:border-gold/50 hover:bg-navy/60 transition-all duration-300 flex flex-col h-full group shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              {/* Tempat Menampilkan Logo-logo dalam satu kategori */}
              <div className="flex flex-wrap gap-4 mb-8">
                {category.logos.map((logo, logoIdx) => (
                  <div key={logoIdx} className="relative group/logo">
                    <div className="w-14 h-14 bg-dark/80 border border-gold/10 rounded-xl p-3 flex items-center justify-center transition-transform duration-300 group-hover/logo:-translate-y-2 shadow-lg">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Tooltip nama aplikasi */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-dark text-gold font-bold px-2 py-1 rounded opacity-0 group-hover/logo:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tempat Menjelaskan Keahlian */}
              <div className="mt-auto">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
