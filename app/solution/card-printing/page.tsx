'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import "./card.css";

export default function CardPrintingPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const slide = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth"
    });
  };

  const cardProducts = [
    { label: "ID Card Printers", href: "/products/id-card-printers" },
    { label: "Smart Card Printers", href: "/products/smart-card-printers" },
    { label: "Retransfer Printers", href: "/products/retransfer-printers" },
    { label: "Card Encoding Modules", href: "/products/card-encoding" },
    { label: "Printer Consumables", href: "/products/card-consumables" }
  ];

  return (
    <>
      <Head>
        <title>Card Printing Solutions | Secure ID & Smart Cards</title>
        <meta
          name="description"
          content="Enterprise-grade card printing solutions for secure identification, access control, and credential issuance."
        />
      </Head>

      <Navbar />

      <main className="access-page">

        {/* HERO */}
        <section className="access-hero reveal">
          <div className="container">

          <h1>Card Printing Solutions</h1>
          <h3>Secure. Durable. Professionally Issued Credentials.</h3>

          <p>
            Our card printing solutions enable organizations to issue secure,
            high-quality identification credentials for access control,
            identity management, and operational security. Designed for
            enterprise and institutional deployments.
          </p>
          </div>
        </section>

        {/* ID CARD PRINTERS */}
        <section id="card-services" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>Card Services</h2>
            <p className="section-lead">
              Comprehensive card lifecycle services engineeered for security, precision, and operational efficiency.
            </p>
            </div>

            <div className="feature-grid">
              <span>End-to-end card lifecycle management from design to deployment</span>
              <span>Secure encoding, personalization, and data validation workflows</span>
              <span>Custom materials, finishes, and security enhancements</span>
              <span>Batch and on-demand issuance tailored to enterprise needs</span>
              <span>SLA-driven production with strict quality control standards</span>
            </div>
          </div>
        </section>

        {/* SMART CARD */}
        <section id="cloud-based-id-printing" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>Cloud-Based ID Printing</h2>
            <p className="section-lead">
              A secure, cloud-connected ID issuance infrastructure designed for distributed and multi-site enterprises.
            </p>
            </div>

            <div className="feature-grid">
              <span>Encrypted cloud-based ID printing platform</span>
              <span>Centralized control with remote issuance capabilities</span>
              <span>Role-based access and real-time audit logging</span>
              <span>Seamless multi-location deployment</span>
              <span>Scalable architecture built for growth</span>
            </div>
          </div>
        </section>

        {/* RETRANSFER */}
        <section id="id-badges-smart-cards" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>ID Badges & Smart Cards</h2>
            <p className="section-lead">
              High-performance smart credentials combining durability, advanced security, and customization flexibility.
            </p>
            </div>

            <div className="feature-grid">
              <span>PVC, PET, composite, and eco-friendly card options</span>
              <span>RFID, NFC, dual-interface, and contact chip technologies</span>
              <span>Advanced security features: holograms, UV print, microtext</span>
              <span>Precision personalization aligned to global standards</span>
              <span>Built for long-term durability in demanding environments</span>
            </div>
          </div>
        </section>

        {/* CONSUMABLES */}
        <section id="financial-instant-issuance" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>Financial Instant Issuance</h2>
            <p className="section-lead">
              Secure, branch-level instant card issuance systems built for speed, compliance, and fraud prevention.
            </p>
            </div>

            <div className="feature-grid">
              <span>EMV-compliant chip encoding and personalization</span>
              <span>Secure printer and encoder integration</span>
              <span>Core banking system compatibility</span>
              <span>Encrypted issuance workflows</span>
              <span>Rapid deployment with enterprise-grade support</span>
            </div>
          </div>
        </section>
        <section id="high-volume-id-card-printing" className="access-section reveal alt"> 
          <div className="container grid-2">
            <div>
            <h2>High-Volume ID Card Printing</h2>
            <p className="section-lead">
              Industrial-scale ID card production delivering consistency, accuracy, and reliable turnaround at scale.
            </p>
            </div>

            <div className="feature-grid">
              <span>Automated high-volume production lines</span>
              <span>Encoding, verification, and quality assurance checkpoints</span>
              <span>Color-accurate, high-resolution print precision</span>
              <span>Custom sorting, packaging, and bulk fulfillment</span>
              <span>Optimized turnaround with guaranteed quality standards</span>
            </div>
          </div>
        </section>

        {/*service*/}
        <div style={{ textAlign: "center" }}>
          <Link href="/services">
           &larr; <u>Back to Services</u>
          </Link>
        </div>

        {/* CTA */}
        <section className="access-cta reveal">
          <div className="container">
          <h2>Build Your Card Issuance System</h2>
          <p>
            Deploy secure, scalable card printing solutions tailored to your
            organization.
          </p>
          <Link href="/contact" className="contact-btn">
            Contact Us
          </Link>
          </div>
        </section>

      </main>
    </>
  );
}
