'use client';

import React, { useState } from 'react';
import { useInquiry } from '@/context/InquiryContext';
import { COMPANY_INFO } from '@/data/company';
import { X, Trash2, Send, Building2, Phone, Mail, CheckCircle, Package, ArrowRight, MessageSquare } from 'lucide-react';

export default function InquiryDrawer() {
  const { items, removeItem, clearItems, isOpen, closeDrawer } = useInquiry();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    facilityType: 'Pharmacy Chain',
    region: 'Abu Dhabi, UAE',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    clearItems();
    setSubmitted(false);
    closeDrawer();
  };

  const buildWhatsAppMessage = () => {
    const productList = items.map((i) => `- ${i.product.name} (${i.product.brandName})`).join('%0A');
    const text = `Hello STARMED General Trading LLC,%0A%0AI would like to request product information and B2B pricing for:%0A${productList}%0A%0A*Company:* ${formData.companyName || 'Not specified'}%0A*Contact:* ${formData.contactPerson || 'Not specified'}%0A*Type:* ${formData.facilityType}%0A*Region:* ${formData.region}%0A*Notes:* ${formData.notes || 'None'}`;
    return `https://wa.me/97124420128?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-white border-l border-slate-200 text-slate-800 flex flex-col shadow-2xl">
          {/* Top Bar */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">B2B Product Information & Quote</h2>
                <p className="text-xs text-slate-500">Direct Wholesale & Healthcare Procurement Inquiry</p>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. Our B2B commercial distribution team at <span className="text-emerald-700 font-bold">STARMED General Trading LLC</span> will review your requested specifications and contact you shortly.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 text-xs text-left text-slate-700 border border-slate-200 space-y-1.5 max-w-md mx-auto">
                  <p><span className="text-slate-500 font-medium">Head Office:</span> {COMPANY_INFO.headOffice.address}</p>
                  <p><span className="text-slate-500 font-medium">Phone:</span> {COMPANY_INFO.phone}</p>
                  <p><span className="text-slate-500 font-medium">Email:</span> {COMPANY_INFO.email}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Instant Connect via WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-300 transition-colors cursor-pointer shadow-xs"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center border border-slate-200">
                  <Package className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">Your Inquiry Basket is Empty</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Explore our product catalogue and click &ldquo;Request Info&rdquo; on any product to assemble your quotation request.
                  </p>
                </div>
                <button
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer shadow-xs"
                >
                  Browse Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                {/* Selected Products List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Selected Items ({items.length})
                    </h3>
                    <button
                      onClick={clearItems}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear All
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {items.map(({ product }) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 object-contain bg-white rounded-lg p-1 border border-slate-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-900 truncate">{product.name}</p>
                          <p className="text-[11px] text-emerald-700 font-semibold">{product.brandName} &bull; {product.categoryName}</p>
                          <p className="text-[11px] text-slate-500 truncate">
                            {product.packagingSpecs.box ? `Box: ${product.packagingSpecs.box}` : ''}
                            {product.packagingSpecs.ctn ? ` | CTN: ${product.packagingSpecs.ctn}` : ''}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          title="Remove from list"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Organization & Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Company / Facility Name *</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Hospital, Pharmacy, or Distributor"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Procurement Officer / Manager"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Official Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@organization.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Phone / Mobile *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Facility Type</label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      >
                        <option>Pharmacy Chain</option>
                        <option>Independent Pharmacy</option>
                        <option>Hospital (Private/Govt)</option>
                        <option>Specialty Medical Clinic</option>
                        <option>Wholesale Distributor</option>
                        <option>Retail Chain / Supermarket</option>
                        <option>Government / Tender Entity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Region / Location</label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      >
                        <option>Abu Dhabi, UAE</option>
                        <option>Dubai, UAE</option>
                        <option>Sharjah & Northern Emirates, UAE</option>
                        <option>Saudi Arabia (KSA)</option>
                        <option>Oman</option>
                        <option>Kuwait</option>
                        <option>Qatar</option>
                        <option>Bahrain</option>
                        <option>Other GCC / MENA</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Estimated Volumes & Specific Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify carton quantities, delivery timeframe, regulatory documentation, or tender specs..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit B2B Quotation Request
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Direct inquiry processed by STARMED General Trading LLC commercial team.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
