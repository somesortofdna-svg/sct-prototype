import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Fargo DTC1250e ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Fargo DTC1250e is a fast and reliable direct-to-card printer designed
    for small to mid-sized organizations that require secure and professional
    ID card issuance. Compact and easy to operate, it delivers high-quality
    photo IDs, membership cards, and access credentials with consistent
    performance. Its flexible configuration options and upgradeable features
    make it suitable for growing card programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>
  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp text, images, and barcodes</li>
    <li>Single-sided printing with optional duplex module for dual-sided printing</li>
    <li>Print speeds up to 225 cards per hour (single-sided color) and up to 1,000 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.229 mm to 1.016 mm</li>
    <li>100-card input hopper and 30-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe, contact smart card, and contactless encoding</li>
    <li>Field-upgradeable design for duplex and encoding expansion</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/fargo-dtc-1250e/2.jpg" 
        alt="Fargo DTC 1250E" 
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