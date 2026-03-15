import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clauni — The only hire you'll ever need.",
  description:
    "Tutorials, workflows, and courses that teach solopreneurs how to use Claude to do the work of an entire team.",
  openGraph: {
    title: "Clauni — The only hire you'll ever need.",
    description:
      "Tutorials, workflows, and courses that teach solopreneurs how to use Claude to do the work of an entire team.",
    url: "https://claudeuniversity.com",
    siteName: "Clauni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clauni — The only hire you'll ever need.",
    description:
      "Tutorials, workflows, and courses that teach solopreneurs how to use Claude to do the work of an entire team.",
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
