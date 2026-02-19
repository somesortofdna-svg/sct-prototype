import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
       <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>SMART-51 ID Card Printer</h1>

  <p className={style.printerDescription}>
    The SMART-51 is a high-performance direct-to-card printer designed for
    fast and professional ID card issuance. Built for corporate, education,
    and institutional environments, it offers improved processing speed,
    enhanced print quality, and scalable configuration options for growing
    card programs.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>

  <ul className={style.printerPoints}>
    <li>Direct-to-card dye-sublimation (color) and resin thermal transfer (monochrome) printing technology</li>
    <li>300 dpi print resolution for sharp images and barcodes</li>
    <li>Single or dual-sided printing capability</li>
    <li>Print speeds up to 212 cards per hour (single-sided color)</li>
    <li>Supports CR-80 / ISO ID-1 standard card size</li>
    <li>Card thickness support from 0.38 mm to 1.0 mm</li>
    <li>100-card input hopper and 100-card output hopper</li>
    <li>USB and Ethernet connectivity options</li>
    <li>Optional magnetic stripe and smart card encoding modules</li>
    <li>Modular design for duplex and encoding upgrades</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/smart-51/2.jpg" 
        alt="Smart 51" 
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