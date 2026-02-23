
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Management & Smart Credential Solutions | Smart Chip Tree",
  description:
    "End-to-end event credentialing, access control, and smart badge solutions for conferences, exhibitions, and large-scale events worldwide.",
  keywords: [
    "event badge printing",
    "event access control",
    "conference ID cards",
    "event credential solutions",
    "RFID event management",
    "Smart Chip Tree events",
  ],
  openGraph: {
    title: "Smart Event Credential & Access Solutions | Smart Chip Tree",
    description:
      "Secure badge printing, RFID access, and attendee management solutions for modern events.",
    url: "https://www.smartchiptree.com/solutions/event-management",
    siteName: "Smart Chip Tree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Credential Solutions | Smart Chip Tree",
    description:
      "Smart badges and access control for conferences and large-scale events.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const EventManagement: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[420px] md:h-[420px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/event-hero.jpg"
          alt="Event Access & Badge Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/60" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Event Access & Badge Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Fast badge printing, secure entry, and smooth visitor flow for
            conferences, exhibitions, and large-scale events.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-200">
          Managing people at events should be simple, fast, and stress-free.
          Our event solutions help organizers print badges instantly, control
          entry points, and track attendees — without complex setups or
          technical headaches.
        </p>
      </section>

      {/* Common Event Needs */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Event Organizers Need
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Quick on-site badge printing</li>
          <li>Easy attendee identification</li>
          <li>Controlled access to halls and zones</li>
          <li>Smooth entry without long queues</li>
        </ul>

      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Event Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              On-Site Badge & Card Printing
            </h3>
            <p className="text-gray-300">
              Compact and high-speed printers designed for event environments.
              Print visitor badges, staff IDs, and exhibitor passes instantly,
              even during peak entry hours.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              QR, RFID & Smart Badges
            </h3>
            <p className="text-gray-300">
              Choose from QR-coded badges, RFID cards, or smart passes depending
              on your event size and security needs. These badges make
              check-ins faster and help prevent unauthorized entry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Access Control & Entry Scanning
            </h3>
            <p className="text-gray-300">
              Simple scanners and access readers allow you to control who
              enters specific zones such as VIP areas, exhibition halls,
              backstage zones, or conference rooms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Attendance & Visitor Insights
            </h3>
            <p className="text-gray-300">
              Track attendance numbers in real time, understand visitor flow,
              and generate basic reports — helping you manage crowd movement
              and improve future events.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Planning an event?
        </h2>
        <p className="mb-6 text-gray-200">
          Talk to us about badge printing, access control, and smooth
          event entry solutions.
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

export default EventManagement;
