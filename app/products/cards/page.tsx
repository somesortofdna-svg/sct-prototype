import cards from "./cards.json";
import "../printers/printers.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Cards & PVC Cards in India | Contactless Cards | Smart Chip Tree",
  description:
    "Premium PVC cards, smart cards, contactless cards, and card consumables from leading global brands. Smart Chip Tree delivers secure, high-quality card solutions for businesses and government projects across India.",
  keywords: [
    "PVC cards India",
    "smart cards India",
    "contactless cards India",
    "RFID smart cards",
    "ID card consumables",
    "smart card suppliers India",
    "Smart Chip Tree smart cards",
  ],
  openGraph: {
    title: "Smart Cards & PVC Cards in India | Contactless Cards | Smart Chip Tree",
    description:
      "Explore PVC cards, smart cards, contactless cards, and consumables from top brands. Trusted smart card solutions across India.",
    url: "https://www.smartchiptree.com/products/smart-cards", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Cards & PVC Cards in India | Smart Chip Tree",
    description:
      "High-quality PVC, smart, and contactless cards from leading brands for secure ID and access solutions in India.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const CATEGORY_LABELS: Record<string, string> = {
  pvc: "PVC Cards",
  smart: "Smart Cards",
  contactless: "Contactless Cards",
  consumables: "Card Consumables"
};

export default function CardsPage() {
  const groupedCards = cards.reduce<Record<string, typeof cards>>(
    (acc, card) => {
      if (!acc[card.category]) acc[card.category] = [];
      acc[card.category].push(card);
      return acc;
    },
    {}
  );

  return (
    <section className="printers-section">
      {Object.entries(groupedCards).map(([category, cardsInCategory]) => (
        <div
          key={category}
          id={category}
          className="category-section"
        >
          <h2 className="section-title">
            {CATEGORY_LABELS[category] ?? category}
          </h2>

          <div className="printers-grid">
            {cardsInCategory.map((card) => (
              <div key={card.slug} className="printer-card">
                <div className="printer-image">
                  <img
                    src={`/cards/${card.slug}/1.png`}
                    alt={card.name}
                  />
                </div>

                <div className="printer-content">
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>

                  <a
                    href={`/contact?product=${encodeURIComponent(card.name)}`}
                    className="inquiry-btn"
                    style={{ marginTop: "12px" }}
                  >
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bottom CTA — same global pattern */}
      <div className="printers-inquiry">
        <p>Looking for a specific card solution?</p>
        <a href="/contact" className="inquiry-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}
