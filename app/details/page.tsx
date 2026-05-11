"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Award, Camera, ExternalLink } from "lucide-react";

export default function DetailsPage() {
  // State pengontrol tab aktif ('dokumentasi' atau 'sertifikat')
  const [activeTab, setActiveTab] = useState<"dokumentasi" | "sertifikat">(
    "dokumentasi",
  );

  // Data Dokumentasi (Foto kegiatan)
  const dokumentasi = [
    {
      title: "Dokumentasi Viral KKN",
      desc: "Di balik layar pembuatan konten video sinematik yang menembus 600.000+ views organik.",
      img: "/kkn2.png",
      category: "Content Strategy",
    },
    {
      title: "Coaching Taekwondo Visi Muda",
      desc: "Memimpin sesi latihan reguler dan mempersiapkan mental bertanding para atlet muda.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&q=80",
      category: "Leadership",
    },
    {
      title: "Pengembangan Sistem Dashboard",
      desc: "Merancang antarmuka sistem informasi manajemen dan visualisasi data statistik.",
      img: "/image.png",
      category: "Web Development",
    },
    {
      title: "Pembuatan Dashboard Kecamatan Pamulang",
      desc: "Sesi pemetaan alur kerja surat menyurat bersama staf untuk digitalisasi sistem.",
      img: "/pamulang.png",
      category: "Systems Analysis And Web Development",
    },
  ];

  // Data Sertifikat
  const sertifikat = [
    {
      title: "Kompetensi Web Development (Laravel)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP",
      year: "2025",
      img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80", // Placeholder gambar sertifikat
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

  // Varian animasi untuk efek menggeser (Slide Left / Slide Right)
  const slideVariants = {
    hidden: (isSertif: boolean) => ({
      x: isSertif ? 100 : -100, // Jika ke sertif, masuk dari kanan. Jika ke dok, masuk dari kiri.
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
    exit: (isSertif: boolean) => ({
      x: isSertif ? -100 : 100, // Tergeser keluar ke arah berlawanan
      opacity: 0,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <main className="bg-dark min-h-screen text-white overflow-x-hidden pb-24">
      {/* Tombol Kembali Melayang di Atas */}
      <div className="container mx-auto px-6 pt-10 max-w-7xl relative z-20">
        <a
          href="/#about"
          className="inline-flex items-center gap-2 text-gold hover:text-white bg-navy/50 border border-gold/20 px-5 py-2.5 rounded-full backdrop-blur-md transition-colors text-sm font-bold tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </a>
      </div>

      {/* Header Halaman */}
      <div className="container mx-auto px-6 pt-12 max-w-7xl text-center relative z-10">
        <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
          — REKAM JEJAK FISIK
        </h4>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10">
          Galeri <span className="text-gold">Kredibilitas</span>.
        </h1>

        {/* Tab Switcher (Tombol Penggeser) */}
        <div className="inline-flex p-1.5 bg-navy/50 border border-gold/20 rounded-2xl backdrop-blur-md mb-16 shadow-xl">
          <button
            onClick={() => setActiveTab("dokumentasi")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeTab === "dokumentasi"
                ? "bg-gold text-dark shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Camera size={18} />
            <span>Dokumentasi</span>
          </button>

          <button
            onClick={() => setActiveTab("sertifikat")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeTab === "sertifikat"
                ? "bg-gold text-dark shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Award size={18} />
            <span>Sertifikat</span>
          </button>
        </div>
      </div>

      {/* Area Konten Dinamis (Efek Slide/Tergeser) */}
      <div className="container mx-auto px-6 max-w-7xl min-h-[500px]">
        <AnimatePresence custom={activeTab === "sertifikat"} mode="wait">
          {/* ==================== HALAMAN DOKUMENTASI ==================== */}
          {activeTab === "dokumentasi" && (
            <motion.div
              key="dokumentasi"
              custom={false}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 gap-8"
            >
              {dokumentasi.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-navy/30 border border-gold/10 rounded-[2rem] overflow-hidden group hover:border-gold/40 transition-colors duration-300 backdrop-blur-sm flex flex-col"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-dark">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md text-gold border border-gold/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col grow justify-between">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ==================== HALAMAN SERTIFIKAT ==================== */}
          {activeTab === "sertifikat" && (
            <motion.div
              key="sertifikat"
              custom={true}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 gap-8"
            >
              {sertifikat.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-navy/40 to-dark border border-gold/20 rounded-[2rem] p-6 group hover:border-gold transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
                >
                  {/* Wadah Frame Gambar Sertifikat */}
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/5 bg-dark mb-6 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-shadow">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-dark/90 text-gold text-xs font-bold px-4 py-2 rounded-lg border border-gold/30 flex items-center gap-2 backdrop-blur-md">
                        <span>Terverifikasi</span>
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Keterangan Sertifikat */}
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
                      Penerbit:{" "}
                      <span className="text-slate-300">{item.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
