# ISSUE-002: Install Apple Cards Carousel from Aceternity UI

## Description
Install komponen Apple Cards Carousel dari Aceternity UI (free/copy-paste component) untuk digunakan di Gallery section. Komponen ini menampilkan card yang bisa di-scroll secara horizontal dengan preview gambar besar saat aktif.

## Scope
- [x] Buka source code Apple Cards Carousel dari aceternity.com (free tier)
- [x] Copy paste komponen ke `components/ui/aceternity/apple-cards-carousel.tsx`
- [x] Copy paste CSS/dependencies yang diperlukan
- [x] Sesuaikan import path dengan struktur project
- [x] Test komponen bisa dirender tanpa error

## Technical Notes
- Apple Cards Carousel adalah free component dari Aceternity — tidak perlu all-access pass
- Component biasanya membutuhkan `framer-motion` (sudah terinstall)
- Perhatikan dependency: `@emotion/react` atau utility classes — sesuaikan dengan Tailwind v4
- Pastikan komponen bisa menerima custom data array
- Jika ada konflik Tailwind, sesuaikan class names dengan Tailwind v4

## Dependencies
- `framer-motion` (already installed)
- `motion` (already installed)

## Files to Create/Modify
- `components/ui/aceternity/apple-cards-carousel.tsx` — CREATE
- `app/globals.css` — mungkin perlu tambah keyframes/utilities

## Acceptance Criteria
1. Komponen terinstall tanpa error TypeScript
2. Bisa menerima array data gambar + teks
3. Animasi scroll horizontal berfungsi
4. Preview card aktif menampilkan gambar besar
5. Responsive di mobile & desktop
