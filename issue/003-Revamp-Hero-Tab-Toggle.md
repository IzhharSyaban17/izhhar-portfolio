# ISSUE-003: Revamp Hero Section — Tab Toggle Dual Identity

## Description
Rebuild Hero section dengan interaksi Tab Toggle antara dua persona: **Web Developer / AI Enthusiast** dan **Taekwondoin / Coach**. Setiap tab memiliki tagline, deskripsi, dan CTA yang berbeda. Tetap gunakan Spotlight, BackgroundBeams, dan RetroGrid yang sudah ada.

## Scope
- [x] Buat dua tab button di hero: "Developer Mode" | "Taekwondo Mode"
- [x] Tab pertama (Developer): tagline tentang coding, AI, dan analisis data
- [x] Tab kedua (Taekwondo): tagline tentang coaching, disiplin, kepemimpinan
- [x] Nama "Muhammad Izhhar Sya'ban Lubis" tetap di atas kedua tab
- [x] Subtitle/role berubah sesuai tab aktif
- [x] Deskripsi paragraf berubah sesuai tab aktif
- [x] CTA buttons bisa berbeda per tab
- [x] Animasi transisi smooth saat toggle tab
- [x] Update hero stats dengan data baru dari data layer
- [x] Update WordRotate dengan kata-kata yang lebih relevan
- [x] Update "Dual Identity" badge
- [x] Pastikan parallax scroll effect tetap berfungsi

## Copy untuk Masing-Masing Tab

### Developer Mode
- Tagline: `"Code. Analyze. Innovate."`
- Role: `Web Developer & AI Enthusiast`
- Description: Mahasiswa Sistem Informasi UIN Jakarta yang membangun solusi digital — dari full-stack Laravel/React hingga eksplorasi AI dan data analytics.
- CTA 1: "Lihat Project" → `#projects`
- CTA 2: "Hubungi Saya" → `#contact`

### Taekwondo Mode
- Tagline: `"Discipline. Lead. Compete."`
- Role: `Taekwondo Coach (Sabeum) & Atlet`
- Description: Pelatih taekwondo di Visi Muda Club, Bidang Kepelatihan. Membimbing atlet muda dengan disiplin matras dan membangun karakter juara.
- CTA 1: "Galeri Saya" → `#gallery`
- CTA 2: "Hubungi Saya" → `#contact`

## Data Stats di Hero
- Developer Mode: 3+ Years Coding, 6 Projects, 10+ Technologies
- Taekwondo Mode: 50+ Atlet Dibina, 4 Sertifikasi, 2+ Tahun Melatih

## Acceptance Criteria
1. Tab toggle bekerja dengan animasi smooth (framer-motion AnimatePresence)
2. Konten berubah sesuai tab aktif
3. Semua teks menggunakan data dari `data/personal.ts`
4. Parallax scroll effect masih berfungsi
5. Spotlight + BackgroundBeams + RetroGrid masih muncul
6. Mobile responsive
7. Foto profile tetap ada di sisi kanan, tidak berubah

## Dependencies
- ISSUE-001 (Data Layer) — wajib, karena data diambil dari `data/personal.ts`

## Files to Modify
- `components/hero.tsx` — MAJOR REWRITE
