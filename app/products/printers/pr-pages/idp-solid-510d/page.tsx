import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>IDP SOLID-510D ID Card Printer</h1>

  <p className={style.printerDescription}>
    The IDP SOLID-510D is a reliable dual-sided direct-to-card printer designed
    for professional ID card issuance in corporate, education, and government
    environments. Built for consistent performance and ease of use, it delivers
    vibrant color output, sharp text quality, and flexible configuration
    options. Its modular design allows organizations to expand functionality
    as their card issuance needs grow.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>
  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for clear images, text, and barcodes</li>
    <li>Dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 212 cards per hour (single-sided color) and up to 850 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.38 mm to 1.0 mm</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe, contact smart card, and contactless encoding modules</li>
    <li>Field-upgradeable design for encoding and additional security features</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/idp-solid-510d/3.jpg" 
        alt="IDP Solid 510D" 
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