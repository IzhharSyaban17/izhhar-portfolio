# ISSUE-004: Revamp About Section — Two-Column Persona

## Description
Rebuild About section dengan dua kolom persona yang lebih jelas: kiri menampilkan **Developer Persona**, kanan menampilkan **Taekwondoin Persona**. Update semua konten dan fix data yang salah (Manager → Coach Visi Muda / Bidang Kepelatihan).

## Scope
- [x] Layout dua kolom: Developer (kiri) | Taekwondoin (kanan)
- [x] Setiap kolom punya icon, highlight, dan deskripsi spesifik
- [x] Kolom Developer: fokus ke tech stack, approach, tools
- [x] Kolom Taekwondoin: fokus ke coaching philosophy, prestasi, visi
- [x] Update card-item: "MANAJER KLUB" → "COACH VISI MUDA" dengan deskripsi "Bidang Kepelatihan"
- [x] Update narrative paragraph dengan data yang benar
- [x] Keep quote/blockquote (masih relevan)
- [x] Keep CTA button → bisa diarahkan ke `/details` atau ke `#gallery`
- [x] AnimatedGridPattern tetap ada sebagai background effect
- [x] Data diambil dari `data/personal.ts`

## Data Fixes (KRITIS)
| Old (Salah) | New (Benar) |
|-------------|-------------|
| Manager Visi Muda | Coach Visi Muda |
| (deskripsi) Manajer Klub | (deskripsi) Bidang Kepelatihan |
| Timeline KKN 2022 | Timeline KKN 2025 |

## Acceptance Criteria
1. Dua kolom persona tampil jelas dengan visual yang berbeda
2. Data "Coach Visi Muda / Bidang Kepelatihan" sudah benar
3. Narrative text akurat secara kronologis
4. Quote tetap relevan dan menguatkan dual identity
5. Background AnimatedGridPattern masih berfungsi
6. Mobile responsive (stack vertically on mobile)
7. Smooth scroll animation on view

## Dependencies
- ISSUE-001 (Data Layer) — wajib

## Files to Modify
- `components/About.tsx` — MAJOR REWRITE
