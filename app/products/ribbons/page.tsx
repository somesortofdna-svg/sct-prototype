import Link from "next/link";
import ribbons from "./ribbons.json";
import "../printers/printers.css"; // 👈 reuse SAME css
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ID Card Printer Ribbons in India | Entrust, Zebra, Fargo Ribbons | Smart Chip Tree",
  description:
    "Buy genuine ID card printer ribbons for Entrust, Zebra, Fargo and other leading brands. High-quality YMCKO, monochrome and specialty ribbons available across India from Smart Chip Tree.",
  keywords: [
    "ID card printer ribbons India",
    "YMCKO ribbon India",
    "Entrust ribbon",
    "Zebra ribbon India",
    "Fargo printer ribbon",
    "card printer consumables India",
    "Smart Chip Tree ribbons",
  ],
  openGraph: {
    title: "Card Printer Ribbons in India | Smart Chip Tree",
    description:
      "Original YMCKO and monochrome ribbons for major ID card printer brands. Reliable supply across India.",
    url: "https://www.smartchiptree.com/products/ribbons", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ID Card Printer Ribbons India | Smart Chip Tree",
    description:
      "Shop genuine printer ribbons for Entrust, Zebra, Fargo and more. Fast supply across India.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const CATEGORY_LABELS: Record<string, string> = {
  Colour: "Color Ribbons",
  Lamination_Retransfer_Film: "Lamination & Retransfer Films",
  Monochrome: "Monochrome Ribbons"
};

export default function RibbonsPage() {
  const groupedRibbons = ribbons.reduce<Record<string, typeof ribbons>>(
    (acc, ribbon) => {
      if (!acc[ribbon.category]) acc[ribbon.category] = [];
      acc[ribbon.category].push(ribbon);
      return acc;
    },
    {}
  );

  return (
    <section className="printers-section">
      {Object.entries(groupedRibbons).map(([category, items]) => (
        <div
          key={category}
          id={category}
          className="category-section"
        >
          <h2 className="section-title">
            {CATEGORY_LABELS[category] ?? category}
          </h2>

          <div className="printers-grid">
            {items.map((ribbon) => (
              <Link
                key={ribbon.slug}
                href={`/product/ribbons/${ribbon.slug}`}
                className="printer-card"
              >
                <div className="printer-image">
                  <img
                    src={`/ribbons/${ribbon.slug}/1.png`}
                    alt={ribbon.name}
                  />
                </div>

                <div className="printer-content">
                  <h3>{ribbon.name}</h3>
                  <p>{ribbon.description}</p>
                  <a href={`/contact?product=${encodeURIComponent(ribbon.name)}`} className="inquiry-btn" style={{ marginTop: "12px" }}>
                    Inquire
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* SAME CTA */}
      <div className="printers-inquiry">
        <p>Want to inquire about a specific product?</p>
        <a href="/contact" className="inquiry-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}
