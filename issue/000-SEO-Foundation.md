# ISSUE-000: SEO Foundation — Metadata, Sitemap, Robots, Open Graph & JSON-LD

## Description
Setup infrastruktur SEO lengkap untuk mencapai skor 90+ di Lighthouse/PageSpeed Insights. Mencakup metadata global, per-page metadata, Open Graph, Twitter Cards, sitemap.xml, robots.txt, JSON-LD structured data, canonical URLs, dan favicon/icon configuration.

## Scope
- [x] Root layout metadata diperkaya (title template, description, keywords, viewport, color-scheme, theme-color, category)
- [x] `app/sitemap.ts` — dynamic sitemap mencakup semua halaman
- [x] `app/robots.ts` — robots.txt generator
- [x] `app/opengraph-image.tsx` — OG image generator (built-in Next.js)
- [x] `app/twitter-image.tsx` — Twitter card image
- [x] JSON-LD structured data components (Person, WebSite, BreadcrumbList)
- [x] Per-page metadata untuk semua halaman (home, details, experience)
- [x] Canonical URL setup
- [x] PWA manifest jika memungkinkan

## Acceptance Criteria
1. Lighthouse SEO score: **90+**
2. All pages have unique `<title>` and `<meta name="description">`
3. Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) present on all pages
4. Twitter Card tags (`twitter:card`, `twitter:image`, `twitter:title`, `twitter:description`) present
5. `sitemap.xml` accessible at `/sitemap.xml` with all pages listed
6. `robots.txt` accessible at `/robots.txt` allowing all crawlers, pointing to sitemap
7. JSON-LD structured data present on homepage:
   - `Person` schema (name, jobTitle, description, image, url, sameAs, knowsAbout)
   - `WebSite` schema (name, url, description, inLanguage)
   - `BreadcrumbList` schema
8. Canonical URL tags present on all pages
9. `<html lang="id">` maintained
10. Favicon/icon working (`/icon.svg`)

## Technical Notes
- Next.js 16 supports `generateMetadata()` for dynamic metadata
- OG image can use `@vercel/og` or simpler: just ensure `opengraph-image.tsx` exists (Next.js built-in)
- JSON-LD can be inserted as `<script type="application/ld+json">` via a React component
- For structured data, use `dangerouslySetInnerHTML` with JSON stringify
- Pastikan `metadataBase` di set ke URL production

## Dependencies
None — this is the first issue to implement

## Files to Create/Modify
- `app/layout.tsx` — enrich root metadata
- `app/sitemap.ts` — CREATE
- `app/robots.ts` — CREATE
- `app/opengraph-image.tsx` — CREATE
- `app/twitter-image.tsx` — CREATE
- `components/JsonLd.tsx` — CREATE (structured data component)
- `app/page.tsx` — add JsonLd
- `app/details/page.tsx` — add metadata export (change to server component or add metadata)
- `app/experience/page.tsx` — add metadata export
