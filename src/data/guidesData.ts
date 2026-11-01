import { SITE_CONFIG } from "@/config/siteConfig";

export interface GuideArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  excerpt: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    insiderTip?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const JAISALMER_GUIDES: GuideArticle[] = [
  {
    slug: "best-time-to-visit-jaisalmer",
    title: "Best Time to Visit Jaisalmer: A Seasonal Guide to the Golden City",
    subtitle: "When the desert sun softens into amber afternoons and starlit winter nights.",
    category: "SEASONAL PLANNING",
    readTime: "6 Min Read",
    publishedDate: "2026-09-15",
    updatedDate: "2026-10-25",
    excerpt:
      "From the crisp, star-drenched nights of November to the quiet golden warmth of late February, discover how each season transforms the mood, light, and rhythm of Jaisalmer.",
    heroImage: SITE_CONFIG.images.hero.fortSilhouette,
    metaTitle: "Best Time to Visit Jaisalmer (Month-by-Month Weather & Insider Guide)",
    metaDescription:
      "Plan your journey to Jaisalmer with our seasonal guide. Compare winter desert nights, golden shoulder months, and festival dates for the ultimate Rajasthan luxury stay.",
    keyTakeaways: [
      "Peak Season (November to February): Ideal daytime temperatures (22°C–26°C) and crisp desert nights (7°C–12°C) perfect for dune dining and fort walks.",
      "Shoulder Months (October & March): Fewer travellers, warm golden light for photography, and serene mornings at Sonar Quila.",
      "Monsoon & Late Summer (July to September): Rare desert showers awaken wild desert flora in sacred Oran groves—an intimate season for slow heritage stays.",
    ],
    sections: [
      {
        heading: "Winter in the Thar (November to February): The Classic Golden Season",
        paragraphs: [
          "Between November and February, the fierce heat of the Great Indian Desert yields to crystalline blue skies and gentle daytime warmth. Afternoon temperatures hover comfortably around 24°C (75°F), allowing you to wander the narrow sandstone lanes of Jaisalmer Fort and Patwon Ki Haveli without haste.",
          "As the sun drops below the western dunes around 5:45 PM, the desert air cools rapidly. This thermal shift is what makes winter evenings in Jaisalmer unforgettable—bonfires of desert khejri wood, pashmina shawls on rooftop bastions, and an ink-black sky dusted with winter constellations like Orion and Taurus.",
        ],
        insiderTip:
          "Pack layers even for a luxury desert trip. While midday calls for breathable linen and cotton, a private dune dinner in December or January calls for cashmere or a handwoven Rajasthani wool shawl.",
      },
      {
        heading: "The Golden Shoulder Season (October & March): Quiet Light & Solitude",
        paragraphs: [
          "For photographers, architects, and travellers who prize stillness over festival crowds, late October and early March are Jaisalmer's best-kept secret. The morning light between 6:30 AM and 9:30 AM bathes the honey-gold limestone in a rich amber glow.",
          "During these months, afternoon hours (1:00 PM to 4:00 PM) are best spent within the thick, naturally cooled sandstone walls of your haveli—resting in a shaded courtyard plunge pool or enjoying a traditional Ayurvedic abhyanga massage before venturing out for sunset.",
        ],
        insiderTip:
          "Schedule your Golden Fort architectural walk at 6:30 AM in October or March; you will have the 12th-century Jain temple courtyards and rampart cannons almost entirely to yourself.",
      },
      {
        heading: "Desert Festivals & Celestial Moments Worth Travelling For",
        paragraphs: [
          "February brings the renowned Jaisalmer Desert Festival (Maru Mahotsav), timed with the full moon of Magh. Beyond the public festivities, winter new-moon nights (Amavasya) offer some of the darkest skies in the Indian subcontinent—ideal for private astrophotography expeditions deep in the Thar.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the single best month to visit Jaisalmer?",
        answer:
          "November and February offer the most balanced weather—warm, sunny days around 25°C and pleasantly cool nights around 11°C without the mid-January chill or New Year crowds.",
      },
      {
        question: "Is Jaisalmer too cold at night in December and January?",
        answer:
          "Desert sand loses heat quickly after sunset, so temperatures in the open dunes can dip to 6°C–8°C in late December and January. Inside our 18th-century sandstone haveli, thick masonry walls and heated bedding keep suites warm and cocooned.",
      },
      {
        question: "How many days do you need in Jaisalmer?",
        answer:
          "A minimum of 3 nights allows you to experience both the living medieval fort and havelis of the old city as well as an unhurried expedition into the untouched dunes and abandoned villages of the Thar.",
      },
    ],
  },
  {
    slug: "3-day-jaisalmer-itinerary",
    title: "A 3-Day Jaisalmer Itinerary: Art, Architecture & The Untamed Thar",
    subtitle: "How to experience the Golden City slowly—balancing historic depth with desert stillness.",
    category: "CURATED ITINERARIES",
    readTime: "8 Min Read",
    publishedDate: "2026-09-20",
    updatedDate: "2026-10-26",
    excerpt:
      "Most visitors rush through Jaisalmer in 24 hours. Here is a thoughtfully paced three-day narrative designed for travellers who seek private access, architectural beauty, and authentic desert solitude.",
    heroImage: SITE_CONFIG.images.journey.jharokhaArchitecture,
    metaTitle: "3-Day Jaisalmer Itinerary: Luxury Heritage & Desert Guide",
    metaDescription:
      "Follow our curated 3-day Jaisalmer itinerary covering dawn walks in Jaisalmer Fort, Patwon Ki Haveli, Bada Bagh cenotaphs, and private Thar desert safaris.",
    keyTakeaways: [
      "Day 01 focuses on arrival, settling into the haveli rhythm, Gadisar Lake at dusk, and a candlelit bastion dinner.",
      "Day 02 explores the living Golden Fort at dawn, 19th-century merchant havelis, and a private afternoon expedition into the deep Thar dunes.",
      "Day 03 uncovers the mysterious Paliwal Brahmin ruins of Khaba, sacred Oran wildlife groves, and royal cenotaphs at Bada Bagh.",
    ],
    sections: [
      {
        heading: "Day 01: Arrival in the Golden City & Dusk at the Bastion",
        paragraphs: [
          "Arrive by afternoon flight into Jaisalmer (JSA) or by scenic 4.5-hour private chauffeur drive across the desert plains from Jodhpur. Step through the heavy teak doors of the haveli to a welcome of chilled rose-water towels and saffron kahwa.",
          "At 4:30 PM, take a gentle walk to the eastern edge of Gadisar Lake—once the sole water reservoir of the medieval desert kingdom—to admire the carved stone Tilon Ki Pol gateway reflected in still water. Return to the haveli rooftop as 108 brass lanterns are lit for a slow, smoky Rajasthani tasting dinner.",
        ],
        insiderTip:
          "Resist the urge to sightsee immediately upon arrival. Watching the Golden Fort change colour from honey to deep bronze from your private jharokha is the finest introduction to Jaisalmer.",
      },
      {
        heading: "Day 02: Sonar Quila at Dawn & Into the Shifting Dunes",
        paragraphs: [
          "Begin at 6:45 AM with a resident historian, entering Jaisalmer Fort through Akhai Pol before the lanes awaken. Visit the 12th-century Chandraprabhu and Rikhabdev Jain temples, where Dilwara-style stone carvings appear weightless, then walk down to the soaring five-storey facade of Patwon Ki Haveli.",
          "After a leisurely courtyard lunch and rest during the bright afternoon hours, depart at 3:45 PM in a vintage 4x4 toward secluded western dunes far from commercial tent zones. Ride camels along the ridge at sunset and dine by firelight beneath the Milky Way before returning to your suite.",
        ],
      },
      {
        heading: "Day 03: Forgotten Villages, Stone Ateliers & Royal Cenotaphs",
        paragraphs: [
          "Venture out after breakfast to Khaba Fort—a hauntingly quiet 13th-century village abandoned overnight by the Paliwal Brahmins, today watched over only by wild peacocks. On the return journey, stop at a traditional Silawat stone-carving workshop to see how Jaisalmer limestone is still chiselled by hand.",
          "Conclude your final evening at the hilltop royal cenotaphs (chhatris) of Bada Bagh, watching the sun sink behind domed stone pavilions built in memory of Jaisalmer's Bhati rulers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I stay inside Jaisalmer Fort or in a boutique haveli outside the fort?",
        answer:
          "Staying just outside the fort in a restored heritage haveli offers the best of both worlds: you enjoy panoramic views looking AT the illuminated Golden Fort, while helping preserve the fragile 12th-century water and drainage infrastructure inside the fort walls.",
      },
      {
        question: "Can this 3-day itinerary be customized for couples or families?",
        answer:
          "Yes—our concierge tailors every hour to your pace, whether adding a couples Ayurvedic spa afternoon or interactive puppetry and fossil-hunting trails for children.",
      },
    ],
  },
  {
    slug: "things-to-do-in-jaisalmer",
    title: "10 Extraordinary Things to Do in Jaisalmer Beyond the Tourist Trail",
    subtitle: "Intimate encounters with stone, music, desert ecology, and royal history.",
    category: "EXPERIENCES & CULTURE",
    readTime: "7 Min Read",
    publishedDate: "2026-09-28",
    updatedDate: "2026-10-28",
    excerpt:
      "Look past crowded camel camps and souvenir bazaars. Discover the serene, scholarly, and deeply moving experiences that define the true soul of Jaisalmer.",
    heroImage: SITE_CONFIG.images.experiences.culturalEvening,
    metaTitle: "Things to Do in Jaisalmer: Authentic Luxury & Cultural Experiences",
    metaDescription:
      "Discover the best things to do in Jaisalmer beyond typical tourist spots—private Manganiyar recitals, dawn fort walks, sacred Oran wildlife trails, and stone carving.",
    keyTakeaways: [
      "Experience the living fort at 6:30 AM when only temple bells and morning sweeping echo through the stone alleys.",
      "Listen to acoustic Manganiyar Kamaicha maestros in an intimate sandstone courtyard rather than amplified stage shows.",
      "Explore the desert's hidden biodiversity in sacred Oran groves, home to the endangered Great Indian Bustard and chinkara gazelles.",
    ],
    sections: [
      {
        heading: "1. Decipher the Stone Lacework of Patwon Ki Haveli & Nathmal Ki Haveli",
        paragraphs: [
          "Built by wealthy 19th-century brocade and opium merchants along the Silk Route, Jaisalmer's great havelis are masterpieces of domestic stone architecture. At Nathmal Ki Haveli, two Muslim artisan brothers—Hathi and Lulu—carved the left and right wings simultaneously without blueprints, resulting in a facade that appears symmetrical from afar yet differs subtly in every floral motif.",
        ],
        insiderTip:
          "Bring binoculars or a 85mm camera lens; the finest details—miniature stone peacocks, steam trains, and floral arabesques—sit thirty feet above street level.",
      },
      {
        heading: "2. An Acoustic Night with Hereditary Manganiyar Musicians",
        paragraphs: [
          "The Manganiyars of western Rajasthan carry an unbroken 800-year oral repertoire of desert ragas, Sufi kalaams, and ballads of Dhola-Maru. Hearing the 17-string bowed Kamaicha resonate against raw sandstone walls under candlelit arches is one of India's great musical experiences.",
        ],
      },
      {
        heading: "3. Track Desert Wildlife in the Sacred Orans of the Thar",
        paragraphs: [
          "Contrary to the myth of a barren wasteland, the Thar is the most biologically vibrant desert on earth. Community-protected sacred groves (Orans) shelter chinkara (Indian gazelles), desert foxes, migratory demoiselle cranes at Khichan, and ancient khejri trees.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most unique non-touristy places in Jaisalmer?",
        answer:
          "Khaba Fort at sunrise, the 16th-century stepwells and mango groves below Bada Bagh, Lodurva's ancient Jain temple Toran arch, and the prehistoric Akal Wood Fossil Park.",
      },
    ],
  },
  {
    slug: "jaisalmer-desert-safari",
    title: "The Discerning Traveller's Guide to a Jaisalmer Desert Safari",
    subtitle: "How to trade crowded commercial dune strips for pure, unhurried desert silence.",
    category: "DESERT EXPEDITIONS",
    readTime: "7 Min Read",
    publishedDate: "2026-10-02",
    updatedDate: "2026-10-29",
    excerpt:
      "Not all dunes in Jaisalmer are equal. Learn the difference between commercial Sam/Khuri strips and private deep-Thar expeditions—and how to experience the desert ethically and luxuriously.",
    heroImage: SITE_CONFIG.images.experiences.desertSafari,
    metaTitle: "Jaisalmer Desert Safari Guide: Private Dunes vs Sam & Khuri",
    metaDescription:
      "Planning a Jaisalmer desert safari? Learn how to avoid crowded commercial camps and experience private, untouched Thar dunes with luxury dining and starlight.",
    keyTakeaways: [
      "Avoid the main highway strip of Sam Sand Dunes if you seek silence; opt for private coordinates in the remote western and southern dune belts.",
      "Combine a vintage 4x4 cross-country drive with a gentle, ethical camel walk led by traditional Raika pastoralists.",
      "Returning to your luxury sandstone haveli after a private starlit dune dinner gives you both wilderness magic and 5-star sleeping comfort.",
    ],
    sections: [
      {
        heading: "Sam, Khuri, or Private Wilderness Coordinates?",
        paragraphs: [
          "Many first-time visitors book a generic 'Sam Sand Dunes safari' only to find hundreds of Jeeps, loud speakers, and rows of permanent tents lining a single two-kilometre ridge. Yet the Thar Desert spans over 200,000 square kilometres.",
          "By travelling twenty minutes further off-road with local desert trackers who know the shifting wind corridors, you step onto pristine, footprint-free crescent dunes (barchans) where the only sound is the wind moving grains of quartz and mica.",
        ],
        insiderTip:
          "You do not need to sleep in a canvas tent to experience the desert night. Our guests love enjoying a private 5-hour sunset-to-starlight dune feast, then returning 40 minutes to their heated brass bath and four-poster bed at the haveli.",
      },
      {
        heading: "Ethical Camel Treks & Respecting the Desert Ecosystem",
        paragraphs: [
          "Camels (the iconic single-humped dromedary, Rajasthan's state heritage animal) have been the lifeblood of Thar pastoralists for centuries. We partner exclusively with local Raika herders who care for their animals year-round, keeping treks gentle, unhurried, and strictly leave-no-trace.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a private 4x4 safari or a camel safari better in Jaisalmer?",
        answer:
          "A combination of both is ideal: a private 4x4 comfortably covers the scenic cross-country terrain past fossil plains and oasis villages, bringing you to remote dunes where you can enjoy a gentle 45-minute sunset camel walk.",
      },
      {
        question: "What should I wear for an evening desert safari in Jaisalmer?",
        answer:
          "Wear breathable natural fabrics (linen or cotton trousers), closed shoes or leather jutis that slip off easily on warm sand, sunglasses for late-afternoon glare, and a warm jacket or shawl for the rapid temperature drop after sunset.",
      },
    ],
  },
  {
    slug: "hidden-places-in-jaisalmer",
    title: "Hidden Places in Jaisalmer: Secret Stepwells, Abandoned Ruins & Quiet Oases",
    subtitle: "Seven architectural and natural wonders hidden in plain sight across the Thar.",
    category: "SECRET JAISALMER",
    readTime: "6 Min Read",
    publishedDate: "2026-10-08",
    updatedDate: "2026-10-29",
    excerpt:
      "Beyond the fort ramparts lie subterranean water temples, 180-million-year-old petrified forests, and deserted medieval settlements waiting in golden silence.",
    heroImage: SITE_CONFIG.images.journey.sandstoneWalls,
    metaTitle: "Hidden Places in Jaisalmer: 7 Secret Heritage & Desert Spots",
    metaDescription:
      "Explore hidden places in Jaisalmer with our curator's guide—from Khaba Fort and Lodurva's Kalpavriksha tree to ancient stepwells and desert oases.",
    keyTakeaways: [
      "Lodurva, the ancient 10th-century capital before Jaisalmer was founded in 1156 AD, features some of Rajasthan's most intricate stone arches.",
      "Khaba Fort offers a far quieter, more atmospheric Paliwal village ruin experience than the busier Kuldhara site.",
      "Ancient rainwater harvesting systems (Khadins and Beris) reveal how civilization flourished in an arid landscape for a millennium.",
    ],
    sections: [
      {
        heading: "1. Lodurva: The Forgotten Capital Before Jaisalmer",
        paragraphs: [
          "Long before Rawal Jaisal founded Jaisalmer on Trikuta Hill in 1156 AD, Lodurva stood as the flourishing capital of the Bhati clan. Located just 15 km northwest of the city, its reconstructed Jain temple features a breathtaking stone Toran (ornamental gateway) and a sacred celestial Kalpavriksha tree sculpted in yellow stone.",
        ],
      },
      {
        heading: "2. Khaba Fort & The Geological Amphitheatre",
        paragraphs: [
          "While Kuldhara attracts midday tour buses, nearby Khaba remains hushed and mystical. Climb the small hilltop fort overlooking the grid of 80 ruined stone homes below, where resident peacocks roost on 200-year-old walls and a small geological museum displays ancient marine fossils found in the surrounding rock.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far are these hidden places from Suryavansh Haveli?",
        answer:
          "Lodurva, Bada Bagh, and Amar Sagar lie within a 15 to 25-minute scenic drive north-west of the haveli, while Khaba Fort is a 35-minute drive south-west.",
      },
    ],
  },
  {
    slug: "where-to-eat-in-jaisalmer",
    title: "Where to Eat in Jaisalmer: Royal Marwar Recipes & Desert Culinary Heritage",
    subtitle: "From foraged desert berries and smoky Laal Maas to saffron-drenched sweets.",
    category: "GASTRONOMY",
    readTime: "5 Min Read",
    publishedDate: "2026-10-12",
    updatedDate: "2026-10-30",
    excerpt:
      "Discover how scarcity in the arid Thar Desert gave birth to one of India's most inventive, deeply flavourful culinary traditions—and what dishes you must savour in Jaisalmer.",
    heroImage: SITE_CONFIG.images.experiences.royalDining,
    metaTitle: "Where to Eat in Jaisalmer & Traditional Rajasthani Food Guide",
    metaDescription:
      "A culinary guide to Jaisalmer: discover Ker Sangri, Laal Maas, Ghotua Laddoo, and rooftop fine dining overlooking the Golden Fort.",
    keyTakeaways: [
      "Signature Dish to Try: Ker Sangri—wild desert caper berries and khejri beans slow-cooked with sun-dried chillies, amchoor, and mustard oil.",
      "Royal Meat Preparation: Junglee Maas and Laal Maas, historically cooked on royal hunting expeditions using only ghee, Mathania red chillies, and game.",
      "Sweet Heritage: Jaisalmer's iconic Ghotua Laddoo and piping-hot Kesariya Jalebi steeped in saffron syrup.",
    ],
    sections: [
      {
        heading: "The Ingenuity of Thar Desert Cuisine",
        paragraphs: [
          "Without leafy green vegetables or year-round rivers, the royal kitchens and nomadic communities of Jaisalmer turned to sun-dried desert berries (Ker), protein-rich pods of the sacred Khejri tree (Sangri), lentil dumplings simmered in spiced buttermilk (Gatte ki Kadhi), and pearl millet (Bajra) that thrives in arid sand.",
          "At Suryavansh Haveli's Kesar Bagh and Starlight Bastion, our chefs source heirloom desert grains and hand-pounded Mathania chillies directly from local farming families.",
        ],
      },
      {
        heading: "Rooftop Bastions vs Courtyard Candlelight",
        paragraphs: [
          "Dining in Jaisalmer is inseparable from atmosphere. Enjoying a slow luncheon of Bajre ki Raab and crisp Papad ki Sabzi in a shaded sandstone courtyard feels worlds apart from a seven-course twilight dinner watching the Golden Fort glow against the night sky.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Jaisalmer food suitable for vegetarian, vegan, and gluten-free travellers?",
        answer:
          "Remarkably so. Traditional Rajasthani cuisine is predominantly vegetarian and naturally rich in gluten-free ancient millets like Bajra (pearl millet) and Jowar (sorghum), alongside chickpea-flour delicacies.",
      },
    ],
  },
];
