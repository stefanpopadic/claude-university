import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude University - Master AI for Your Business",
  description:
    "Learn to use Claude, Claude Code, and AI workflows to 10x your business. For freelancers, solopreneurs, and founders who want to scale without hiring.",
  openGraph: {
    title: "Claude University - Master AI for Your Business",
    description:
      "Learn to use Claude, Claude Code, and AI workflows to 10x your business.",
    url: "https://claudeuniversity.com",
    siteName: "Claude University",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude University - Master AI for Your Business",
    description:
      "Learn to use Claude, Claude Code, and AI workflows to 10x your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
