import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude University — Master AI. Scale Solo.",
  description:
    "Courses, workflows, and tools to help freelancers and solopreneurs use Claude to do the work of a 5-person team. No coding required.",
  openGraph: {
    title: "Claude University — Master AI. Scale Solo.",
    description:
      "Courses, workflows, and tools to help freelancers and solopreneurs use Claude to do the work of a 5-person team.",
    url: "https://claudeuniversity.com",
    siteName: "Claude University",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude University — Master AI. Scale Solo.",
    description:
      "Courses, workflows, and tools to help freelancers and solopreneurs use Claude to do the work of a 5-person team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
