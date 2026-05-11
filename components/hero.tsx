"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&q=80",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // State untuk mendeteksi apakah layar HP/Tablet (< 1024px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize(); // Cek saat pertama kali load
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 1. Setup Framer Motion Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // =========================================================================
  // 2. LOGIKA ANIMASI RESPONSIF (TERLAMBAT DI HP, CEPAT DI PC)
  // =========================================================================

  // Teks Kiri (Nama):
  // Di PC mulai dari 0. Di HP mulai bergeser dari 0.3 (menunggu foto ter-scroll)
  const textLeftX = useTransform(
    scrollYProgress,
    isMobile ? [0.3, 0.8] : [0, 0.5],
    isMobile ? [0, -150] : [0, -300], // Geser lebih sedikit di HP agar tidak meluber
  );
  const textLeftOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.3, 0.7] : [0, 0.4],
    [1, 0],
  );

  // Teks Kanan (Deskripsi Mahasiswa):
  // Di HP posisinya paling bawah, jadi kita tunda lebih lama lagi (mulai 0.4)
  const textRightX = useTransform(
    scrollYProgress,
    isMobile ? [0.4, 0.9] : [0, 0.5],
    isMobile ? [0, 150] : [0, 300],
  );
  const textRightOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.4, 0.8] : [0, 0.4],
    [1, 0],
  );

  // Foto Tengah:
  const imageY = useTransform(
    scrollYProgress,
    isMobile ? [0.2, 0.8] : [0, 0.5],
    [0, 100],
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.3, 0.8] : [0, 0.5],
    [1, 0],
  );

  // Efek Slideshow Background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // State untuk melacak posisi mouse pada kartu 3D
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden relative bg-dark"
    >
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentBg}
          src={backgroundImages[currentBg]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      </AnimatePresence>

      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-1/3 left-0 whitespace-nowrap text-[10rem] md:text-[15rem] font-heading font-black text-white/5 z-0 pointer-events-none"
      >
        WEB DEVELOPER • TAEKWONDO COACH • DATA ANALYST • LEADER •
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-navy/30 to-dark/80 z-0" />

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center relative z-10 w-full min-h-[600px]">
        {/* KOLOM KIRI: Nama Panjang */}
        <motion.div
          style={{ x: textLeftX, opacity: textLeftOpacity }}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="lg:col-span-5 text-left order-2 lg:order-1 z-20 mt-4 lg:mt-0"
        >
          <span className="text-gold font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-3 block">
            — Welcome to My Arena
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white leading-[1.05] drop-shadow-2xl">
            MUHAMMAD <br />
            IZHHAR <br />
            <span className="text-gold italic">SYA'BAN LUBIS</span>
          </h1>
        </motion.div>

        {/* KOLOM TENGAH: Foto Profil 3D */}
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="lg:col-span-4 flex justify-center order-1 lg:order-2 relative my-4 lg:my-0"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border border-dashed border-gold/30 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-0 m-auto w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-gold/10 pointer-events-none"
          />

          <div
            style={{ perspective: 1000 }}
            className="relative cursor-grab active:cursor-grabbing z-20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{ rotateX: rotateX, rotateY: rotateY }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] p-3 bg-gradient-to-br from-gold/20 via-navy/50 to-dark backdrop-blur-md border-2 border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
                style={{
                  transform: `translate(${rotateY * 2}px, ${rotateX * 2}px)`,
                }}
              />
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-dark">
                <img
                  src="/profile.jpg"
                  alt="Izhhar Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-gold z-30" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-gold z-30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-navy/95 border-2 border-gold p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-xl z-40 pointer-events-none"
            >
              <span className="text-gold font-heading font-bold text-3xl sm:text-4xl block leading-none">
                21
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-300 uppercase tracking-widest mt-1 block font-bold">
                Age & Passion
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* KOLOM KANAN: Deskripsi Mahasiswa */}
        <motion.div
          style={{ x: textRightX, opacity: textRightOpacity }}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="lg:col-span-3 text-left lg:text-right order-3 z-20 flex flex-col justify-center mt-4 lg:mt-0"
        >
          <div className="inline-block bg-gold/10 border border-gold/20 px-4 py-2 rounded-xl mb-4 lg:ml-auto w-max">
            <span className="text-gold font-bold text-xs uppercase tracking-widest">
              ✦ Dual Identity
            </span>
          </div>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light backdrop-blur-xs bg-dark/20 p-4 lg:p-0 rounded-2xl lg:bg-transparent border border-white/5 lg:border-none">
            Mahasiswa{" "}
            <span className="text-white font-medium">UIN Jakarta</span> yang
            memadukan presisi logika kode{" "}
            <span className="text-gold font-medium">Laravel & React</span>{" "}
            dengan energi disiplin kepemimpinan{" "}
            <span className="text-gold font-medium">
              Taekwondo Visi Muda Club
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
