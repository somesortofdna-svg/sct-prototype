import "./baggage.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <section className="product-page">
      <div className="product-container">
        
        {/* LEFT — Title + Image */}
        <div className="product-left">
          <h1 className="product-title">InteliD Baggage Scanner</h1>

          <div className="product-image-wrapper">
            <Image
              src="/InteliD/baggage1.png" // change to your image
              alt="Product"
              width={500}
              height={500}
              className="product-image"
            />
          </div>
        </div>

        {/* RIGHT — Description */}
        <div className="product-info">
          <div className="product-description">
            <p className="product-text">
              A high-performance baggage scanner designed for efficient security screening in airports and high-security facilities. It uses advanced multi-energy X-ray imaging to produce clear, high-resolution images for accurate detection of prohibited items.
              Built for continuous operation, the system features a smooth conveyor, intelligent image processing, and user-friendly controls. Its network-ready design allows easy integration with centralized security systems while ensuring reliable, low-maintenance performance.
            </p>

            <ul className="product-points">
              <li>High-resolution dual/multi-energy X-ray imaging</li>
              <li>Automatic threat detection support</li>
              <li>Smooth, high-speed conveyor system</li>
              <li>Real-time image enhancement and zoom</li>
              <li>Network-ready for remote monitoring</li>
              <li>Operator-friendly interface</li>
              <li>Rugged, continuous-duty design</li>
            </ul>
          </div>
          <div className="button-row">
          <button className="inquire-btn"><Link href="/contact">Inquire</Link></button>
          <button className="back-btn"><Link href="/products">Back to Products</Link></button>
            </div>
        </div>
      </div>
    </section>
  );
}
