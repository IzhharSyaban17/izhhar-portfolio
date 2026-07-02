# ISSUE-013: Image Optimization & SEO Audit

## Description
Optimasi semua gambar untuk performa dan SEO. Pastikan semua gambar memiliki ukuran yang tepat, format modern, alt text deskriptif, dan lazy loading. Lakukan audit SEO final.

## Scope
- [x] **Image Optimization:**
  - [x] Konversi gambar `public/` ke format WebP jika memungkinkan (size lebih kecil)
  - [x] Resize gambar ke dimensi yang wajar (max 1200px width)
  - [x] Pastikan semua `<img>` tag punya `alt` text yang:
    - Deskriptif
    - Mengandung keyword relevant (Taekwondo, Web Developer, KKN, Visi Muda, dll)
    - Tidak generic seperti "image" atau "photo"
  - [x] Tambah `loading="lazy"` untuk semua gambar di bawah fold
  - [x] Tambah `width` dan `height` attributes untuk CLS prevention

- [x] **Performance Audit:**
  - [x] Cek Lighthouse performance score
  - [x] Cek Largest Contentful Paint (LCP)
  - [x] Cek Cumulative Layout Shift (CLS)
  - [x] Cek render-blocking resources

- [x] **SEO Audit Checklist:**
  - [x] Validasi HTML dengan W3C validator
  - [x] Cek semua heading hierarchy (h1 → h2 → h3)
  - [x] Pastikan hanya ada SATU `<h1>` per halaman
  - [x] Cek internal links tidak ada yang broken
  - [x] Cek external links menggunakan `target="_blank"` dengan `rel="noopener noreferrer"`
  - [x] Cek meta description length (optimal: 150-160 characters)
  - [x] Cek title tag length (optimal: 50-60 characters)
  - [x] Cek Open Graph tags
  - [x] Cek Twitter Card tags
  - [x] Cek JSON-LD valid dengan Google Structured Data Testing Tool
  - [x] Cek sitemap.xml valid
  - [x] Cek robots.txt valid

- [x] **Accessibility Audit:**
  - [x] Cek color contrast ratio
  - [x] Cek keyboard navigation
  - [x] Cek focus indicators
  - [x] Cek `aria-label` pada interactive elements tanpa text

## Alt Text Guidelines untuk Setiap Gambar

| File | Alt Text |
|------|----------|
| `/profile.jpg` | "Muhammad Izhhar Sya'ban Lubis - Web Developer & Taekwondo Coach" |
| `/visimud.png` | "Visi Muda Club Taekwondo - Dokumentasi latihan atlet taekwondo" |
| `/kkn1.png` | "Dokumentasi KKN 2025 UIN Jakarta - Kegiatan pengabdian masyarakat" |
| `/kkn2.png` | "KKN 2025 Behind the Scenes - Pembuatan konten video sinematik" |
| `/pamulang.png` | "Dashboard Sistem Informasi Kecamatan Pamulang - Web Developer Project" |
| `/image.png` | "Web Development Project - Laravel React Full Stack Application" |
| `/peta.png` | "Peta lokasi kegiatan - Dokumentasi proyek pengabdian masyarakat" |
| `/Screenshot%202025-08-27%20030203.png` | "Sertifikat Kompetensi Web Development BNSP Izhhar Lubis 2025" |
| `/Screenshot%202025-12-22%20111440.png` | "Sertifikat Sistem Informasi Kecamatan Pamulang 2025" |

## Acceptance Criteria
1. Semua gambar punya alt text deskriptif (contain keywords)
2. Lighthouse SEO score: **90+**
3. Lighthouse Performance score: **80+** (minimal)
4. Tidak ada broken links
5. Valid HTML5
6. Satu `<h1>` per halaman
7. JSON-LD valid
8. Sitemap & robots.txt valid
9. Color contrast ratio memenuhi WCAG AA (4.5:1 untuk text normal)

## Dependencies
- Semua issue sebelumnya harus sudah selesai

## Files to Modify
- All component files with `<img>` tags — add/update alt text, loading, width, height
