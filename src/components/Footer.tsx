'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { Phone, Mail, MessageSquare } from 'lucide-react';


const NAV = [
  { label: 'Products', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'About', href: '/about' },
  { label: 'Distribution', href: '/distribution' },
  { label: 'Contact', href: '/contact' },
];

const whatsAppUrl =
  'https://wa.me/97124420128?text=Hello%20STARMED%20General%20Trading%20LLC,%20I%20would%20like%20to%20make%20a%20B2B%20wholesale%20enquiry.';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">

          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="site-footer__logo-surface">
              <img
                src="/images/logos/starmed-official.png"
                alt="STARMED"
                className="h-9 w-auto object-contain"
              />
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight">
              STARMED <span className="text-slate-300 font-normal">General Trading</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-slate-300 hover:text-emerald-300 text-xs font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Contact icons */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="site-footer__contact p-2 text-slate-300 hover:text-white transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              aria-label="Phone"
              className="site-footer__contact p-2 text-slate-300 hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              aria-label="Email"
              className="site-footer__contact p-2 text-slate-300 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="site-footer__bottom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-300">
          <p>&copy; {new Date().getFullYear()} STARMED General Trading LLC &middot; Mussafah M-16, Abu Dhabi, UAE</p>
          <p>Sister company of <span className="text-white font-medium">Dada Drug Store LLC</span> &middot; Dubai</p>
        </div>

      </div>
    </footer>
  );
}
