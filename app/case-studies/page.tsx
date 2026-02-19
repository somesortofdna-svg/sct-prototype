"use client";
import Head from "next/head";
import MilitaryCaseStudy from "./components/casestudymilitary";
import EnterpriseCaseStudy from "./components/casestudyenterprise";
import UniversityCaseStudy from "./components/casestudyuniversity";
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies | Secure Smart Identity Solutions</title>
        <meta
          name="description"
          content="Military, enterprise, and university smart card and digital identity deployments."
        />
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


