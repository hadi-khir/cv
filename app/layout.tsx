import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hadi Khir",
  description: "Hadi Khir's resume/CV, including a background, skills, and experience section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={figtree.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
