import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} | Free Online Text Utility Tools`,
  description: siteConfig.description
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
