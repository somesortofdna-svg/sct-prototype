import readers from "./readers.json";
import "../printers/printers.css";

const CATEGORY_LABELS: Record<string, string> = {
  usb: "USB Smart Card Readers",
  contactless: "Contactless Readers",
  desktop: "Multi-Technology Readers",
  consumables: "Printer/Reader Consumables"
};

export default function ReadersPage() {
  const groupedReaders = readers.reduce<Record<string, typeof readers>>(
    (acc, reader) => {
      if (!acc[reader.category]) acc[reader.category] = [];
      acc[reader.category].push(reader);
      return acc;
    },
    {}
  );

  return (
    <section className="printers-section">
      {Object.entries(groupedReaders).map(([category, readersInCategory]) => (
        <div
          key={category}
          id={category}
          className="category-section"
        >
          <h2 className="section-title">
            {CATEGORY_LABELS[category] ?? category}
          </h2>

          <div className="printers-grid">
            {readersInCategory.map((reader) => (
              <div key={reader.slug} className="printer-card">
                <div className="printer-image">
                  <img
                    src={`/readers/${reader.slug}/1.png`}
                    alt={reader.name}
                  />
                </div>

                <div className="printer-content">
                  <h3>{reader.name}</h3>
                  <p>{reader.description}</p>

                  <a
                    href={`/contact?product=${encodeURIComponent(
                      reader.name
                    )}`}
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

      {/* Bottom CTA — same global one */}
      <div className="printers-inquiry">
        <p>Looking for a specific smart card reader?</p>
        <a href="/contact" className="inquiry-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}
