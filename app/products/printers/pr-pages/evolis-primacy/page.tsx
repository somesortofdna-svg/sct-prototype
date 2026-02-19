import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Evolis Primacy 1 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Evolis Primacy 1 is a high-performance direct-to-card printer designed
    for fast and reliable ID card issuance. Built for corporate, education,
    and institutional environments, it delivers professional-quality cards
    with vibrant colors and sharp text. Its robust design and flexible
    configuration options make it ideal for medium to large card printing
    programs that require speed and consistent output quality.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for detailed images, text, and barcodes</li>
    <li>Single or dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 210 cards per hour (single-sided color) and up to 850 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.25 mm to 1.25 mm</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe and smart card encoding modules</li>
    <li>Modular design allowing field upgrades for duplex and encoding features</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/evolis-primacy/2.jpg" 
        alt="Evolis Primacy 1" 
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