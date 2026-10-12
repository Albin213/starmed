'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { 
  ShieldCheck, 
  Building2, 
  Truck, 
  Store, 
  CheckCircle2, 
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function DistributionPage() {
  const buildPartnerWhatsApp = (role: string) => {
    const text = `Hello STARMED General Trading LLC,%0A%0AI would like to enquire about a B2B Distribution Partnership:%0A*Role:* ${role}%0A*Territory:* UAE / GCC%0A%0APlease share your commercial terms and catalogue wholesale pricing.`;
    return `https://wa.me/97124420128?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Truck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Regional Healthcare Supply Chain &bull; UAE & GCC</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          B2B Distribution & Wholesale Network
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Supplying over 2,000 retail pharmacies, hospitals, clinics, and hypermarket chains across the UAE and GCC through direct warehouse fulfillment and sub-distribution partner networks.
        </p>
      </div>

      {/* Network Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
            <Store className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">2,000+ Outlets Served</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Supplying community pharmacies, government and private hospitals, and retail supermarkets throughout Abu Dhabi, Dubai, and the Northern Emirates.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Dada Drug Store Synergy</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Seamless operations with sister company Dada Drug Store LLC in Dubai International City, providing integrated fulfillment and volume supply.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">GCC Regional Expansion</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Active export channels and sub-distribution partnerships across Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar.
          </p>
        </div>
      </div>

      {/* Distribution Channels Breakdown */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Supply Channels We Serve</h2>
            <p className="text-xs text-slate-500 mt-0.5">Reliable weekly replenishments and certified batch compliance.</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
            Direct & Sub-Distribution
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPANY_INFO.channels.map((chan, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900">{chan}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Weekly dispatch and batch certification</p>
              </div>
            </div>
          ))}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-900">Government & Tender Procurement</p>
              <p className="text-[11px] text-slate-500 mt-0.5">MOH compliant documentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Hub Logistics Infrastructure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Abu Dhabi Primary Hub</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">{COMPANY_INFO.headOffice.address}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Central warehousing in Mussafah 16 equipped for high-throughput healthcare distribution across Abu Dhabi, Al Ain, and Western Region.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Dubai Sister Hub</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">{COMPANY_INFO.sisterCompany.address}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dada Drug Store LLC warehousing in Dubai International City facilitating rapid northern emirates deliveries and GCC transit.
          </p>
        </div>
      </div>

      {/* Direct Partnership & WhatsApp Enquiries */}
      <div className="rounded-3xl bg-[#0b192c] text-white p-8 sm:p-12 shadow-lg space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Immediate B2B Onboarding
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Partner With STARMED General Trading LLC
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Connect directly with our commercial team on WhatsApp. Select your organization type below to initiate wholesale pricing, carton counts, and account registration instantly.
          </p>
        </div>

        {/* Quick WhatsApp Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <a
            href={buildPartnerWhatsApp('Pharmacy Chain / Community Pharmacy')}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between group space-y-4"
          >
            <div>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Retail Pharmacies</p>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                Pharmacy Chains & Independent Stores
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Wholesale supply for DADA personal care, condoms, masks, Dr.Care serums, and Mediz thermometers.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#25D366]">
              <MessageSquare className="w-4 h-4" />
              <span>Enquire via WhatsApp &rarr;</span>
            </div>
          </a>

          <a
            href={buildPartnerWhatsApp('Hospital / Healthcare Center / Clinic')}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between group space-y-4"
          >
            <div>
              <p className="text-xs font-bold text-sky-400 uppercase tracking-wider">Institutions</p>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                Hospitals, Medical Centers & Clinics
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Bulk PPE, clinical cotton, certified first aid stations, diagnostic medical devices, and diabetic travel cases.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#25D366]">
              <MessageSquare className="w-4 h-4" />
              <span>Enquire via WhatsApp &rarr;</span>
            </div>
          </a>

          <a
            href={buildPartnerWhatsApp('GCC Regional Sub-Distributor')}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between group space-y-4"
          >
            <div>
              <p className="text-xs font-bold text-teal-400 uppercase tracking-wider">Regional Trade</p>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">
                GCC Sub-Distributors & Wholesalers
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Container and master carton volume distribution for Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#25D366]">
              <MessageSquare className="w-4 h-4" />
              <span>Enquire via WhatsApp &rarr;</span>
            </div>
          </a>
        </div>

        {/* Direct Contacts Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white flex items-center gap-1.5 font-bold">
              <Phone className="w-4 h-4 text-emerald-400" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white flex items-center gap-1.5 font-bold">
              <Mail className="w-4 h-4 text-emerald-400" />
              {COMPANY_INFO.email}
            </a>
          </div>
          <span className="text-slate-500 font-medium">Head Office: Mussafah M-16, Abu Dhabi, UAE</span>
        </div>
      </div>
    </div>
  );
}
