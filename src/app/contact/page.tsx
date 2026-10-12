'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Wholesale Quotation Request',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Abu Dhabi & Dubai Commercial Facilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact STARMED General Trading LLC
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Reach out to our commercial distribution headquarters in Mussafah, Abu Dhabi, or connect with our sister office at Dada Drug Store LLC in Dubai.
        </p>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Head Office Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 space-y-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              Corporate Head Office
            </span>
            <span className="text-xs text-slate-500 font-semibold">Abu Dhabi, UAE</span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">{COMPANY_INFO.legalName}</h2>
            <p className="text-xs text-emerald-700 font-bold mt-0.5">Established 2020 &bull; Mussafah Hub</p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-700 font-medium">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">Physical Address:</strong>
                <span>{COMPANY_INFO.headOffice.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-slate-900 block font-bold">Official Telephone:</strong>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-slate-900 block font-bold">Commercial Inquiries:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-700 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-slate-900 block font-bold">Official Website:</strong>
                <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-slate-900 block font-bold">Operating Hours:</strong>
                <span>Monday &ndash; Saturday: 8:30 AM &ndash; 6:00 PM (GST)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <a
              href="https://wa.me/97124420128"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center justify-center shadow-xs"
            >
              Call Direct
            </a>
          </div>
        </div>

        {/* Sister Company Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 space-y-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
              Sister Company Facility
            </span>
            <span className="text-xs text-slate-500 font-semibold">Dubai, UAE</span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">{COMPANY_INFO.sisterCompany.name}</h2>
            <p className="text-xs text-sky-700 font-bold mt-0.5">Pharmaceutical Distributor &bull; International City</p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-700 font-medium">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">Dubai Office Address:</strong>
                <span>{COMPANY_INFO.sisterCompany.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">Logistics Role:</strong>
                <span>{COMPANY_INFO.sisterCompany.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <strong className="text-slate-900 block font-bold">Sister Portal:</strong>
                <a href={COMPANY_INFO.sisterWebsite} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">
                  {COMPANY_INFO.sisterWebsite}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed mt-4">
              <strong className="text-slate-900 block mb-1">Joint Supply Pipeline:</strong>
              STARMED and Dada Drug Store LLC operate aligned inventories, serving 2,000+ retail pharmacies and major hospital centers across the UAE and GCC.
            </div>
          </div>

          <div className="pt-2">
            <a
              href={COMPANY_INFO.sisterWebsite}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-colors shadow-xs"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              Visit Dada Healthcare Portal
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Contact & RFQ Form */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Send a Business Enquiry / Quotation Request
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our commercial team in Abu Dhabi responds within 24 hours with certified technical specifications and bulk distribution terms.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Dispatched Successfully</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for contacting STARMED General Trading LLC. An assigned commercial sales representative will follow up via email and phone shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Pharmacy, Hospital, or Trading LLC"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Enquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
                >
                  <option>Wholesale Quotation Request</option>
                  <option>Hospital & Clinic Procurement</option>
                  <option>Pharmacy Chain Distribution Agreement</option>
                  <option>GCC Export / Cross-Border Inquiry</option>
                  <option>General Product Specification Query</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Message / Product Requirements *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide details about products of interest, expected quantities, or distribution inquiries..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Official Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
