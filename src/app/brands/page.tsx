'use client';

import Link from 'next/link';
import { ArrowRight, Award, Package, ShieldCheck } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { PRODUCTS } from '@/data/products';

export default function BrandsDirectoryPage() {
  return (
    <div className="brand-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <section className="brand-page-hero">
        <div>
          <div className="brand-page-kicker"><Award className="w-4 h-4" /> Our portfolio</div>
          <h1>Brands that care<br /><span>for everyday life.</span></h1>
          <p>
            Explore the trusted healthcare and wellness ranges distributed by STARMED across the UAE and GCC.
          </p>
        </div>
        <Link href="/products" className="brand-page-all-link">
          Browse all products <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="brand-directory" aria-label="Brand directory">
        {BRANDS.map((brand, index) => {
          const count = PRODUCTS.filter((product) => product.brandId === brand.id).length;
          return (
            <Link key={brand.id} id={brand.id} href={`/products?brand=${brand.id}`} className="brand-directory-card">
              <div className={`brand-card-glow brand-card-glow-${index % 4}`} />
              <div className="brand-logo-frame">
                <img src={brand.logo} alt={brand.name} />
              </div>
              <div className="brand-directory-copy">
                <div className="brand-card-meta">
                  {brand.type === 'owned' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Package className="w-3.5 h-3.5" />}
                  <span>{brand.type === 'owned' ? 'STARMED brand' : 'Product range'}</span>
                </div>
                <h2>{brand.name}</h2>
                <p>{brand.tagline}</p>
              </div>
              <div className="brand-card-action">
                <span>{count} products</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
