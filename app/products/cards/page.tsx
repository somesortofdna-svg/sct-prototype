import cards from "./cards.json";
import "../printers/printers.css";

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
