import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Fargo HDP6600 Retransfer ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Fargo HDP6600 is a high-speed, high-definition retransfer printer
    engineered for secure and large-scale ID card issuance. Designed for
    government, corporate, and institutional environments, it delivers
    exceptional image clarity, faster print performance, and enhanced card
    durability. Its advanced retransfer technology ensures over-the-edge
    printing on smart cards and uneven surfaces, making it ideal for
    high-security credential programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>High-definition retransfer printing technology with over-the-edge coverage</li>
    <li>600 dpi print resolution for superior image sharpness and microtext detail</li>
    <li>Single or dual-sided printing capability</li>
    <li>Print speeds up to 230 cards per hour (single-sided color) and up to 150 cards per hour (dual-sided color)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Optimized for smart cards and uneven card surfaces</li>
    <li>250-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity with optional Wi-Fi module</li>
    <li>Optional magnetic stripe, contact smart card, contactless encoding, and inline lamination</li>
    <li>Advanced security features including AES data encryption and resin scramble technology</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/fargo-hdp-6600/1.jpg" 
        alt="Fargo HDP 6600" 
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