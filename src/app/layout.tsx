import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emilia Marcovici — Artist",
  description:
    "Contemporary art by Emilia Marcovici. Paintings, portraits, and mixed media from Vienna.",
  openGraph: {
    title: "Emilia Marcovici — Artist",
    description:
      "Contemporary art by Emilia Marcovici. Paintings, portraits, and mixed media from Vienna.",
    type: "website",
    url: "https://emiliamarcovici.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
