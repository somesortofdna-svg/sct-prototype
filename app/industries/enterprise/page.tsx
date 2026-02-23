"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cloud Connectivity & Access Solutions | Smart Chip Tree",
  description:
    "Cloud-based enterprise security and connectivity solutions. Smart Chip Tree delivers access control, smart ID systems, and scalable infrastructure for modern organizations worldwide.",
  keywords: [
    "enterprise access control",
    "cloud connectivity solutions",
    "enterprise ID card system",
    "corporate security solutions",
    "enterprise smart card solutions",
    "cloud based access management",
    "Smart Chip Tree enterprise solutions",
  ],
  openGraph: {
    title: "Enterprise Cloud-Based Security Solutions | Smart Chip Tree",
    description:
      "Scalable cloud-enabled access control, identity management, and smart infrastructure for enterprises worldwide.",
    url: "https://www.smartchiptree.com/solutions/enterprise", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Cloud Connectivity | Smart Chip Tree",
    description:
      "Cloud-driven access control and identity solutions for modern enterprises worldwide.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const Enterprise: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[420px] md:h-[420px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/enterprise-hero.jpg"
          alt="Enterprise Identity & Access Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/60" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise Identity & Access Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Secure card issuance, access control, and identity infrastructure
            for large-scale enterprises and corporate campuses.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-200">
          Enterprises require reliable, interoperable identity systems that
          integrate seamlessly across locations, users, and security layers.
          Our enterprise solutions are built around industry-leading ecosystems
          to deliver consistent, scalable, and secure identity operations.
        </p>
      </section>

      {/* Enterprise Needs */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Enterprise Identity Requirements
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Centralized and distributed card issuance</li>
          <li>Secure employee and contractor credentials</li>
          <li>Multi-site access control and policy enforcement</li>
          <li>Vendor-agnostic infrastructure compatibility</li>
        </ul>

        
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Enterprise Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Enterprise Card Printing & Issuance
            </h3>
            <p className="text-gray-300">
              High-performance card printing solutions supporting HID Fargo,
              Zebra, and Entrust platforms — enabling secure issuance of
              employee IDs, visitor badges, and smart credentials at scale.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Smart Credentials & Ecosystem Compatibility
            </h3>
            <p className="text-gray-300">
              Support for RFID, NFC, and secure smart cards designed to integrate
              seamlessly with HID, Zebra, and Entrust identity ecosystems,
              ensuring long-term compatibility and flexibility.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Access Control & Corporate Infrastructure
            </h3>
            <p className="text-gray-300">
              Secure physical access control across offices, data centers,
              and restricted zones — integrated with enterprise security
              policies, audit trails, and identity management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Link */}
      <section className="bg-[#142850] py-12 text-center">
        <p className="text-gray-200 mb-4">
          See how our enterprise solutions operate at scale
        </p>
        <Link
          href="/case-studies#enterprise"
          className="text-blue-400 hover:text-blue-300 underline font-medium"
        >
          View our solution in Microsoft →
        </Link>
      </section>

      {/* Contact (same pattern as Banking & Education) */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Want to strengthen your enterprise identity infrastructure?
        </h2>
        <p className="mb-6 text-gray-200">
          Connect with our experts to discuss scalable enterprise solutions.
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

export default Enterprise;
