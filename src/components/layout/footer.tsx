'use client'

import { useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { SOCIAL_LINKS } from '@/lib/site'
import { SocialIcon } from '@/components/layout/social-icons'

export default function Footer() {
  useEffect(() => {
    const yearEl = document.getElementById('year')
    if (yearEl) yearEl.textContent = String(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer">
            <Image src="/assets/shribi-logo.png" alt="Shribi" width={32} height={32} />
            <span className="brand-name">shribi</span>
          </Link>
          <p>
            Building digital solutions that scale with you — software, cloud, and SaaS products
            for modern businesses.
          </p>
          <ul className="footer-social" aria-label="Social media">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us/">About Us</Link>
            </li>
            <li>
              <Link href="/school-erp/">School ERP</Link>
            </li>
            <li>
              <Link href="/#companies">Our Products</Link>
            </li>
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/#why">Why Us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services/#core-services">Billing &amp; Inventory</Link>
            </li>
            <li>
              <Link href="/school-erp/">School ERP</Link>
            </li>
            <li>
              <Link href="/services/#core-services">Estate &amp; CRM</Link>
            </li>
            <li>
              <Link href="/services/#core-services">Web Development</Link>
            </li>
            <li>
              <Link href="/services/#core-services">AI Integration</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>
              <Link href="/services/#industries">EdTech</Link>
            </li>
            <li>
              <Link href="/services/#industries">Healthcare</Link>
            </li>
            <li>
              <Link href="/services/#industries">FinTech</Link>
            </li>
            <li>
              <Link href="/services/#industries">eCommerce</Link>
            </li>
            <li>
              <Link href="/services/#industries">Estate</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest updates and insights.</p>
          <form className="footer-newsletter-form" action="#" method="post">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="footer-copy">
          &copy; <span id="year" /> Shribi. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
