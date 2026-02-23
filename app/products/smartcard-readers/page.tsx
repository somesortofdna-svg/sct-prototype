import readers from "./readers.json";
import "../printers/printers.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Card Readers in India | Contact & Contactless Readers | Smart Chip Tree",
  description:
    "Explore smart card readers for secure authentication across India. Contact, contactless, and dual-interface readers from leading brands available at Smart Chip Tree.",
  keywords: [
    "smart card readers India",
    "contactless card reader India",
    "USB smart card reader",
    "dual interface card reader India",
    "RFID card reader India",
    "access control readers India",
    "Smart Chip Tree readers",
  ],
  openGraph: {
    title: "Smart Card & RFID Readers in India | Smart Chip Tree",
    description:
      "High-performance contact and contactless smart card readers for authentication, access control, and ID solutions across India.",
    url: "https://www.smartchiptree.com/products/readers", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Card Readers India | Smart Chip Tree",
    description:
      "Reliable contact, contactless, and dual-interface smart card readers for modern security systems.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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
