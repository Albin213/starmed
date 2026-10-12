'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { COMPANY_INFO } from '@/data/company';
import ProductCard from '@/components/ProductCard';
import { useInquiry } from '@/context/InquiryContext';
import { 
  ShieldCheck, 
  Building2, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  TrendingUp, 
  FileText, 
  Layers,
  Phone,
  Mail,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

export default function HomePage() {
  const { openSlideModal } = useInquiry();
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);
  const filteredProducts = selectedBrandFilter === 'all'
    ? featuredProducts
    : PRODUCTS.filter((p) => p.brandId === selectedBrandFilter);

  const whatsAppGeneralUrl = "https://wa.me/97124420128?text=Hello%20STARMED%20General%20Trading%20LLC,%20I%20would%20like%20to%20make%20a%20B2B%20wholesale%20enquiry.";

  return (
    <div className="space-y-20 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Direct WhatsApp CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>OFFICIAL B2B HEALTHCARE & PHARMACEUTICAL DISTRIBUTION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Empowering Regional Healthcare Across the <span className="text-emerald-700">UAE & GCC</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                <strong className="text-slate-900 font-bold">STARMED General Trading LLC</strong> (Est. 2020, Abu Dhabi) — Sister company of <strong className="text-slate-900 font-bold">Dada Drug Store LLC</strong>. Supplying a premier regional network of over <span className="text-emerald-700 font-bold">2,000+ outlets</span> including hospitals, leading pharmacies, and retail chains with certified medical and personal care solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs transition-all"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsAppGeneralUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  href="/brands"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
                >
                  <span>Brand Directory</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>CE 0123 & ISO 13485 Certified</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Ministry of Health Registered</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2,000+ Outlets Network</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 shadow-xl space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Official Catalogue Showcase
                      </span>
                    </div>
                    <button
                      onClick={() => openSlideModal('/images/catalogue/page_01.jpg')}
                      className="text-[11px] text-emerald-700 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" /> Slide #1
                    </button>
                  </div>

                  {/* Hero Showcase Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/10] border border-slate-200">
                    <img
                      src="/images/banners/product-range-showcase.jpg"
                      alt="StarMed Healthcare Product Range"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                          Complete Product Spectrum
                        </span>
                        <p className="text-xs font-bold text-white">
                          Personal Care, Medical Devices, Rehabilitation & Home Healthcare
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Brand Logos Strip */}
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    {BRANDS.slice(0, 4).map((b) => (
                      <Link
                        key={b.id}
                        href={`/brands#${b.id}`}
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 flex flex-col items-center justify-center text-center transition-all group"
                      >
                        <img
                          src={b.logo}
                          alt={b.name}
                          className="h-6 w-auto object-contain filter group-hover:scale-105 transition-transform"
                        />
                        <span className="text-[10px] font-bold text-slate-700 mt-1 truncate w-full">
                          {b.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Quick WhatsApp Procurement Box */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-emerald-900">Hospital & Pharmacy Supply</p>
                      <p className="text-[11px] text-emerald-700">Mussafah (Abu Dhabi) & Dubai fulfillment</p>
                    </div>
                    <a
                      href={whatsAppGeneralUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VERIFIED STATS COUNTER BAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 shadow-sm">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              2020
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Year Established</p>
            <p className="text-[11px] text-slate-500">Mussafah 16, Abu Dhabi</p>
          </div>

          <div className="space-y-1 pt-4 lg:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              2,000+
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Distribution Outlets</p>
            <p className="text-[11px] text-slate-500">Pharmacies, hospitals & retail chains</p>
          </div>

          <div className="space-y-1 pt-4 lg:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              4 Owned
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Proprietary Brands</p>
            <p className="text-[11px] text-slate-500">STARMED, DADA, Mediz & Dr.Care</p>
          </div>

          <div className="space-y-1 pt-4 lg:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-slate-900">
              UAE & GCC
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Regional Footprint</p>
            <p className="text-[11px] text-slate-500">Direct and sub-distribution channels</p>
          </div>
        </div>
      </section>

      {/* ================= BRAND DIRECTORY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Brand Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Owned Brands & Trusted Product Ranges
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Displaying official brand identities with verified logos, authentic packaging standards, and distinct market positioning.
            </p>
          </div>

          <Link
            href="/brands"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <span>Explore All Brand Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Owned Brands Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <span>Proprietary Owned Brands</span>
            <div className="flex-1 h-px bg-slate-200" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDS.filter((b) => b.type === 'owned').map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-emerald-500 hover:shadow-md shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                      {brand.badge}
                    </span>
                    {brand.origin && (
                      <span className="text-[10px] text-slate-500 font-semibold">
                        {brand.origin}
                      </span>
                    )}
                  </div>

                  <div className="h-16 flex items-center justify-start bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{brand.name}</h4>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{brand.tagline}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/products?brand=${brand.id}`}
                    className="flex items-center justify-between text-xs font-bold text-slate-800 hover:text-emerald-700 group"
                  >
                    <span>View {brand.name} Products</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-600" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distributed Product Ranges */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <span>Specialized Product Ranges</span>
            <div className="flex-1 h-px bg-slate-200" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDS.filter((b) => b.type === 'range').map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-emerald-500 hover:shadow-md shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                      {brand.badge}
                    </span>
                  </div>

                  <div className="h-16 flex items-center justify-start bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 w-auto object-contain rounded"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{brand.name}</h4>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{brand.tagline}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/products?brand=${brand.id}`}
                    className="flex items-center justify-between text-xs font-bold text-slate-800 hover:text-emerald-700 group"
                  >
                    <span>Explore Range</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-600" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES NAVIGATION GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Product Categorization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            12 Official Product Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Engineered navigation assigning each medical and wellness product directly to verified clinical categories without duplication.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all text-center flex flex-col items-center justify-between shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 group-hover:text-emerald-600 text-slate-600 flex items-center justify-center transition-colors mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-semibold block">
                    {count} {count === 1 ? 'Product' : 'Products'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PRODUCT CATALOGUE SHOWCASE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Catalogue Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Healthcare & Pharma Supplies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Authentic packaging with preserved proportions, verified certifications (CE 0123, ISO 13485), and detailed specifications.
            </p>
          </div>

          {/* Brand Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedBrandFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                selectedBrandFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              All Brands
            </button>
            {BRANDS.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBrandFilter(b.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  selectedBrandFilter === b.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-emerald-700 font-bold text-xs border border-slate-300 shadow-xs transition-colors"
          >
            <span>View Complete 40+ Product Searchable Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ================= SISTER COMPANY & ABOUT SYNERGY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>CORPORATE STRUCTURE & STRATEGIC SYNERGY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                STARMED & Dada Drug Store LLC: Decades of Pharmaceutical Distribution Reach
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                As a sister company of <strong className="text-slate-900">Dada Drug Store LLC</strong> (based in Dubai International City), STARMED serves a joint regional ecosystem connecting hospitals, leading pharmacy groups, and retail giants with both direct deliveries and sub-distribution partner networks.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  Read Full Company Story <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/distribution"
                  className="text-xs text-emerald-700 hover:underline font-bold"
                >
                  Distribution Partner Program &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Slide Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/images/banners/market-analysis.jpg"
                  alt="STARMED Market Analysis"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Dual-Hub UAE Presence
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                  <div>
                    <span className="font-bold text-emerald-800 block">Abu Dhabi HQ</span>
                    Mussafah M-16 Industrial Hub
                  </div>
                  <div>
                    <span className="font-bold text-sky-800 block">Dubai Sister Facility</span>
                    International City Warehousing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= B2B DIRECT WHATSAPP BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0b192c] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Direct Wholesale & Hospital Procurement
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Order or Enquire for Your Facility?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with STARMED General Trading LLC commercial representatives on WhatsApp for instant product specifications, cartons, and bulk pricing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={whatsAppGeneralUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp (+971 2 442 0128)</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
