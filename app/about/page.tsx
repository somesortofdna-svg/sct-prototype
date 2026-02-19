import Link from "next/link";
import "./about.css";
export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Since 2013, Smart Chip Tree has been a trusted whole system integration solution 
          provider specializing in <b>secure identity, card issuance, and RFID-based automation 
          systems.</b> We deliver end-to-end solutions encompassing hardware, software, integration, 
          deployment, and post-installation support, enabling organizations to implement scalable 
          and secure identity ecosystems.</p>
        <p>
          Our expertise spans <b> Card Printers, Laser Engraved Printers, Financial Card Printers, 
          ID Badge Printers, and Industrial Printing systems designed for High Capacity, 
          Retransfer Printing, and Cloud Based Printing environments.</b> We also provide advanced 
          Encoding Solutions and Secure Card Printing technologies to meet stringent requirements 
          for Identity and Security, Data Security, and Authentication.</p>
        <p>
          Based in Delhi, Smart Chip Tree operates branches in Bangalore, Hyderabad, Chennai, 
          and several other major cities, maintaining a PAN India presence and with a robust
          distribution network and active import/export operations across <i>China, the USA, 
          and Korea</i> we deliver dependable solutions globally—on time and with uncompromised quality.          
        </p>
      </section>

      <section className="about-content">
        <h2>Our Solutions</h2>
        <h3>RFID & Smart Automation Solutions</h3>
        <p>
        We offer comprehensive<b> RFID-based solutions for schools, colleges, libraries, garment houses, and 
        industrial facilities.</b> These solutions include integrated software platforms, RFID readers, book kiosks, 
        and automated SMS alert systems for parents and institutional authorities. Our systems are designed to 
        enhance operational efficiency, real-time tracking, and secure access control.</p>
        <p>
        <b>Our Building Management Solutions (BMS) include access control systems, CCTV surveillance, 
        DVRs, fire alarm systems, entrance barriers, control panels, and centralized BMS software, ensuring safety, 
        compliance, and intelligent infrastructure management.</b>
        </p>
        <h4>Card Issuance & Secure Printing Solutions</h4>
        <p>
        Smart Chip Tree provides complete card issuance solutions, including:<br/>

        1. Thermal ID Card Printers<br />
        2. Retransfer Printers for high-quality printing<br />
        3. Aadhaar Card & EPIC Card Printers<br />
        4. Financial Card Printers<br />
        5. School & University ID Card Printers<br />
        6. Card Personalization & Writing Software<br />
        <br/>
        We also manufacture and supply <b>PVC Cards, Smart Cards, MIFARE Cards, Proximity Cards, RFID Cards, RFID Tags, 
        Access Cards, and Access Readers</b>, supporting secure identification across government, education, and corporate 
        sectors.
        </p>
        
        <h1>Leadership & Commitment to Quality</h1>
        <p>
        Under the leadership of<b> Anju Kumari</b>, Smart Chip Tree has built a strong reputation for technical excellence 
        and customer-centric delivery. Our deep industry knowledge allows us to design solutions aligned with global
        secure identity standards, similar to best practices followed by industry leaders such as Entrust and HID 
        Fargo. Backed by advanced infrastructure, modern manufacturing facilities, and a skilled technical team, 
        we ensure every solution meets strict quality benchmarks.<b> Our ability to manage bulk deployments, 
        maintain transparent business practices, and provide reliable after-sales support has enabled us to 
        serve a broad and growing clientele across India and international markets.</b> 
        </p>
        <h1>Organizations We’ve Worked With</h1>
          <p>
           Over the years, we have delivered secure identity and automation solutions
           to government bodies, enterprises, universities, financial institutions,
           and industrial organizations across India and beyond.
          </p>
          <section className="about-content about-cta">
          
          <Link href="/contact" className="clients-link">
          
            <img
            src="/media/clients-served.png"
            alt="Our Esteemed Clients"
            className="clients-image"
            />
      
          </Link>

          <Link href="/contact" className="join-link">
          Join Us Today
          </Link>
          </section>
      </section>
          
    </main>
  );
}

