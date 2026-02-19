import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Fargo HDP5000 Retransfer ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Fargo HDP5000 is a high-definition retransfer card printer designed
    for organizations that require superior print quality and enhanced card
    durability. Using retransfer printing technology, it produces sharp,
    over-the-edge images and vibrant colors on a wide range of card surfaces,
    including smart cards with embedded electronics. Ideal for government,
    corporate, and secure access environments, the HDP5000 delivers reliable
    performance for medium to high-volume card issuance programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>High-definition retransfer printing technology for over-the-edge image coverage</li>
    <li>300 dpi print resolution for detailed photos, text, and graphics</li>
    <li>Single or dual-sided printing capability</li>
    <li>Print speeds up to 150 cards per hour (single-sided color) and 109 cards per hour (dual-sided color)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Compatible with smart cards and uneven card surfaces</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe, contact smart card, contactless encoding, and inline lamination module</li>
    <li>Modular design allowing field upgrades and expanded security features</li>
  </ul>
</div>

        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/fargo-hdp-5000/2.jpg" 
        alt="Fargo HDP 5000" 
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