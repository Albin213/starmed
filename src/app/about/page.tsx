import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { 
  Building2, 
  TrendingUp, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Globe
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Building2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Established 2020 &bull; Abu Dhabi, UAE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About STARMED General Trading LLC
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Dynamic and fast-growing pharmaceutical and healthcare distribution company specializing in medical devices, clinical personal care, and therapeutic wellness supplies across the UAE and GCC region.
        </p>
      </div>

      {/* Main Story & Sister Company Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Our Corporate Story</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.story}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We are proud to be a sister company of <strong className="text-slate-900">Dada Drug Store LLC</strong>, a well-established pharmaceutical distributor based in Dubai International City. Together, our combined logistics and distribution infrastructure serves a robust network of over <span className="text-emerald-700 font-bold">2,000 outlets</span> across the UAE, including major hospital institutions, leading pharmacy chains, and retail supermarkets through direct and sub-distribution channels.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Healthcare Accessibility
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensuring uninterrupted supply chains for essential medical accessories and everyday hygiene needs across all emirates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                Ethical Practices & Quality
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict adherence to international CE 0123, ISO 13485, and UAE Ministry of Health compliance mandates.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/banners/product-range-showcase.jpg"
              alt="StarMed Products Range and Infrastructure"
              className="w-full h-auto object-cover"
            />
            <div className="p-5 space-y-1 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-900">Full-Spectrum Healthcare Distribution</p>
              <p className="text-[11px] text-slate-500">
                Direct distribution to 2,000+ pharmacies, hospitals, and clinical partners across UAE and GCC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission High Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            &ldquo;{COMPANY_INFO.vision}&rdquo;
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            &ldquo;{COMPANY_INFO.mission}&rdquo;
          </p>
        </div>
      </div>

      {/* Corporate Offices & Distribution Footprint */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 space-y-8 shadow-xs">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">Distribution Footprint & Corporate Facilities</h3>
          <p className="text-xs text-slate-500">Dual headquarters and fulfillment operations across the UAE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Head Office (Abu Dhabi)</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">{COMPANY_INFO.legalName}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.headOffice.address}
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-200 font-medium">
              <p>Phone: <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 hover:underline">{COMPANY_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-700 hover:underline">{COMPANY_INFO.email}</a></p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Sister Company Office (Dubai)</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">{COMPANY_INFO.sisterCompany.name}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.sisterCompany.address}
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1 border-t border-slate-200 font-medium">
              <p>Role: {COMPANY_INFO.sisterCompany.role}</p>
              <p>Website: <a href={COMPANY_INFO.sisterWebsite} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">{COMPANY_INFO.sisterWebsite}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
