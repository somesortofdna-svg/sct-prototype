import Link from "next/link";
import ribbons from "./ribbons.json";
import "../printers/printers.css"; // 👈 reuse SAME css

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
