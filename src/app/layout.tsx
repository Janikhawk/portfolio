import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Janik Hawk",
    template: "%s | Janik Hawk",
  },
  description:
    "Senior Frontend Engineer specializing in Angular, React, and TypeScript. 8+ years building high-performance enterprise web applications across finance, healthcare, gaming, and government sectors.",
  keywords: [
    "Frontend Engineer",
    "Angular",
    "React",
    "TypeScript",
    "Web Development",
    "Senior Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
