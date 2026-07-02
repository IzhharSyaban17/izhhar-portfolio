# ISSUE-005: Revamp Skills Section — Restructured Categories

## Description
Restrukturisasi Skills section dengan kategori yang lebih terorganisir. Tambah kategori AI Enthusiast dan pertegas pemisahan antara Dev Skills dan Taekwondo/Leadership Skills.

## Scope
- [x] Update skill categories di data layer
- [x] Tambah kategori **AI & Future Tech** (baru)
- [x] Kategori yang diupdate:
  1. **Web Development** (Laravel, PHP, React, Next.js, Tailwind, TypeScript, JavaScript, Bootstrap, Vue)
  2. **Data & Analytics** (PostgreSQL, PostGIS, Tableau, Pentaho, Excel, Google Sheets)
  3. **AI & Machine Learning** (Prompt Engineering, AI Tools, Python basics — sesuai AI Enthusiast)
  4. **Taekwondo & Leadership** (Taekwondo Coaching, Club Management — Bidang Kepelatihan, Event Organizing)
  5. **Creative & Social Media** (Video Editing, Content Strategy, Social Media Management)
- [x] Update slug list untuk IconCloud (tambah AI-related icons jika ada)
- [x] Pastikan semua data dari `data/personal.ts`

## Acceptance Criteria
1. 5 kategori skills tampil dengan rapi
2. Kategori AI & Future Tech adalah kategori baru yang belum ada sebelumnya
3. IconCloud masih menampilkan tech stack icons
4. Level chips (Expert/Advanced/Intermediate) masih berfungsi
5. Mobile responsive (2 kolom di tablet, 1 kolom di mobile)
6. Animasi scroll/stagger masih berfungsi

## Dependencies
- ISSUE-001 (Data Layer) — wajib

## Files to Modify
- `components/Skills.tsx` — update konten
- `data/personal.ts` — update skill data
