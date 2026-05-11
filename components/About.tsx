"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bagian Kiri: Kartu Identitas Ganda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-navy/30 p-8 md:p-12 rounded-[2rem] border border-gold/10 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-8xl font-heading font-bold opacity-5 text-gold">
                About
              </span>
            </div>

            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 italic">
              — TENTANG SAYA
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-white">
              Logika <span className="text-gold">Terstruktur</span> <br />{" "}
              Bertemu <span className="text-white">Energi Disiplin</span>.
            </h2>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-dark/80 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors group">
                <GraduationCap className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-sm text-white">UIN JAKARTA</h5>
                <p className="text-xs text-slate-400">Sistem Informasi</p>
              </div>
              <div className="bg-dark/80 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors group">
                <Code className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-sm text-white">WEB DEV</h5>
                <p className="text-xs text-slate-400">Laravel & Data</p>
              </div>
              <div className="bg-dark/80 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors group">
                <Trophy className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-sm text-white">TAEKWONDO</h5>
                <p className="text-xs text-slate-400">Sabeum / Pelatih</p>
              </div>
              <div className="bg-dark/80 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors group">
                <Users className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-sm text-white">VISI MUDA</h5>
                <p className="text-xs text-slate-400">Manajer Klub</p>
              </div>
            </div>
          </motion.div>

          {/* Bagian Kanan: Narasi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Saya adalah mahasiswa Sistem Informasi yang membangun karir di
              atas dua pilar utama: penguasaan teknis dan kepemimpinan manusia.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Di siang hari, saya merancang sistem web dan mengubah data mentah
              menjadi wawasan menggunakan{" "}
              <span className="text-gold font-medium">
                Laravel, React, dan Analisis data
              </span>
              . Di sore hari, saya memimpin generasi atlet berikutnya dan
              mengelola jalannya{" "}
              <span className="text-gold font-medium">Visi Muda Club</span>.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-2 bg-gradient-to-r from-gold/5 to-transparent rounded-r-xl">
              <p className="italic text-xl text-white font-heading">
                "Dualitas ini bukan kontradiksi—kedisiplinan Taekwondo
                mempertajam fokus kode saya, dan logika sistem menjadikan saya
                pemimpin yang lebih strategis."
              </p>
            </blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="/details" // Mengarah ke halaman baru
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-premium text-dark font-bold px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Ketahui Saya Lebih Banyak</span>
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
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
