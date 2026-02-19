"use client";
import Head from "next/head";
import Link from "next/link";

export default function EnterpriseCaseStudy() {
  return (
    <>
      <Head>
        <title>Enterprise Access & Identity Infrastructure</title>
        <meta
          name="description"
          content="Long-term enterprise engagement delivering unified access control, visitor management, smart credentials, hardware ecosystems, and lifecycle support."
        />
      </Head>

      <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0B1623] via-[#0F243E] to-[#0B1623] text-white px-6 py-24 flex justify-center">
        <div className="w-full max-w-7xl space-y-24">

          {/* HERO */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="uppercase tracking-widest text-blue-400 text-sm">
              Enterprise Case Study
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Enterprise Access & Identity Infrastructure
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              A long-term strategic partnership delivering unified access control,
              visitor management, smart credentials, and lifecycle infrastructure
              support across complex enterprise environments.
            </p>
          </div>

          {/* STRATEGIC OVERVIEW */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Strategic Engagement
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Over a 7–8 year engagement, we partnered with a large enterprise
                organization to design, deploy, and operate a unified access and
                identity infrastructure across multiple facilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Lifecycle Ownership
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Beyond implementation, we operated as a single accountable
                technology partner — managing hardware provisioning, platform
                integration, compliance readiness, preventive maintenance, and
                long-term scalability.
              </p>
            </div>
          </div>

          {/* CHALLENGES + SOLUTION */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* CHALLENGES */}
            <div className="bg-[#132B45]/50 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-blue-500/40 transition duration-300">
              <h2 className="text-2xl font-semibold mb-6">
                Enterprise Challenges
              </h2>

              <ul className="space-y-3 text-gray-400">
                <li>Disparate access control systems across facilities</li>
                <li>Manual visitor entry and compliance gaps</li>
                <li>Multiple vendors for cards, printers, and consumables</li>
                <li>Limited real-time audit visibility</li>
                <li>High operational overhead for infrastructure management</li>
              </ul>
            </div>

            {/* SOLUTION */}
            <div className="bg-[#132B45]/50 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-green-500/40 transition duration-300">
              <h2 className="text-2xl font-semibold mb-6">
                Integrated Enterprise Architecture
              </h2>

              <ul className="space-y-3 text-gray-400">
                <li>Centralized enterprise-wide access control platform</li>
                <li>Digital visitor management with automated audit trails</li>
                <li>Integration with building management systems</li>
                <li>RFID / NFC smart credentials for workforce & visitors</li>
                <li>Zebra, HID Fargo & Entrust-aligned personalization ecosystem</li>
                <li>Multi-site architecture supporting phased expansion</li>
                <li>SLA-driven preventive maintenance & on-site support</li>
              </ul>
            </div>

          </div>

          {/* TECHNOLOGY & ECOSYSTEM */}
          <div className="mt-20 space-y-12">
            <h2 className="text-3xl font-semibold text-center">
             Technology & Ecosystem
           </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-gray-300 text-lg max-w-5xl mx-auto">
            <ul className="space-y-6 list-disc list-inside">
              <li>RFID / NFC smart card credential technologies</li>
              <li>Centralized identity & access management database</li>
              <li>Role-based access control with audit logging</li>
            </ul>
            <ul className="space-y-6 list-disc list-inside">
              <li>Zebra, HID Fargo & Entrust-aligned personalization</li>
              <li>Vendor-neutral, standards-compliant architecture</li>
              <li>Future-ready expansion capability</li>
            </ul>
          </div>
        </div>
          {/* BUSINESS IMPACT */}
          <div className="bg-[#132B45]/50 border border-green-400/30 rounded-2xl p-10 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-6">
              Business Outcomes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-gray-400">
              <p>Unified access control across enterprise locations</p>
              <p>Eliminated manual visitor logging & paper records</p>
              <p>Improved compliance, audit readiness & reporting</p>
              <p>Reduced vendor fragmentation</p>
              <p>Optimized long-term operational cost</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-10">
            <h3 className="text-2xl font-semibold">
              Designing Enterprise-Grade Identity Infrastructure
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              If you are evaluating a long-term access and identity strategy,
              we help enterprises design, deploy, and operate scalable,
              standards-aligned infrastructure tailored to your compliance
              and operational requirements.
            </p>

            <Link href="/contact">
              <button className="mt-4 rounded-xl bg-blue-600 px-8 py-3 font-medium hover:bg-blue-700 transition">
                Speak With Our Enterprise Team
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
