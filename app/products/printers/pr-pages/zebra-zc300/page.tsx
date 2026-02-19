import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>Zebra ZC300 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Zebra ZC300 is a versatile and user-friendly direct-to-card printer
    designed for professional ID card issuance across corporate, retail,
    healthcare, and education environments. Featuring a modern design and
    simplified operation, it delivers high-quality cards with fast print
    speeds and flexible encoding options. Its compact footprint makes it
    suitable for front-desk and office installations.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp text, graphics, and barcodes</li>
    <li>Single or dual-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 200 cards per hour (single-sided color) and up to 900 cards per hour (monochrome)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size (85.6 mm × 53.98 mm)</li>
    <li>Card thickness support from 0.254 mm to 1.016 mm</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity with optional Wi-Fi support</li>
    <li>Optional magnetic stripe, contact smart card, and contactless encoding</li>
    <li>Intuitive graphical LED/LCD interface for simplified operation</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/zebra-zc300/2.jpg" 
        alt="Zebra ZC300" 
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