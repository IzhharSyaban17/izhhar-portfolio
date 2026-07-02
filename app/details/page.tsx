"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { Tabs } from "@/components/ui/aceternity/tabs";

const dokumentasiCards = [
  {
    title: "Dokumentasi Viral KKN",
    desc: "Di balik layar pembuatan konten video sinematik yang menembus 600.000+ views organik.",
    img: "/kkn2.png",
    category: "Content Strategy",
    alt: "KKN 2025 Behind the Scenes - Pembuatan konten video sinematik",
  },
  {
    title: "Coaching Taekwondo Visi Muda",
    desc: "Memimpin sesi latihan reguler dan mempersiapkan mental bertanding para atlet muda.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&q=80",
    category: "Leadership",
    alt: "Visi Muda Club Taekwondo - Dokumentasi latihan atlet taekwondo",
  },
  {
    title: "Pengembangan Sistem Dashboard",
    desc: "Merancang antarmuka sistem informasi manajemen dan visualisasi data statistik.",
    img: "/image.png",
    category: "Web Development",
    alt: "Web Development Project - Laravel React Full Stack Application",
  },
  {
    title: "Pembuatan Dashboard Kecamatan Pamulang",
    desc: "Sesi pemetaan alur kerja surat menyurat bersama staf untuk digitalisasi sistem.",
    img: "/pamulang.png",
    category: "Systems Analysis And Web Development",
    alt: "Dashboard Sistem Informasi Kecamatan Pamulang - Web Developer Project",
  },
];

const sertifikatCards = [
  {
    title: "Kompetensi Web Development (Laravel)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP",
    year: "2025",
    img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80",
  },
  {
    title: "Data Visualization & Analytics with Tableau",
    issuer: "Professional Tech Bootcamp",
    year: "2025",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
  },
  {
    title: "Sertifikasi Pelatih/Sabeum Taekwondo",
    issuer: "Pengurus Besar Taekwondo Indonesia (PBTI)",
    year: "2024",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80",
  },
  {
    title: "Advanced Database Management (PostgreSQL)",
    issuer: "Tech Academy",
    year: "2024",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
];

export default function DetailsPage() {
  const tabs = [
    {
      title: "Dokumentasi",
      value: "dokumentasi",
      content: (
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {dokumentasiCards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-navy/30 border border-gold/10 rounded-[2rem] overflow-hidden group hover:border-gold/40 transition-colors duration-300 backdrop-blur-sm flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden bg-dark">
                <Image
                  src={item.img}
                  alt={item.alt || ""}
                  width={600}
                  height={400}
                  loading="lazy"
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md text-gold border border-gold/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
              <div className="p-8 flex flex-col grow justify-between">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: "Sertifikat",
      value: "sertifikat",
      content: (
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {sertifikatCards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-navy/40 to-dark border border-gold/20 rounded-[2rem] p-6 group hover:border-gold transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/5 bg-dark mb-6 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-shadow">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-dark/90 text-gold text-xs font-bold px-4 py-2 rounded-lg border border-gold/30 flex items-center gap-2 backdrop-blur-md">
                    <span>Terverifikasi</span>
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <span className="bg-gold/10 text-gold border border-gold/20 font-bold text-xs px-2.5 py-1 rounded-md shrink-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs font-medium tracking-wide uppercase text-slate-400">
                  Penerbit: <span className="text-slate-300">{item.issuer}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <main className="bg-dark min-h-screen text-white overflow-x-hidden pb-24">
      <div className="container mx-auto px-6 pt-10 max-w-7xl relative z-20">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-gold hover:text-white bg-navy/50 border border-gold/20 px-5 py-2.5 rounded-full backdrop-blur-md transition-colors text-sm font-bold tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 pt-12 max-w-7xl text-center relative z-10">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#d4af37" />
        <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
          — REKAM JEJAK FISIK
        </h4>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10">
          Galeri <span className="text-gold">Kredibilitas</span>.
        </h1>

        <div className="flex justify-center mb-12">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
