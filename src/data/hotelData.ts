import { SITE_CONFIG } from "@/config/siteConfig";

export interface RoomStory {
  id: string;
  number: string;
  slug: string;
  name: string;
  chapterTitle: string;
  tagline: string;
  poeticIntro: string;
  description: string;
  architectureNote: string;
  sizeSqFt: number;
  sizeSqM: number;
  occupancy: string;
  bedType: string;
  view: string;
  pricePerNightINR: number;
  priceDisplay: string;
  heroImage: string;
  gallery: string[];
  amenities: string[];
  signatureTouches: string[];
  panoramaHotspots: {
    angle: string;
    title: string;
    caption: string;
  }[];
}

export const ROOM_STORIES: RoomStory[] = [
  {
    id: "maharaja-suite",
    number: "01",
    slug: "the-maharaja-suite",
    name: "THE MAHARAJA SUITE",
    chapterTitle: "Chapter I — Royal Solitude",
    tagline: "Where heritage meets indulgence.",
    poeticIntro:
      "Carved from honey-toned Jaisalmer limestone by eighth-generation Silawat artisans, this two-chamber sanctuary frames the Golden Fort like a living fresco.",
    description:
      "Occupying the highest wing of the 18th-century haveli, The Maharaja Suite features hand-chiselled jali screens that filter the fierce desert sun into intricate lacework of light and shadow. Step out onto your private charbagh-inspired stone loggia or sink into the sunken brass bathing pavilion infused with wild desert mogra.",
    architectureNote:
      "Original 1784 lime-plaster arches (Arayish) paired with antique Burma teak doors and custom hand-knotted Bikaner wool rugs.",
    sizeSqFt: 1150,
    sizeSqM: 107,
    occupancy: "2 Adults + 1 Child",
    bedType: "Hand-Carved Four-Poster King Bed",
    view: "Unobstructed Golden Fort & Desert Horizon",
    pricePerNightINR: 42000,
    priceDisplay: "₹42,000 / Night",
    heroImage: SITE_CONFIG.images.rooms.maharajaSuite,
    gallery: [
      SITE_CONFIG.images.rooms.maharajaSuite,
      SITE_CONFIG.images.rooms.maharajaBath,
      SITE_CONFIG.images.explorer.courtyard,
      SITE_CONFIG.images.journey.jharokhaArchitecture,
    ],
    amenities: [
      "Private Sandstone Jharokha Sit-Out",
      "Hand-Hammered Brass Soaking Tub",
      "Dedicated 24-Hour Personal Khidmatgar (Butler)",
      "Private Sunset Champagne & Folk Recital on Request",
      "300-Thread-Count Organic Mulmul & Linen Bedding",
      "Bespoke Desert Botanical Bath Amenities",
      "Private Library of Rare Marwar Chronicles",
      "Complimentary Chauffeur Transfer in Vintage SUV",
    ],
    signatureTouches: [
      "Evening lantern lighting ritual with loban incense",
      "Morning saffron kahwa served in your private jharokha at sunrise",
      "Custom pillow menu with wild lavender & desert chamomile",
    ],
    panoramaHotspots: [
      {
        angle: "North — The Jharokha Balcony",
        title: "Golden Fort Vista",
        caption: "Watch the first rays of dawn ignite the 99 bastions of Sonar Quila.",
      },
      {
        angle: "East — The Sleeping Sanctuary",
        title: "Carved Sandstone Alcove",
        caption: "Hand-fluted columns frame the four-poster bed draped in gossamer cotton.",
      },
      {
        angle: "West — The Bathing Pavilion",
        title: "Sunken Brass Hammam",
        caption: "Candlelit stone niches surround a deep hand-beaten copper and brass tub.",
      },
    ],
  },
  {
    id: "golden-terrace-room",
    number: "02",
    slug: "the-golden-terrace-room",
    name: "THE GOLDEN TERRACE ROOM",
    chapterTitle: "Chapter II — Sunlit Stillness",
    tagline: "Wake to a city painted in sunlight.",
    poeticIntro:
      "High above the labyrinthine lanes of the old city, a private sunlit terrace where morning tea blends with the call of peacocks and distant temple bells.",
    description:
      "Designed for travellers who chase golden hour, The Golden Terrace Room opens directly onto a secluded sandstone verandah shaded by bougainvillea and carved chhatri pavilions. Inside, warm lime-washed walls and low-slung camel-leather daybeds create a serene refuge from the midday warmth.",
    architectureNote:
      "Cantilevered stone balcony with traditional latticework providing total privacy while preserving panoramic airflow.",
    sizeSqFt: 740,
    sizeSqM: 69,
    occupancy: "2 Adults",
    bedType: "Artisanal Teak King Bed",
    view: "Old City Havelis & Sunset Dunes",
    pricePerNightINR: 28500,
    priceDisplay: "₹28,500 / Night",
    heroImage: SITE_CONFIG.images.rooms.goldenTerrace,
    gallery: [
      SITE_CONFIG.images.rooms.goldenTerrace,
      SITE_CONFIG.images.explorer.rooftop,
      SITE_CONFIG.images.journey.sandstoneWalls,
      SITE_CONFIG.images.rooms.maharajaBath,
    ],
    amenities: [
      "Expansive Private Sun & Stargazing Terrace",
      "Outdoor Daybed for Optional Sleep-Under-The-Stars Setup",
      "Rain Shower with Jaisalmer Yellow Marble Finishes",
      "Artisanal Brass Tea & Single-Origin Coffee Bar",
      "Handwoven Dhurrie Rugs by Barmer Weavers",
      "High-Speed Wi-Fi & Discreet Marshall Audio",
    ],
    signatureTouches: [
      "Private telescope calibrated for Thar Desert constellations",
      "Sunset charcuterie & spiced pomegranate aperitif on your terrace",
      "Handwritten leather-bound journal for your desert notes",
    ],
    panoramaHotspots: [
      {
        angle: "South — Private Chhatri Terrace",
        title: "Open-Sky Verandah",
        caption: "Dine privately by lantern light as the desert sky turns indigo.",
      },
      {
        angle: "Center — The Lounge Alcove",
        title: "Dhola-Maru Fresco Niche",
        caption: "Mineral-pigment miniature art painted directly onto polished lime walls.",
      },
    ],
  },
  {
    id: "desert-chamber",
    number: "03",
    slug: "the-desert-chamber",
    name: "THE DESERT CHAMBER",
    chapterTitle: "Chapter III — Subterranean Cool & Starlight",
    tagline: "Silence, stars, and stories of the Thar.",
    poeticIntro:
      "Thick sandstone walls hold centuries of desert stillness, keeping the chamber naturally cool by day and cocooned in amber warmth by night.",
    description:
      "Inspired by the tranquil inner chambers of royal desert caravanserais, The Desert Chamber celebrates tactile restraint. Deep window seats overlook the quiet central courtyard fountain, while brass oil lamps cast dancing reflections across fossil-rich Jaisalmer stone floors.",
    architectureNote:
      "24-inch load-bearing golden sandstone masonry offering natural thermal harmony and acoustic silence.",
    sizeSqFt: 560,
    sizeSqM: 52,
    occupancy: "2 Adults",
    bedType: "Royal Queen or Twin Heritage Beds",
    view: "Tranquil Central Courtyard & Fountain",
    pricePerNightINR: 21000,
    priceDisplay: "₹21,000 / Night",
    heroImage: SITE_CONFIG.images.rooms.desertChamber,
    gallery: [
      SITE_CONFIG.images.rooms.desertChamber,
      SITE_CONFIG.images.hiddenDoor.courtyardSanctuary,
      SITE_CONFIG.images.hiddenDoor.lanternGlow,
    ],
    amenities: [
      "Deep Jharokha Reading Alcove Overlooking Courtyard",
      "Fossil-Stone Bathroom with Copper Fixtures",
      "Curated Selection of Rajasthani Folk Vinyl & Player",
      "Organic Khadi Bathrobes & Hand-Stitched Jutis",
      "Evening Turndown with Warm Badam Milk",
    ],
    signatureTouches: [
      "Acoustic serenity — insulated from the world outside",
      "Bespoke Vetiver & Sacred Frankincense room mist",
    ],
    panoramaHotspots: [
      {
        angle: "Courtyard View",
        title: "Carved Lattice Window",
        caption: "Listen to the gentle murmur of the central marble water courtyard.",
      },
      {
        angle: "Sanctuary Interior",
        title: "Monolithic Stone Arches",
        caption: "Warm indirect lighting highlights the natural fossil patterns in the stone.",
      },
    ],
  },
  {
    id: "rani-jharokha-residence",
    number: "04",
    slug: "the-rani-jharokha-residence",
    name: "THE RANI JHAROKHA RESIDENCE",
    chapterTitle: "Chapter IV — The Queen's Quarters",
    tagline: "Intricate stone lacework crafted for timeless contemplation.",
    poeticIntro:
      "Once the private zenana quarters of the haveli, featuring nine interconnected arched windows carved thin enough for light to breathe through stone.",
    description:
      "An architectural jewel box for aesthetes and romantics. The Rani Jharokha Residence pairs two interconnected salons with a private plunge pool courtyard, antique mirrored thikri mosaics, and uninterrupted views of the medieval caravan trail.",
    architectureNote:
      "Restored 19th-century Belgian glass thikri mirrorwork that sparkles under a single beeswax candle.",
    sizeSqFt: 980,
    sizeSqM: 91,
    occupancy: "2 Adults + 2 Children",
    bedType: "Canopied King Bed + Daybed Alcove",
    view: "Private Plunge Courtyard & Ancient Caravan Trail",
    pricePerNightINR: 36000,
    priceDisplay: "₹36,000 / Night",
    heroImage: SITE_CONFIG.images.rooms.raniJharokhaSuite,
    gallery: [
      SITE_CONFIG.images.rooms.raniJharokhaSuite,
      SITE_CONFIG.images.rooms.maharajaSuite,
      SITE_CONFIG.images.explorer.courtyard,
    ],
    amenities: [
      "Temperature-Controlled Private Plunge Pool",
      "Nine-Arch Hand-Carved Jharokha Gallery",
      "Dedicated Butler & Private In-Suite Breakfast",
      "Antique Thikri Mirrorwork Dressing Salon",
      "Complimentary Couples Ayurvedic Abhyanga Massage (60 Min)",
    ],
    signatureTouches: [
      "Floating rose-petal & brass diya ritual in your plunge pool at dusk",
      "Private curator tour of the haveli's architectural heritage",
    ],
    panoramaHotspots: [
      {
        angle: "East Gallery",
        title: "Nine-Arch Jharokha Corridor",
        caption: "Watch shifting geometric shadows travel across the sandstone floor from dawn to dusk.",
      },
    ],
  },
];

export interface ExplorerDestination {
  id: string;
  label: string;
  subtitle: string;
  poeticLine: string;
  description: string;
  image: string;
  href: string;
  stats: string;
}

export const EXPLORER_DESTINATIONS: ExplorerDestination[] = [
  {
    id: "rooms",
    label: "The Rooms",
    subtitle: "14 Individually Restored Chambers & Suites",
    poeticLine: "No two arches are alike; no two nights feel the same.",
    description:
      "Every suite is an intimate dialogue between 18th-century Silawat stonework and unhurried modern comfort—complete with deep jharokha alcoves, brass soaking tubs, and views of the Golden Fort.",
    image: SITE_CONFIG.images.explorer.rooms,
    href: "/rooms",
    stats: "14 Sanctuaries · 520 to 1,150 sq.ft",
  },
  {
    id: "dining",
    label: "The Dining",
    subtitle: "Kesar Bagh & The Starlight Bastion",
    poeticLine: "Forgotten royal recipes cooked over desert khejri embers.",
    description:
      "From slow-simmered Ker Sangri and smoked Laal Maas to delicate saffron-infused desserts, dine wherever your mood leads—by the courtyard fountain, in a candlelit stone alcove, or beneath the Milky Way.",
    image: SITE_CONFIG.images.explorer.dining,
    href: "/dining",
    stats: "No Fixed Menus · Table-to-Terrace Dining",
  },
  {
    id: "rooftop",
    label: "The Rooftop",
    subtitle: "Burj-e-Surya Sunset & Stargazing Deck",
    poeticLine: "Eye-level with the 12th-century bastions of Sonar Quila.",
    description:
      "As dusk settles over the Thar, the rooftop transforms into a lantern-lit amphitheatre. Sip spiced desert botanicals as Manganiyar musicians sing centuries-old ballads to the rising moon.",
    image: SITE_CONFIG.images.explorer.rooftop,
    href: "/experiences",
    stats: "360° Fort Panorama · Nightly Acoustic Recitals",
  },
  {
    id: "courtyard",
    label: "The Courtyard",
    subtitle: "The Mor Chowk Marble Water Sanctuary",
    poeticLine: "Where the desert wind leaves its heat at the threshold.",
    description:
      "Framed by fluted sandstone colonnades and fragrant frangipani trees, our central courtyard and subterranean stepwell plunge pool offer cool stillness during the bright desert afternoon.",
    image: SITE_CONFIG.images.explorer.courtyard,
    href: "/about",
    stats: "Stepwell Plunge Pool · Heritage Colonnade",
  },
  {
    id: "experiences",
    label: "The Experiences",
    subtitle: "Beyond the Tourist Trail into the Living Thar",
    poeticLine: "Private dunes, abandoned caravan oases, and living folklore.",
    description:
      "Journey with our resident historians and desert trackers to untouched Khaba ruins, sacred Oran groves, and private candlelit camps deep in the wind-sculpted dunes.",
    image: SITE_CONFIG.images.explorer.experiences,
    href: "/experiences",
    stats: "Curated by Local Historians & Nomadic Guides",
  },
];

export interface TravelMoodOption {
  id: "romance" | "adventure" | "heritage" | "luxury" | "family";
  label: string;
  symbol: string;
  headline: string;
  quote: string;
  description: string;
  image: string;
  recommendedRoom: string;
  recommendedRoomSlug: string;
  curatedMoments: {
    title: string;
    detail: string;
    timing: string;
  }[];
}

export const TRAVEL_MOODS: TravelMoodOption[] = [
  {
    id: "romance",
    label: "ROMANCE",
    symbol: "I",
    headline: "Two Shadows Against an Endless Golden Horizon",
    quote: "For those who measure time in sunsets, quiet courtyards, and starlit silences.",
    description:
      "Jaisalmer at dusk was built for intimacy. We arrange secluded moments far from the crowds—from private dune-top champagne picnics to a candlelit rooftop bastion reserved solely for the two of you.",
    image: SITE_CONFIG.images.experiences.sunsetDunes,
    recommendedRoom: "The Rani Jharokha Residence",
    recommendedRoomSlug: "the-rani-jharokha-residence",
    curatedMoments: [
      {
        title: "Private Rooftop Bastion Dinner",
        detail: "108 brass diyas, a seven-course royal Marwar tasting menu, and private Manganiyar kamaicha strings.",
        timing: "Twilight · 7:30 PM",
      },
      {
        title: "Untouched Dune Sunset by Vintage 4x4",
        detail: "Travel to a private crest miles from commercial camps for sunset canopies and saffron kahwa.",
        timing: "Golden Hour · 5:00 PM",
      },
      {
        title: "Couples Rose & Vetiver Hammam Ritual",
        detail: "Warm sesame oil abhyanga followed(by) a sunken brass bath infused with desert Damask rose.",
        timing: "Afternoon · 3:00 PM",
      },
      {
        title: "Sleep Under the Thar Constellations",
        detail: "Your private terrace daybed dressed in warm pashmina throws beneath an unpolluted desert sky.",
        timing: "Midnight · 11:00 PM",
      },
    ],
  },
  {
    id: "adventure",
    label: "ADVENTURE",
    symbol: "II",
    headline: "Into the Shifting Sands of the Great Indian Desert",
    quote: "Follow ancient Silk Route caravan tracks where the road disappears into wind-carved gold.",
    description:
      "Venture beyond Sam and Khuri into the deep, untamed fossil plains and sacred pastures of the Thar. Ride Marwari horses at dawn, track desert foxes in sacred Orans, and traverse fossil canyons.",
    image: SITE_CONFIG.images.experiences.desertSafari,
    recommendedRoom: "The Golden Terrace Room",
    recommendedRoomSlug: "the-golden-terrace-room",
    curatedMoments: [
      {
        title: "Deep-Thar Expedition in Open-Top 4x4",
        detail: "Cross dry riverbeds and prehistoric marine fossil beds to reach isolated pastoral settlements.",
        timing: "Dawn · 6:00 AM",
      },
      {
        title: "Camel Caravan Along the Old Silk Trail",
        detail: "A serene, unhurried trek guided by Raika camel herders to a hidden oasis lake.",
        timing: "Late Afternoon · 4:15 PM",
      },
      {
        title: "Night Sky Astrophotography & Dune Campfire",
        detail: "Guided celestial navigation around a crackling khejri-wood fire in total desert silence.",
        timing: "Night · 8:30 PM",
      },
      {
        title: "Sunrise Kayaking on Gadisar Lake",
        detail: "Glide quietly past 14th-century submerged stone shrines before the city wakes.",
        timing: "Sunrise · 6:30 AM",
      },
    ],
  },
  {
    id: "heritage",
    label: "HERITAGE",
    symbol: "III",
    headline: "Living Chronicles of the Bhati Rajput Kingdom",
    quote: "Every carved stone in Jaisalmer whispers of merchant princes, silk caravans, and desert resilience.",
    description:
      "Walk with fifth-generation fort residents, decipher 15th-century Jain manuscripts, and explore the mysterious abandoned Paliwal Brahmin villages of Kuldhara and Khaba at first light.",
    image: SITE_CONFIG.images.experiences.fortWalk,
    recommendedRoom: "The Maharaja Suite",
    recommendedRoomSlug: "the-maharaja-suite",
    curatedMoments: [
      {
        title: "Scholar-Led Dawn Walk Through Sonar Quila",
        detail: "Enter the living fort before day-visitors arrive, visiting private havelis and ancient Jain temples.",
        timing: "Dawn · 6:45 AM",
      },
      {
        title: "The Abandoned Stones of Khaba & Kuldhara",
        detail: "Explore 13th-century deserted sandstone villages and ancient stepwells with an architectural historian.",
        timing: "Morning · 9:30 AM",
      },
      {
        title: "Silawat Stone-Carving Atelier Visit",
        detail: "Meet the master craftsmen who still chisel golden limestone jali screens by hand.",
        timing: "Afternoon · 4:00 PM",
      },
      {
        title: "Oral Histories & Manganiyar Raga Archive",
        detail: "An intimate courtyard evening exploring desert ragas composed for monsoon and twilight.",
        timing: "Evening · 7:00 PM",
      },
    ],
  },
  {
    id: "luxury",
    label: "LUXURY",
    symbol: "IV",
    headline: "Unhurried Royal Indulgence Without Pretense",
    quote: "True luxury in the desert is stillness, cold stone, warm hospitality, and time that belongs only to you.",
    description:
      "From private charter arrivals in Jodhpur or Jaisalmer to bespoke menus crafted around your palate, every detail is orchestrated silently by your personal Khidmatgar.",
    image: SITE_CONFIG.images.rooms.maharajaSuite,
    recommendedRoom: "The Maharaja Suite",
    recommendedRoomSlug: "the-maharaja-suite",
    curatedMoments: [
      {
        title: "Bespoke Royal Marwar Chef's Table",
        detail: "A curated tasting of heirloom royal recipes served in our candlelit subterranean vault.",
        timing: "Evening · 8:00 PM",
      },
      {
        title: "Private Chhatri Champagne Sundowner",
        detail: "Overlooking a 16th-century royal cenotaph as the golden sandstone turns deep amber.",
        timing: "Sunset · 5:30 PM",
      },
      {
        title: "In-Suite Brass Bath & Ayurvedic Ritual",
        detail: "Two therapists perform synchronized restorative treatments in the privacy of your suite.",
        timing: "At Your Leisure",
      },
      {
        title: "Private Chauffeur & Historian Throughout Stay",
        detail: "Explore the Golden City at your own pace with cold towels, artisanal refreshments, and insider access.",
        timing: "All Day",
      },
    ],
  },
  {
    id: "family",
    label: "FAMILY",
    symbol: "V",
    headline: "A Living Storybook of Forts, Camels & Starlight",
    quote: "Give your family memories carved in golden stone—where history feels alive and wonder is around every corner.",
    description:
      "Interconnecting heritage wings, interactive puppetry and pottery workshops in the courtyard, gentle desert wildlife trails, and treasure hunts inside the Golden Fort make Jaisalmer magical across generations.",
    image: SITE_CONFIG.images.experiences.culturalEvening,
    recommendedRoom: "The Rani Jharokha Residence",
    recommendedRoomSlug: "the-rani-jharokha-residence",
    curatedMoments: [
      {
        title: "Golden Fort Secret Passages Treasure Walk",
        detail: "An engaging storyteller-led adventure through ramparts, royal cannons, and hidden doors.",
        timing: "Morning · 8:30 AM",
      },
      {
        title: "Private Family Dune Picnic & Camel Ride",
        detail: "Gentle camel rides, sand-dune sliding, and wood-fired flatbreads baked under the stars.",
        timing: "Afternoon · 4:00 PM",
      },
      {
        title: "Kathputli Puppetry & Clay Pottery Workshop",
        detail: "Learn traditional Rajasthani storytelling and wheel-pottery with master village artisans.",
        timing: "Afternoon · 2:30 PM",
      },
      {
        title: "Guided Constellation Storytelling on the Roof",
        detail: "Hot spiced chocolate and telescope viewing of Saturn's rings and the Andromeda galaxy.",
        timing: "Evening · 8:30 PM",
      },
    ],
  },
];

export interface HorizontalExperience {
  id: string;
  number: string;
  category: string;
  title: string;
  poeticSubtitle: string;
  description: string;
  duration: string;
  bestTime: string;
  image: string;
  highlights: string[];
}

export const HORIZONTAL_EXPERIENCES: HorizontalExperience[] = [
  {
    id: "desert-after-sunset",
    number: "01",
    category: "THE THAR EXPEDITION",
    title: "DESERT AFTER SUNSET",
    poeticSubtitle: "The dunes become quieter. The sky becomes endless.",
    description:
      "Leave the world behind in a vintage 4x4 as we cross into secluded, wind-rippled dunes untouched by commercial camps. As the sun dips below the horizon, brass lanterns are lit on hand-knotted carpets for an unforgettable evening under a billion desert stars.",
    duration: "5 Hours · Private Charter",
    bestTime: "Departs 4:00 PM Daily",
    image: SITE_CONFIG.images.experiences.desertSafari,
    highlights: ["Private Uncrowded Dune Crest", "Camel Caravan at Dusk", "Live Folk Ballads by Firelight"],
  },
  {
    id: "golden-fort-dawn-walk",
    number: "02",
    category: "LIVING HERITAGE",
    title: "SONAR QUILA AT FIRST LIGHT",
    poeticSubtitle: "Walk the world's only living medieval fort before the city awakes.",
    description:
      "Accompanied by a resident architectural historian, step through the four monumental gates of Jaisalmer Fort at sunrise. Witness honey-gold sandstone glow like embers, visit 12th-century Jain temples carved like ivory, and share morning masala chai in a 400-year-old family home.",
    duration: "3 Hours · Private Historian",
    bestTime: "Departs 6:30 AM",
    image: SITE_CONFIG.images.experiences.fortWalk,
    highlights: ["Private Haveli Access", "12th-Century Jain Temple Carvings", "Sunrise Over 99 Bastions"],
  },
  {
    id: "sundowner-at-bada-bagh",
    number: "03",
    category: "GOLDEN HOUR RITUAL",
    title: "CENOTAPHS IN AMBER LIGHT",
    poeticSubtitle: "Where royal stone domes meet the fiery desert dusk.",
    description:
      "High on a rocky ridge overlooking an ancient mango oasis stand the royal chhatris of Jaisalmer's Maharajas. Watch the sky shift from molten gold to deep violet while our butler serves chilled vintage champagne and warm desert hors d'oeuvres on a nearby private ridge.",
    duration: "2.5 Hours · Private Butler",
    bestTime: "Departs 4:45 PM",
    image: SITE_CONFIG.images.experiences.sunsetDunes,
    highlights: ["16th-Century Royal Cenotaphs", "Private Ridge-Top Sundowner", "Golden Hour Photography"],
  },
  {
    id: "royal-marwar-feast",
    number: "04",
    category: "CULINARY ALCHEMY",
    title: "FEAST OF THE SILK CARAVANS",
    poeticSubtitle: "Heirloom desert ingredients slow-cooked in earthen pots.",
    description:
      "Desert cuisine is an art of preservation, wild botanicals, and smoke. Savour wild Ker berries and Sangri beans, hand-pounded Bajra rotis brushed with white makhan, and smoky Laal Maas slow-braised for six hours over desert khejri wood.",
    duration: "3 Hours · 7-Course Tasting",
    bestTime: "Dinner · 7:30 PM Onwards",
    image: SITE_CONFIG.images.experiences.royalDining,
    highlights: ["Foraged Desert Botanicals", "Earthenware Slow-Cooking", "Courtyard or Bastion Setting"],
  },
  {
    id: "manganiyar-night-raga",
    number: "05",
    category: "SOUL OF RAJASTHAN",
    title: "THE MANGANIYAR NIGHT RAGA",
    poeticSubtitle: "Centuries-old desert ballads carried on the night wind.",
    description:
      "For generations, the hereditary Manganiyar musicians have kept the oral history of the Thar alive without written notation. Gather in the lantern-lit Mor Chowk courtyard as the hypnotic bowed Kamaicha and Khartal cast a spell beneath the stars.",
    duration: "90 Minutes · Acoustic Recital",
    bestTime: "Nightly · 8:15 PM",
    image: SITE_CONFIG.images.experiences.culturalEvening,
    highlights: ["17-String Kamaicha Virtuosos", "Sufi & Marwari Desert Ballads", "Intimate Lantern Courtyard"],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: "Hotel" | "Rooms" | "Dining" | "Jaisalmer" | "Desert";
  aspect: "tall" | "wide" | "square";
  image: string;
  locationTag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Mor Chowk Courtyard at Dusk",
    caption: "108 brass lanterns illuminate the hand-carved sandstone colonnade as evening falls.",
    category: "Hotel",
    aspect: "tall",
    image: SITE_CONFIG.images.hiddenDoor.courtyardSanctuary,
    locationTag: "Central Haveli Sanctuary",
  },
  {
    id: "gal-2",
    title: "Wind-Sculpted Crests of the Thar",
    caption: "Untouched golden dunes thirty miles west of the Golden City.",
    category: "Desert",
    aspect: "wide",
    image: SITE_CONFIG.images.hero.desertPanorama,
    locationTag: "Deep Thar Reserve",
  },
  {
    id: "gal-3",
    title: "The Maharaja Suite Jharokha",
    caption: "Four-poster teak craftsmanship framed by 18th-century stone arches.",
    category: "Rooms",
    aspect: "square",
    image: SITE_CONFIG.images.rooms.maharajaSuite,
    locationTag: "Upper Heritage Wing",
  },
  {
    id: "gal-4",
    title: "Sonar Quila — The Living Golden Fort",
    caption: "Ninety-nine sandstone bastions rising above the Thar horizon.",
    category: "Jaisalmer",
    aspect: "tall",
    image: SITE_CONFIG.images.hero.fortSilhouette,
    locationTag: "Trikuta Hill, Jaisalmer",
  },
  {
    id: "gal-5",
    title: "Candlelit Dining on the Starlight Bastion",
    caption: "Heirloom Rajasthani cuisine served overlooking the illuminated fort walls.",
    category: "Dining",
    aspect: "wide",
    image: SITE_CONFIG.images.experiences.royalDining,
    locationTag: "Burj-e-Surya Rooftop",
  },
  {
    id: "gal-6",
    title: "Sunken Brass Hammam Pavilion",
    caption: "Hand-beaten copper and brass soaking tub scattered with wild desert rose petals.",
    category: "Rooms",
    aspect: "square",
    image: SITE_CONFIG.images.rooms.maharajaBath,
    locationTag: "The Maharaja Suite",
  },
  {
    id: "gal-7",
    title: "Carved Jali Lacework in Morning Light",
    caption: "Master Silawat stone carvings that cool the desert breeze and scatter geometric shadows.",
    category: "Jaisalmer",
    aspect: "tall",
    image: SITE_CONFIG.images.journey.jharokhaArchitecture,
    locationTag: "Old City Precinct",
  },
  {
    id: "gal-8",
    title: "Camel Caravan Along the Ancient Silk Route",
    caption: "Following historic trade routes at golden hour.",
    category: "Desert",
    aspect: "wide",
    image: SITE_CONFIG.images.hero.sandDunesGolden,
    locationTag: "Western Dunes",
  },
  {
    id: "gal-9",
    title: "The Golden Terrace Sanctuary",
    caption: "Wake to sunlit sandstone walls and a private open-sky verandah.",
    category: "Rooms",
    aspect: "wide",
    image: SITE_CONFIG.images.rooms.goldenTerrace,
    locationTag: "East Verandah Wing",
  },
  {
    id: "gal-10",
    title: "Lantern Ritual in the Inner Cloister",
    caption: "Every evening begins with the scent of loban incense and warm beeswax light.",
    category: "Hotel",
    aspect: "square",
    image: SITE_CONFIG.images.hiddenDoor.lanternGlow,
    locationTag: "Haveli Cloister",
  },
  {
    id: "gal-11",
    title: "Saffron Thali & Clay-Pot Delicacies",
    caption: "Ker Sangri, smoked Laal Maas, and hand-churned saffron malai.",
    category: "Dining",
    aspect: "square",
    image: SITE_CONFIG.images.explorer.dining,
    locationTag: "Kesar Bagh Dining Room",
  },
  {
    id: "gal-12",
    title: "Celestial Canopy Over Jaisalmer",
    caption: "Zero light pollution in the deep desert reveals the Milky Way in breathtaking clarity.",
    category: "Desert",
    aspect: "tall",
    image: SITE_CONFIG.images.nightClimax.starryDesertNight,
    locationTag: "Private Dune Camp",
  },
];

export interface EditorialReviewPlaceholder {
  id: string;
  quote: string;
  subQuote: string;
  guestDisplay: string;
  stayContext: string;
  platformSource: "Google Reviews Placeholder" | "TripAdvisor Placeholder" | "Direct Guest Journal (Sample)";
}

export const SAMPLE_REVIEWS: EditorialReviewPlaceholder[] = [
  {
    id: "rev-1",
    quote: "We came for Jaisalmer. We stayed for the feeling.",
    subQuote:
      "When the heavy teak haveli doors closed behind us and we stepped into the cool sandstone courtyard with rose-water towels and quiet sitar notes, we knew this was unlike any hotel we had ever experienced.",
    guestDisplay: "A. & M. Sterling — London (Sample Editorial Quote)",
    stayContext: "Stayed 4 Nights in The Maharaja Suite · February",
    platformSource: "Direct Guest Journal (Sample)",
  },
  {
    id: "rev-2",
    quote: "Like living inside a 300-year-old poem carved in gold.",
    subQuote:
      "Waking up to see the Golden Fort glowing right outside our jharokha window while sipping saffron kahwa is a memory that will stay with us forever. The private dune dinner felt like a scene from a film.",
    guestDisplay: "Devika & Rohan Kapoor — Mumbai (Sample Editorial Quote)",
    stayContext: "Stayed 3 Nights in The Golden Terrace Room · December",
    platformSource: "TripAdvisor Placeholder",
  },
  {
    id: "rev-3",
    quote: "Unhurried, soulful, and deeply authentic to the Thar.",
    subQuote:
      "Nothing feels commercial or staged here. From the historian who walked us through Sonar Quila at dawn to the Manganiyar musicians singing under the stars, every moment felt deeply personal.",
    guestDisplay: "Claire & Henri Laurent — Paris (Sample Editorial Quote)",
    stayContext: "Stayed 5 Nights in The Rani Jharokha Residence · November",
    platformSource: "Google Reviews Placeholder",
  },
];
