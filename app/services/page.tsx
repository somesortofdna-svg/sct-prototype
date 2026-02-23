'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './services.css';
import Head from 'next/head';

<Head>
        <title>Our Services | Smart Chip Tree</title>
        <meta
          name="description"
          content="Explore our global services: Banking & Finance, Education, Enterprise, Government, Healthcare, Hospitality, Manufacturing & Logistics, Travel & Transportation, Event Management, and Cloud-based solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Services | Smart Chip Tree" />
        <meta property="og:description" content="Cloud-enabled smart card and access control solutions for multiple industries." />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Smart Chip Tree" />
        <meta name="twitter:description" content="Cloud-enabled smart card and access control solutions for multiple industries." />
</Head>



const industries = [
  { label: "Banking & Finance", slug: "banking" },
  { label: "Education", slug: "education" },
  { label: "Enterprise", slug: "enterprise" },
  { label: "Government", slug: "government" },
  { label: "Healthcare", slug: "healthcare" },
  { label: "Hospitality", slug: "hospitality" },
  { label: "Manufacturing & Logistics", slug: "manufacturing-logistics" },
  { label: "Travel & Transportation", slug: "travel-transportation" },
  { label: "Event Management", slug: "event-management" }
];




const solutions = {
  "Access Control": [
    "Access Control Systems",
    "Cloud Based Physical Access Control",
    "Contactless Payments and Tracking",
    "Real Time Identity Positioning",
    "Visitor Management"
  ],
  "Card Printing": [
    "Card Services",
    "Cloud Based ID Printing",
    "ID Badge & Card",
    "Financial Instant Issuance",
    "High Volume ID Card Printing"
  ],
  "Biometric ID": [
    "Biometric ID & Verification",
    "Facial Recognition",
    "Fingerprint Biometrics",
    "Rapid ID"
  ],
  "RFID": [
    "Custom RFID Tags",
    "Embeddable RFID Tags",
    "Hardened RFID Tags",
    "RFID for Management Systems",
    "On-Metal RFID Tags",
    "Animal Tracking + ID"
  ]
};

const accessControlLinks: Record<string, string> = {
  "Access Control Systems": "/solution/access-control#access-control-systems",
  "Cloud Based Physical Access Control": "/solution/access-control#cloud-access-control",
  "Contactless Payments and Tracking": "/solution/access-control#contactless-payments-tracking",
  "Real Time Identity Positioning": "/solution/access-control#real-time-identity-positioning",
  "Visitor Management": "/solution/access-control#visitor-management"
};

const biometricIDLinks: Record<string, string> = {
  "Biometric ID & Verification": "/solution/biometric-ID#biometric-id-verification",
  "Facial Recognition": "/solution/biometric-ID#facial-recognition",
  "Fingerprint Biometrics": "/solution/biometric-ID#fingerprint-biometrics",
  "Rapid ID": "/solution/biometric-ID#rapid-id"
};

const solutionLinkMaps: Record<string, Record<string, string>> = {
  "Access Control": accessControlLinks,
  "Biometric ID": biometricIDLinks,
  "RFID": {
    "Custom RFID Tags": "/solution/rfid#custom-rfid-tags",
    "Embeddable RFID Tags": "/solution/rfid#embeddable-rfid-tags",
    "Hardened RFID Tags": "/solution/rfid#hardened-rfid-tags",
    "RFID for Management Systems": "/solution/rfid#rfid-management-systems",
    "On-Metal RFID Tags": "/solution/rfid#on-metal-rfid-tags",
    "Animal Tracking + ID": "/solution/rfid#animal-tracking-id"
  },
  "Card Printing": {
    "Card Services": "/solution/card-printing#card-services",
    "Cloud Based ID Printing": "/solution/card-printing#cloud-based-id-printing",
    "ID Badge & Card": "/solution/card-printing#id-badges-smart-cards",
    "Financial Instant Issuance": "/solution/card-printing#financial-instant-issuance",
    "High Volume ID Card Printing": "/solution/card-printing#high-volume-id-card-printing"
  }
};


const solutionSpecs: Record<string, string[]> = { 
  "Access Control Systems": ["Cloud Integration", "Multi-Site Support", "Real-Time Monitoring"], 
  "Cloud Based Physical Access Control": ["Mobile Unlock", "Remote Admin", "Encrypted Access"], 
  "Contactless Payments and Tracking": ["NFC Support", "Usage Analytics", "Fast Processing"], 
  "Real Time Identity Positioning": ["Live Tracking", "Heatmap View", "Zone Alerts"], 
  "Visitor Management": ["QR Check-In", "Pre-Registration", "Approval Flow"], 
  "Card Services": ["PVC Cards", "Smart Cards", "Custom Design"], 
  "Cloud Based ID Printing": ["Bulk Print", "Secure Storage", "Template Library"], 
  "ID Badge & Card": ["Employee IDs", "Visitor Badges", "Lanyards"], 
  "Financial Instant Issuance": ["Bank Cards", "Activation", "Same-Day Issue"], 
  "High Volume ID Card Printing": ["Automated Queue", "Fast Print", "Batch Support"], 
  "Biometric ID & Verification": ["Face Scan", "Fingerprint", "AI Matching"], 
  "Facial Recognition": ["Live Detection", "Mask Support", "Anti-Spoofing"], 
  "Fingerprint Biometrics": ["Rapid Scan", "Secure Hash", "Device Support"], 
  "Rapid ID": ["Fast Enrollment", "Instant Verify", "Government-Grade"], 
  "Custom RFID Tags": ["Waterproof", "Printable", "Bulk Encoding"], 
  "Embeddable RFID Tags": ["Tiny Form Factor", "Durable", "Custom Housing"], 
  "Hardened RFID Tags": ["Shock Resistant", "IP67+", "Industrial Use"], 
  "RFID for Management Systems": ["Asset Tracking", "People Flow", "Analytics"], 
  "On-Metal RFID Tags": ["Metal-Safe", "Long Range", "Adhesive/Stud Options"], 
  "Animal Tracking + ID": ["Livestock Tags", "Movement Logs", "Rugged IDs"] };

const ServicesPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [openSolution, setOpenSolution] = useState("");
  const [openSpec, setOpenSpec] = useState("");

  return (

    <div className="video-bg-wrapper">
      <video className="video-bg"
      autoPlay
      muted
      loop
      playsInline 
      >
        <source src="media/service-bg.mp4" type="video/mp4" />
      </video>

    <div className="services-panels">

      {/* INDUSTRY PANEL */}
      <div className="panel">
        <h2 className="panel-title">By Industry</h2>

        {(showMore ? industries : industries.slice(0, 4)).map(ind => (
          <Link
          key={ind.slug}
          href={`/industries/${ind.slug}`}>
            <div className="section-card">{ind.label}</div>
          </Link>
        ))}


        
        <p className="view-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "View Less" : "View More"}
          </p>
        
      </div>

      {/* SOLUTION PANEL */}
      <div className="panel">
        <h2 className="panel-title">By Solution</h2>

        {Object.entries(solutions).map(([group, items]) => (
          <div key={group} className="solution-group">
            
            {/* Solution Group Pill */}
            <div
              className="section-card"
              onClick={() => setOpenSolution(openSolution === group ? "" : group)}
            >
              {group}
            </div>

            {/* Expanded Solution Options */}
            {openSolution === group && (
              <div className="accordion">
                {items.map(item => (
                  <div key={item}>
                    {solutionLinkMaps[group] ? (
                      <Link
                        href={solutionLinkMaps[group][item]}
                        className="accordion-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSolution("");
                          setOpenSpec("");
                        }}
                      >
                        {item}
                      </Link> 
                    ) : (
                     <p
                     className="accordion-item"
                     onClick={() => setOpenSpec(openSpec === item ? "" : item)}
                     >
                      {item}
                      </p>
                    )}




                    {/* Specs directly under clicked solution */}
                    {openSpec === item && solutionSpecs[item] && (
                      <div className="spec-list">
                        {solutionSpecs[item].map(spec => (
                          <p key={spec} className="spec-item">{spec}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Lead gen CTA */}
                <Link href="/contact" className="contact-cta">
                  Explore how we can assist you
                </Link>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
    </div> 
  );

};

export default ServicesPage;
