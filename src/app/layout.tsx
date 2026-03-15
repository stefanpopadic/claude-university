import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clauni — The only employee you'll ever need.",
  description:
    "Clauni is your AI employee. It writes proposals, builds apps, creates content, and runs operations — so you never have to hire again.",
  keywords: [
    "AI employee",
    "AI assistant for business",
    "AI for solopreneurs",
    "AI for freelancers",
    "hire AI instead of employees",
    "Claude AI automation",
    "one-person business AI",
    "AI that does the work",
    "solopreneur AI tools",
    "replace hiring with AI",
  ],
  openGraph: {
    title: "Clauni — The only employee you'll ever need.",
    description:
      "Stop hiring. Start shipping. Clauni is the AI employee that writes proposals, builds apps, creates content, and runs your business.",
    url: "https://claudeuniversity.com",
    siteName: "Clauni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clauni — The only employee you'll ever need.",
    description:
      "Stop hiring. Start shipping. Clauni is the AI employee that writes proposals, builds apps, creates content, and runs your business.",
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
