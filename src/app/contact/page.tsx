import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ContactFormClient } from "@/components/ContactFormClient";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";
import { MapPin, Phone, Mail, Plane, Train, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Arrival Guide | Suryavansh Haveli Jaisalmer",
  description:
    "Connect with our Royal Concierge for suite reservations, private Thar desert charters, and chauffeur transfers from Jaisalmer (JSA) or Jodhpur (JDH) airports.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact & Arrival", path: "/contact" },
  ]);

  return (
    <div className="bg-night-deep text-ivory-warm pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 border-b border-desert-sand/15">
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-desert-sand uppercase tracking-[0.2em] mb-6"
        >
          <Link href="/" className="hover:underline">
            Sanctuary
          </Link>{" "}
          / <span className="text-ivory-warm/75">Contact & Arrival</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          26.9157° N, 70.9083° E · The Golden City
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide">
          ARRIVING AT THE SANCTUARY
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ivory-warm/75 max-w-2xl">
          Whether arriving by commercial flight, private charter, or across the
          Marwar desert plains from Jodhpur, our Khidmatgar team orchestrates
          every mile of your arrival.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Direct Coordinates & Arrival Logistics */}
        <div className="lg:col-span-6 space-y-10">
          <div className="p-8 bg-night-blue/60 border border-desert-sand/25 space-y-5">
            <h2 className="font-serif text-2xl text-ivory-warm">
              Sanctuary Coordinates (Placeholder Details)
            </h2>
            <div className="space-y-4 text-sm text-ivory-warm/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-desert-sand shrink-0 mt-1" />
                <span>{SITE_CONFIG.location.addressPlaceholder}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-desert-sand shrink-0" />
                <span>
                  Reservations: {SITE_CONFIG.contact.phonePlaceholder}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-desert-sand shrink-0" />
                <span>{SITE_CONFIG.contact.emailPlaceholder}</span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-ivory-warm">
              How to Reach Jaisalmer
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 border border-desert-sand/20 bg-night-blue/40 flex items-start gap-4">
                <Plane className="w-5 h-5 text-desert-sand shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-ivory-warm">
                    By Air — Jaisalmer (JSA) or Jodhpur (JDH)
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-warm/75 mt-1 leading-relaxed">
                    Jaisalmer Airport (JSA) is a 25-minute drive from the haveli
                    with seasonal direct flights from Delhi, Mumbai, and Jaipur.
                    Year-round flights arrive into Jodhpur Airport (JDH), a
                    scenic 4.5-hour chauffeur drive across the desert.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-desert-sand/20 bg-night-blue/40 flex items-start gap-4">
                <Train className="w-5 h-5 text-desert-sand shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-ivory-warm">
                    By Rail — Jaisalmer Junction
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-warm/75 mt-1 leading-relaxed">
                    Located 10 minutes from the haveli. Direct overnight and
                    luxury trains connect Jaisalmer with Delhi, Jaipur, and
                    Jodhpur.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-desert-sand/20 bg-night-blue/40 flex items-start gap-4">
                <Car className="w-5 h-5 text-desert-sand shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-ivory-warm">
                    Private Vintage 4x4 & Chauffeur Transfers
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-warm/75 mt-1 leading-relaxed">
                    Complimentary Jaisalmer Airport / Station transfers are
                    included with all direct suite reservations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Concierge Form */}
        <div className="lg:col-span-6">
          <ContactFormClient />
        </div>
      </section>

      <BookingWidget />
    </div>
  );
}
