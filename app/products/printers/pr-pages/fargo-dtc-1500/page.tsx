import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Fargo DTC1500 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Fargo DTC1500 is a secure and high-performance direct-to-card printer
    designed for organizations that require advanced card security and
    consistent output quality. Ideal for corporate, government, and education
    environments, it delivers professional-grade ID cards with built-in data
    protection features and flexible configuration options. Its robust design
    and fast print speeds make it suitable for medium to high-volume card
    issuance programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp images, text, and barcodes</li>
    <li>Single or dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 245 cards per hour (single-sided color) and up to 1,000 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.229 mm to 1.016 mm</li>
    <li>100-card input hopper and 30-card output hopper</li>
    <li>USB and Ethernet connectivity for standalone or network deployment</li>
    <li>Optional magnetic stripe, contact smart card, and contactless encoding modules</li>
    <li>Built-in data protection features including resin scramble and AES data encryption</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/fargo-dtc-1500/2.jpg" 
        alt="Fargo DTC 1500" 
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