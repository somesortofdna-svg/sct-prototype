"use client";
import Head from "next/head";
import Link from "next/link";

export default function SmartCampusCaseStudy() {
  return (
    <>
      <Head>
        <title>Smart Campus Case Study | Chanakya University</title>
        <meta
          name="description"
          content="Cloud-connected smart campus solution delivering unified access control, visitor management, and secure student identity infrastructure."
        />
      </Head>

      <section className="min-h-screen w-full bg-gradient-to-b from-[#0B1623] via-[#0F243E] to-[#0B1623] text-white px-6 py-20 flex justify-center">
        <div className="w-full max-w-7xl">

          {/* HERO */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Cloud-Connected Smart Campus – Chanakya University
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              A unified, cloud-enabled smart campus ecosystem delivering secure access,
              centralized identity management, and intelligent visitor workflows
              across academic and residential environments.
            </p>
          </div>

          {/* OVERVIEW */}
          <div className="mt-16 max-w-6xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p>
              Chanakya University required a scalable infrastructure capable of
              supporting secure student access, visitor monitoring, and
              administrative oversight across multiple campus facilities.
            </p>
            <p className="mt-4">
              We deployed a <b>cloud-connected smart campus framework</b> that unified
              access control, digital identity, and monitoring systems into a
              centralized, future-ready architecture.
            </p>
          </div>

          {/* CHALLENGES */}
          <div
            className="mt-16 bg-[#132B45]/80 backdrop-blur-md border border-white/10 
                       px-8 pt-6 pb-8 rounded-2xl shadow-xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-2xl hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-bold mb-4">Campus Challenges</h2>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li>• Manual student and visitor entry processes</li>
              <li>• Disconnected access systems across academic blocks</li>
              <li>• No unified digital student identity platform</li>
              <li>• Limited real-time monitoring visibility</li>
              <li>• Scalability concerns for campus expansion</li>
            </ul>
          </div>

          {/* SOLUTION */}
          <div
            className="mt-10 bg-[#132B45]/80 backdrop-blur-md border border-white/10 
                       px-8 pt-6 pb-8 rounded-2xl shadow-xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-2xl hover:border-green-400/40"
          >
            <h2 className="text-2xl font-bold mb-4">Smart Campus Solution</h2>

            <ul className="space-y-2 text-gray-300 text-lg">
              <li>• Cloud-connected access control infrastructure</li>
              <li>• Centralized identity & access management dashboard</li>
              <li>• RFID / NFC smart ID cards for students and staff</li>
              <li>• Digital visitor management with live tracking</li>
              <li>• Role-based access enforcement</li>
              <li>• Secure audit logs for compliance and incident review</li>
            </ul>
          </div>

          {/* TECHNOLOGY */}
          <div
            className="mt-10 bg-[#132B45]/80 backdrop-blur-md border border-white/10 
                       px-8 pt-6 pb-8 rounded-2xl shadow-xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-2xl hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-bold mb-4">Technology & Platform</h2>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li>• Cloud-hosted identity management platform</li>
              <li>• Secure RFID / NFC credential ecosystem</li>
              <li>• Real-time monitoring and reporting tools</li>
              <li>• Integration-ready APIs for campus systems</li>
              <li>• Scalable multi-building architecture</li>
            </ul>
          </div>

          {/* IMPACT */}
          <div
            className="mt-10 bg-[#132B45]/80 backdrop-blur-md border border-green-400/30
                       px-8 pt-6 pb-8 rounded-2xl shadow-xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-2xl hover:border-green-400/50"
          >
            <h2 className="text-2xl font-bold mb-4">Business Impact</h2>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li>• Fully digitized campus access control</li>
              <li>• Faster, more secure visitor processing</li>
              <li>• Unified student identity ecosystem</li>
              <li>• Improved operational visibility for security teams</li>
              <li>• Future-ready infrastructure supporting growth</li>
            </ul>
          </div>

          {/* CTA */}
          <div
            className="mt-14 bg-[#132B45]/80 backdrop-blur-md border border-blue-500/40 
                       p-6 rounded-2xl text-center shadow-xl
                       transition-all duration-500 ease-out
                       hover:scale-[1.02] hover:border-blue-400/60"
          >
            <p className="text-gray-300 text-lg">
              If your institution is planning a smart campus transformation,
              our team can design and deploy a secure, scalable identity
              infrastructure aligned with your long-term academic vision.
            </p>

            <Link href="/contact">
              <button className="mt-6 rounded-lg bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-700 transition">
                Talk to Our Tech Team
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
