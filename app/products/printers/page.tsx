import Link from "next/link";
import printers from "./printers.json";
import "./printers.css";

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
