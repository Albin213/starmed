'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface InquiryItem {
  product: Product;
  quantity?: number;
  notes?: string;
}

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearItems: () => void;
  isInBasket: (productId: string) => boolean;
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  activeSlideModal: string | null;
  openSlideModal: (slideUrl: string) => void;
  closeSlideModal: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlideModal, setActiveSlideModal] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('starmed_inquiry_items');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('starmed_inquiry_items', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) {
        return prev;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const clearItems = () => {
    setItems([]);
  };

  const isInBasket = (productId: string) => {
    return items.some((i) => i.product.id === productId);
  };

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const openSlideModal = (slideUrl: string) => setActiveSlideModal(slideUrl);
  const closeSlideModal = () => setActiveSlideModal(null);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        isInBasket,
        isOpen,
        openDrawer,
        closeDrawer,
        activeSlideModal,
        openSlideModal,
        closeSlideModal
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
