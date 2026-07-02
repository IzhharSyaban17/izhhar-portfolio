import type { Metadata } from "next";
import { Rajdhani, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageLoader } from "@/components/ui/page-loader";
import { FloatingSocials } from "@/components/ui/floating-socials";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://izhhar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Izhhar Sya'ban Lubis | Web Developer & Taekwondo Coach",
    template: "%s | Izhhar Sya'ban Lubis",
  },
  description:
    "Portofolio Muhammad Izhhar Lubis — Web Developer & Taekwondo Coach (Sabeum). Mahasiswa Sistem Informasi UIN Jakarta, full-stack Laravel & React.",
  keywords: [
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Taekwondo Coach",
    "Sabeum",
    "Visi Muda Club",
    "Izhhar Lubis",
    "Portofolio",
    "Full Stack Developer",
    "Indonesia",
    "UIN Jakarta",
    "AI Enthusiast",
    "Data Analyst",
    "PHP",
    "Tailwind CSS",
  ],
  authors: [{ name: "Muhammad Izhhar Sya'ban Lubis" }],
  creator: "Izhhar Sya'ban Lubis",
  publisher: "Izhhar Sya'ban Lubis",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Izhhar Sya'ban Lubis",
    title: "Izhhar Sya'ban Lubis | Web Developer & Taekwondo Coach",
    description:
      "Portofolio Muhammad Izhhar Lubis — Web Developer & Taekwondo Coach (Sabeum). Mahasiswa Sistem Informasi UIN Jakarta, full-stack Laravel & React.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Izhhar Sya'ban Lubis - Web Developer & Taekwondo Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izhhar Sya'ban Lubis | Web Developer & Taekwondo Coach",
    description:
      "Portofolio Muhammad Izhhar Lubis — Web Developer & Taekwondo Coach (Sabeum). Mahasiswa Sistem Informasi UIN Jakarta, full-stack Laravel & React.",
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("font-sans", geist.variable)}>
      <body
        className={`${geist.variable} ${rajdhani.variable} font-sans antialiased`}
      >
        <PageLoader />
        <CustomCursor />
        <FloatingSocials />
        {children}
      </body>
    </html>
  );
}
