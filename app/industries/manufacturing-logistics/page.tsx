
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Logistics Tracking Solutions | Smart Chip Tree",
  description:
    "RFID-based live tracking, asset visibility, and smart logistics solutions for manufacturing and supply chain operations worldwide.",
  keywords: [
    "RFID logistics tracking",
    "manufacturing asset tracking",
    "live inventory tracking",
    "supply chain RFID",
    "warehouse tracking solutions",
    "Smart Chip Tree logistics",
  ],
  openGraph: {
    title: "RFID Live Tracking for Manufacturing & Logistics",
    description:
      "Real-time asset tracking and smart supply chain visibility solutions.",
    url: "https://www.smartchiptree.com/solutions/manufacturing-logistics",
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RFID Logistics Tracking | Smart Chip Tree",
    description:
      "Live tracking and smart visibility for modern supply chains.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const ManufacturingLogistics: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[440px] md:h-[440px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/logistic-hero.jpg"
          alt="Manufacturing & Logistics Identity Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing & Logistics Identity Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Secure workforce identity, controlled access, and operational
            visibility for factories, warehouses, and supply chains.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Manufacturing plants and logistics operations rely on precision,
          efficiency, and safety. Managing large workforces, contractors,
          assets, and access points requires secure, reliable identity and
          access systems built for industrial environments.
        </p>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Industry Challenges
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>High workforce volume across shifts and locations</li>
          <li>Managing contractors, vendors, and temporary staff</li>
          <li>Restricted access to production and storage zones</li>
          <li>Asset and inventory movement tracking</li>
          <li>Compliance with safety and audit requirements</li>
          <li>Harsh environments affecting credentials and devices</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Manufacturing & Logistics Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Workforce & Contractor Identification
            </h3>
            <p className="text-gray-300">
              Secure photo ID cards and smart credentials for employees,
              contractors, and vendors — ensuring clear identification and
              role-based access across facilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Access Control for Plants & Warehouses
            </h3>
            <p className="text-gray-300">
              Integrated access control for production floors, warehouses,
              loading docks, and restricted areas — improving safety and
              reducing unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Asset & Logistics Tracking Integration
            </h3>
            <p className="text-gray-300">
              Identity-linked systems that support tracking of personnel,
              vehicles, and assets — enabling better traceability across the
              supply chain.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Industrial-Grade Printers & Credentials
            </h3>
            <p className="text-gray-300">
              High-performance card printers and durable credentials designed
              for continuous operation and challenging industrial conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Scale Reference */}
      <section className="py-14 px-6 bg-[#142850] text-center">
        <p className="text-gray-200 max-w-4xl mx-auto">
          Our solutions are built to scale across large logistics networks and
          multi-site manufacturing operations — supporting centralized
          management and decentralized execution.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-[#0A1A2F] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Optimizing industrial operations?
        </h2>
        <p className="mb-6 text-gray-200">
          Speak to our team about identity, access, and logistics-ready
          solutions designed for manufacturing and supply chain environments.
        </p>
        <Link href="/contact">
          <button className="bg-[#F97316] hover:bg-[#EA580C] transition text-white font-bold py-3.5 px-6 rounded">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ManufacturingLogistics;
