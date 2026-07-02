# ISSUE-010: Update Navbar — Add Gallery & Certificates Links

## Description
Update Navbar untuk menambahkan link navigasi ke section baru: Gallery dan Certificates. Hapus link ke `/experience` (karena sudah dipindah ke main page). Update active section detection.

## Scope
- [x] Tambah nav link: "Gallery" → `#gallery`
- [x] Tambah nav link: "Certificates" → `#certificates`
- [x] Tambah nav link: "Experience" → `#experience` (internal, bukan external)
- [x] HAPUS link "Experience" yang mengarah ke `/experience` (sub-halaman sudah dihapus)
- [x] Update `sections` array di scroll detection untuk include section baru:
  ```ts
  const sections = ["home", "about", "skills", "projects", "experience", "gallery", "certificates", "work", "contact"];
  ```
- [x] Update icon untuk setiap link baru:
  - Gallery: `Camera` atau `Image` icon
  - Certificates: `Award` atau `Certificate` icon
  - Experience: `BookOpen` atau `History` icon
- [x] Pastikan smooth scroll ke anchor bekerja untuk section baru

## Navbar Links (Setelah Update)
```ts
const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: BookOpen },
  { name: "Gallery", href: "#gallery", icon: Camera },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];
```

## Acceptance Criteria
1. Navbar menampilkan semua link baru
2. Link lama `/experience` sudah dihapus (tidak ada broken link)
3. Klik link Gallery → scroll ke `#gallery`
4. Klik link Certificates → scroll ke `#certificates`
5. Klik link Experience → scroll ke `#experience`
6. Active section detection bekerja untuk semua section baru
7. Mobile menu juga menampilkan link baru
8. Icons sesuai dengan section masing-masing

## Dependencies
- ISSUE-007 (Gallery) — section harus sudah ada
- ISSUE-008 (Certificates) — section harus sudah ada
- ISSUE-009 (Timeline/Main) — section harus sudah ada

## Files to Modify
- `components/Navbar.tsx` — update nav links
