import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/FloatingParticles";
import InteractiveBackground from "@/components/InteractiveBackground";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <InteractiveBackground />
        <FloatingParticles />
        {children}
      </body>
    </html>
  );
}
