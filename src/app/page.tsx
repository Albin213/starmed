'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { PRODUCTS } from '@/data/products';
import { useInquiry } from '@/context/InquiryContext';
import {
  ShieldCheck,
  ArrowRight,
  Award,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Package,
  Zap,
  Globe,
  BadgeCheck,
  Users,
  Star,
} from 'lucide-react';

export default function HomePage() {
  const { openSlideModal } = useInquiry();
  const scrollRef = useRef<HTMLDivElement>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  const whatsAppUrl =
    'https://wa.me/97124420128?text=Hello%20STARMED%20General%20Trading%20LLC,%20I%20would%20like%20to%20make%20a%20B2B%20wholesale%20enquiry.';

  const features = [
    {
      icon: <Package className="w-6 h-6 text-emerald-400" />,
      title: 'CERTIFIED PRODUCTS',
      desc: 'Every product CE 0123 & ISO 13485 certified for clinical-grade confidence.',
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'FAST B2B SUPPLY',
      desc: 'Abu Dhabi & Dubai dual-hub fulfilment with same-region dispatch.',
    },
    {
      icon: <Globe className="w-6 h-6 text-sky-400" />,
      title: 'UAE & GCC REACH',
      desc: 'Direct distribution across 2,000+ outlets in the UAE and wider GCC.',
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-purple-400" />,
      title: 'OWNED BRANDS',
      desc: 'Four proprietary brands — STARMED, DADA, Mediz & Dr.Care.',
    },
  ];

  const stats = [
    { value: '2,000+', label: 'Distribution Outlets', icon: <Package className="w-5 h-5" /> },
    { value: '4 Brands', label: 'Owned Proprietary Brands', icon: <Award className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'B2B Support', icon: <Phone className="w-5 h-5" /> },
  ];

  const scrollProducts = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]') as HTMLElement;
    const w = card ? card.offsetWidth + 24 : 260;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -w : w, behavior: 'smooth' });
  };

  return (
    <div className="homepage">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• HERO â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="hero-section">
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left hero-enter-left">
            <div className="hero-badge">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL B2B HEALTHCARE DISTRIBUTION</span>
            </div>

            <h1 className="hero-headline">
              Healthcare That
              <span className="hero-headline-accent"> Protects</span>
              <br />Every Life
            </h1>

            <p className="hero-subtext">
              Smart. Certified. Reliable.<br />
              STARMED General Trading LLC — supplying hospitals, pharmacies &amp; retail chains across UAE &amp; GCC.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn-primary" id="hero-explore-btn">
                <span>Explore Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-badge">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>CE 0123 &amp; ISO 13485</span>
              </div>
              <div className="trust-badge">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ministry of Health Registered</span>
              </div>
              <div className="trust-badge">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>2,000+ Outlets</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right hero-enter-right">
            <div className="hero-image-wrap">
              <img
                src="/images/banners/product-range-showcase.jpg"
                alt="StarMed Healthcare Product Range"
                className="hero-img"
              />
              <div className="hero-float-tag">
                <span className="float-dot" />
                <span>Complete Product Spectrum</span>
              </div>
              <div className="hero-product-orbit hero-product-orbit-one" aria-hidden="true">
                <img src="/images/products/mediz-digital-thermometer.jpg" alt="" />
              </div>
              <div className="hero-product-orbit hero-product-orbit-two" aria-hidden="true">
                <img src="/images/products/first-aid-kit-50-person.jpg" alt="" />
              </div>
            </div>
            <div className="hero-brands">
              {BRANDS.slice(0, 4).map((b) => (
                <Link key={b.id} href={`/brands#${b.id}`} className="hero-brand-pill" id={`hero-brand-${b.id}`}>
                  <img src={b.logo} alt={b.name} className="brand-pill-logo" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• FEATURES BAR â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="features-bar">
        <div className="features-bar-inner">
          <p className="features-eyebrow">BUILT FOR THE HEALTHCARE SUPPLY CHAIN</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• PRODUCT SHOWCASE â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="products-section">
        <div className="products-header">
          <div className="products-header-left">
            <h2 className="products-title">
              EXPLORE OUR<br /><span>TOP PRODUCTS</span>
            </h2>
            <div className="products-title-line" />
          </div>
          <div className="products-header-right">
            <div className="scroll-arrows">
              <button onClick={() => scrollProducts('left')} className="scroll-btn" aria-label="Scroll left" id="products-scroll-left">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollProducts('right')} className="scroll-btn scroll-btn-dark" aria-label="Scroll right" id="products-scroll-right">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="products-track" ref={scrollRef}>
          {featuredProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} data-card className="product-card" id={`product-card-${p.id}`}>
              <div className="product-img-wrap">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="product-img" />
                ) : (
                  <div className="product-img-placeholder">
                    <Package className="w-10 h-10 text-slate-300" />
                  </div>
                )}
              </div>
              <div className="product-info">
                <p className="product-name">{p.name}</p>
                <p className="product-brand">{p.brandId}</p>
              </div>
              <div className="product-arrow">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
          <Link href="/products" className="product-card product-card-cta" id="products-view-all">
            <div className="product-img-wrap cta-icon-wrap">
              <ArrowRight className="w-10 h-10 text-emerald-500" />
            </div>
            <div className="product-info">
              <p className="product-name">View All Products</p>
              <p className="product-brand">40+ items in catalogue</p>
            </div>
          </Link>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• STATS BAR â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="stats-bar">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-icon">{s.icon}</div>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• BOTTOM SPLIT â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bottom-split">
        <div className="split-quote">
          <div className="split-img-wrap">
            <img
              src="/images/banners/why-choose-starmed.jpg"
              alt="STARMED Healthcare Trust"
              className="split-img"
            />
          </div>
          <div className="split-quote-content">
            <span className="quote-mark">&ldquo;</span>
            <p className="quote-text">
              STARMED delivers more than products — it delivers healthcare confidence across the UAE.
            </p>
            <p className="quote-author">— STARMED General Trading LLC</p>
            <p className="quote-role">Established 2020 · Mussafah M-16, Abu Dhabi</p>
          </div>
        </div>

        <div className="split-cta">
          <div className="cta-box">
            <h3 className="cta-title">READY TO ORDER<br />FOR YOUR FACILITY?</h3>
            <p className="cta-desc">
              Join hospitals, pharmacies &amp; retail chains that trust STARMED for quality, compliance, and scale.
            </p>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
              id="bottom-whatsapp-cta"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
