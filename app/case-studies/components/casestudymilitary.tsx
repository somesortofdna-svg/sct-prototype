"use client";
import Link from "next/link";

export default function MilitaryCaseStudy() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0B1623] via-[#0F243E] to-[#0B1623] text-white px-6 py-24 flex justify-center">
      <div className="w-full max-w-7xl space-y-24">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="uppercase tracking-widest text-blue-400 text-sm">
            Defense Case Study
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Military Smart Card–Enabled Fleet Maintenance Digitization
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            A secure, auditable, and eco-efficient digital transformation
            engineered for high-movement defense ecosystems.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-[#132B45]/50 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
            <h3 className="text-xl font-medium text-gray-300">
              Personnel Strength
            </h3>
            <p className="text-5xl font-semibold mt-4 text-white">
              500,000+
            </p>
            <p className="text-gray-400 mt-4">
              Active military workforce supported through secure digital identity systems.
            </p>
          </div>

          <div className="bg-[#132B45]/50 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
            <h3 className="text-xl font-medium text-gray-300">
              Fleet Size
            </h3>
            <p className="text-5xl font-semibold mt-4 text-white">
              2,000 – 3,000
            </p>
            <p className="text-gray-400 mt-4">
              Operational vehicles transitioned from manual registers to secure smart credentials.
            </p>
          </div>

        </div>

        {/* CHALLENGES + SOLUTION */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* CHALLENGES */}
          <div className="bg-[#132B45]/40 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition duration-300 hover:border-red-400/40">
            <h2 className="text-2xl font-semibold mb-6">
              Legacy System Challenges
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>100% handwritten vehicle maintenance registers</li>
              <li>Physical transport of logs for audit verification</li>
              <li>Risk of document tampering & loss</li>
              <li>No encryption or role-based access</li>
              <li>High paper dependency</li>
              <li>Delayed audit cycles</li>
            </ul>
          </div>

          {/* SOLUTION */}
          <div className="bg-[#132B45]/40 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition duration-300 hover:border-green-400/40">
            <h2 className="text-2xl font-semibold mb-6">
              Smart Card–Based Intervention
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>Encrypted contactless smart credential storage</li>
              <li>Centralized Driver Identity & Maintenance database</li>
              <li>Remote audit accessibility</li>
              <li>Anti-tamper digital verification</li>
              <li>Eliminated document transportation</li>
              <li>AI-ready predictive maintenance architecture</li>
              <li>Unified 3-in-1 secure smart identity credential</li>
            </ul>
          </div>

        </div>

        {/* TECHNOLOGY TABLE */}
        <div className="bg-[#132B45]/40 border border-white/10 rounded-2xl p-10 backdrop-blur-md">

          <h2 className="text-2xl font-semibold mb-8 text-center">
            Technology Stack & Standards
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-gray-300">
              <thead className="bg-[#1A3555] text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Component</th>
                  <th className="px-6 py-4 font-medium">Specification</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Smart Card IC", "NXP MIFARE, Infineon Secure IC, Philips Contactless Chips"],
                  ["Protocol", "ISO/IEC 14443 A/B, NFC Data Exchange"],
                  ["Security", "AES 128/256 encryption, UID authentication, role-based access"],
                  ["Durability", "PVC, PET composite military-grade card body with anti-tamper layers"],
                  ["Personalization Ecosystem", "Zebra, HID Fargo, Entrust Datacard compatible hardware"],
                  ["Data Portability", "QR + NFC unified credential with digital visiting card support"]
                ].map(([component, spec], index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-[#1A3555]/50 transition duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {component}
                    </td>
                    <td className="px-6 py-4">
                      {spec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IMPACT */}
        <div className="bg-[#132B45]/40 border border-green-400/30 rounded-2xl p-10 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-6">
            Impact & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-400">
            <p>100% digitized maintenance records</p>
            <p>Eliminated physical audit-document transport</p>
            <p>Strengthened security & integrity</p>
            <p>Reduced theft & document loss</p>
            <p>Accelerated compliance audits</p>
            <p>Major environmental impact through paper reduction</p>
          </div>

          <p className="mt-6 font-semibold text-white">
            Recognized by the Defense Ministry of India for secure digital transformation.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-10">
          <h3 className="text-2xl font-semibold">
            Defense-Grade Digital Identity Infrastructure
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our unified credential consolidates Access, ID, and digital visiting card
            capabilities into a single secure smart identity platform.
          </p>

          <Link href="/contact">
            <button className="mt-4 rounded-xl bg-blue-600 px-8 py-3 font-medium hover:bg-blue-700 transition">
              Talk to Our Expert Team
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
