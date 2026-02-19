'use client';
import React from 'react';
import './iso.css';

const ISOPage = () => {
  return (
    <div className="iso-wrapper">

      {/* Background video (optional) */}
      <video autoPlay loop muted playsInline className="iso-bg-video">
        <source src="/media/about-bg.mp4" type="video/mp4" />
      </video>

      <section className="iso-content">
        <h1>ISO Certification</h1>
        <p className="iso-subtitle">Quality Standards | Compliance | Trust</p>

        <div className="iso-card">
          <img
            src="/media/iso.png"
            alt="ISO Certificate"
            className="iso-image"
          />

          <div className="iso-text">
            <h2>Certified for Excellence</h2>
            <p>
              Smart Chip Tree is ISO certified, ensuring internationally recognized
              standards for quality management, operational efficiency, and product
              reliability. Our certification reflects our commitment to compliance,
              innovation, and customer trust.
            </p>

            <ul className="iso-list">
              <li>✔ International quality compliance</li>
              <li>✔ Reliable and audited processes</li>
              <li>✔ Commitment to continual improvement</li>
              <li>✔ Customer-focused operations</li>
            </ul>

            <a href="/iso.pdf" download className="iso-download-btn">
              Download Certificate
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ISOPage;
