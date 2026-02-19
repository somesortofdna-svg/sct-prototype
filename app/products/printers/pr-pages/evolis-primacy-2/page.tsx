import style from"../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Evolis Primacy 2 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Evolis Primacy 2 is a next-generation direct-to-card printer engineered
    for high-speed, high-volume ID card issuance. Designed for corporate,
    government, and educational environments, it delivers exceptional print
    quality, enhanced security features, and improved productivity. With
    faster processing performance and expanded encoding capabilities, the
    Primacy 2 is ideal for organizations that require secure, scalable, and
    professional credential printing.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp images, text, and barcodes</li>
    <li>Single or dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 280 cards per hour (single-sided color) and up to 1,000 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.25 mm to 1.25 mm</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity with optional Wi-Fi support</li>
    <li>Optional magnetic stripe, contact smart card, and contactless encoding modules</li>
    <li>Enhanced security features including ribbon data protection and optional locking systems</li>
  </ul>
</div>

        
        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/evolis-primacy-2/2.jpg" 
        alt="Evolis Primacy 2" 
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