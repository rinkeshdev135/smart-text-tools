import { generatePageMetadata } from "@/lib/metadata";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata = generatePageMetadata({
  title: "SmartTextTools | Free Online Text Utility Tools",
  description:
    "Clean, convert, format, and analyze text instantly with SEO-friendly text utilities built for speed."
});

export default function HomePage() {
  return <HomePageClient />;
}
