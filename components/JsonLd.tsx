const siteUrl = "https://izhhar.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Izhhar Sya'ban Lubis",
  alternateName: "Izhhar Lubis",
  givenName: "Muhammad Izhhar",
  familyName: "Sya'ban Lubis",
  jobTitle: ["Web Developer", "Taekwondo Coach (Sabeum)", "AI Enthusiast"],
  description:
    "Web Developer & Taekwondo Coach. Mahasiswa Sistem Informasi UIN Jakarta yang memadukan logika kode dengan disiplin kepemimpinan taekwondo.",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  sameAs: [
    "https://github.com/izhhar",
    "https://linkedin.com/in/izhhar",
    "https://www.instagram.com/iz_sybn/",
    "https://www.tiktok.com/@ijaarajaa",
  ],
  knowsAbout: [
    "Web Development",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "PostgreSQL",
    "Taekwondo",
    "Data Analysis",
    "AI",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UIN Syarif Hidayatullah Jakarta",
  },
  memberOf: [
    {
      "@type": "Organization",
      name: "Visi Muda Club",
      description: "Bidang Kepelatihan Taekwondo",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Izhhar Sya'ban Lubis",
  url: siteUrl,
  description:
    "Portofolio Web Developer, AI Enthusiast, dan Taekwondo Coach.",
  inLanguage: "id",
  author: {
    "@type": "Person",
    name: "Muhammad Izhhar Sya'ban Lubis",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: siteUrl,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
