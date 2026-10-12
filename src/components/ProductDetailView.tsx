'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { COMPANY_INFO } from '@/data/company';
import { useInquiry } from '@/context/InquiryContext';
import ProductCard from '@/components/ProductCard';
import {
  ShieldCheck,
  ChevronRight,
  Package,
  Layers,
  CheckCircle2,
  Flame,
  Snowflake,
  MessageSquare,
  Phone,
  Info
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const { openSlideModal } = useInquiry();

  const whatsAppUrl = `https://wa.me/97124420128?text=${encodeURIComponent(
    `Hello STARMED General Trading LLC,\n\nI would like to enquire about:\n- Product: ${product.name}\n- Brand: ${product.brandName}\n- Category: ${product.categoryName}\n- Packaging: Box: ${product.packagingSpecs.box || 'N/A'}, CTN: ${product.packagingSpecs.ctn || 'N/A'}\n- Catalogue Slide: #${product.cataloguePage}\n\nPlease share wholesale pricing and availability.`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="animate-breadcrumb flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/products" className="hover:text-slate-900 transition-colors">Catalogue</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/products?category=${product.categoryId}`} className="hover:text-slate-900 transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Product Visuals & Verification Slide */}
        <div className="animate-slide-left lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-xs overflow-hidden aspect-[4/3] flex items-center justify-center transition-shadow duration-300 hover:shadow-lg">
            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-white/95 backdrop-blur text-emerald-800 border border-slate-200 shadow-xs">
                {product.brandName}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {product.brandType === 'owned' ? 'Owned Brand' : 'Product Range'}
              </span>
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-500 hover:scale-105"
            />
          </div>


        </div>

        {/* Right Column: Information, Specs & Actions */}
        <div className="animate-slide-right lg:col-span-6 space-y-6">
          <div className="animate-fade-up delay-100 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <span>{product.categoryName}</span>
              <span>&bull;</span>
              <span>STARMED B2B Distribution</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              {product.fullDescription}
            </p>
          </div>

          {/* Certifications & Regulatory Flags */}
          {product.certifications && product.certifications.length > 0 && (
            <div className="animate-fade-up delay-150 flex flex-wrap gap-2 pt-1">
              {product.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 transition-transform duration-200 hover:scale-105"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {cert}
                </span>
              ))}
            </div>
          )}

          {/* Available Sizes / Variants */}
          {product.sizesVariants && product.sizesVariants.length > 0 && (
            <div className="animate-fade-up delay-200 p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                Available Sizes & Variants
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.sizesVariants.map((v, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verified Technical Packaging Specs Table */}
          <div className="animate-fade-up delay-250 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Package className="w-4 h-4 text-emerald-600" />
                Verified Packaging Specifications
              </span>
              <span className="text-[10px] text-slate-500 font-semibold">Official Catalogue Spec</span>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 text-xs">
              {product.packagingSpecs.box && (
                <div className="animate-scale-in delay-300 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-200">
                  <span className="text-slate-500 text-[11px] block font-medium">Box / Pack Quantity</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.box}</span>
                </div>
              )}
              {product.packagingSpecs.ctn && (
                <div className="animate-scale-in delay-350 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-200">
                  <span className="text-slate-500 text-[11px] block font-medium">Carton (CTN) Packing</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.ctn}</span>
                </div>
              )}
              {product.packagingSpecs.bottle && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Bottle Packing</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.bottle}</span>
                </div>
              )}
              {product.packagingSpecs.capacity && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Volume / Capacity</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.capacity}</span>
                </div>
              )}
              {product.packagingSpecs.dimensions && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Dimensions / Specification</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.dimensions}</span>
                </div>
              )}
              {product.packagingSpecs.material && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Primary Material</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.material}</span>
                </div>
              )}
              {product.packagingSpecs.thickness && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Nominal Thickness</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.thickness}</span>
                </div>
              )}
              {product.packagingSpecs.width && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Width & Length</span>
                  <span className="text-slate-900 font-bold">{product.packagingSpecs.width} &times; {product.packagingSpecs.length}</span>
                </div>
              )}
              {product.packagingSpecs.warranty && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Manufacturer Warranty</span>
                  <span className="text-emerald-700 font-bold">{product.packagingSpecs.warranty}</span>
                </div>
              )}
              {product.packagingSpecs.lastUpTo && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block font-medium">Therapeutic Duration</span>
                  <span className="text-sky-700 font-bold">{product.packagingSpecs.lastUpTo}</span>
                </div>
              )}
            </div>
          </div>

          {/* Hot / Cold Therapy Clinical Instructions */}
          {product.hotColdUsage && (
            <div className="animate-fade-up delay-300 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Hot Usage Instructions</span>
                </div>
                <p className="text-xs text-amber-950 leading-relaxed font-medium">
                  {product.hotColdUsage.hot}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-sky-800 font-bold text-xs uppercase tracking-wider">
                  <Snowflake className="w-4 h-4 text-sky-600" />
                  <span>Cold Usage Instructions</span>
                </div>
                <p className="text-xs text-sky-950 leading-relaxed font-medium">
                  {product.hotColdUsage.cold}
                </p>
              </div>
            </div>
          )}

          {/* Key Product Features */}
          <div className="animate-fade-up delay-350 space-y-2 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Verified Product Attributes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, i) => (
                <div key={i} className="animate-fade-up flex items-start gap-2 text-slate-700 transition-transform duration-200 hover:translate-x-1" style={{ animationDelay: `${400 + i * 50}ms` }}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Action Button */}
          <div className="animate-fade-up delay-500 pt-4 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="animate-whatsapp-pulse flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition-all duration-200 hover:scale-[1.03] hover:shadow-md active:scale-95 shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Direct commercial distribution response from STARMED Abu Dhabi.
              </span>
              <span className="text-slate-500 font-medium">Mussafah 16, Abu Dhabi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="animate-fade-up delay-200 space-y-6 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Related Products from {product.brandName} & {product.categoryName}
            </h2>
            <Link
              href="/products"
              className="text-xs text-emerald-700 hover:underline font-bold"
            >
              View Full Catalogue &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel, i) => (
              <div key={rel.id} className="animate-fade-up" style={{ animationDelay: `${250 + i * 80}ms` }}>
                <ProductCard product={rel} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
