
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Campus & Education Solutions in India | Smart Chip Tree",
  description:
    "Cloud-based smart campus solutions for schools and universities in India. Smart Chip Tree offers attendance systems, ID card solutions, and full-stack campus management software with integrated hardware.",
  keywords: [
    "smart campus solutions India",
    "school attendance system India",
    "university ID card system India",
    "campus access control India",
    "education smart card India",
    "cloud campus management India",
    "Smart Chip Tree education solutions",
  ],
  openGraph: {
    title: "Cloud-Based Smart Campus Solutions | Smart Chip Tree",
    description:
      "End-to-end campus automation including attendance, ID cards, access control, and full-stack software for educational institutions in India.",
    url: "https://www.smartchiptree.com/solutions/education", // update if needed
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Campus Solutions India | Smart Chip Tree",
    description:
      "Attendance systems, smart ID cards, and cloud-based campus management for schools and universities.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const Education: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[420px] md:h-[420px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/education-hero.jpg"
          alt="Education & Campus Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/60" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Campus Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Scalable ID card printing, biometric attendance, and secure
            access control for modern educational institutions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-200">
          Educational institutions require reliable identity and access
          systems that can scale across students, faculty, and staff.
          Our solutions enable high-volume ID card issuance, campus-wide
          access control, and real-time attendance visibility.
        </p>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Key Campus Requirements
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>High-volume student and staff ID card issuance</li>
          <li>Durable smart cards for daily campus use</li>
          <li>Biometric-based attendance and access tracking</li>
          <li>Secure access to academic and residential buildings</li>
        </ul> 
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Education Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              ID Card Printers & High-Volume Printing
            </h3>
            <p className="text-gray-300">
              Centralized and decentralized card printing solutions designed
              for bulk issuance during admissions, renewals, and staff
              onboarding — supporting PVC, smart cards, and encoded credentials.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Smart Cards & Credentials
            </h3>
            <p className="text-gray-300">
              Student and faculty ID cards supporting RFID, NFC, and magnetic
              stripe technologies for seamless access, identification, and
              campus services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Biometrics, Attendance & Access Control
            </h3>
            <p className="text-gray-300">
              Integrated biometric devices and attendance systems combined
              with secure access control for classrooms, labs, libraries,
              and hostels.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Link */}
      <section className="bg-[#142850] py-12 text-center">
        <p className="text-gray-200 mb-4">
          Check out our solution details for{" "}
          <span className="font-semibold text-white">
            Chanakya University, Bengaluru
          </span>
        </p>
        <Link
          href="/case-studies#university"
          className="text-blue-400 hover:text-blue-300 underline font-medium"
        >
          View University Case Study →
        </Link>
      </section>

      {/* Contact (same style as Banking) */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Want to know how we can make your campus better?
        </h2>
        <p className="mb-6 text-gray-200">
          Speak with our team to explore secure and scalable campus solutions.
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

export default Education;
