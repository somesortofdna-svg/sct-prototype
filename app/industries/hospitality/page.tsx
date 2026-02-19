"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HospitalitySolutions: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative h-[440px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/hospitality-hero.jpg"
          alt="Hospitality Access & Loyalty Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/60" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Hospitality Access & Loyalty Solutions
          </h1>
          <p className="text-lg text-gray-200">
            Smart room access, guest key cards, and loyalty credentials designed
            to enhance guest experience and simplify hotel operations.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Leading hotels and hospitality brands rely on seamless access and
          identification systems to deliver comfort, security, and convenience.
          We provide card-based and contactless solutions that improve guest
          experience while keeping operations simple for hotel staff.
        </p>
      </section>

      {/* Hospitality Needs */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Common Hospitality Requirements
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Quick room key issuance at check-in</li>
          <li>Secure access to guest rooms and facilities</li>
          <li>Reliable door lock and elevator integration</li>
          <li>Durable cards that withstand frequent use</li>
          <li>Guest loyalty and membership programs</li>
          <li>Easy replacement of lost or damaged keys</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Hospitality Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              RFID Hotel Key Cards & Mobile Access
            </h3>
            <p className="text-gray-300">
              Contactless RFID room keys and mobile-compatible credentials that
              allow guests to access rooms, elevators, parking areas, and
              amenities — delivering fast check-ins and a modern guest
              experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Loyalty & Membership Cards
            </h3>
            <p className="text-gray-300">
              Custom-designed loyalty and membership cards for repeat guests,
              corporate clients, and premium members — supporting rewards,
              personalized services, and brand recognition.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Door Locks, Elevators & Facility Access
            </h3>
            <p className="text-gray-300">
              Integrated access control for guest rooms, lifts, gyms, pools,
              spas, and staff-only areas — ensuring smooth access while
              maintaining security behind the scenes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Front Desk Card Printers & Consumables
            </h3>
            <p className="text-gray-300">
              Compact and reliable card printers designed for front-desk use,
              enabling instant room key issuance, reprints, and consistent card
              quality — supported by certified consumables and spares.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Support, Training & Ongoing Services
            </h3>
            <p className="text-gray-300">
              We provide installation support, staff training, maintenance,
              and continuous supply of cards and consumables — ensuring your
              hospitality operations run smoothly at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#142850] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Looking to enhance your guest experience?
        </h2>
        <p className="mb-6 text-gray-200">
          Talk to us about hotel key cards, loyalty programs, and secure access
          solutions tailored for hospitality.
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

export default HospitalitySolutions;
