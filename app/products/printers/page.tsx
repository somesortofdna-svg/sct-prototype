import Link from "next/link";
import printers from "./printers.json";
import "./printers.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ID Card Printers in India | Entrust, Zebra, Fargo Card Printers | Smart Chip Tree",
  description:
    "Explore direct-to-card and retransfer ID card printers from leading brands like Entrust, Zebra, Fargo and more. Smart Chip Tree supplies reliable, high-quality card printing solutions across India.",
  keywords: [
    "ID card printers India",
    "Entrust card printers",
    "Zebra card printers India",
    "Fargo ID card printers",
    "direct to card printers India",
    "retransfer card printers India",
    "plastic card printer suppliers India",
    "Smart Chip Tree printers",
  ],
  openGraph: {
    title: "ID Card Printers in India | Entrust, Zebra, Fargo | Smart Chip Tree",
    description:
      "Shop professional direct-to-card and retransfer ID card printers from top global brands. Trusted supply across India.",
    url: "https://www.smartchiptree.com/products/card-printers", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ID Card Printers in India | Smart Chip Tree",
    description:
      "High-performance card printers from Entrust, Zebra, Fargo and more — ideal for secure ID and badge printing in India.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const CATEGORY_LABELS: Record<string, string> = {
  desktop: "Desktop ID/Direct-To-Card Printers",
  retransfer: "Retransfer Printers",
  card: "Card Printers",
  others: "Other Printers"
};

export default function PrintersPage() {
  const groupedPrinters = printers.reduce<Record<string, typeof printers>>(
    (acc, printer) => {
      if (!acc[printer.category]) {
        acc[printer.category] = [];
      }
      acc[printer.category].push(printer);
      return acc;
    },
    {}
  );

  return (
    <section className="printers-section">
      {Object.entries(groupedPrinters).map(
        ([category, printersInCategory]) => (
          <div key={category} id={category} className="category-section">
            <h2 className="section-title">
              {CATEGORY_LABELS[category] ?? category}
            </h2>

            <div className="printers-grid">
              {printersInCategory.map((printer) => (
                <Link
                  key={printer.slug}
                  href={`/products/printers/pr-pages/${printer.slug}`}
                  className="printer-card"
                >
                  <div className="printer-image">
                    <img
                      src={`/printers2/${printer.slug}/1.jpg`}
                      alt={printer.name}
                    />
                  </div>

                  <div className="printer-content">
                    <h3>{printer.name}</h3>
                    <p>{printer.description}</p>
                    <span className="view-details">View Details</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      )}
      <div className="printers-inquiry">
        <p>Want to inquire about a specific product?</p>
        <a href="/contact" className="inquiry-btn">
        Contact Us
        </a>
      </div>

    </section>
  );
}
