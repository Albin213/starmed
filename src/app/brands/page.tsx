'use client';

import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ChevronRight
} from 'lucide-react';

export default function BrandsDirectoryPage() {
  const ownedBrands = BRANDS.filter((b) => b.type === 'owned');
  const productRanges = BRANDS.filter((b) => b.type === 'range');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          <span>Official Corporate Brand Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Brand Directory & Product Ranges
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          STARMED General Trading LLC operates a curated portfolio of healthcare brands. In strict compliance with official corporate catalogue governance, our proprietary owned brands are distinguished from specialized product ranges and partner ranges.
        </p>
      </div>

      {/* Owned Brands Section */}
      <div className="space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Proprietary Owned Brands</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Core Brands Owned by STARMED General Trading LLC
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Registered and proprietary healthcare brand identities featuring authentic packaging, clinical engineering, and regional ownership.
          </p>
        </div>

        <div className="space-y-12">
          {ownedBrands.map((brand) => {
            const brandProducts = PRODUCTS.filter((p) => p.brandId === brand.id);
            return (
              <div
                key={brand.id}
                id={brand.id}
                className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs"
              >
                {/* Brand Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-50 rounded-2xl p-3 shadow-xs border border-slate-200 max-w-[160px] h-20 flex items-center justify-center shrink-0">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-slate-900">{brand.name}</h3>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">
                          {brand.badge}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-700 mt-0.5">{brand.tagline}</p>
                      {brand.origin && (
                        <p className="text-[11px] text-slate-500 font-medium">{brand.origin}</p>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/products?brand=${brand.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-emerald-700 border border-slate-200 transition-colors self-start md:self-auto"
                  >
                    <span>View All {brandProducts.length} {brand.name} Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {brand.description}
                </p>

                {/* Product Teaser Grid */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Product Lines Under {brand.name} ({brandProducts.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {brandProducts.slice(0, 4).map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Ranges Section */}
      <div className="space-y-10 pt-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Distributed Product Ranges</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Specialized Product Ranges in the Catalogue
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            In accordance with official catalogue presentation, these brand ranges are featured as distributed product ranges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productRanges.map((brand) => {
            const brandProducts = PRODUCTS.filter((p) => p.brandId === brand.id);
            return (
              <div
                key={brand.id}
                id={brand.id}
                className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase">
                      {brand.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {brandProducts.length} Items Available
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-slate-50 p-2 border border-slate-200 w-16 h-16 flex items-center justify-center shrink-0">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-12 w-auto object-contain rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{brand.name}</h3>
                      <p className="text-xs text-slate-600 font-semibold">{brand.tagline}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-slate-500 mb-1.5 uppercase">Featured in this range:</p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {brandProducts.map((p) => (
                        <li key={p.id} className="flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-emerald-600" />
                          <Link href={`/products/${p.slug}`} className="hover:text-emerald-700 font-medium transition-colors">
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/products?brand=${brand.id}`}
                    className="flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Explore Complete {brand.name} Range</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
