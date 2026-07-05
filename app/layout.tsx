import type { Metadata } from "next";
import { JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SkipNav from "@/components/SkipNav";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Google Fonts via next/font (hashed, no layout shift)
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Clash Display + Satoshi are served via Fontshare (not Google Fonts).
// They're @import-ed at the top of globals.css which is the right place
// since Next.js doesn't natively support non-Google font providers.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lolhidominic",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`}>
      <body>
        <SkipNav />
        <NavBar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
