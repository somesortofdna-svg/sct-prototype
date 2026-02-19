'use client';

import { useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import "./access.css";

export default function AccessControlPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const slide = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth,
      behavior: "smooth"
    });
  };

  const products = [
    { label: "PVC Cards", href: "/products/cards#pvc" },
    { label: "Smart Card Readers", href: "/products/smartcard-readers#usb" },
    { label: "Biometric Devices", href: "/contact" },
    { label: "Access Controllers", href: "/contact" },
    { label: "ID Printers", href: "/products/printers" },
    { label: "Access Control Software", href: "/industries/enterprise" }
  ];

  return (
    <>
      <Head>
        <title>Access Control Solutions | Secure Physical Access Systems</title>
        <meta
          name="description"
          content="Enterprise-grade access control solutions with cloud access, contactless systems, identity positioning, and Pan-India after-sales support."
        />
      </Head>

      <Navbar />

      <main className="access-page">

        {/* HERO */}
        <section className="access-hero reveal">
          <div className="container">
            <h1>Access Control</h1>
            <p className="hero-lead">
              Our access control solutions integrate directly into your organizations security ecosystems, 
              transforming physical access into a unified, intelligent, and scalable identity layer.
            </p>
            <p className="hero-sub">
              We deliver end-to-end physical identity platforms with strong after-sales
              support, Pan-India service presence, and international deployment capability.
            </p>
          </div>
        </section>

        {/* SECTION TEMPLATE */}
        <section id="access-control-systems" className="access-section reveal">
          <div className="container grid-2">
            <div>
              <h2>Access Control Systems</h2>
              <p className="section-lead">
                Enterprise-grade systems that secure doors, zones, and facilities
                with precision, reliability, and compliance.
              </p>
            </div>

            <div className="feature-grid">
              <span>Centralized & distributed architectures</span>
              <span>Smart card, biometric & mobile credentials</span>
              <span>Integration with CCTV, HRMS & BMS</span>
              <span>Audit-ready access policies & reporting</span>
            </div>
          </div>
        </section>

        <section id="cloud-access-control" className="access-section reveal alt">
          <div className="container grid-2">
            <div>
              <h2>Cloud-Based Physical Access Control</h2>
              <p className="section-lead">
                Cloud-enabled access platforms built for scalability, remote management,
                and multi-site operations.
              </p>
            </div>

            <div className="feature-grid">
              <span>Centralized cloud dashboards</span>
              <span>Real-time access updates</span>
              <span>Encrypted & compliant cloud infrastructure</span>
              <span>Lower IT overhead and faster rollout</span>
            </div>
          </div>
        </section>

        <section id="contactless-payments-tracking" className="access-section reveal">
          <div className="container grid-2">
            <div>
              <h2>Contactless Payments & Tracking</h2>
              <p className="section-lead">
                Frictionless, secure contactless credentials for access, payments,
                attendance, and tracking.
              </p>
            </div>

            <div className="feature-grid">
              <span>NFC, RFID & mobile wallets</span>
              <span>Unified access and payment workflows</span>
              <span>Encrypted credential technology</span>
              <span>Campus & transit-ready scalability</span>
            </div>
          </div>
        </section>

        <section id="real-time-identity-positioning" className="access-section reveal alt">
          <div className="container grid-2">
            <div>
              <h2>Real-Time Identity Positioning</h2>
              <p className="section-lead">
                Live visibility into people and assets to enhance safety,
                compliance, and operational response.
              </p>
            </div>

            <div className="feature-grid">
              <span>Live tracking & geo-fencing</span>
              <span>Automated alerts</span>
              <span>Emergency response enablement</span>
              <span>Compliance & safety analytics</span>
            </div>
          </div>
        </section>

        <section id="visitor-management" className="access-section reveal">
          <div className="container grid-2">
            <div>
              <h2>Visitor Management</h2>
              <p className="section-lead">
                Secure, digital visitor workflows that enhance compliance
                and first impressions.
              </p>
            </div>

            <div className="feature-grid">
              <span>Pre-registration & digital check-in</span>
              <span>ID verification & badge issuance</span>
              <span>Host notifications</span>
              <span>Audit-ready visit logs</span>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="access-section reveal emphasis">
          <div className="container grid-2"> {/* LEFT */}
            <div>
              <h2>Why Choose Us</h2>
              <p className="section-lead">
                Global solutions delivered with local expertise and long-term support.
              </p>
            </div>
            {/* RIGHT */}
            <div className="feature-grid wide">
              <span>End-to-end delivery & lifecycle support</span>
              <span>Strong after-sales & SLA-driven services</span>
              <span>Pan-India on-ground presence</span>
              <span>International supply & deployment</span>
              <span>Aligned with global security standards</span>
              <span>Requirement-based solution design & implementation</span>
              <span>Trusted by leading enterprise and multinational organizations</span>
              <span>Strategic partnerships with leading global security and identity technology providers</span>
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
            <h2>Talk to Our Access Control Experts</h2>
            <p>
              Secure your facilities with future-ready access control solutions
              backed by proven support and expertise.
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
