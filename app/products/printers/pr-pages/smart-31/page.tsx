import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>SMART-31 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The SMART-31 is a compact and efficient direct-to-card printer designed
    for entry-level ID card issuance. Ideal for small offices, schools, and
    membership programs, it delivers reliable print quality with simple
    operation. Its lightweight design and flexible encoding options make it
    suitable for everyday credential printing.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation and resin thermal transfer printing technology</li>
    <li>300 dpi print resolution for clear images and text</li>
    <li>Single-sided edge-to-edge printing capability</li>
    <li>Print speeds up to 180 cards per hour (single-sided color)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size</li>
    <li>Card thickness support from 0.38 mm to 1.0 mm</li>
    <li>80-card input hopper and 25-card output hopper</li>
    <li>USB connectivity with optional Ethernet</li>
    <li>Optional magnetic stripe and smart card encoding</li>
    <li>Compact desktop footprint</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/smart-31/2.jpg" 
        alt="Smart 31" 
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