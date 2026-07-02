# ISSUE-008: Create Certificates Section — Card Hover Effect

## Description
Buat Certificates section baru di halaman utama yang menampilkan sertifikat-sertifikat menggunakan komponen **Card Hover Effect** dari Aceternity UI (sudah terinstall). Tampilkan gambar screenshot sertifikat beserta judul, penerbit, dan tahun.

## Scope
- [x] Buat komponen `components/Certificates.tsx`
- [x] Gunakan Card Hover Effect dari `components/ui/aceternity/card-hover-effect.tsx`
- [x] Data sertifikat dari `data/personal.ts`
- [x] Section heading: "— SERTIFIKASI" dengan title "Kredibilitas Terverifikasi."
- [x] Card layout: gambar sertifikat + title + penerbit + tahun
- [x] Sertifikat yang ditampilkan:
  1. BNSP Web Development (Laravel) — 2025
  2. Data Visualization with Tableau — 2025
  3. Sabeum Taekwondo (PBTI) — 2024
  4. Advanced PostgreSQL — 2024
  5. (Tambahan dari screenshots jika ada)
- [x] Hover effect: card slide/translate, border glow
- [x] Responsive grid (3 kolom desktop, 2 tablet, 1 mobile)
- [x] Tambah section anchor `#certificates`

## SEO Requirements
- [x] Setiap gambar punya `alt` text yang mengandung kata "sertifikat", "BNSP", "sertifikasi", dll
- [x] Section semantic dengan `aria-label`
- [x] Gambar menggunakan `loading="lazy"`
- [x] Alt text: e.g. "Sertifikat Kompetensi Web Development BNSP Izhhar Lubis 2025"

## Data Sertifikat Lengkap
```ts
[
  {
    title: "Kompetensi Web Development (Laravel)",
    issuer: "BNSP / LSP",
    year: "2025",
    image: "/Screenshot%202025-08-27%20030203.png", // atau gambar real sertifikat
  },
  {
    title: "Data Visualization & Analytics with Tableau",
    issuer: "Professional Tech Bootcamp",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "Sertifikasi Pelatih/Sabeum Taekwondo",
    issuer: "PBTI (Pengurus Besar Taekwondo Indonesia)",
    year: "2024",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80",
  },
  {
    title: "Advanced Database Management (PostgreSQL)",
    issuer: "Tech Academy",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
  {
    title: "Sistem Informasi Kecamatan Pamulang",
    issuer: "UIN Syarif Hidayatullah Jakarta",
    year: "2025",
    image: "/Screenshot%202025-12-22%20111440.png",
  },
]
```

## Acceptance Criteria
1. Certificates section muncul di halaman utama
2. Card Hover Effect menampilkan semua sertifikat
3. Hover animation bekerja (card slide/translate)
4. Setiap card menampilkan gambar, title, penerbit, tahun
5. Navigasi anchor `#certificates` bekerja
6. Responsive grid
7. `alt` text deskriptif pada semua gambar

## Dependencies
- ISSUE-001 (Data Layer) — untuk data sertifikat
- Card Hover Effect sudah terinstall di `components/ui/aceternity/card-hover-effect.tsx`

## Files to Create/Modify
- `components/Certificates.tsx` — CREATE
- `data/personal.ts` — pastikan data certificates sudah ada
