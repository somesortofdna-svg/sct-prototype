'use client';

import Link from "next/link";
import "./menu.css";

export default function ProductMenu() {
  return (
    <section className="product-menu-section">
      <video
        className="menu-bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/media/service-bg.mp4" type="video/mp4" />
      </video>

      <div className="menu-overlay" />

      <div className="product-menu-glass">
        <h2>Our Products</h2>

        <div className="menu-grid">
          <div className="menu-column">
            <h3>Printers</h3>
            <Link href="/products/printers#retransfer">Retransfer Printers</Link>
            <Link href="/products/printers#card">Card Printers</Link>
            <Link href="/products/printers#desktop">Desktop Printers</Link>
            <Link href="/products/printers#others">Other Printers</Link>
          </div>

          <div className="menu-column">
            <h3>Cards & Credentials</h3>
            <Link href="/products/cards#smart">Smart Cards</Link>
            <Link href="/products/cards#pvc">PVC Cards</Link>
            <Link href="/products/cards#contactless">Contactless Cards</Link>
            <Link href="/products/cards#consumables">Card Consumables</Link>
          </div>

          <div className="menu-column">
            <h3>Readers</h3>
            <Link href="/products/smartcard-readers#usb">USB Readers</Link>
            <Link href="/products/smartcard-readers#contactless">Contactless Readers</Link>
            <Link href="/products/smartcard-readers#desktop">Desktop Readers</Link>
            <Link href="/products/smartcard-readers#consumables">Printer/Reader Consumables</Link>
          </div>

          <div className="menu-column">
            <h3>Ribbons</h3>
            <Link href="/products/ribbons#Colour">Color Ribbons</Link>
            <Link href="/products/ribbons#Monochrome">Monochrome Ribbons</Link>
            <Link href="/products/ribbons#Lamination_Retransfer_Film">Lamination Films</Link>
          <div className="menu-column">
            <h3>Baggage Scanner</h3>
            <Link href="/products/baggage#xray">X-Ray Baggage Scanners</Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
