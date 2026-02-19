import styles from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={styles.printerPage}>
      
      {/* Top Section */}
      <div className={styles.printerContent}>
        
        {/* Left Side */}
        <div className={styles.printerLeft}>
          <h1 className={styles.printerTitle}>Datacard SD360</h1>

          <p className={styles.printerDescription}>
            The Datacard SD360 is a high-performance desktop ID card printer designed for 
            organizations that require fast, reliable, and professional-grade card issuance. 
            Combining sharp image quality, accurate color reproduction, and dependable duplex 
            printing, the SD360 delivers consistent results for<b> employee badges, student IDs, 
            membership cards, and secure credentials. Its scalable design makes it ideal for small 
            to mid-volume environments, while built-in Ethernet and USB connectivity allow flexible 
            deployment in both standalone and networked setups.</b> With upgradeable encoding options and
            proven Datacard durability, the SD360 provides a secure and future-ready solution for 
            professional card programs.
          </p>

          <h3 className={styles.printerSubtitle}>Key Features:</h3>

          <ul className={styles.printerPoints}>
            <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
            <li>Up to 300 × 1200 dpi print resolution for sharp text, barcodes, and graphics</li>  
            <li>Dual-sided edge-to-edge printing capability</li>
            <li>Print speeds of up to 200 cards per hour (single-sided color), 155 cards per hour (dual-sided color), and 830 cards per hour (monochrome)</li>
            <li>100-card input hopper and 25-card output hopper for batch printing</li>
            <li>TruePick™ card handling system to help reduce jams and misfeeds</li>
            <li>USB 2.0 and Ethernet connectivity for standalone or network integration</li>
            <li>Integrated LCD display with soft-touch controls for easy operation</li>
            <li>Optional magnetic stripe encoding compliant with ISO 7811 standards</li>
            <li>Optional contact and contactless smart card encoding including MIFARE support</li>
            <li>30-month depot warranty including printhead coverage</li>
            <li>Compact desktop design weighing approximately 5.4 kg</li>
          </ul>
        </div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/datacard-sd360/2.jpg" 
        alt="Datacard SD360" 
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