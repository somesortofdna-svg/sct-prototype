import Hero from "./components/Hero";
import Link from "next/link";
import ContactSection from "./contact/ContactSection";
import ProductSection from "./product-home/producthome";
import SidePopUps from "./components/SidePopups";
import ShowCase from "./showcase/showcasepage";

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <SidePopUps />
      

      <section className="case-study-section">

        {/* Titles + Cards */}
        <h1> Company Case Studies</h1>
        <div className="case-study-grid">
          <div>
            <h3 className="case-study-title">Solution for Indian Military</h3>
            <Link href="/case-studies#military">
              <img className="case-study-card" src="/media/military.jpg" alt="Indian Military Case Study" />
            </Link>
          </div>

          <div>
            <h3 className="case-study-title">Enterprise Solution For Microsoft</h3>
            <Link href="/case-studies#enterprise">
              <img className="case-study-card" src="/media/microsoft.jpg" alt="Microsoft Case Study" />
            </Link>
          </div>

          <div>
            <h3 className="case-study-title">University Solution</h3>
            <Link href="/case-studies#university">
              <img className="case-study-card" src="/media/university.jpg" alt="University Case Study" />
            </Link>
          </div>
        </div>

        {/* Explore Link */}
        <Link href="/contact">
          <div className="case-study-explore">
            Explore how our solutions blend into your organization
          </div>
        </Link>
      </section>
      
      <ProductSection />

      <ShowCase />

     
      <ContactSection />
    </>
  );
}
