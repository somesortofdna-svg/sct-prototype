import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        <img
          src="/4.svg"
          alt="Smart Chip Tree Logo"
          width={40}
          height={40}
        />
        <span className="brand-name">Smart Chip Tree</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/iso">ISO Certification</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
