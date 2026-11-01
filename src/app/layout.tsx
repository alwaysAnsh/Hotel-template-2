import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/siteConfig";
import { BookingProvider } from "@/context/BookingContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { NavigationLoader } from "@/components/ui/NavigationLoader";
import { generateHotelJsonLd } from "@/lib/seoSchema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.seo.domain),
  title: {
    default: SITE_CONFIG.seo.defaultTitle,
    template: SITE_CONFIG.seo.titleTemplate,
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: [
    "Luxury hotel in Jaisalmer",
    "Boutique hotel in Jaisalmer",
    "Hotels near Jaisalmer Fort",
    "Best places to stay in Jaisalmer",
    "Heritage stay in Jaisalmer",
    "Luxury stay in Rajasthan",
    "Jaisalmer haveli hotel",
    "Thar desert luxury experience",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.seo.domain,
    siteName: SITE_CONFIG.hotelName,
    title: SITE_CONFIG.seo.defaultTitle,
    description: SITE_CONFIG.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.defaultTitle,
    description: SITE_CONFIG.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelSchema = generateHotelJsonLd();

  return (
    <html
      lang="en"
      style={
        {
          "--font-cormorant":
            '"Cormorant Garamond", "Playfair Display", "Iowan Old Style", "Palatino Linotype", Georgia, serif',
          "--font-manrope":
            '"Manrope", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        } as React.CSSProperties
      }
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Trimmed to only required weights (6 instead of 11) with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="font-sans bg-night-deep text-ivory-warm antialiased selection:bg-desert-gold selection:text-night-deep">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-desert-gold focus:text-night-deep focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.2em]"
        >
          Skip to main content
        </a>
        <BookingProvider>
          <SmoothScrollProvider>
            <NavigationLoader />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <BookingModal />
          </SmoothScrollProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
