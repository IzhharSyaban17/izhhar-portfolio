"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  FileText,
  ArrowUpRight,
  Eye,
  Heart,
  Users,
  PlaySquare,
} from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"tiktok" | "instagram">("tiktok");

  return (
    <section id="projects" className="py-24 bg-dark relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* =========================================
            BAGIAN 1: PROYEK SISTEM INFORMASI (IT)
        ============================================= */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left" // Memastikan selalu rata kiri
          >
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-2 lg:mb-4">
              — KARYA TERPILIH
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Sistem yang <span className="text-gold">Bekerja</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // Di HP: mt-2 agar jaraknya pas di bawah judul. Di PC: max-w-sm dan rata kanan/kiri menyesuaikan.
            className="text-slate-400 max-w-full lg:max-w-sm text-sm sm:text-base text-left mt-2 lg:mt-0 leading-relaxed"
          >
            Solusi digital berupa perancangan dan pengembangan aplikasi berbasis
            website.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* Project 1: Taekwondo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="bg-navy/20 group rounded-[2.5rem] overflow-hidden border border-gold/20 hover:border-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-premium transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-dark rounded-2xl text-gold border border-gold/30 group-hover:bg-gold group-hover:text-dark transition duration-300">
                  <Server size={32} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                  FULL STACK
                </span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-gold transition">
                Sistem Informasi Manajemen Klub Taekwondo
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
                Platform terintegrasi untuk mengelola data atlet, memantau
                jadwal latihan reguler, melacak progres kenaikan sabuk, hingga
                manajemen turnamen.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["LARAVEL", "PHP", "MYSQL", "TAILWIND"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark rounded-full text-[10px] border border-gold/40 text-gold font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://tkd-visimuda.web.id/"
                className="inline-flex items-center text-sm font-bold text-gold group/link"
              >
                Lihat Detail{" "}
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
              </a>
            </div>
          </motion.div>

          {/* Project 2: Surat Pamulang */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.2 }}
            className="bg-navy/20 group rounded-[2.5rem] overflow-hidden border border-gold/20 hover:border-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-premium transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-dark rounded-2xl text-gold border border-gold/30 group-hover:bg-gold group-hover:text-dark transition duration-300">
                  <FileText size={32} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                  SYSTEM ANALYSIS
                </span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-gold transition">
                Sistem Surat Keluar/Masuk Berbasis Website
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
                Analisis dan perancangan sistem korespondensi digital untuk
                Kecamatan Pamulang guna menggantikan alur kerja berbasis kertas
                dengan manajemen akses.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["ANALYSIS", "UML", "PHP", "MYSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark rounded-full text-[10px] border border-gold/40 text-gold font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://drive.google.com/file/d/1Z5yE2341WRdEbrzfR3J7VciwV9GCzEHB/view?usp=sharing"
                className="inline-flex items-center text-sm font-bold text-gold group/link"
              >
                Baca Laporan{" "}
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BAGIAN 2: SOSIAL MEDIA & CREATIVE
        ============================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gold/10"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              — STRATEGI KONTEN
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Engagement yang <span className="text-gold">Nyata</span>.
            </h2>

            <div className="flex space-x-4 bg-navy/30 p-2 rounded-2xl border border-gold/20 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("tiktok")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "tiktok" ? "bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "text-white hover:text-gold"}`}
              >
                <img
                  src="https://cdn.simpleicons.org/tiktok/currentColor"
                  alt="TikTok"
                  className="w-5 h-5"
                />
                <span>TikTok</span>
              </button>
              <button
                onClick={() => setActiveTab("instagram")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === "instagram" ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-[0_0_15px_rgba(253,29,29,0.4)]" : "text-white hover:text-gold"}`}
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/currentColor"
                  alt="Instagram"
                  className="w-5 h-5"
                />
                <span>Instagram</span>
              </button>
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* TIKTOK CONTENT */}
              {activeTab === "tiktok" && (
                <motion.div
                  key="tiktok"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Akun PDD TikTok (Dibuat menjadi Link) */}
                  <a
                    href="https://www.tiktok.com/@kkn.nadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-navy/40 to-dark p-8 rounded-[2rem] border border-gold/20 hover:border-gold transition relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition">
                      <PlaySquare size={150} />
                    </div>
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="bg-gold text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Akun PDD (KKN)
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-gold transition-colors">
                      Dokumentasi KKN{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                      Strategi eksekusi konten viral. Menggabungkan tren *sound*
                      FYP dengan dokumentasi kegiatan sosial secara sinematik
                      menggunakan CapCut.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-dark/50 border border-gold/10 p-4 rounded-xl">
                        <Eye className="text-gold mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          600K+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Total Views
                        </p>
                      </div>
                      <div className="bg-dark/50 border border-gold/10 p-4 rounded-xl">
                        <Heart className="text-gold mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          Viral
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Engagement
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Akun Utama TikTok (Dibuat menjadi Link) */}
                  <a
                    href="https://www.tiktok.com/@ijaarajaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-navy/20 p-8 rounded-[2rem] border border-slate-700 hover:border-gold transition relative overflow-hidden group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="bg-slate-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Akun Utama
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-gold transition-colors">
                      Personal Branding{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                      Fokus pada pembentukan identitas visual sebagai
                      *Developer* sekaligus *Taekwondo Coach*, menyajikan konten
                      yang rapi dan berkarakter.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-dark/50 border border-slate-700 p-4 rounded-xl">
                        <Users className="text-white mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          200+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Followers
                        </p>
                      </div>
                      <div className="bg-dark/50 border border-slate-700 p-4 rounded-xl">
                        <Heart className="text-white mb-2" size={24} />
                        <h4 className="text-3xl font-bold text-white mb-1">
                          3.000+
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                          Total Likes
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              )}

              {/* INSTAGRAM CONTENT */}
              {activeTab === "instagram" && (
                <motion.div
                  key="instagram"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Akun Utama IG (Dibuat menjadi Link) */}
                  <a
                    href="https://www.instagram.com/iz_sybn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-navy/20 p-8 rounded-[2rem] border border-slate-700 hover:border-pink-500/50 transition relative overflow-hidden group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="bg-slate-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Akun Utama
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-pink-400 transition-colors">
                      Aesthetic Feed{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                      Menampilkan Keaktifan pada bidang olahraga Taekwondo
                      dengan estetika visual yang konsisten, menggunakan palet
                      warna gelap dan tata letak yang rapi untuk menciptakan
                      identitas yang kuat.
                    </p>
                    <div className="bg-dark/50 border border-slate-700 p-6 rounded-xl flex justify-between items-center group-hover:border-pink-500/30 transition-colors">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Portfolio & Life
                        </h4>
                        <p className="text-xs text-slate-400">
                          Desain Feeds & Story
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center p-0.5">
                        <div className="w-full h-full bg-dark rounded-full border-2 border-dark"></div>
                      </div>
                    </div>
                  </a>

                  {/* Akun PDD IG (Dibuat menjadi Link) */}
                  <a
                    href="https://www.instagram.com/kkn.nadi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-navy/40 to-dark p-8 rounded-[2rem] border border-pink-500/30 hover:border-pink-500 transition relative overflow-hidden group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Akun PDD (KKN)
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 flex items-center group-hover:text-pink-400 transition-colors">
                      Desain Feeds Campaign{" "}
                      <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                      Manajemen publikasi digital harian. Membuat konten
                      *carousel* interaktif dan *Reels* untuk merangkum agenda
                      KKN kepada khalayak publik.
                    </p>
                    <div className="bg-dark/50 border border-pink-500/20 p-6 rounded-xl flex justify-between items-center group-hover:bg-pink-500/10 transition-colors">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Visual Storytelling
                        </h4>
                        <p className="text-xs text-slate-400">
                          Carousel & Copywriting
                        </p>
                      </div>
                      <FileText className="text-pink-500" size={32} />
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
