'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { BRANDS } from '@/data/brands';
import { CATEGORIES } from '@/data/categories';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800">
      {/* Top Banner with Sister Company & Network */}
      <div className="bg-[#081322] border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">2,000+ Distribution Outlets</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Direct and sub-distribution network supplying premier hospitals, pharmacy chains, and retail stores across the UAE & GCC.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Dada Drug Store LLC Synergy</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Sister company based in Dubai International City, providing multi-tier pharmaceutical distribution synergy since inception.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Abu Dhabi Industrial Hub</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Headquartered in Mussafah 16, Abu Dhabi, with advanced logistics for rapid healthcare and pharma delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-200 inline-block">
                <img
                  src="/images/logos/starmed-primary.png"
                  alt="STARMED General Trading LLC"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight">STARMED</h3>
                <p className="text-xs text-emerald-400 font-semibold">General Trading LLC &bull; Est. 2020</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {COMPANY_INFO.story}
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headOffice.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

          {/* Brands Directory */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Brand Directory
            </h4>
            <ul className="space-y-2 text-xs">
              {BRANDS.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/brands#${brand.id}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{brand.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-emerald-400">
                      {brand.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  View All Categories <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate & Sister Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Locations & Facilities
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5 text-xs">
              <p className="font-semibold text-emerald-400">Head Office (Abu Dhabi)</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Office #05, Reem Building, Block D, Al Qunout Street, M-16, Mussafah, Abu Dhabi, UAE
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5 text-xs">
              <p className="font-semibold text-sky-400">Sister Company (Dubai)</p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Dada Drug Store LLC &bull; S06Y-19, England Cluster, International City, Dubai, UAE
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                Get In Touch / Inquire
              </Link>
            </div>
          </div>
        </div>

        {/* Source of Truth Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-4">
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">Official Corporate Catalogue Compliance:</span> Information presented on this website is derived directly from the official corporate catalogue of STARMED General Trading LLC. Product labels, verified CE 0123 / ISO 13485 certifications, Ministry of Health registrations, packaging specifications, and dimensions represent authentic manufacturer standards.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
            <p>
              &copy; 2026 STARMED General Trading LLC. All Rights Reserved. Abu Dhabi, UAE.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-slate-200">About STARMED</Link>
              <Link href="/distribution" className="hover:text-slate-200">Distribution</Link>
              <Link href="/products" className="hover:text-slate-200">Catalogue</Link>
              <Link href="/contact" className="hover:text-slate-200">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
