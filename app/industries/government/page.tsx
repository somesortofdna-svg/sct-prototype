"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const GovernmentSolutions: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative h-[440px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/govt-hero.jpg"
          alt="Government ID & Card Issuance Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Government ID & Secure Card Issuance Solutions
          </h1>
          <p className="text-lg text-gray-200">
            High-volume card production, secure identity infrastructure, and
            long-term operational support for government and public-sector
            programs.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Government identity programs demand scale, reliability, and absolute
          security. We deliver end-to-end card issuance and access control
          solutions designed for national, state, and departmental deployments —
          supporting millions of credentials with consistent quality and
          compliance.
        </p>
      </section>

      {/* Government Needs */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Challenges in Government Identity Programs
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>High-volume card production with strict timelines</li>
          <li>Secure personalization and data handling</li>
          <li>Long operational lifecycles and maintenance needs</li>
          <li>Dependence on reliable consumables and spare parts</li>
          <li>Training government staff for independent operations</li>
          <li>Compliance with national security and audit standards</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Government Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              High-Volume ID Card Production
            </h3>
            <p className="text-gray-300">
              We deploy centralized and distributed card issuance setups using
              industry-leading retransfer and direct-to-card printers capable
              of producing thousands of secure IDs per day — ideal for national
              ID, defense, transport, and public service programs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Enterprise-Grade Card Printers & Personalization
            </h3>
            <p className="text-gray-300">
              Our solutions are built around trusted government-grade printer
              ecosystems such as <b>Zebra</b>, <b>HID Fargo</b>, and <b>Entrust</b>,
              supporting smart cards, RFID, contactless credentials, holographic
              overlays, and secure encoding.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Secure Access & Infrastructure Integration
            </h3>
            <p className="text-gray-300">
              Beyond cards, we implement access control systems for government
              buildings, data centers, and restricted zones — integrating
              identity cards with doors, readers, and monitoring platforms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Post-Deployment Services & Support
            </h3>
            <p className="text-gray-300">
              Government projects do not end at delivery. We provide complete
              post-order support including on-site training, preventive and
              corrective maintenance, certified consumables supply, spare parts
              management, and long-term AMC support — ensuring uninterrupted
              operations for years.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Link */}
      <section className="py-14 px-6 bg-[#142850] text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Proven at National Scale
        </h2>
        <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
          Our government capabilities are validated through large-scale defense
          deployments involving secure credentials, centralized databases, and
          audit-ready systems.
        </p>
        <Link href="/case-studies#military">
          <span className="inline-block text-blue-400 hover:text-blue-300 underline font-medium">
            View our Military Smart Card Deployment
          </span>
        </Link>
      </section>

      {/* Contact */}
      <section className="bg-[#0A1A2F] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Planning a government identity or card issuance project?
        </h2>
        <p className="mb-6 text-gray-200">
          Speak with our experts to understand printer selection, production
          capacity planning, and long-term operational support.
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

export default GovernmentSolutions;
