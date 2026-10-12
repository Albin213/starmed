'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import { BRANDS } from '@/data/brands';
import { CATEGORIES } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import { 
  Search, 
  Filter, 
  X, 
  Grid, 
  List, 
  Package, 
  ShieldCheck 
} from 'lucide-react';

function CatalogueContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get('category') || 'all';
  const urlBrand = searchParams.get('brand') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(urlBrand);
  const [searchQuery, setSearchQuery] = useState<string>(urlSearch);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Keep state synchronized with searchParams whenever URL changes
  useEffect(() => {
    setSelectedCategory(urlCategory);
    setSelectedBrand(urlBrand);
    setSearchQuery(urlSearch);
  }, [urlCategory, urlBrand, urlSearch]);

  // Handle category change and update URL parameter cleanly
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
      // If the currently selected brand has no items in the chosen category, clear brand filter
      if (selectedBrand !== 'all') {
        const brandHasProducts = PRODUCTS.some(
          (p) => p.categoryId === categoryId && p.brandId === selectedBrand
        );
        if (!brandHasProducts) {
          setSelectedBrand('all');
          params.delete('brand');
        }
      }
    }

    const query = params.toString();
    router.push(query ? `/products?${query}` : '/products', { scroll: false });
  };

  // Handle brand change
  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    const params = new URLSearchParams(searchParams.toString());

    if (brandId === 'all') {
      params.delete('brand');
    } else {
      params.set('brand', brandId);
      // If the currently selected category has no items for the chosen brand, reset category filter
      if (selectedCategory !== 'all') {
        const catHasProducts = PRODUCTS.some(
          (p) => p.brandId === brandId && p.categoryId === selectedCategory
        );
        if (!catHasProducts) {
          setSelectedCategory('all');
          params.delete('category');
        }
      }
    }

    const query = params.toString();
    router.push(query ? `/products?${query}` : '/products', { scroll: false });
  };

  // Handle search input change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== 'all' && product.brandId !== selectedBrand) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchBrand = product.brandName.toLowerCase().includes(q);
        const matchCategory = product.categoryName.toLowerCase().includes(q);
        const matchDesc = product.shortDescription.toLowerCase().includes(q);
        const matchFeatures = product.features.some((f) => f.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchCategory && !matchDesc && !matchFeatures) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    router.push('/products', { scroll: false });
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery.trim() !== '';

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);
  const activeBrandObj = BRANDS.find((b) => b.id === selectedBrand);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Official STARMED General Trading LLC Catalogue</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Searchable Product Catalogue
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl mt-1">
              Browse our comprehensive medical, healthcare, and wellness portfolio. All specifications, dimensions, carton quantities, and certifications are sourced directly from the verified company catalogue.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white border border-slate-200 p-1 rounded-xl self-start md:self-auto shadow-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-slate-100 text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-slate-100 text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Compact View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Control Bar: Search Input & Quick Selects */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by product name, brand, feature, or specification..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown Select */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="all">All Categories ({PRODUCTS.length} Items)</option>
              {CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Brand Dropdown Select */}
          <div className="md:col-span-3">
            <select
              value={selectedBrand}
              onChange={(e) => handleBrandSelect(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="all">All Brands ({PRODUCTS.length} Items)</option>
              <optgroup label="Proprietary Owned Brands">
                {BRANDS.filter((b) => b.type === 'owned').map((brand) => {
                  const count = PRODUCTS.filter((p) => p.brandId === brand.id).length;
                  return (
                    <option key={brand.id} value={brand.id}>
                      {brand.name} ({count})
                    </option>
                  );
                })}
              </optgroup>
              <optgroup label="Product Ranges">
                {BRANDS.filter((b) => b.type === 'range').map((brand) => {
                  const count = PRODUCTS.filter((p) => p.brandId === brand.id).length;
                  return (
                    <option key={brand.id} value={brand.id}>
                      {brand.name} ({count})
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-emerald-600" /> Categories:
          </span>
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Active Filter Chips & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-600 font-medium">
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} products
            </span>

            {/* Active Category Chip */}
            {selectedCategory !== 'all' && activeCategoryObj && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                Category: {activeCategoryObj.name}
                <button
                  onClick={() => handleCategorySelect('all')}
                  className="hover:text-emerald-950 font-bold cursor-pointer ml-0.5"
                  title="Remove category filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {/* Active Brand Chip */}
            {selectedBrand !== 'all' && activeBrandObj && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold">
                Brand: {activeBrandObj.name}
                <button
                  onClick={() => handleBrandSelect('all')}
                  className="hover:text-slate-950 font-bold cursor-pointer ml-0.5"
                  title="Remove brand filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {/* Active Search Chip */}
            {searchQuery.trim() !== '' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
                Keyword: &ldquo;{searchQuery}&rdquo;
                <button
                  onClick={() => handleSearchChange('')}
                  className="hover:text-amber-950 font-bold cursor-pointer ml-0.5"
                  title="Clear search query"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-bold underline ml-1 cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Preserving original catalogue labels and packaging proportions</span>
          </div>
        </div>
      </div>


      {/* Products Display Area */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-200">
            <Package className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No Matching Products Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any items matching your current search parameters. Try clearing your filters or selecting another category.
            </p>
          </div>
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 gap-4'
          }
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading Product Catalogue...</div>}>
      <CatalogueContent />
    </Suspense>
  );
}
