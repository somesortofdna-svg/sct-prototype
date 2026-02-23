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
    The IDP Solid 310 is a compact, reliable, and high-quality direct-to-card (DTC) 
    printer designed for low- to medium-volume ID card printing. Its robustness and ease
     of use make it ideal for organizations that need secure, on-demand card issuance without 
     requiring a large-scale production setup. The printer is often used in corporate ID programs,
      educational campuses, government identification, membership cards, and small-scale access 
      control solutions.
  </p>
  <h3 className={style.printerSubtitle}>Key Features:</h3>
  <ul className={style.printerPoints}>
   <li>Compact desktop direct-to-card printer</li>
   <li>High-quality thermal transfer printing</li>
   <li>Prints on PVC, composite PVC, and PET cards</li>

   <li>300 dpi print resolution</li>

   <li>Print speed: up to 20 color cards per minute</li>

   <li>Optional magnetic stripe encoding, contact chip encoding, network interface and RFID smart card encoding</li>

   <li>USB connectivity standard</li>

   <li>Input hopper capacity: 100 cards</li>

   <li>Output hopper capacity: 30 cards</li>

   <li>Reliable for low to medium-volume printing</li>

   <li>Minimal maintenance required</li>

   <li>Durable, professional-quality images</li>

   <li>Suitable for corporate ID programs, educational campuses, government IDs, healthcare, membership cards, and small-scale access control</li>  

   <li>Easy to operate in office, kiosk, or small workspace environments</li>
   </ul>
</div>


        {/* Right Side Image Placeholder */}
        <img 
        src="/printers2/solid310d/1.jpg" 
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