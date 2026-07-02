# ISSUE-007: Create Gallery Section — Apple Cards Carousel

## Description
Buat Gallery section baru di halaman utama yang menampilkan dokumentasi Taekwondo dan kegiatan menggunakan komponen **Apple Cards Carousel** dari Aceternity UI. Gunakan gambar-gambar yang ada di folder `public/`.

## Scope
- [x] Buat komponen `components/Gallery.tsx`
- [x] Gunakan Apple Cards Carousel (dari ISSUE-002)
- [x] Data gambar dari `data/personal.ts` (gallery items)
- [x] Section heading: "— DOKUMENTASI" dengan title "Jejak Visual Saya."
- [x] Gambar yang ditampilkan:
  1. `/visimud.png` — Visi Muda Club Taekwondo
  2. `/kkn1.png` — Dokumentasi KKN 2025
  3. `/kkn2.png` — KKN Behind the Scenes
  4. `/pamulang.png` — Dashboard Kecamatan Pamulang
  5. `/image.png` — Web Development Project
  6. `/peta.png` — Peta/location documentation
  7. `/profile.jpg` — Profil photo (opsional, sebagai penutup)
- [x] Setiap card punya title, description, category badge
- [x] Animasi scroll horizontal
- [x] Responsive (mobile: full width, desktop: centered with max-width)
- [x] Tambah section anchor `#gallery`

## SEO Requirements
- [x] Setiap gambar punya `alt` text yang deskriptif (contain keyword "Taekwondo", "Visi Muda", "KKN", "Developer", etc.)
- [x] Section punya semantic `<section>` tag dengan `aria-label`
- [x] Pastikan gambar tidak terlalu besar (optimasi ukuran file jika perlu)
- [x] Gunakan `loading="lazy"` untuk gambar di bawah fold

## Acceptance Criteria
1. Gallery muncul sebagai section terpisah di halaman utama
2. Apple Cards Carousel menampilkan semua gambar dengan rapi
3. Card bisa di-scroll horizontal
4. Setiap card punya title, description, dan category
5. Navigasi anchor `#gallery` bekerja
6. Mobile responsive
7. `alt` text pada semua gambar deskriptif dan mengandung keyword

## Dependencies
- ISSUE-001 (Data Layer) — untuk data gallery
- ISSUE-002 (Apple Cards Carousel) — komponen carousel harus sudah terinstall

## Files to Create/Modify
- `components/Gallery.tsx` — CREATE
- `data/personal.ts` — pastikan data gallery sudah ada
