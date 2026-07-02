# ISSUE-006: Revamp Projects Section — Add TKD VisiMuda

## Description
Update Projects section dengan menambahkan project **TKD VisiMuda (2025)** sebagai project utama/pertama. Project ini adalah platform manajemen klub taekwondo yang dibangun untuk Visi Muda Club.

## Scope
- [x] Tambah project TKD VisiMuda ke data layer sebagai project index 0 (paling atas)
- [x] Data project TKD VisiMuda:
  - Title: "VisiMudaClub — TKD Management"
  - Description: Platform terintegrasi untuk manajemen data atlet, jadwal latihan, progres kenaikan sabuk, dan pendaftaran turnamen Taekwondo untuk Visi Muda Club.
  - Tags: ["LARAVEL", "PHP", "MYSQL", "TAILWIND"]
  - URL: https://tkd-visimuda.web.id/
  - Accent: gold (karena ini project utama personal)
- [x] Pastikan data dari `data/personal.ts`
- [x] Keep existing projects + content strategy section
- [x] SEO: Pastikan project cards punya `alt` text yang deskriptif pada gambar (jika ada)
- [x] Pastikan link TKD VisiMuda terbuka di tab baru (`target="_blank"`)

## Data TKD VisiMuda
```ts
{
  title: "VisiMudaClub — TKD Management",
  description: "Platform terintegrasi untuk mengelola data atlet, memantau jadwal latihan reguler, melacak progres kenaikan sabuk, hingga manajemen turnamen Taekwondo.",
  tags: ["LARAVEL", "PHP", "MYSQL", "TAILWIND"],
  href: "https://tkd-visimuda.web.id/",
  icon: Server,
  accent: "border-gold/20 hover:border-gold",
  iconBg: "text-gold group-hover:bg-gold group-hover:text-dark",
  label: "FULL STACK",
  labelColor: "text-gold bg-gold/[0.08] border-gold/20",
}
```

## Acceptance Criteria
1. Project TKD VisiMuda muncul sebagai card pertama (paling kiri/atas)
2. Link menuju https://tkd-visimuda.web.id/ bekerja dan terbuka di tab baru
3. Semua project lain tetap ada dan tidak berubah
4. Content strategy section (TikTok/Instagram) tetap di bawah
5. Data berasal dari `data/personal.ts`

## Dependencies
- ISSUE-001 (Data Layer) — wajib

## Files to Modify
- `data/personal.ts` — update projects array
- `components/Project.tsx` — minor update jika perlu (tapi idealnya data dari data layer)
