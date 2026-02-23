import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking & Financial Card Solutions in India | Smart Chip Tree",
  description:
    "Smart Chip Tree provides secure financial card manufacturing and access control solutions for banks and financial institutions across India. EMV cards, contactless payments, and infrastructure security.",
  keywords: [
    "banking card solutions India",
    "financial card manufacturer India",
    "EMV card India",
    "contactless payment cards India",
    "bank access control systems India",
    "secure banking infrastructure India",
    "Smart Chip Tree banking solutions",
  ],
  openGraph: {
    title: "Banking & Finance Smart Card Solutions | Smart Chip Tree",
    description:
      "End-to-end financial card production and secure access control solutions for Indian banks and financial institutions.",
    url: "https://www.smartchiptree.com/solutions/banking-finance", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking & Finance Card Solutions India | Smart Chip Tree",
    description:
      "Secure financial cards and access control infrastructure for modern banking environments.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const BankingFinance: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[420px] md:h-[420px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/bank-hero.jpg"
          alt="Banking Card Issuance & Access Control"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/60" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Banking & Financial Infrastructure Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Secure card issuance, identity credentials, and access control
            infrastructure for modern banking environments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-200">
          We support banks and financial institutions with end-to-end solutions
          for <b>card printing, secure credential issuance, and facility access control</b>.
          From debit and credit card personalization to secure access across
          branches and data centers, our solutions are designed for compliance,
          durability, and long-term scalability.
        </p>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Key Challenges in Banking Environments
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Secure issuance and personalization of financial cards</li>
          <li>High-volume, reliable card printing with minimal downtime</li>
          <li>Managing multiple card types across customer and staff use cases</li>
          <li>Controlling access to branches, vaults, and restricted zones</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Banking Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Financial Card Printing & Personalization
            </h3>
            <p className="text-gray-300">
              Secure issuance and personalization of <b>debit cards, credit cards,
              prepaid cards, and employee ID cards</b>, supporting magnetic stripe,
              chip, NFC, and hybrid credentials with compliance-ready workflows.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Card Printers, Encoders & Consumables
            </h3>
            <p className="text-gray-300">
              Enterprise-grade card printers and encoders compatible with
              <b> Zebra, HID Fargo, and Entrust ecosystems</b>, including ribbons,
              laminates, and secure consumables for high-volume banking operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Banking Infrastructure & Access Control
            </h3>
            <p className="text-gray-300 mb-6">
              Access control solutions for bank branches, corporate offices,
              data centers, and restricted areas — integrating smart cards,
              role-based access, and audit-ready security systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Talk to Our Banking Solutions Team
        </h2>
        <p className="mb-6 text-gray-200">
          Looking to implement secure card issuance or banking access
          infrastructure? Our experts can help.
        </p>
        <Link href="/contact" passHref>
        <button className="bg-[#F97316] hover:bg-[#EA580C] transition text-white font-bold py-3.5 px-6 rounded">
          Contact Us
        </button>
        </Link>
      </section>
    </div>
  );
};

export default BankingFinance;
