import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Rajdhani, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Izhhar Sya'ban Lubis | Portofolio",
  description: "Portofolio Web Developer & Data Analyst",
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
        {children}
      </body>
    </html>
  );
}
