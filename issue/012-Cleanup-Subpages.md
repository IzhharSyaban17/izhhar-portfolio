# ISSUE-012: Cleanup — Remove Sub-pages & Update Details Page

## Description
Bersihkan proyek dari file-file yang tidak lagi diperlukan setelah migrasi ke single-page. Hapus sub-halaman `/experience`, update `/details` page jika perlu, dan pastikan tidak ada broken imports/links.

## Scope
- [x] Hapus `app/experience/page.tsx`
- [x] Hapus folder `app/experience/` jika sudah kosong
- [x] Update `app/details/page.tsx`:
  - Pastikan masih memiliki metadata (dari ISSUE-000)
  - Update link "Kembali ke Beranda" → `/#gallery` atau `/#about`
  - Pastikan tidak ada duplikasi dengan Gallery section di main page
  - Bisa dipertahankan sebagai halaman detail terpisah, atau diarahkan ke homepage
- [x] Cek tidak ada import dari `@/app/experience` atau path yang sudah dihapus
- [x] Cek tidak ada broken links di seluruh komponen
- [x] Update Footer jika ada link ke `/experience`

## Decision: Apakah `/details` tetap ada?
- `/details` page berisi Dokumentasi + Sertifikat dalam bentuk Tabs
- Karena kita sudah punya Gallery + Certificates di main page, `/details` bisa:
  - **Option A**: Tetap ada sebagai halaman detail dengan konten yang lebih lengkap
  - **Option B**: Dialihkan (redirect) ke `/#gallery`
  - **Saran**: Tetap ada, tapi kontennya dijadikan versi lebih detail dari Gallery section

## Acceptance Criteria
1. File `app/experience/page.tsx` sudah dihapus
2. Tidak ada import error di terminal
3. `npm run build` sukses tanpa error
4. Tidak ada broken links di Navbar, Footer, atau komponen lain

## Dependencies
- ISSUE-009 (Timeline moved to main)
- ISSUE-010 (Navbar updated)

## Files to Modify/Delete
- `app/experience/page.tsx` — DELETE
- `app/experience/` — DELETE folder if empty
- `app/details/page.tsx` — UPDATE (optional)
- `components/Footer.tsx` — check for `/experience` link
