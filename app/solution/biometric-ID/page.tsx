'use client';

import { useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import "./biometric.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biometric Solutions in India | Smart Chip Tree",
  description:
    "Advanced biometric authentication solutions in India with cloud connectivity, secure identity verification, and seamless access control for modern organizations.",

  openGraph: {
    title: "Biometric Solutions in India | Smart Chip Tree",
    description:
      "Cloud-enabled biometric systems for secure identification, attendance, and access control across Indian enterprises.",
    url: "https://www.domain.com/biometric",
    siteName: "Smart Chip Tree",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/media/biometric-preview.jpg", // update if needed
        width: 1200,
        height: 630,
        alt: "Biometric Solutions by Smart Chip Tree",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Biometric Solutions in India | Smart Chip Tree",
    description:
      "Cloud-connected biometric authentication for secure and scalable identity management in India.",
    images: ["/media/biometric-preview.jpg"], // update if needed
  },
};

export default function BiometricsPage() {

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

 const scrollRef = useRef<HTMLDivElement>(null);

const slide = (dir: "left" | "right") => {
  if (!scrollRef.current) return;
  const width = scrollRef.current.clientWidth;
  scrollRef.current.scrollBy({
    left: dir === "left" ? -width : width,
    behavior: "smooth"
  });
};
const biometricProducts = [
  { label: "Biometric Devices", href: "/products/biometric-devices" },
  { label: "Fingerprint Scanners", href: "/products/fingerprint-scanners" },
  { label: "Facial Recognition Systems", href: "/products/facial-recognition" },
  { label: "Enrollment Stations", href: "/products/enrollment-stations" },
  { label: "Biometric Software Platforms", href: "/products/biometric-software" }
];


  return (
    <>
      <Head>
        <title>Biometric Solutions | Identity & Verification Systems</title>
        <meta
          name="description"
          content="Enterprise-grade biometric identity and verification solutions including facial recognition, fingerprint biometrics, and rapid ID systems."
        />
      </Head>

      <Navbar />

      <main className="access-page">

        {/* HERO */}
        <section className="access-hero reveal">
          <div className="container">
            <h1>Biometric Solutions</h1>
            <p className="hero-lead">
              Intelligent biometric identity systems designed for secure,
              scalable, and high-assurance verification.
            </p>
            <p className="hero-sub">
              Our biometric platforms integrate seamlessly into enterprise
              environments to enable trusted identity across people,
              processes, and infrastructure.
            </p>
          </div>
        </section>


        {/* BIOMETRIC ID & VERIFICATION */}
        <section
          id="biometric-id-verification"
          className="access-section reveal">
            <div className= "container grid-2">
                <div>
                    <h2>Biometric ID & Verification</h2>
                    <p className="section-lead">
                        Core biometric identity and verification systems for secure
                        enrollment, authentication, and compliance.
                    </p>
                </div>

            <div className="feature-grid">
              <span>Multi-factor biometric authentication architecture</span>
              <span>Integration with access control & identity platforms</span>
              <span>Encrypted biometric data storage & transmission</span>
              <span>Role-based access with real-time audit trails</span>
              <span>Scalable deployment across enterprise environments</span>
            </div>
            </div>
        
        </section>

        {/* FACIAL RECOGNITION */}
        <section
          id="facial-recognition"
          className="access-section reveal alt"
        >
          <div className="container grid-2">
            <div>
              <h2>Facial Recognition</h2>
              <p className="section-lead">
                Advanced facial recognition solutions for fast,
                contactless identity verification.
              </p>
            </div>

            <div className="feature-grid">
              <span>High-accuracy facial matching algorithms</span>
              <span>Contactless authentication for seamless access</span>
              <span>Real-time identity verification & monitoring</span>
              <span>Anti-spoofing and liveness detection capabilities</span>
              <span>Enterprise-ready integration with security ecosystems</span>
            </div>
          </div>
        </section>

        {/* FINGERPRINT BIOMETRICS */}
        <section
          id="fingerprint-biometric"
          className="access-section reveal"
        >
          <div className="container grid-2">
            <div>
              <h2>Fingerprint Biometric Solutions</h2>
              <p className="section-lead">
                High-accuracy fingerprint biometric systems for
                identity verification and access control.
              </p>
            </div>

            <div className="feature-grid">
              <span>Advanced fingerprint capture & matching technology</span>
              <span>Secure template encryption and storage</span>
              <span>Fast identification and verification processing</span>
              <span>Integration with attendance & access systems</span>
              <span>Rugged hardware options for high-usage scenarios</span>
            </div>
          </div>
        </section>

        {/* RAPID ID */}
        <section
          id="rapid-id"
          className="access-section reveal alt"
        >
          <div className="container grid-2">
            <div>
              <h2>Rapid ID</h2>
              <p className="section-lead">
                High-speed biometric enrollment and verification
                systems for mission-critical environments.
              </p>
            </div>

            <div className="feature-grid">
              <span>Accelerated enrollment and identity capture workflows</span>
              <span>Real-time identity validation & credential issuance</span>
              <span>Multi-biometric support (face, fingerprint, iris optional)</span>
              <span>Centralized identity database synchronization</span>
              <span>Designed for government, enterprise & institutional use</span>
            </div>
          </div>
        </section>

        {/* WHY BIOMETRICS */}
        <section className="access-section reveal emphasis">
          <div className="container grid-2">
            <div>
              <h2>Why Our Biometric Solutions</h2>
              <p className="section-lead">
                Built for accuracy, scale, and enterprise integration.
              </p>
            </div>

            <div className="feature-grid wide">
              <span>Enterprise-grade biometric platforms</span>
              <span>Seamless system and API integration</span>
              <span>Compliance-ready identity workflows</span>
              <span>Pan-India deployment & support</span>
              <span>International supply capability</span>
              <span>Lifecycle support and maintenance</span>
            </div>
          </div>
        </section>
        {/*back to service*/}
        <div style={{ textAlign: "center" }}>
          <Link href="/services">
           &larr; <u>Back to Services</u>
          </Link>
        </div>
        
        {/* CTA */}
        <section className="access-cta reveal">
          <div className="container">
            <h2>Talk to Our Biometric Experts</h2>
            <p>
              Deploy secure, scalable biometric systems tailored
              to your operational requirements.
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
