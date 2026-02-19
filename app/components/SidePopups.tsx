'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './sidepopups.css';

const SidePopups = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      const heroHeight = document.getElementById('hero')?.offsetHeight || 400;

      // Scrolling down past Hero → hide popups
      if (current > lastScroll && current > 200) {
        setHidden(true);
      }

      // Scrolling up near top → show popups again
      if (current < lastScroll && current < 300) {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`popup popup-services ${hidden ? "popup-hidden" : ""}`}>
        <Link href="/services">
          <img src="/media/services.jpg" alt="Services" />
        </Link>
        <p>Our Services</p>
        <Link href="/services">Explore how we can assist you</Link>
      </div>

      <div className={`popup popup-products ${hidden ? "popup-hidden" : ""}`}>
        <Link href="/products">
          <img src="/media/product.jpg" alt="Products" />
        </Link>
        <p>Our Product Range</p>
        <Link href="/products">View our range</Link>
      </div>
    </>
  );
};

export default SidePopups;

