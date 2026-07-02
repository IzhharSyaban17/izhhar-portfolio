# ISSUE-011: Update Page Layout — Reorder Sections in `app/page.tsx`

## Description
Update `app/page.tsx` untuk mengatur ulang urutan section sesuai dengan flow single-page yang baru. Tambahkan section baru (Gallery, Certificates, Experience) dan hapus import yang tidak diperlukan.

## Scope
- [x] Import semua komponen baru:
  - `Experience` dari `@/components/Experience`
  - `Gallery` dari `@/components/Gallery`
  - `Certificates` dari `@/components/Certificates`
- [x] Hapus import yang tidak lagi digunakan (CaseStudies mungkin tetap, atau diubah)
- [x] Susunan section (top to bottom):
  1. Navbar
  2. Hero (`#home`)
  3. Stats
  4. About (`#about`)
  5. Skills (`#skills`)
  6. Projects (`#projects`)
  7. Experience (`#experience`) — PINDAHKAN KE SINI
  8. Gallery (`#gallery`) — BARU
  9. Certificates (`#certificates`) — BARU
  10. Case Studies / Work (`#work`)
  11. Contact (`#contact`)
  12. Footer
- [x] Tambah JSON-LD structured data component
- [x] Pastikan semua anchor id konsisten dengan Navbar

## Full Page Structure
```tsx
export default function Home() {
  return (
    <main className="bg-dark min-h-screen text-white scroll-smooth relative overflow-x-hidden">
      <JsonLd />
      <Navbar />
      <div id="home"><Hero /></div>
      <Stats />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="gallery"><Gallery /></div>
      <div id="certificates"><Certificates /></div>
      <div id="work"><CaseStudies /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}
```

## Acceptance Criteria
1. Semua section muncul dalam urutan yang benar
2. Semua anchor id sesuai dengan Navbar links
3. Tidak ada import yang gagal
4. JSON-LD ter-render di DOM
5. Build sukses (TypeScript + lint passed)

## Dependencies
- ISSUE-000 (SEO) — JsonLd component
- ISSUE-003 (Hero)
- ISSUE-004 (About)
- ISSUE-005 (Skills)
- ISSUE-006 (Projects)
- ISSUE-007 (Gallery)
- ISSUE-008 (Certificates)
- ISSUE-009 (Experience/Timeline)

## Files to Modify
- `app/page.tsx` — reorder sections, add imports
