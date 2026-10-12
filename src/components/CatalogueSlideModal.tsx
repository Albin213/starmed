'use client';

import React from 'react';
import { useInquiry } from '@/context/InquiryContext';
import { X, ZoomIn, FileText, CheckCircle2 } from 'lucide-react';

export default function CatalogueSlideModal() {
  const { activeSlideModal, closeSlideModal } = useInquiry();

  if (!activeSlideModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                Official Catalogue Specification Document
                <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                  Source of Truth
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                STARMED General Trading LLC &bull; Official Product Packaging & Technical Specifications
              </p>
            </div>
          </div>
          <button
            onClick={closeSlideModal}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            title="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Viewer */}
        <div className="relative flex-1 overflow-auto bg-slate-100 p-4 sm:p-6 flex items-center justify-center">
          <div className="relative group max-w-full">
            <img
              src={activeSlideModal}
              alt="Official Catalogue Slide"
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-md border border-slate-200 bg-white"
            />
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs text-slate-700 border border-slate-200 flex items-center gap-1.5 shadow-sm font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Authentic Packaging
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <span>Preserves exact product labels, CE / ISO certifications, brand colors, and packaging proportions.</span>
          <a
            href={activeSlideModal}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            Open full resolution image in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
