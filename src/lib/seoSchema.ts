import { SITE_CONFIG } from "@/config/siteConfig";
import { GuideArticle } from "@/data/guidesData";
import { RoomStory } from "@/data/hotelData";

export function generateHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    name: SITE_CONFIG.hotelName,
    description: SITE_CONFIG.seo.defaultDescription,
    url: SITE_CONFIG.seo.domain,
    telephone: SITE_CONFIG.contact.phonePlaceholder,
    email: SITE_CONFIG.contact.emailPlaceholder,
    priceRange: SITE_CONFIG.seo.priceRangePlaceholder,
    checkinTime: SITE_CONFIG.seo.checkInTime,
    checkoutTime: SITE_CONFIG.seo.checkOutTime,
    image: [
      SITE_CONFIG.images.hero.desertPanorama,
      SITE_CONFIG.images.hiddenDoor.courtyardSanctuary,
      SITE_CONFIG.images.rooms.maharajaSuite,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.addressPlaceholder,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: "345001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.coordinates.latitude,
      longitude: SITE_CONFIG.location.coordinates.longitude,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Heritage Sandstone Courtyard & Stepwell Plunge Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Rooftop Bastion Dining Overlooking Jaisalmer Fort",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Bespoke Thar Desert Expeditions & Private Historians",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24-Hour Personal Khidmatgar (Butler) Service",
        value: true,
      },
    ],
    sameAs: [
      SITE_CONFIG.socialPlaceholders.instagram,
      SITE_CONFIG.socialPlaceholders.facebook,
      SITE_CONFIG.socialPlaceholders.tripadvisor,
    ],
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.seo.domain}${item.path}`,
    })),
  };
}

export function generateRoomJsonLd(room: RoomStory) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    image: room.gallery,
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: room.sizeSqFt,
      unitCode: "FTK",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    containedInPlace: {
      "@type": "Hotel",
      name: SITE_CONFIG.hotelName,
      url: SITE_CONFIG.seo.domain,
    },
  };
}

export function generateGuideArticleJsonLd(article: GuideArticle) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      image: [article.heroImage],
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
      author: {
        "@type": "Organization",
        name: `${SITE_CONFIG.hotelName} Curatorial Archive`,
        url: SITE_CONFIG.seo.domain,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.hotelName,
        url: SITE_CONFIG.seo.domain,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.seo.domain}/jaisalmer-guide/${article.slug}`,
      },
    },
    ...(article.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];
}
