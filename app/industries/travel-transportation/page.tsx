"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TravelTransportation: React.FC = () => {
  return (
    <div className="bg-[#0A1A2F] text-white">
      {/* Hero Section */}
      <section className="relative h-[440px] flex items-center justify-center text-center px-6">
        <Image
          src="/media/transport-hero.jpg"
          alt="Travel & Transportation Identity Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2F]/65" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Travel & Transportation Identity Solutions
          </h1>
          <p className="text-lg text-gray-200">
            Secure staff identity, controlled access, and fleet-ready solutions
            for transportation and mobility infrastructure.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-[#142850]">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Overview
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-200">
          Transportation systems operate at scale and under constant movement.
          From airports and metro systems to road transport and logistics hubs,
          secure identity and access play a critical role in safety,
          accountability, and operational efficiency.
        </p>
      </section>

      {/* Sector Needs */}
      <section className="py-16 px-6 bg-[#1E2A47] text-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Common Challenges in Travel & Transport
        </h2>

        <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside">
          <li>Large, mobile workforce across multiple locations</li>
          <li>Controlled access to restricted zones and depots</li>
          <li>Secure identification for drivers, crew, and staff</li>
          <li>Fleet accountability and movement traceability</li>
          <li>Compliance with safety and regulatory standards</li>
          <li>Need for durable credentials in harsh environments</li>
        </ul>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 bg-[#0A1A2F]">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Travel & Transportation Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              Staff & Crew Identification
            </h3>
            <p className="text-gray-300">
              Secure photo ID cards and smart credentials for drivers,
              pilots, ground staff, technicians, and contractors — enabling
              clear identification and role-based access across facilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Access Control for Transport Infrastructure
            </h3>
            <p className="text-gray-300">
              Integrated access control for terminals, control rooms, depots,
              yards, warehouses, and maintenance areas — ensuring only
              authorized personnel enter sensitive zones.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              Fleet & Asset-Linked Identity Systems
            </h3>
            <p className="text-gray-300">
              Smart credentials that connect drivers, vehicles, and maintenance
              records — improving accountability, audit readiness, and
              operational visibility for large fleets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">
              High-Reliability Printers & Durable Cards
            </h3>
            <p className="text-gray-300">
              Industrial-grade card printers and durable credentials designed
              to withstand outdoor usage, frequent handling, and long
              operational cycles common in transport environments.
            </p>
          </div>
        </div>
      </section>

      {/* Military Reference */}
      <section className="py-14 px-6 bg-[#142850] text-center">
        <p className="text-gray-200 max-w-4xl mx-auto">
          Our transportation capabilities extend to highly secure and
          mission-critical fleet environments.  
          <Link href="/case-studies/military">
            <span className="ml-1 underline text-blue-400 hover:text-blue-300">
              View our Military Fleet Smart Card Deployment
            </span>
          </Link>
        </p>
      </section>

      {/* Contact */}
      <section className="bg-[#0A1A2F] py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Building secure transportation infrastructure?
        </h2>
        <p className="mb-6 text-gray-200">
          Talk to us about identity, access, and fleet-ready solutions for
          travel and transportation operations.
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

export default TravelTransportation;
