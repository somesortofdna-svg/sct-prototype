import ProductMenu from "./components/product-menu/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Card Products & ID Solutions in India | Smart Chip Tree",
  description:
    "Explore Smart Chip Tree’s complete range of smart card products including smart cards, ID card printers, ribbons, readers, baggage scanners, and consumables. Reliable solutions for businesses across India.",
  keywords: [
    "smart cards India",
    "ID card printers India",
    "card printer ribbons",
    "RFID card readers India",
    "baggage scanners India",
    "ID card consumables",
    "Smart Chip Tree products",
  ],
  openGraph: {
    title: "Smart Card Products & ID Solutions in India | Smart Chip Tree",
    description:
      "Browse smart cards, printers, ribbons, readers, baggage scanners, and consumables for secure ID and access solutions in India.",
    url: "https://www.smartchiptree.com/products", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Card Products & ID Solutions in India | Smart Chip Tree",
    description:
      "Complete range of smart cards, printers, readers, ribbons, baggage scanners, and consumables for Indian businesses.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ProductsPage() {
  return <ProductMenu />;
}
