import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Zebra ZXP Series 3 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Zebra ZXP Series 3 is a compact and reliable direct-to-card printer
    designed for entry to mid-level card issuance applications. Ideal for
    small businesses, schools, and membership programs, it delivers
    consistent print quality with efficient performance. Its modular design
    allows upgrades for duplex printing and encoding features as needs expand.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for clear images, text, and barcodes</li>
    <li>Single-sided printing with optional duplex upgrade</li>
    <li>Print speeds up to 180 cards per hour (single-sided color) and up to 900 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.254 mm to 1.02 mm</li>
    <li>100-card input hopper and 45-card output hopper</li>
    <li>USB connectivity with optional Ethernet</li>
    <li>Optional magnetic stripe and smart card encoding modules</li>
    <li>Compact desktop design for space-efficient installation</li>
  </ul>
</div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/zebra-zxp3/2.jpg" 
        alt="Zebra ZXP3" 
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