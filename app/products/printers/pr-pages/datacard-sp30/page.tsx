import styles from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={styles.printerPage}>
      
      {/* Top Section */}
      <div className={styles.printerContent}>
        
        {/* Left Side */}
        <div className={styles.printerLeft}>
          <h1 className={styles.printerTitle}>Datacard SP30 Plus Card Printer</h1>

          <p className={styles.printerDescription}>
            The Datacard SP30 Plus is an economical, 
            compact desktop card printer engineered to 
            deliver professional-quality ID cards for 
            businesses, institutions, and service providers. 
            It’s designed to increase productivity while 
            managing operating costs, making it suitable for 
            printing corporate IDs, membership cards, 
            healthcare cards, government IDs, and other 
            basic identity credentials with ease.
          </p>

          <ul className={styles.printerPoints}>
            <li>Uses direct-to-card dye-sublimation and resin thermal transfer printing technology for sharp and vibrant cards.</li>
            <li>Offers single-sided, edge-to-edge printing with consistent, high-quality output.</li>
            <li>Prints at a resolution of 300 dpi with 256 shades, ensuring clear photos, text, and graphics.</li>
            <li>Supports high productivity with speeds up to 750 monochrome cards per hour and efficient full-color printing.</li>
            <li>Compatible with ISO ID-1/CR-80 sized PVC cards and standard card thicknesses.</li>
            <li>Features Advanced Imaging Technology for improved photo quality, color consistency, and background uniformity.</li>
            <li>Easy to operate with user-friendly drivers, message prompts, and online help tools.</li>
            <li>Recognizes Datacard Intelligent Supplies Technology with automatic ribbon identification and ribbon-low warnings to reduce waste.</li>
            <li>Compact desktop footprint makes it suitable for small workspaces.</li>
          </ul>
        </div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/datacard-sp30/2.jpg" 
        alt="Datacard SP30" 
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