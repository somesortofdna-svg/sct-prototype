"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HealthcareSolutions: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative h-[440px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/healthcare-hero.jpg"
          alt="Healthcare Identity & Access Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Healthcare Identity & Access Solutions
          </h1>
          <p className="text-lg text-gray-200">
            Secure patient identification, staff credentials, and controlled
            access systems designed for modern healthcare environments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Leading healthcare institutions worldwide rely on strong identity
          systems to protect patients, staff, and critical infrastructure.
          We deliver hospital-grade card issuance, access control, and
          identification solutions aligned with global healthcare best
          practices.
        </p>
      </section>

      {/* Healthcare Challenges */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Identity & Access Challenges in Healthcare
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Accurate patient identification and misidentification risks</li>
          <li>Managing access for doctors, nurses, staff, and contractors</li>
          <li>Secure zones such as ICUs, labs, pharmacies, and data centers</li>
          <li>High staff turnover and frequent credential reissuance</li>
          <li>Regulatory compliance and audit readiness</li>
          <li>24/7 operational reliability requirements</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Healthcare Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Patient & Staff ID Card Issuance
            </h3>
            <p className="text-gray-300">
              High-quality photo ID cards and credentials for doctors, nurses,
              administrative staff, and contractors — supporting RFID,
              contactless, and barcode-based identification commonly used by
              large hospital networks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Hospital-Grade Printers & Wristband Solutions
            </h3>
            <p className="text-gray-300">
              Reliable card and wristband printing systems designed for
              continuous hospital operations, supporting patient wristbands,
              durable staff IDs, and rapid reprints without workflow disruption.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Biometric & Smart Access Control
            </h3>
            <p className="text-gray-300">
              Secure access control for restricted areas using smart cards,
              biometrics, and role-based permissions — ensuring only authorized
              personnel can access critical zones.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Enterprise Healthcare Ecosystems
            </h3>
            <p className="text-gray-300">
              Our solutions align with global healthcare infrastructure standards
              and are compatible with leading printer and credential ecosystems
              used across major hospital chains and diagnostic networks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Training, Maintenance & Consumables
            </h3>
            <p className="text-gray-300">
              We provide complete post-deployment support including staff
              training, preventive maintenance, certified consumables,
              replacements, and long-term support — ensuring uninterrupted
              healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Planning or upgrading your healthcare identity systems?
        </h2>
        <p className="mb-6 text-gray-200">
          Speak with our experts to design secure, scalable solutions for your
          hospital or healthcare network.
        </p>
        <Link href="/contact">
          <button className="bg-[#F97316] hover:bg-[#EA580C] transition text-white font-bold py-3 px-6 rounded">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HealthcareSolutions;
