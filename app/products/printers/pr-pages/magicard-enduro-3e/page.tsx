import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Magicard Enduro 3E ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Magicard Enduro 3E is a robust and reliable direct-to-card printer
    designed for secure and flexible ID card issuance. Ideal for corporate,
    education, and small government environments, it delivers high-quality
    photo IDs with built-in security features. Its field-upgradeable design
    allows easy conversion from single-sided to dual-sided printing as needs grow.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp text, photos, and barcodes</li>
    <li>Single-sided printing with field upgrade option for dual-sided printing</li>
    <li>Print speeds up to 216 cards per hour (single-sided color)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.51 mm to 1.02 mm</li>
    <li>100-card input hopper and 30-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe and smart card encoding modules</li>
    <li>Built-in HoloKote security watermark system</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/magicard-enduro-3e/2.jpg" 
        alt="Magicard Enduro 3E" 
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