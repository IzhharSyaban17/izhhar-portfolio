export interface PersonalInfo {
  name: string;
  shortName: string;
  brand: string;
  titles: string[];
  rotatingRoles: string[];
  bioShort: string;
  bioParagraphs: string[];
  quote: string;
  tagline: string;
  photo: string;
  location: string;
  email: string;
  phone: string;
  siteUrl: string;
  siteName: string;
  description: string;
  keywords: string[];
  university: string;
  major: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  title: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  category: "dev" | "tkd" | "all";
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  icon: string;
  color: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: string;
  label: string;
  cta?: string;
  accent?: string;
  iconBg?: string;
  labelColor?: string;
}

export interface CaseStudy {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  techStack: string[];
  result: string;
  href: string;
  icon: string;
}

export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: string;
  alt?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  external?: boolean;
}

export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}

export interface HeroTab {
  id: "developer" | "taekwondo";
  label: string;
  tagline: string;
  role: string;
  description: string;
  cta: { label: string; href: string }[];
  rotatingWords: string[];
  badge: string;
}

export interface ContentAccount {
  platform: "tiktok" | "instagram";
  account: string;
  label: string;
  headline: string;
  description: string;
  href: string;
  stats: { value: string; label: string; icon: string }[];
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Izhhar Sya'ban Lubis",
  shortName: "Izhhar Lubis",
  brand: "Zar",
  titles: [
    "Web Developer",
    "Data Analyst",
    "Taekwondo Coach",
    "AI Enthusiast",
    "Sabeum",
  ],
  rotatingRoles: ["Web Developer", "Data Analyst", "Taekwondo Coach"],
  bioShort:
    "Mahasiswa UIN Jakarta yang memadukan antara logika kode Laravel & React dengan energi disiplin kepemimpinan Taekwondo Visi Muda Club.",
  bioParagraphs: [
    "Saya adalah mahasiswa Sistem Informasi yang membangun karir di atas dua keterampilan utama: penguasaan teknis dan kepemimpinan manusia.",
    "Di siang hari, saya merancang sistem web dan mengubah data mentah menjadi wawasan menggunakan Laravel/Next.js, React, dan Analisis data. Di sore hari, saya memimpin generasi atlet berikutnya dan mengelola jalannya Visi Muda Club.",
  ],
  quote: '"Talk Less, Do More."',
  tagline: "— Welcome to my portfolio.",
  photo: "/profile.jpg",
  location: "Tangerang, Banten, Indonesia",
  email: "izhhar.lubis@example.com",
  phone: "6285715567144",
  siteUrl: "https://izhhar.vercel.app",
  siteName: "Izhhar Sya'ban Lubis",
  description:
    "Portofolio Muhammad Izhhar Sya'ban Lubis — Web Developer, AI Enthusiast, dan Taekwondo Coach (Sabeum). Mahasiswa Sistem Informasi UIN Jakarta.",
  keywords: [
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Taekwondo Coach",
    "Sabeum",
    "Visi Muda Club",
    "Izhhar Lubis",
    "Portofolio",
    "Full Stack Developer",
    "Indonesia",
    "UIN Jakarta",
    "AI Enthusiast",
    "Data Analyst",
    "PHP",
    "Tailwind CSS",
  ],
  university: "UIN Syarif Hidayatullah Jakarta",
  major: "Sistem Informasi",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/izhhar",
    icon: "GitHub",
    title: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/izhhar",
    icon: "LinkedIn",
    title: "LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iz_sybn/",
    icon: "Instagram",
    title: "Instagram",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@ijaarajaa",
    icon: "TikTok",
    title: "TikTok",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6285715567144",
    icon: "WhatsApp",
    title: "WhatsApp",
  },
  {
    name: "Instagram KKN",
    url: "https://www.instagram.com/kkn.nadi/",
    icon: "Instagram",
    title: "KKN Instagram",
  },
  {
    name: "TikTok KKN",
    url: "https://www.tiktok.com/@kkn.nadi",
    icon: "TikTok",
    title: "KKN TikTok",
  },
];

export const stats: StatItem[] = [
  {
    value: 6,
    suffix: "",
    label: "Projects",
    icon: "Briefcase",
    category: "dev",
  },
  {
    value: 600,
    suffix: "K+",
    label: "TikTok Views",
    icon: "Eye",
    category: "all",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
    icon: "Code2",
    category: "dev",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Coding",
    icon: "Calendar",
    category: "dev",
  },
  {
    value: 50,
    suffix: "+",
    label: "Atlet Dibina",
    icon: "Users",
    category: "tkd",
  },
  {
    value: 4,
    suffix: "+",
    label: "Sertifikasi",
    icon: "Award",
    category: "tkd",
  },
  {
    value: 2,
    suffix: "+",
    label: "Tahun Melatih",
    icon: "Calendar",
    category: "tkd",
  },
];

export const heroTabs: HeroTab[] = [
  {
    id: "developer",
    label: "Developer Mode",
    tagline: "Code. Analyze. Innovate.",
    role: "Web Developer & AI Enthusiast",
    description:
      "Mahasiswa Sistem Informasi UIN Jakarta yang membangun solusi digital — dari full-stack Laravel/React hingga eksplorasi AI dan data analytics.",
    cta: [
      { label: "Lihat Project", href: "#projects" },
      { label: "Hubungi Saya", href: "#contact" },
    ],
    rotatingWords: ["Web Developer", "Data Analyst", "AI Enthusiast"],
    badge: "Developer Mindset",
  },
  {
    id: "taekwondo",
    label: "Taekwondo Mode",
    tagline: "Discipline. Lead. Compete.",
    role: "Taekwondo Coach (Sabeum) & Atlet",
    description:
      "Pelatih taekwondo di Visi Muda Club, Bidang Kepelatihan. Membimbing atlet muda dengan disiplin matras dan membangun karakter juara.",
    cta: [
      { label: "Galeri Saya", href: "#gallery" },
      { label: "Hubungi Saya", href: "#contact" },
    ],
    rotatingWords: ["Taekwondo Coach", "Sabeum", "Atlet"],
    badge: "Dual Identity",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Fullstack Next.js Developer & AI Enthusiast",
    subtitle: "Pengembangan Diri",
    description: [
      "Mendalami Next.js 16 App Router dan framework modern",
      "Eksplorasi AI/ML tools dan integrasi dengan web apps",
      "Membangun portofolio dengan arsitektur dual-identity",
    ],
    tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
    icon: "Code",
    color: "gold",
  },
  {
    year: "2025",
    title: "KKN & Coach Visi Muda (Bidang Kepelatihan)",
    subtitle: "Kuliah Kerja Nyata & Kepelatihan",
    description: [
      "KKN: Pembuatan konten video sinematik yang viral (600K+ views)",
      "Coach Visi Muda Club — Bidang Kepelatihan taekwondo",
      "Membangun platform VisiMudaClub untuk manajemen klub",
      "Fotografi & videografi dokumentasi kegiatan",
    ],
    tags: ["Laravel", "PHP", "Content Strategy", "Videography"],
    icon: "Trophy",
    color: "gold",
  },
  {
    year: "2024",
    title: "React/Tailwind & Sertifikasi Profesional",
    subtitle: "Pengembangan Skill Teknis",
    description: [
      "Mendalami React, Tailwind CSS, dan framework frontend modern",
      "Sertifikasi BNSP Web Development (Laravel)",
      "Data Analytics Bootcamp — Tableau & PostgreSQL",
      "Mengerjakan proyek freelance fullstack",
    ],
    tags: ["React", "Tailwind", "BNSP", "Tableau"],
    icon: "Award",
    color: "cyan",
  },
  {
    year: "2023",
    title: "Mulai Coding & Taekwondo Coaching",
    subtitle: "Awal Perjalanan",
    description: [
      "Belajar HTML, CSS, PHP, dan dasar-dasar web development",
      "Mulai aktif sebagai pelatih Taekwondo (Sabeum)",
      "Sertifikasi pelatih dari PBTI",
      "Membangun disiplin antara kode dan matras",
    ],
    tags: ["HTML/CSS", "PHP", "MySQL", "Taekwondo"],
    icon: "Code",
    color: "orange",
  },
  {
    year: "2022",
    title: "Masuk UIN Jakarta — Sistem Informasi",
    subtitle: "Pendidikan Tinggi",
    description: [
      "Memulai studi di UIN Syarif Hidayatullah Jakarta",
      "Jurusan Sistem Informasi — fokus pada pengembangan sistem",
      "Dasar-dasar algoritma, database, dan analisis sistem",
    ],
    tags: ["Sistem Informasi", "UIN Jakarta", "Database"],
    icon: "GraduationCap",
    color: "emerald",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "VisiMudaClub — TKD Management",
    description:
      "Platform terintegrasi untuk mengelola data atlet, memantau jadwal latihan reguler, melacak progres kenaikan sabuk, hingga manajemen turnamen Taekwondo.",
    tags: ["LARAVEL", "PHP", "MYSQL", "TAILWIND"],
    href: "https://tkd-visimuda.web.id/",
    icon: "Server",
    accent: "border-gold/20 hover:border-gold",
    iconBg: "text-gold group-hover:bg-gold group-hover:text-dark",
    label: "FULL STACK",
    labelColor: "text-gold bg-gold/[0.08] border-gold/20",
  },
  {
    title: "Appointment Dokter Gigi",
    description:
      "Sistem booking dan manajemen jadwal untuk klinik gigi. Pasien dapat memilih dokter, melihat slot tersedia, dan menerima reminder otomatis.",
    tags: ["LARAVEL", "PHP", "MYSQL", "BOOTSTRAP"],
    href: "#",
    icon: "CalendarCheck",
    label: "FULL STACK",
  },
  {
    title: "Catering Automation",
    description:
      "Otomasi pesanan catering dari pemesanan hingga pengiriman. Dilengkapi manajemen menu, inventaris bahan baku, dan laporan keuangan harian.",
    tags: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    href: "#",
    icon: "UtensilsCrossed",
    label: "FULL STACK",
  },
  {
    title: "VendorManagement",
    description:
      "Sistem manajemen vendor dan procurement. Mengelola data vendor, purchase order, kontrak, hingga evaluasi kinerja vendor secara terpusat.",
    tags: ["LARAVEL", "VUE", "MYSQL", "TAILWIND"],
    href: "#",
    icon: "Building2",
    label: "FULL STACK",
  },
  {
    title: "Tokoonline & ERP Penjualaan",
    description:
      "E-commerce terintegrasi dengan sistem ERP penjualan. Mengelola produk, stok, pesanan, pembayaran, hingga laporan penjualan dan analitik bisnis.",
    tags: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    href: "#",
    icon: "ShoppingCart",
    label: "ERP + E-COMMERCE",
  },
  {
    title: "Sistem Surat Keluar/Masuk",
    description:
      "Analisis dan perancangan sistem korespondensi digital untuk Kecamatan Pamulang guna menggantikan alur kerja berbasis kertas dengan manajemen akses.",
    tags: ["ANALYSIS", "UML", "PHP", "MYSQL"],
    href: "https://drive.google.com/file/d/1Z5yE2341WRdEbrzfR3J7VciwV9GCzEHB/view?usp=sharing",
    icon: "FileText",
    label: "SYSTEM ANALYSIS",
    cta: "Read Report",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "VisiMudaClub",
    tag: "FULL STACK",
    problem:
      "Klub Taekwondo masih menggunakan pencatatan manual untuk data atlet, jadwal latihan, progres kenaikan sabuk, dan pendaftaran turnamen — rawan kesalahan dan tidak real-time.",
    solution:
      "Membangun platform monolitik dengan arsitektur MVC Laravel yang mengintegrasikan manajemen atlet, jadwal latihan otomatis, sistem tracking progres sabuk berbasis poin, dan portal pendaftaran turnamen.",
    techStack: ["LARAVEL", "PHP", "MYSQL", "TAILWIND"],
    result:
      "Digitalisasi penuh operasional klub. Pelacakan progres atlet secara real-time, pengurangan beban admin hingga 70%, dan histori kenaikan sabuk terdokumentasi rapi.",
    href: "https://tkd-visimuda.web.id/",
    icon: "Server",
  },
  {
    title: "Appointment Dokter Gigi",
    tag: "FULL STACK",
    problem:
      "Klinik gigi kesulitan mengelola jadwal pasien yang sering bentrok, antrean panjang, dan tidak ada sistem reminder yang menyebabkan banyak no-show.",
    solution:
      "Sistem booking online dengan visualisasi slot dokter real-time, fitur reminder otomatis via WhatsApp, dan dashboard manajemen jadwal untuk admin klinik.",
    techStack: ["LARAVEL", "PHP", "MYSQL", "BOOTSTRAP"],
    result:
      "Mengurangi no-show rate, pasien dapat booking 24/7 tanpa telepon, dan admin memiliki kontrol penuh atas jadwal melalui dashboard terpusat.",
    href: "#",
    icon: "CalendarCheck",
  },
  {
    title: "Catering Automation",
    tag: "FULL STACK",
    problem:
      "Proses pemesanan catering masih melalui telepon/WA, menu tidak terstandarisasi, stok bahan tidak terkontrol, dan laporan keuangan dikerjakan manual.",
    solution:
      "Otomasi alur pemesanan dari katalog menu digital hingga konfirmasi. Integrasi manajemen stok bahan baku, produksi harian, dan laporan laba-rugi otomatis.",
    techStack: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    result:
      "Waktu pemrosesan pesanan turun 60%, inventaris bahan baku terpantau real-time, dan laporan keuangan siap setiap akhir hari tanpa perhitungan manual.",
    href: "#",
    icon: "UtensilsCrossed",
  },
  {
    title: "VendorManagement",
    tag: "FULL STACK",
    problem:
      "Perusahaan kesulitan melacak data vendor, riwayat kontrak, dan performa pemasok karena tersebar di spreadsheet dan dokumen fisik.",
    solution:
      "Sistem terpusat untuk manajemen data vendor, pembuatan purchase order digital, pelacakan kontrak aktif, dan dashboard evaluasi kinerja vendor.",
    techStack: ["LARAVEL", "VUE", "MYSQL", "TAILWIND"],
    result:
      "Data vendor tersentralisasi, proses procurement 3x lebih cepat, dan keputusan pengadaan didukung data performa vendor yang objektif.",
    href: "#",
    icon: "Building2",
  },
  {
    title: "Tokoonline & ERP Penjualaan",
    tag: "ERP + E-COMMERCE",
    problem:
      "Toko offline ingin go-digital tetapi harus tetap sinkron dengan stok fisik, pencatatan penjualan, dan akuntansi yang selama ini terpisah.",
    solution:
      "E-commerce terintegrasi dengan modul ERP: manajemen produk multi-kategori, sinkronisasi stok real-time, sistem pembayaran, dan laporan analitik penjualan.",
    techStack: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    result:
      "Satu platform untuk toko online dan manajemen internal. Stok selalu sinkron, laporan penjualan otomatis, dan omzet terdokumentasi dalam sistem akuntansi terpadu.",
    href: "#",
    icon: "ShoppingCart",
  },
  {
    title: "Sistem Surat Keluar/Masuk",
    tag: "SYSTEM ANALYSIS",
    problem:
      "Kecamatan Pamulang masih menggunakan buku agenda fisik untuk mencatat surat masuk/keluar, menyebabkan pencarian dokumen lambat dan risiko kehilangan data.",
    solution:
      "Perancangan sistem korespondensi digital dengan UML (use case, activity, sequence diagram) dan implementasi berbasis web untuk manajemen surat, disposisi, dan arsip.",
    techStack: ["ANALYSIS", "UML", "PHP", "MYSQL"],
    result:
      "Dokumen perancangan sistem siap implementasi. Proses pencarian surat dari jam menjadi detik, riwayat disposisi tercatat otomatis, dan arsip digital aman.",
    href: "https://drive.google.com/file/d/1Z5yE2341WRdEbrzfR3J7VciwV9GCzEHB/view?usp=sharing",
    icon: "FileText",
  },
];

export const gallery: GalleryItem[] = [
  {
    src: "/visimud.png",
    title: "Visi Muda Club",
    description: "Taekwondo Visi Muda Club",
    category: "taekwondo",
    alt: "Visi Muda Club Taekwondo - Dokumentasi latihan atlet taekwondo",
  },
  {
    src: "/kkn1.png",
    title: "KKN Documentation",
    description: "Dokumentasi kegiatan KKN",
    category: "kkn",
    alt: "Dokumentasi KKN 2025 UIN Jakarta - Kegiatan pengabdian masyarakat",
  },
  {
    src: "/kkn2.png",
    title: "KKN Behind the Scenes",
    description: "Proses pembuatan konten KKN",
    category: "kkn",
    alt: "KKN 2025 Behind the Scenes - Pembuatan konten video sinematik",
  },
  {
    src: "/pamulang.png",
    title: "Dashboard Kecamatan",
    description: "Dashboard Sistem Informasi Kecamatan Pamulang",
    category: "project",
    alt: "Dashboard Sistem Informasi Kecamatan Pamulang - Web Developer Project",
  },
  {
    src: "/image.png",
    title: "Web Development",
    description: "Proyek pengembangan web",
    category: "project",
    alt: "Web Development Project - Laravel React Full Stack Application",
  },
  {
    src: "/peta.png",
    title: "Peta Lokasi",
    description: "Peta dan lokasi",
    category: "other",
    alt: "Peta lokasi kegiatan - Dokumentasi proyek pengabdian masyarakat",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Kompetensi Web Development (Laravel)",
    issuer: "BNSP / LSP",
    year: "2025",
    image: "/Screenshot%202025-08-27%20030203.png",
  },
  {
    title: "Data Visualization & Analytics with Tableau",
    issuer: "Professional Tech Bootcamp",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "Sertifikasi Pelatih/Sabeum Taekwondo",
    issuer: "PBTI (Pengurus Besar Taekwondo Indonesia)",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80",
  },
  {
    title: "Advanced Database Management (PostgreSQL)",
    issuer: "Tech Academy",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
  {
    title: "Sistem Informasi Kecamatan Pamulang",
    issuer: "UIN Syarif Hidayatullah Jakarta",
    year: "2025",
    image: "/Screenshot%202025-12-22%20111440.png",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    icon: "Code2",
    description: "Building robust, scalable full-stack applications",
    skills: [
      { name: "Laravel", level: "Expert" },
      { name: "PHP", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "BarChart3",
    description: "Turning raw data into actionable insights",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "PostGIS", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Pentaho", level: "Intermediate" },
      { name: "Excel", level: "Expert" },
      { name: "Google Sheets", level: "Expert" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    description: "Exploring intelligent solutions for modern problems",
    skills: [
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "AI Tools (Copilot, ChatGPT, Claude)", level: "Expert" },
      { name: "Python Basics", level: "Intermediate" },
    ],
  },
  {
    title: "Taekwondo & Leadership",
    icon: "Sword",
    description: "Discipline forged on the mat, applied everywhere",
    skills: [
      { name: "Taekwondo Coaching", level: "Expert" },
      { name: "Club Management", level: "Expert" },
      { name: "Event Organizing", level: "Advanced" },
    ],
  },
  {
    title: "Creative & Social Media",
    icon: "Megaphone",
    description: "Content that captures attention and drives engagement",
    skills: [
      { name: "Video Editing (CapCut)", level: "Expert" },
      { name: "Content Strategy", level: "Expert" },
      { name: "Social Media Management", level: "Advanced" },
    ],
  },
];

export const iconSlugs: string[] = [
  "laravel",
  "php",
  "mysql",
  "postgresql",
  "tableau",
  "excel",
  "react",
  "nextdotjs",
  "tailwindcss",
  "figma",
  "github",
  "git",
  "typescript",
  "javascript",
  "bootstrap",
  "vueDotJs",
  "python",
  "pytorch",
  "tensorflow",
  "postgis",
  "pentaho",
];

export const aboutCards: AboutCard[] = [
  { icon: "GraduationCap", title: "UIN JAKARTA", desc: "Sistem Informasi" },
  { icon: "Code", title: "WEB DEV", desc: "Laravel & Data" },
  { icon: "Trophy", title: "TAEKWONDO", desc: "Sabeum / Pelatih" },
  { icon: "Users", title: "VISI MUDA", desc: "Bidang Kepelatihan" },
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home", icon: "Home" },
  { name: "About", href: "#about", icon: "User" },
  { name: "Skills", href: "#skills", icon: "Code2" },
  { name: "Projects", href: "#projects", icon: "Briefcase" },
  { name: "Work", href: "#work", icon: "Briefcase" },
  { name: "Experience", href: "#experience", icon: "BookOpen" },
  { name: "Contact", href: "#contact", icon: "Mail" },
];

export const footerQuickLinks: NavLink[] = [
  { name: "Home", href: "#home", icon: "Home" },
  { name: "About", href: "#about", icon: "User" },
  { name: "Skills", href: "#skills", icon: "Code2" },
  { name: "Projects", href: "#projects", icon: "Briefcase" },
  { name: "Contact", href: "#contact", icon: "Mail" },
];

export const sectionIds: string[] = [
  "home",
  "about",
  "skills",
  "projects",
  "gallery",
  "certificates",
  "experience",
  "work",
  "contact",
];

export const whatsappMessageTemplate = (
  nama: string,
  email: string,
  pesan: string,
): string =>
  `Halo Sabeum/Dev Izhhar, saya tertarik berkolaborasi!\n\n*Nama:* ${nama}\n*Email:* ${email}\n*Pesan:* ${pesan}`;

export const contentAccounts: ContentAccount[] = [
  {
    platform: "tiktok",
    account: "kkn.nadi",
    label: "PDD Account (KKN)",
    headline: "KKN Documentation",
    description:
      "Viral content execution strategy. Blending FYP sound trends with cinematic social documentation using CapCut.",
    href: "https://www.tiktok.com/@kkn.nadi",
    stats: [
      { value: "600K+", label: "Total Views", icon: "Eye" },
      { value: "Viral", label: "Engagement", icon: "Heart" },
    ],
  },
  {
    platform: "tiktok",
    account: "ijaarajaa",
    label: "Main Account",
    headline: "Personal Branding",
    description:
      "Focused on building a visual identity as a Developer and Taekwondo Coach, delivering clean, character-driven content.",
    href: "https://www.tiktok.com/@ijaarajaa",
    stats: [
      { value: "200+", label: "Followers", icon: "Users" },
      { value: "3.000+", label: "Total Likes", icon: "Heart" },
    ],
  },
  {
    platform: "instagram",
    account: "iz_sybn",
    label: "Main Account",
    headline: "Aesthetic Feed",
    description:
      "Showcasing active involvement in Taekwondo with consistent visual aesthetics, dark palettes, and clean layouts for a strong identity.",
    href: "https://www.instagram.com/iz_sybn/",
    stats: [
      {
        value: "Portfolio & Life",
        label: "Feed & Story Design",
        icon: "FileText",
      },
    ],
  },
  {
    platform: "instagram",
    account: "kkn.nadi",
    label: "PDD Account (KKN)",
    headline: "Feed Campaign Design",
    description:
      "Daily digital publication management. Creating interactive carousel content and Reels to summarize community service agendas for the public.",
    href: "https://www.instagram.com/kkn.nadi/",
    stats: [
      {
        value: "Visual Storytelling",
        label: "Carousel & Copywriting",
        icon: "FileText",
      },
    ],
  },
];

export const siteMetadata = {
  locale: "id_ID",
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image" as const,
  robots: {
    index: true,
    follow: true,
  },
  icon: "/icon.svg",
  category: "technology",
  htmlLang: "id",
};

export const experienceMetadata = {
  title: "Pengalaman & Timeline",
  description:
    "Rekam jejak Muhammad Izhhar Sya'ban Lubis — dari kode Laravel hingga matras taekwondo, KKN 2025, Coach Visi Muda, dan AI Enthusiast.",
};

export const designTokens = {
  gold: "#d4af37",
  premium: "#c5a028",
  shine: "#ffd700",
};
