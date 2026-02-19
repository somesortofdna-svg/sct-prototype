import styles from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={styles.printerPage}>
      
      {/* Top Section */}
      <div className={styles.printerContent}>
        
        {/* Left Side */}
        <div className={styles.printerLeft}>
          <h1 className={styles.printerTitle}>Entrust Card Printer with Laminator</h1>
          <p className={styles.printerDescription}>
    The Entrust Card Printer with Laminator is a secure, enterprise-grade card
    issuance solution designed for organizations that require durable,
    high-security identification credentials. By combining high-resolution
    direct-to-card printing with inline lamination, the system enhances card
    lifespan while providing additional protection against tampering, fading,
    and everyday wear. It is ideal for government IDs, corporate access badges,
    financial cards, and institutional credentials where long-term durability
    and advanced security are essential.
        </p>
        <h3 className={styles.printerSubtitle}>Key Features:</h3>
        <ul className={styles.printerPoints}>
          <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
          <li>300 dpi print resolution for sharp text, barcodes, and detailed images</li>
          <li>Supports CR-80 / ISO ID-1 card size (85.6 mm × 53.98 mm) with edge-to-edge printing</li>
          <li>Single or dual-sided printing capability with integrated single or dual-sided lamination</li>
          <li>Overlaminate options including clear, holographic, and custom security laminates</li>
          <li>Print speeds suitable for medium to high-volume card issuance environments</li>
          <li>High-capacity input and output hoppers for batch card production</li>
          <li>USB and Ethernet connectivity for standalone or network integration</li>
          <li>Optional magnetic stripe, contact smart card, and contactless smart card encoding</li>
          <li>Designed for secure government, corporate, education, and financial applications</li>
       </ul>
      </div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/entrust-with-laminator/2.jpg" 
        alt="Entrust With Laminator" 
        className={styles.printerImageBox}/>


      </div>

      {/* Bottom Buttons */}
      <div className={styles.printerButtons}>
  <Link href="/contact" className={styles.printerBtn}>
    INQUIRE
  </Link>

  <Link href="/products/printers" className={styles.printerBtn}>
    <span className={styles.btnArrow}>→</span>
    RETURN
  </Link>

  <Link href="/" className={styles.printerBtn}>
    <span className={styles.btnArrow}>→</span>
    HOME
  </Link>
</div>

    </div>
  );
}