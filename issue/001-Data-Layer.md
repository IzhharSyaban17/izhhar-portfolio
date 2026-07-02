# ISSUE-001: Centralized Data Layer — `data/personal.ts`

## Description
Buat file data terpusat yang berisi semua data profil, timeline, statistik, proyek, galeri, dan sertifikat. Tujuannya agar semua komponen mengambil data dari satu sumber (single source of truth) dan mudah di-maintain.

## Scope
- [x] Buat folder `data/` dan file `data/personal.ts`
- [x] Pindahkan semua data dari masing-masing komponen ke sini
- [x] Define TypeScript interfaces untuk setiap entitas data

## Data yang Harus Ada

### 1. Personal Info
- Nama, title (Web Developer & AI Enthusiast / Taekwondo Coach)
- Bio singkat untuk hero
- Bio panjang untuk about
- Foto profile path
- Social links (GitHub, LinkedIn, Instagram, TikTok, WhatsApp)
- Contact info (email, lokasi, no WA)

### 2. Stats
```ts
interface StatsData {
  value: number;
  suffix: string;
  label: string;
  icon: string; // nama icon
  category: 'dev' | 'tkd' | 'all';
}
```
Data baru:
- Projects Completed: 6
- TikTok Views: 600K+
- Technologies: 10+
- Years Coding: 3+ (mulai 2023)
- Atlet Dibina: 50+
- Sertifikasi: 4+

### 3. Timeline / Experience (KRITIS — data sudah dikoreksi)
```ts
interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  icon: string;
  color: string; // untuk accent
}
```
Data kronologis yang BENAR:
| Year | Title | Notes |
|------|-------|-------|
| 2022 | Masuk UIN Jakarta - Sistem Informasi | |
| 2023 | Mulai Coding & Taekwondo Coaching | HTML/CSS/PHP, mulai jadi pelatih |
| 2024 | React/Tailwind, BNSP Certification, Data Analytics Bootcamp | |
| 2025 | KKN, Coach Visi Muda (Bidang Kepelatihan), Project TKD VisiMuda | BUKAN Manager |
| 2026 | Fullstack Next.js, AI Enthusiast | |

### 4. Projects
- TKD VisiMuda (2025) — letakkan sebagai project PERTAMA/utama
- Appointment Dokter Gigi
- Catering Automation
- VendorManagement
- Tokoonline & ERP Penjualaan
- Sistem Surat Keluar/Masuk

### 5. Gallery Images
```ts
interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: string;
}
```
Gambar dari `public/`:
- `/visimud.png` — Taekwondo Visi Muda
- `/kkn1.png` — KKN Documentation
- `/kkn2.png` — KKN Behind the Scenes
- `/pamulang.png` — Dashboard Kecamatan Pamulang
- `/image.png` — Web Development
- `/Screenshot%202025-08-27%20030203.png` — Sertifikat/screenshot 1
- `/Screenshot%202025-12-22%20111440.png` — Sertifikat/screenshot 2
- `/peta.png` — Peta/location

### 6. Certificates
```ts
interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  image: string;
}
```
Data sertifikat:
- BNSP Web Development (Laravel) — 2025
- Data Visualization with Tableau — 2025
- Sabeum Taekwondo (PBTI) — 2024
- Advanced PostgreSQL — 2024
- (tambah dari screenshots yang ada)

### 7. Skills
Kategori skills yang sudah ada, ditambah AI Enthusiast category

## Acceptance Criteria
1. Semua data terpusat dalam satu file
2. TypeScript interfaces didefinisikan dengan baik
3. Semua komponen bisa import data dari sini
4. Data timeline sudah sesuai koreksi (KKN 2025, Coach bukan Manager)

## Dependencies
ISSUE-000 (SEO Foundation) — tidak wajib, bisa jalan paralel

## Files to Create
- `data/personal.ts` — CREATE
