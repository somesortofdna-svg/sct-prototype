import Link from "next/link";
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/media/fallback.png"
      >
        <source src="/media/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay (optional dark layer) */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1>
          We do <span>IT</span><br />right.
        </h1>

        <p>
          SMART CHIP TREE | Think Solutions. Create. Accelerate
        </p>

        <Link href="/contact">     
        <button className="contact-btn">
            Contact Us
        </button>
        </Link>   

      </div>
    </section>
  );
}
