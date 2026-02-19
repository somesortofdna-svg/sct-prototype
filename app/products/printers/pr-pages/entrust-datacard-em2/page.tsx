import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Entrust Datacard EM2 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Entrust Datacard EM2 is a reliable and cost-effective direct-to-card
    printer designed for organizations that require consistent, professional
    ID card issuance. Built for corporate, educational, and institutional
    environments, the EM2 delivers high-quality photo IDs, membership cards,
    and access credentials with dependable performance and simple operation.
    Its compact desktop design makes it suitable for office environments where
    space efficiency and productivity are important.
  </p>
 <h3 className={style.printerSubtitle}>Key Features:</h3>
  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for clear text, photos, and barcodes</li>
    <li>Single-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 180 cards per hour (single-sided color)</li>
    <li>Monochrome printing speeds up to 700+ cards per hour</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support typically from 0.25 mm to 1.0 mm</li>
    <li>Input and output hopper capacity suitable for batch printing</li>
    <li>USB connectivity for simple standalone setup</li>
    <li>Optional magnetic stripe encoding support</li>
    <li>Compact desktop footprint for office environments</li>
  </ul>
</div>


        

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/entrust-datacard-em2/2.jpg" 
        alt="Entrust Datacard EM2" 
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