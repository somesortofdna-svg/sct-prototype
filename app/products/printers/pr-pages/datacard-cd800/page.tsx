import style from "../reuse.module.css";
import Link from "next/link";

export default function PrinterTemplate() {
  return (
    <div className={style.printerPage}>
      
      {/* Top Section */}
      <div className={style.printerContent}>
        
        {/* Left Side */}
        <div className={style.printerLeft}>
  <h1 className={style.printerTitle}>IDP SOLID-510D ID Card Printer</h1>

  <p className={style.printerDescription}>
    The Datacard CD800 is a high-performance direct-to-card printer designed for medium 
    to high-volume card issuance environments. It delivers sharp, durable prints on PVC and composite 
    cards, supporting both single- and dual-sided printing. With optional magnetic stripe, smart card, 
    and RFID encoding, the CD800 can handle a wide range of identification and access control 
    applications, making it suitable for government ID programs, corporate badges, financial cards, 
    healthcare cards, and educational institutions. Its robust design ensures minimal downtime, 
    reliable operation, and seamless integration into existing card management systems.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>
  <ul className={style.printerPoints}>
    <li>300 dpi resolution, dual-sided printing, print speed up to 190 cards/hour</li>

    <li>Optional magnetic stripe, contact/contactless smart card, and RFID encoding</li>

    <li>USB & Ethernet connectivity, automatic card feeder, 100-card input/output capacity</li>

    <li>Durable print quality with advanced security features</li>

    <li>Ideal for government IDs, corporate badges, financial & healthcare cards, educational institutions</li>

    <li>Easy maintenance, reliable operation, integrates with card management and access control systems</li>
  </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/datacard-cd800/3.jpg" 
        alt="IDP Solid 510D" 
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