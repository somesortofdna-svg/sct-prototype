'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import "./rfid.css";

export default function RFIDPage() {
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

  const rfidProducts = [
    { label: "Custom RFID Tags", href: "/products/custom-rfid-tags" },
    { label: "Embeddable RFID Tags", href: "/products/embeddable-rfid-tags" },
    { label: "Hardened RFID Tags", href: "/products/hardened-rfid-tags" },
    { label: "On-Metal RFID Tags", href: "/products/on-metal-rfid-tags" },
    { label: "RFID Readers & Antennas", href: "/products/rfid-readers" }
  ];

  return (
    <>
      <Head>
        <title>RFID Solutions | Asset Tracking & Identification Systems</title>
        <meta
          name="description"
          content="Enterprise-grade RFID solutions for asset tracking, identification, and automation with Pan-India support and global deployment capability."
        />
      </Head>

      <Navbar />

      <main className="access-page">

        {/* HERO */}
        <section className="access-hero reveal">
          <div className="container">
          <h1>RFID Solutions</h1>
          <h3>Intelligent Identification. Real-Time Visibility.</h3>

          <p>
            Our RFID solutions enable organizations to identify, track, and
            manage assets, people, and inventory with precision and scale.
            Designed for industrial, enterprise, and mission-critical
            environments, our platforms integrate seamlessly into existing
            systems while supporting large-scale deployments.
          </p>
          </div>
        </section>

        {/* CUSTOM RFID */}
        <section id="custom-rfid-tags" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>Custom RFID Tags</h2>
            <p className="section-lead">
              RFID tags designed to meet application-specific performance,
              durability, and environmental requirements.
            </p>
            </div>

            <div className="feature-grid">
              <span>Custom form factors and frequencies</span>
              <span>Printable and encoded options</span>
              <span>Bulk provisioning and serialization</span>
              <span>Optimized for logistics and asset tracking</span>
            </div>
          </div>
        </section>

        {/* EMBEDDABLE */}
        <section id="embeddable-rfid-tags" className="access-section reveal">
          <div className="container grid-2">
            <div>           
              <h2>Embeddable RFID Tags</h2>
            <p className="section-lead">
              Compact RFID solutions engineered for permanent embedding into
              products and equipment.
            </p>
            </div>

            <div className="feature-grid">
              <span>Ultra-small form factor</span>
              <span>High durability and long lifecycle</span>
              <span>OEM and manufacturing integration</span>
              <span>Consistent read performance</span>
            </div>
          </div>
        </section>

        {/* HARDENED */}
        <section id="hardened-rfid-tags" className="access-section reveal">
          <div className="container grid-2">
            <div>            
              <h2>Hardened RFID Tags</h2>
            <p className="section-lead">
              Industrial-grade RFID tags built for harsh and demanding
              environments.
            </p>
            </div>


            <div className="feature-grid">
              <span>Shock, vibration, and chemical resistance</span>
              <span>IP-rated enclosures</span>
              <span>Extreme temperature tolerance</span>
              <span>Ideal for manufacturing and logistics</span>
            </div>
          </div>
        </section>

        {/* RFID SYSTEMS */}
        <section id="rfid-management-systems" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>RFID for Management Systems</h2>
            <p className="section-lead">
              End-to-end RFID systems delivering real-time visibility and
              operational intelligence.
            </p>
            </div>

            <div className="feature-grid">
              <span>Asset and inventory tracking</span>
              <span>People movement and workflow visibility</span>
              <span>Analytics and reporting dashboards</span>
              <span>Integration with ERP and WMS platforms</span>
            </div>
          </div>
        </section>

        {/* ON-METAL */}
        <section id="on-metal-rfid-tags" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>On-Metal RFID Tags</h2>
            <p className="section-lead">
              Specialized RFID tags optimized for reliable performance on metal
              surfaces.
            </p>
            </div>

            <div className="feature-grid">
              <span>Metal-safe antenna design</span>
              <span>Long-range read performance</span>
              <span>Adhesive, screw, and rivet mounting</span>
              <span>Industrial and asset-heavy use cases</span>
            </div>
          </div>
        </section>

        <section id="animal-tracking-id" className="access-section reveal">
          <div className="container grid-2">
            <div>
            <h2>Animal Tracking & ID</h2>
            <p className="section-lead">
              Durable RFID tags designed for animal identification, tracking, and
              health monitoring.
            </p>
            </div> 
            <div className="feature-grid">
              <span>RFID-based tagging systems for livestock and wildlife</span>
              <span>ISO-compliant identification standards and encoding</span>
              <span>Durable, weather-resistant tag designs for harsh conditions</span>
              <span>Real-time tracking and centralized data management</span>
              <span>Custom serialization and bulk provisioning support</span>
              <span>Integration with veterinary, farm, and regulatory databases</span>
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
          <h2>Talk to Our RFID Specialists</h2>
          <p>
            Explore how RFID can transform your asset visibility and
            operational efficiency.
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
