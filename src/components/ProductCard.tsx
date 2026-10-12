'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { 
  Eye, 
  MessageSquare, 
  Layers
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const whatsAppUrl = `https://wa.me/97124420128?text=${encodeURIComponent(
    `Hello STARMED General Trading LLC,\nI would like to enquire about:\n- Product: ${product.name}\n- Brand: ${product.brandName}\n- Category: ${product.categoryName}`
  )}`;

  return (
    <div className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-500/60 transition-all duration-200 flex flex-col">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wide uppercase bg-white/95 backdrop-blur shadow-xs text-emerald-800 border border-slate-200">
          {product.brandName}
        </span>
        {product.certifications && product.certifications.length > 0 && (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
            {product.certifications[0]}
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <Link 
        href={`/products/${product.slug}`} 
        className="relative block aspect-[4/3] bg-gradient-to-b from-slate-50/60 to-slate-100/40 overflow-hidden p-6 border-b border-slate-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span className="text-emerald-700 font-bold">{product.categoryName}</span>
            <span>&bull;</span>
            <span className="capitalize">{product.brandType === 'owned' ? 'Owned Brand' : 'Product Range'}</span>
          </div>

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Verified Specifications Highlights */}
        <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
          {product.sizesVariants && product.sizesVariants.length > 0 && (
            <div className="flex items-center gap-1.5 text-slate-700">
              <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-[11px] text-slate-500 font-medium">Variants:</span>
              <span className="text-[11px] font-semibold text-slate-800 truncate">
                {product.sizesVariants.join(', ')}
              </span>
            </div>
          )}

          {(product.packagingSpecs.box || product.packagingSpecs.ctn) && (
            <div className="flex items-center justify-between text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/80">
              {product.packagingSpecs.box && (
                <span>
                  <strong className="text-slate-900 font-semibold">Box:</strong> {product.packagingSpecs.box}
                </span>
              )}
              {product.packagingSpecs.ctn && (
                <span>
                  <strong className="text-slate-900 font-semibold">CTN:</strong> {product.packagingSpecs.ctn}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Direct Action Buttons: Details & WhatsApp Enquiry */}
        <div className="pt-1 grid grid-cols-2 gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-xs transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
