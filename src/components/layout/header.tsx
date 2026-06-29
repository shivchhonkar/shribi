'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  resourcesLinks,
  servicesLinks,
  solutionsLinks,
} from '@/lib/navigation'
import type { PageKey } from '@/lib/site'

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function navClass(activePage: PageKey, page: PageKey) {
  return activePage === page ? 'nav-active' : undefined
}

export default function Header({ activePage }: { activePage: PageKey }) {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="brand">
          <Image
            src="/assets/shribi-logo.png"
            alt="Shribi"
            className="brand-logo"
            width={40}
            height={40}
          />
          <span className="brand-name">shribi</span>
        </Link>
        <button
          className="nav-toggle"
          id="navToggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className="nav-links" id="navLinks">
          <li>
            <Link href="/" className={navClass(activePage, 'home')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us/" className={navClass(activePage, 'about')}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/school-erp/" className={navClass(activePage, 'school-erp')}>
              School ERP
            </Link>
          </li>
          <li>
            <Link href="/services/" className={navClass(activePage, 'services')}>
              Services
            </Link>
          </li>
          <li className="nav-item nav-item--has-menu">
            <button type="button" className="nav-menu-btn" aria-haspopup="true">
              Solutions
              <ChevronDown />
            </button>
            <ul className="nav-submenu">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          
          {/* <li className="nav-item nav-item--has-menu">
            <button
              type="button"
              className={`nav-menu-btn${activePage === 'services' ? ' nav-active' : ''}`}
              aria-haspopup="true"
              aria-current={activePage === 'services' ? 'page' : undefined}
            >
              Services
              <ChevronDown />
            </button>
            <ul className="nav-submenu">
              {/* {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))} 
              <li>
                <Link href="/services/">Services</Link>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <Link href="/#industries">Industries</Link>
          </li> */}
          {/* <li className="nav-item nav-item--has-menu">
            <button type="button" className="nav-menu-btn" aria-haspopup="true">
              Resources
              <ChevronDown />
            </button>
            <ul className="nav-submenu">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          <li>
            <Link href="/contact/" className={`nav-cta${activePage === 'contact' ? ' nav-active' : ''}`}>
              Get in Touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
