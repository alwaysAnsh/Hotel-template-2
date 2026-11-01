export const SITE_CONFIG = {
  hotelName: "SURYAVANSH HAVELI",
  hotelTagline: "A Sanctuary Carved in Golden Sandstone",
  location: {
    city: "Jaisalmer",
    state: "Rajasthan",
    country: "India",
    region: "The Thar Desert",
    coordinates: {
      latitude: "26.9157",
      longitude: "70.9083",
    },
    addressPlaceholder: "Near Fort Road, Patwa Haveli Precinct, Jaisalmer, Rajasthan 345001, India (Placeholder — Replace with Official Address)",
  },
  contact: {
    phonePlaceholder: "+91 (0) 2992 000 000",
    conciergeWhatsapp: "+91 98000 00000",
    emailPlaceholder: "concierge@suryavanshhaveli.example.com",
    reservationsEmail: "stay@suryavanshhaveli.example.com",
  },
  seo: {
    domain: "https://suryavanshhaveli.example.com",
    defaultTitle: "Suryavansh Haveli | Luxury Boutique Heritage Hotel in Jaisalmer, Rajasthan",
    titleTemplate: "%s | Suryavansh Haveli — Jaisalmer",
    defaultDescription:
      "Experience Jaisalmer through an intimate 18th-century sandstone sanctuary. A luxury boutique haveli hotel near Jaisalmer Fort offering bespoke Thar Desert journeys, private rooftop dining, and royal Rajasthani hospitality.",
    priceRangePlaceholder: "₹₹₹₹",
    checkInTime: "14:00",
    checkOutTime: "11:00",
  },
  socialPlaceholders: {
    instagram: "https://instagram.com/placeholder-hotel",
    facebook: "https://facebook.com/placeholder-hotel",
    tripadvisor: "https://tripadvisor.com/placeholder-hotel",
    googleMaps: "https://maps.google.com/?q=Jaisalmer+Rajasthan",
  },
  // Ultra-lightweight warm sandstone SVG blur placeholder to prevent CLS & white flashes
  blurDataURL:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiMyMzE1MEUiLz48L3N2Zz4=",
  // Centralized image library so all visual assets can be swapped with real hotel photography in one file
  images: {
    hero: {
      desertPanorama:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
      fortSilhouette:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80",
      sandDunesGolden:
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1400&q=75",
    },
    journey: {
      wideDesert:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=75",
      movingSand:
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1400&q=75",
      sandstoneWalls:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=75",
      jharokhaArchitecture:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=75",
      haveliEntrance:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=75",
    },
    hiddenDoor: {
      courtyardSanctuary:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1500&q=80",
      lanternGlow:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=75",
    },
    explorer: {
      rooms:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=75",
      dining:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=75",
      rooftop:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=75",
      courtyard:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=75",
      experiences:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=75",
    },
    rooms: {
      maharajaSuite:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1500&q=80",
      maharajaBath:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=75",
      goldenTerrace:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1500&q=80",
      desertChamber:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1500&q=80",
      raniJharokhaSuite:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1500&q=80",
    },
    experiences: {
      desertSafari:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=75",
      fortWalk:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=75",
      sunsetDunes:
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=1400&q=75",
      royalDining:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=75",
      culturalEvening:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=75",
    },
    nightClimax: {
      starryDesertNight:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=75",
      nightCourtyard:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=75",
    },
  },
} as const;
