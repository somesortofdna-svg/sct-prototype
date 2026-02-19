import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Entrust Sigma DS3 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Entrust Sigma DS3 is a professional dual-sided direct-to-card printer
    designed for secure and efficient ID card issuance. Built for corporate,
    government, and educational environments, the DS3 delivers high-quality
    photo ID credentials with advanced security architecture, reliable
    performance, and flexible deployment options for both standalone and
    networked printing environments.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp images, text, and barcodes</li>
    <li>Dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 250 cards per hour (single-sided color) and 180 cards per hour (dual-sided color)</li>
    <li>Monochrome printing speeds up to 1,100 cards per hour</li>
    <li>Supports CR-79 and CR-80 card sizes (ISO ID-1 standard 85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.010" to 0.040" (0.25 mm to 1.016 mm)</li>
    <li>125-card input hopper and 25-card output hopper</li>
    <li>USB and Ethernet connectivity for secure network integration</li>
    <li>Optional magnetic stripe, contact smart card, and contactless smart card encoding</li>
    <li>Built-in security features including encrypted data transfer and secure boot protection</li>
    <li>36-month printer and printhead warranty</li>
  </ul>
</div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/entrust-ds3/2.jpg" 
        alt="Entrust DS3" 
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
