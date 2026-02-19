import "./globals.css";
import Navbar from "./components/Navbar";
import { ReactNode } from 'react';
import Link from "next/link";

export const metadata = {
  title: 'My App',
  icons: {
    icon: '/media/logo.ico', // <-- this is your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/*footer*/}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-left">
              <Link href="/" className="footer-brand">
              <h2>Smart Chip Tree</h2>
              </Link>
            </div>
            <div className="footer-center">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-right">
              <a href="https://www.linkedin.com/company/smart-chip-tree/about/" target="_blank" rel="noopener noreferrer">
              LinkedIn
              </a>
              <a href="https://www.indiamart.com/smartchip-tree/" target="_blank" rel="noopener noreferrer">
              IndiaMart
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Smart Chip Tree. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

