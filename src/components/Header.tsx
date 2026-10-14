'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { COMPANY_INFO } from '@/data/company';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare,
  ShieldCheck,
  Grid
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer upon route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Brands', href: '/brands' },
    { name: 'About Us', href: '/about' },
    { name: 'Distribution', href: '/distribution' },
    { name: 'Contact', href: '/contact' },
  ];

  const whatsAppGeneralUrl = "https://wa.me/97124420128?text=Hello%20STARMED%20General%20Trading%20LLC,%20I%20would%20like%20to%20make%20a%20B2B%20wholesale%20enquiry.";

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs border-b border-slate-200">
      {/* Sleek, Uncluttered Top Bar */}
      <div className="bg-[#0b192c] text-white text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">
              STARMED General Trading LLC &bull; UAE & GCC Distribution Network (2,000+ Outlets)
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs text-slate-300">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Spacious Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 shrink-0">
            <img
              src="/images/logos/starmed-official.png"
              alt="STARMED General Trading LLC"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Spacious & Clean */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 ${
                    isActive
                      ? 'text-emerald-700 border-b-2 border-emerald-600'
                      : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Categories Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1 cursor-pointer"
              >
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 pt-1.5 z-50">
                  <div className="w-[520px] bg-white border border-slate-200 rounded-2xl shadow-xl p-4 animate-dropdown space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Grid className="w-3.5 h-3.5 text-emerald-600" />
                        12 Verified Product Categories
                      </span>
                      <Link
                        href="/products"
                        onClick={() => setCategoryDropdownOpen(false)}
                        className="text-xs font-bold text-emerald-700 hover:underline hover:translate-x-0.5 transition-transform"
                      >
                        All Products ({PRODUCTS.length}) &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {CATEGORIES.map((cat) => {
                        const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                        return (
                          <Link
                            key={cat.id}
                            href={`/products?category=${cat.id}`}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80 font-medium transition-colors group"
                            onClick={() => setCategoryDropdownOpen(false)}
                          >
                            <span className="truncate group-hover:font-semibold group-hover:translate-x-1 transition-transform inline-block duration-200">{cat.name}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-emerald-600 ml-1.5 shrink-0 font-medium">
                              ({count})
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="text-[11px]">Direct B2B Supply &bull; Abu Dhabi &bull; UAE & GCC</span>
                      <Link
                        href="/products"
                        className="font-bold text-emerald-700 hover:text-emerald-800"
                        onClick={() => setCategoryDropdownOpen(false)}
                      >
                        Browse Full Catalogue
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Pure WhatsApp Enquiry CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Enquire on WhatsApp"
              title="Enquire on WhatsApp"
              className="inline-flex items-center justify-center gap-2 p-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md active:scale-95 transition-all animate-whatsapp-pulse"
            >
              <MessageSquare className="w-5 h-5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">Enquire on WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile App Drawer (Fixed Slide-over with Smooth Transitions) */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden flex transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-300'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Overlay */}
        <div 
          className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-over Drawer Panel */}
        <div 
          className={`relative ml-auto w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col h-full z-50 transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img
                  src="/images/logos/starmed-official.png"
                  alt="STARMED General Trading LLC"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Navigation & Categories */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 overscroll-contain">
              {/* Main Navigation Links */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
                  Navigation
                </span>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-100'
                          : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
                    </Link>
                  );
                })}
              </div>

              {/* Verified Product Categories */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between px-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Product Categories ({CATEGORIES.length})
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    All ({PRODUCTS.length}) &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
                  {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                    return (
                      <Link
                        key={cat.id}
                        href={`/products?category=${cat.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors bg-slate-50/70 border border-slate-100"
                      >
                        <span className="truncate">{cat.name}</span>
                        <span className="text-[10px] text-slate-400 font-semibold ml-2 shrink-0">
                          ({count})
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Company Details */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1 px-3">
                <p className="font-semibold text-slate-800">STARMED General Trading LLC</p>
                <p className="text-[11px]">Mussafah M-16, Abu Dhabi &bull; UAE & GCC</p>
                <p className="text-[11px] text-emerald-700 font-medium">Sister Co: Dada Drug Store LLC (Dubai)</p>
              </div>
            </div>

            {/* Pinned Bottom Actions */}
            <div className="p-4 border-t border-slate-200 bg-white shrink-0 space-y-2">
              <a
                href={whatsAppGeneralUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
              <div className="flex items-center justify-around text-[11px] text-slate-500 pt-1">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 hover:text-emerald-700 font-medium">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Office</span>
                </a>
                <span className="text-slate-300">|</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1 hover:text-emerald-700 font-medium">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Email B2B</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
