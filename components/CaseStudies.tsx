"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Server, FileText, CalendarCheck, UtensilsCrossed, Building2, ShoppingCart } from "lucide-react";

const caseStudies = [
  {
    title: "VisiMudaClub",
    tag: "FULL STACK",
    problem: "Klub Taekwondo masih menggunakan pencatatan manual untuk data atlet, jadwal latihan, progres kenaikan sabuk, dan pendaftaran turnamen — rawan kesalahan dan tidak real-time.",
    solution: "Membangun platform monolitik dengan arsitektur MVC Laravel yang mengintegrasikan manajemen atlet, jadwal latihan otomatis, sistem tracking progres sabuk berbasis poin, dan portal pendaftaran turnamen.",
    techStack: ["LARAVEL", "PHP", "MYSQL", "TAILWIND"],
    result: "Digitalisasi penuh operasional klub. Pelacakan progres atlet secara real-time, pengurangan beban admin hingga 70%, dan histori kenaikan sabuk terdokumentasi rapi.",
    href: "https://tkd-visimuda.web.id/",
    icon: Server,
    accent: "border-gold/20 hover:border-gold/50",
    iconColor: "text-gold",
  },
  {
    title: "Appointment Dokter Gigi",
    tag: "FULL STACK",
    problem: "Klinik gigi kesulitan mengelola jadwal pasien yang sering bentrok, antrean panjang, dan tidak ada sistem reminder yang menyebabkan banyak no-show.",
    solution: "Sistem booking online dengan visualisasi slot dokter real-time, fitur reminder otomatis via WhatsApp, dan dashboard manajemen jadwal untuk admin klinik.",
    techStack: ["LARAVEL", "PHP", "MYSQL", "BOOTSTRAP"],
    result: "Mengurangi no-show rate, pasien dapat booking 24/7 tanpa telepon, dan admin memiliki kontrol penuh atas jadwal melalui dashboard terpusat.",
    href: "#",
    icon: CalendarCheck,
    accent: "border-emerald-500/20 hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
  },
  {
    title: "Catering Automation",
    tag: "FULL STACK",
    problem: "Proses pemesanan catering masih melalui telepon/WA, menu tidak terstandarisasi, stok bahan tidak terkontrol, dan laporan keuangan dikerjakan manual.",
    solution: "Otomasi alur pemesanan dari katalog menu digital hingga konfirmasi. Integrasi manajemen stok bahan baku, produksi harian, dan laporan laba-rugi otomatis.",
    techStack: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    result: "Waktu pemrosesan pesanan turun 60%, inventaris bahan baku terpantau real-time, dan laporan keuangan siap setiap akhir hari tanpa perhitungan manual.",
    href: "#",
    icon: UtensilsCrossed,
    accent: "border-orange-500/20 hover:border-orange-500/50",
    iconColor: "text-orange-400",
  },
  {
    title: "VendorManagement",
    tag: "FULL STACK",
    problem: "Perusahaan kesulitan melacak data vendor, riwayat kontrak, dan performa pemasok karena tersebar di spreadsheet dan dokumen fisik.",
    solution: "Sistem terpusat untuk manajemen data vendor, pembuatan purchase order digital, pelacakan kontrak aktif, dan dashboard evaluasi kinerja vendor.",
    techStack: ["LARAVEL", "VUE", "MYSQL", "TAILWIND"],
    result: "Data vendor tersentralisasi, proses procurement 3x lebih cepat, dan keputusan pengadaan didukung data performa vendor yang objektif.",
    href: "#",
    icon: Building2,
    accent: "border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    title: "Tokoonline & ERP Penjualaan",
    tag: "ERP + E-COMMERCE",
    problem: "Toko offline ingin go-digital tetapi harus tetap sinkron dengan stok fisik, pencatatan penjualan, dan akuntansi yang selama ini terpisah.",
    solution: "E-commerce terintegrasi dengan modul ERP: manajemen produk multi-kategori, sinkronisasi stok real-time, sistem pembayaran, dan laporan analitik penjualan.",
    techStack: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    result: "Satu platform untuk toko online dan manajemen internal. Stok selalu sinkron, laporan penjualan otomatis, dan omzet terdokumentasi dalam sistem akuntansi terpadu.",
    href: "#",
    icon: ShoppingCart,
    accent: "border-purple-500/20 hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    title: "Sistem Surat Keluar/Masuk",
    tag: "SYSTEM ANALYSIS",
    problem: "Kecamatan Pamulang masih menggunakan buku agenda fisik untuk mencatat surat masuk/keluar, menyebabkan pencarian dokumen lambat dan risiko kehilangan data.",
    solution: "Perancangan sistem korespondensi digital dengan UML (use case, activity, sequence diagram) dan implementasi berbasis web untuk manajemen surat, disposisi, dan arsip.",
    techStack: ["ANALYSIS", "UML", "PHP", "MYSQL"],
    result: "Dokumen perancangan sistem siap implementasi. Proses pencarian surat dari jam menjadi detik, riwayat disposisi tercatat otomatis, dan arsip digital aman.",
    href: "https://drive.google.com/file/d/1Z5yE2341WRdEbrzfR3J7VciwV9GCzEHB/view?usp=sharing",
    icon: FileText,
    accent: "border-cyan-500/20 hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 bg-dark relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
            &mdash; CASE STUDIES
          </h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
            Proses di Balik <span className="text-gold">Setiap Sistem</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Bukan sekadar kode jadi &mdash; setiap proyek adalah cerita tentang
            masalah nyata yang dipecahkan dengan arsitektur dan logika.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.3, delay: idx * 0.08 }}
                className={`group relative overflow-hidden rounded-[2rem] glass transition-all duration-500 ${study.accent}`}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-premium origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 glass-inner rounded-2xl ${study.accent} ${study.iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/10 text-white/60">
                      {study.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1.5">
                        &#9655; Problem
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1.5">
                        &#9655; Solution
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1.5">
                        &#9655; Result
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 my-5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 glass-inner rounded-full text-[9px] text-slate-500 font-bold tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={study.href}
                    target={study.href !== "#" ? "_blank" : undefined}
                    rel={study.href !== "#" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-sm font-bold text-gold group/link mt-auto"
                  >
                    Detail Proyek{" "}
                    <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
