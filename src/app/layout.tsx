import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Clauni — Learn Claude AI. The only employee you'll ever need.",
  description:
    "Clauni teaches solopreneurs and freelancers how to use Claude AI to replace an entire team. Workflows, tutorials, and courses that turn Claude into your most valuable employee.",
  keywords: [
    "learn Claude AI",
    "Claude AI tutorials",
    "Claude AI courses",
    "Claude for solopreneurs",
    "Claude for freelancers",
    "AI workflows for business",
    "Claude Code tutorials",
    "how to use Claude AI",
    "AI productivity for solopreneurs",
    "one-person business with AI",
    "Claude AI training",
    "solopreneur AI workflows",
  ],
  openGraph: {
    title: "Clauni — Learn Claude AI. The only employee you'll ever need.",
    description:
      "Clauni teaches solopreneurs how to use Claude AI to replace an entire team. Workflows, tutorials, and courses that turn Claude into your most valuable employee.",
    url: "https://claudeuniversity.com",
    siteName: "Clauni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clauni — Learn Claude AI. The only employee you'll ever need.",
    description:
      "Clauni teaches solopreneurs how to use Claude AI to replace an entire team. Workflows, tutorials, and courses that turn Claude into your most valuable employee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageWrapper>
          <Navigation />
          <main className="relative z-10" style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
