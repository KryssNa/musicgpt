import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: "MusicGpt Take home assessment",
  description: "MusicGpt Take home assessment",
  icons: {
    icon: '/assets/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
