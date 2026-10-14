import "./globals.css";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CatalogueSlideModal from "@/components/CatalogueSlideModal";
import { InquiryProvider } from "@/context/InquiryContext";

export const metadata = {
  title: "STARMED General Trading LLC | Healthcare & Pharmaceutical Distribution UAE & GCC",
  description: "Official B2B website of STARMED General Trading LLC, established in 2020 in Abu Dhabi. Sister company of Dada Drug Store LLC. Serving over 2,000 outlets across UAE and GCC with owned brands STARMED, DADA, Mediz, and Dr.Care.",
  keywords: "STARMED, Dada Drug Store, pharmaceutical distribution UAE, Abu Dhabi healthcare, medical supplies GCC, DADA condoms, Mediz thermometer, Dr.Care serums, Dermavia, Rosemary Mint",
  openGraph: {
    title: "STARMED General Trading LLC | Healthcare & Pharmaceutical Distribution",
    description: "Official product catalogue and pharmaceutical distribution for UAE and GCC.",
    url: "https://www.starmed.ae",
    siteName: "STARMED General Trading LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function() {
                    if (document.body && document.body.hasAttribute('cz-shortcut-listen')) {
                      document.body.removeAttribute('cz-shortcut-listen');
                    }
                  };
                  clean();
                  if (typeof MutationObserver !== 'undefined') {
                    new MutationObserver(clean).observe(document.documentElement, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['cz-shortcut-listen']
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-600 selection:text-white" suppressHydrationWarning>
        <PageLoader />
        <InquiryProvider>
          <Suspense fallback={<div className="h-20 bg-white border-b border-slate-200" />}>
            <Header />
          </Suspense>
          <main className="site-main flex-1">
            {children}
          </main>
          <Footer />
          <CatalogueSlideModal />
        </InquiryProvider>
      </body>
    </html>
  );
}
