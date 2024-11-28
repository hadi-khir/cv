import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Figtree } from 'next/font/google';

export const gothamLight = localFont({
  src: "./fonts/GothamLight.otf",
  variable: "--font-gotham-light",
  weight: "100 900",
})

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
