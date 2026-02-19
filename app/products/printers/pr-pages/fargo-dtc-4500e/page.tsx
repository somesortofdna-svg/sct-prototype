import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Fargo DTC4500e ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Fargo DTC4500e is a powerful and versatile direct-to-card printer
    designed for organizations that require high-volume, secure ID card
    issuance. Built for corporate, government, and institutional environments,
    it delivers exceptional print quality, enhanced security features, and
    modular upgrade options. Its durable construction and scalable design make
    it ideal for growing credential programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp images, text, and barcodes</li>
    <li>Single or dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 225 cards per hour (single-sided color) and up to 1,000 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.229 mm to 1.016 mm</li>
    <li>200-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity with optional Wi-Fi support</li>
    <li>Optional magnetic stripe, contact smart card, contactless encoding, and inline lamination module</li>
    <li>Advanced security features including AES data encryption and resin scramble technology</li>
  </ul>
</div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/fargo-dtc-4500e/2.jpg" 
        alt="Fargo DTC 4500E" 
        className={style.printerImageBox}/>


      </div>

      {/* Bottom Buttons */}
      <div className={style.printerButtons}>
  <Link href="/contact" className={style.printerBtn}>
    INQUIRE
  </Link>

  <Link href="/products/printers" className={style.printerBtn}>
    <span className={style.btnArrow}>→</span>
    RETURN
  </Link>

  <Link href="/" className={style.printerBtn}>
    <span className={style.btnArrow}>→</span>
    HOME
  </Link>
</div>

    </div>
  );
}