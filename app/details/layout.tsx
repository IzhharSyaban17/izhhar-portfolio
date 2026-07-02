import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri & Sertifikat",
  description:
    "Galeri dokumentasi proyek dan sertifikat Muhammad Izhhar Lubis — Web Developer, AI Enthusiast, dan Taekwondo Coach (Sabeum). Lihat jejak fisik kredibilitas.",
};

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
