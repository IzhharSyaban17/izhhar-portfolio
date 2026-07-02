# ISSUE-009: Move Timeline to Main Page — Fix Data & Integrate

## Description
Pindahkan Timeline Experience dari sub-halaman `/experience` ke halaman utama (single page). Perbaiki semua data kronologis yang salah. Gunakan Tracing Beam + Timeline dari Aceternity UI (sudah terinstall).

## Scope
- [x] Buat komponen `components/Experience.tsx` untuk halaman utama
- [x] Gunakan Tracing Beam + Timeline dari Aceternity
- [x] Data timeline dari `data/personal.ts`
- [x] Section heading: "— REKAM JEJAK" dengan title "Perjalanan Saya."
- [x] Setiap entry timeline punya: icon, title, subtitle, description list, tags
- [x] Tambah section anchor `#experience`

## Data Timeline yang BENAR (koreksi dari sebelumnya)
```ts
[
  {
    year: "2026",
    title: "Fullstack Next.js Developer & AI Enthusiast",
    subtitle: "Pengembangan Diri",
    descriptions: [
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
    descriptions: [
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
    descriptions: [
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
    descriptions: [
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
    descriptions: [
      "Memulai studi di UIN Syarif Hidayatullah Jakarta",
      "Jurusan Sistem Informasi — fokus pada pengembangan sistem",
      "Dasar-dasar algoritma, database, dan analisis sistem",
    ],
    tags: ["Sistem Informasi", "UIN Jakarta", "Database"],
    icon: "GraduationCap",
    color: "emerald",
  },
]
```

## Files to DELETE
- `app/experience/page.tsx` — HAPUS (pindah ke main page)
- Jika ada folder `app/experience/` yang kosong, hapus juga

## Acceptance Criteria
1. Timeline muncul di halaman utama sebagai section terpisah
2. Tracing beam animation bekerja saat scroll
3. Data kronologis sudah benar sesuai koreksi:
   - KKN di 2025 (BUKAN 2022)
   - Coach Visi Muda / Bidang Kepelatihan (BUKAN Manager)
   - Mulai coding 2023
4. Navigasi anchor `#experience` bekerja
5. Setiap entry punya icon, tags, dan descriptions
6. Tidak ada link rusak (karena sub-halaman dihapus)
7. Navbar tidak lagi指向 `/experience`

## Dependencies
- ISSUE-001 (Data Layer) — untuk data timeline

## Files to Create/Modify
- `components/Experience.tsx` — CREATE
- `data/personal.ts` — pastikan data timeline sudah benar
- `app/experience/page.tsx` — DELETE
