import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SkipNav from "@/components/SkipNav";

// Display: bold, high-contrast, slightly condensed. Carries the headlines.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

// Body: clean and readable without feeling sterile.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

// Accent: an editorial serif for pull quotes and texture.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | ${site.shortName}`,
    description: site.tagline,
    url: site.url,
    siteName: site.shortName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.shortName}`,
    description: site.tagline,
    creator: "@lolhidominic",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable} ${newsreader.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <SkipNav />
        <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
