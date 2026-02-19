"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "./producthome.css";

export default function HomeProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <section className={`home-products ${animate ? 'animate' : ''}`} ref={sectionRef}>
      <div className="home-products-inner">

        {/* HEADING */}
        <div className="products-heading marqueq">
          <div className="marquee-track">
            <Link href="/products">Explore our Product Range</Link>
            <Link href="/products">Explore our Product Range</Link>
          </div>
        </div>

        {/* TOP PRODUCT CARDS */}
        <div className="products-grid">
          <Link href="/products/printers" className="product-card">
            <img src="/media/img1.png" alt="Printers" />

          </Link>

          <Link href="/products/smartcard-readers" className="product-card">
            <img src="/media/img2.png" alt="Readers" />
          </Link>

          <Link href="/products/cards" className="product-card">
            <img src="/media/img3.png" alt="Cards" />
          </Link>
        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-row">

          {/* LEFT — JOIN CLIENTELE */}
          <Link href="/contact" className="join-clientele">
            <h3><u>Join Our Clientele</u></h3>
            <p>We have catered to well recognised brands globally.</p>
          </Link>

          {/* RIGHT — FEATURES */}
          <div className="features-grid">
            <div className="feature">
              <img src="/media/icons/icon-2.svg" className="icon" />
              Explore Our Customizable Complete Solutions
            </div>

            <div className="feature">
              <img src="/media/icons/icon-3.svg" className="icon" />
              PAN India Services
            </div>

            <div className="feature">
              <img src="/media/icons/icon-1.svg" className="icon" />
              Full Stack Software Solutions curated for your needs
            </div>

            <div className="feature">
              <img src="/media/icons/icon-4.svg" className="icon" />
              Integrated Applications & Deployment
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
