'use client';
import Head from "next/head";
import MilitaryCaseStudy from "./components/casestudymilitary";
import EnterpriseCaseStudy from "./components/casestudyenterprise";
import UniversityCaseStudy from "./components/casestudyuniversity";

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies | Smart Chip Tree</title>
        <meta
          name="description"
          content="Explore our case studies: Military fleet tracking, University campus solutions, and Enterprise access control & attendance systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | Smart Chip Tree" />
        <meta property="og:description" content="Military, University, and Enterprise solutions showcasing digital and smart card implementations." />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Smart Chip Tree" />
        <meta name="twitter:description" content="Military, University, and Enterprise solutions showcasing digital and smart card implementations." />
      </Head>

      <section id="military" className="scroll-mt-24">
        <MilitaryCaseStudy />
      </section>
      <section id="enterprise" className="scroll-mt-24">
        <EnterpriseCaseStudy />
      </section>
      <section id="university" className="scroll-mt-24">
        <UniversityCaseStudy />
      </section>

    </>
  );
}


