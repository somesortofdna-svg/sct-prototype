import styles from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={styles.printerPage}>
      
      {/* Top Section */}
      <div className={styles.printerContent}>
        
        {/* Left Side */}
        <div className={styles.printerLeft}>
  <h1 className={styles.printerTitle}>Epson EcoTank Inkjet Printer</h1>

  <p className={styles.printerDescription}>
    The Epson EcoTank printer is a high-efficiency inkjet solution designed
    for home and office printing. Featuring cartridge-free ink tank technology,
    it delivers sharp documents, vibrant color prints, and ultra-low running
    costs. Ideal for everyday printing, scanning, and copying, it offers
    reliable performance with a compact, space-saving design.
  </p>
   <h3 className={styles.printerSubtitle}>Key Features:</h3>
  <ul className={styles.printerPoints}>
    <li>PrecisionCore inkjet technology for high-quality color and black printing</li>
    <li>High-resolution output up to 4800 × 1200 dpi</li>
    <li>High-capacity refillable ink tank system for reduced cost per page</li>
    <li>Wireless, USB, and mobile printing support</li>
    <li>Supports A4 paper sizes and multiple media types</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/epson/1.jpg" 
        alt="Epson Printer" 
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