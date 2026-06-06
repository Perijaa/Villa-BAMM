// ---------------------------------------------------------------------------
// Villa Bamm — Centralized Data & TypeScript Interfaces
// ---------------------------------------------------------------------------

export interface VillaHighlight {
  value: string;
  label: string;
  iconKey: "guests" | "bedrooms" | "bathrooms" | "pool" | "view" | "area";
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "exterior" | "interior" | "pool" | "bedroom" | "kitchen" | "terrace" | "view" | "detail";
  featured?: boolean;
  blurColor: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AmenityItem {
  name: string;
  iconKey: string;
}

export interface AmenityGroup {
  category: string;
  description: string;
  items: AmenityItem[];
}

export interface Bedroom {
  name: string;
  floor: string;
  size: string;
  bed: string;
  description: string;
  features: string[];
  isMaster: boolean;
  image: string;
}

export interface Distance {
  label: string;
  value: string;
  iconKey: "plane" | "anchor" | "pin" | "clock" | "car" | "store" | "waves";
}

export interface Attraction {
  name: string;
  description: string;
  distance: string;
}

export interface Review {
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  stayType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingSeason {
  period: string;
  perNight: number;
  perWeek: number;
  minStay: string;
}

export interface ExtraService {
  name: string;
  description: string;
  iconKey: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface VillaContact {
  email: string;
  phone: string;
  instagram: string;
  bookingUrl: string;
}

export interface VillaPolicy {
  checkIn: string;
  checkOut: string;
  securityDeposit: string;
  petsAllowed: boolean;
  poolSeason: string;
  cancellation: string;
}

export interface VillaData {
  name: string;
  tagline: string;
  subtitle: string;
  location: string;
  region: string;
  address: string;
  coordinates: { lat: number; lng: number };
  highlights: VillaHighlight[];
  gallery: GalleryImage[];
  about: {
    headline: string;
    paragraphs: string[];
    stats: AboutStat[];
  };
  amenities: AmenityGroup[];
  bedrooms: Bedroom[];
  location_section: {
    headline: string;
    description: string;
    distances: Distance[];
    attractions: Attraction[];
  };
  reviews: Review[];
  faq: FaqItem[];
  pricing: PricingSeason[];
  extraServices: ExtraService[];
  navigation: NavigationItem[];
  contact: VillaContact;
  policies: VillaPolicy;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const villaData: VillaData = {
  name: "Villa Bamm",
  tagline: "Where the Adriatic Unveils Its Finest",
  subtitle:
    "A private luxury retreat above the ancient town of Omiš — panoramic sea views, heated infinity pool, and the timeless beauty of the Dalmatian coast.",
  location: "Omiš, Croatia",
  region: "Split-Dalmatia, Dalmatia",
  address: "Borak, Omiš, Croatia",
  coordinates: { lat: 43.4447, lng: 16.6936 },

  // -------------------------------------------------------------------------
  // Highlights
  // -------------------------------------------------------------------------
  highlights: [
    { value: "10", label: "Guests", iconKey: "guests" },
    { value: "5", label: "Bedrooms", iconKey: "bedrooms" },
    { value: "5.5", label: "Bathrooms", iconKey: "bathrooms" },
    { value: "36 m²", label: "Heated Pool", iconKey: "pool" },
    { value: "Panoramic", label: "Sea & Island Views", iconKey: "view" },
    { value: "280 m²", label: "Living Space", iconKey: "area" },
  ],

  // -------------------------------------------------------------------------
  // Gallery
  // -------------------------------------------------------------------------
  gallery: [
    { src: "/images/gallery/pool-sea-views.jpg", alt: "Heated infinity pool with panoramic views of the Adriatic Sea and Dalmatian islands", width: 920, height: 613, category: "pool", featured: true, blurColor: "#4a8cb8" },
    { src: "/images/gallery/swimming-pool.jpg", alt: "Heated 36 m² swimming pool with hydro-massage jets", width: 920, height: 613, category: "pool", blurColor: "#5a9cc8" },
    { src: "/images/gallery/pool-sunset.jpg", alt: "Pool terrace at golden hour with Omiš and the Adriatic below", width: 920, height: 613, category: "pool", blurColor: "#d4a574" },
    { src: "/images/gallery/villa-exterior.jpg", alt: "Modern villa architecture nestled in the quiet hills above Omiš", width: 920, height: 613, category: "exterior", featured: true, blurColor: "#6a8a6e" },
    { src: "/images/gallery/modern-exterior.jpg", alt: "Newly built modern property with stunning panoramic sea views", width: 920, height: 613, category: "exterior", blurColor: "#7a9a7e" },
    { src: "/images/gallery/villa-280sqm.jpg", alt: "Villa Bamm — 280 m² of refined Mediterranean living space", width: 920, height: 689, category: "exterior", blurColor: "#5a8a5e" },
    { src: "/images/gallery/sun-deck-palms.jpg", alt: "Spacious sun deck with palm trees and Mediterranean landscaping", width: 920, height: 689, category: "terrace", featured: true, blurColor: "#8ab070" },
    { src: "/images/gallery/summer-kitchen.jpg", alt: "Fully equipped summer kitchen and BBQ — the heart of outdoor living", width: 920, height: 689, category: "terrace", blurColor: "#9a8a70" },
    { src: "/images/gallery/covered-dining.jpg", alt: "Covered outdoor dining area for 10 guests under ambient lighting", width: 920, height: 613, category: "terrace", blurColor: "#8b7d6b" },
    { src: "/images/gallery/terrace-furniture.jpg", alt: "Open terrace with comfortable outdoor furniture overlooking the Adriatic", width: 920, height: 613, category: "terrace", blurColor: "#a09070" },
    { src: "/images/gallery/terrace-views.jpg", alt: "Breathtaking island and sea views from the master suite terrace", width: 920, height: 613, category: "terrace", blurColor: "#4080b0" },
    { src: "/images/gallery/living-area.jpg", alt: "Open-plan living area with floor-to-ceiling windows and sea panorama", width: 920, height: 613, category: "interior", featured: true, blurColor: "#c8bfb0" },
    { src: "/images/gallery/living-room.jpg", alt: "Living room with comfortable sofas, smart TV, and PlayStation 5", width: 920, height: 613, category: "interior", blurColor: "#b8b0a0" },
    { src: "/images/gallery/dining-sea-view.jpg", alt: "Dining area with panoramic Adriatic views and direct pool access", width: 920, height: 613, category: "interior", blurColor: "#a0a098" },
    { src: "/images/gallery/kitchen.jpg", alt: "Fully equipped gourmet kitchen with DeLonghi coffee machine", width: 920, height: 613, category: "kitchen", blurColor: "#b8b0a0" },
    { src: "/images/gallery/bedroom-1.jpg", alt: "The Adriatic Room — king bed with direct pool access and sea views", width: 920, height: 613, category: "bedroom", blurColor: "#c5bdb0" },
    { src: "/images/gallery/bedroom-2.jpg", alt: "The Island View Room — king bed with panoramic island views", width: 920, height: 613, category: "bedroom", blurColor: "#d0c4b0" },
    { src: "/images/gallery/bedroom-3.jpg", alt: "The Coastal Room — elegantly appointed with coastal panorama", width: 920, height: 613, category: "bedroom", blurColor: "#c8c0b4" },
    { src: "/images/gallery/master-bedroom.jpg", alt: "The Penthouse Suite — king bed with 70 m² private terrace", width: 920, height: 613, category: "bedroom", featured: true, blurColor: "#d6cfc4" },
    { src: "/images/gallery/panoramic-views.jpg", alt: "Panoramic views over the coast, islands, and Omiška Dinara hills", width: 920, height: 613, category: "view", featured: true, blurColor: "#3a7ab8" },
    { src: "/images/gallery/master-terrace-view.jpg", alt: "Breathtaking panorama from the Penthouse Suite's 70 m² terrace", width: 920, height: 613, category: "view", blurColor: "#4a90c0" },
    { src: "/images/gallery/cetina-river.jpg", alt: "Cetina river canyon — rafting and adventure activities nearby", width: 919, height: 403, category: "view", blurColor: "#4a8a5a" },
    { src: "/images/gallery/omis-town.jpg", alt: "Mediterranean town of Omiš with sandy beaches and pirate history", width: 920, height: 613, category: "view", blurColor: "#5090b0" },
  ],

  // -------------------------------------------------------------------------
  // About
  // -------------------------------------------------------------------------
  about: {
    headline: "Above the Coast, Beyond the Ordinary",
    paragraphs: [
      "Perched in the serene hills above the ancient pirate town of Omiš, Villa Bamm is a modern architectural statement framed by the Adriatic Sea, scattered islands, and the dramatic peaks of Omiška Dinara. This is not simply a place to stay — it is a destination in its own right.",
      "With 280 square metres of refined interior space and an additional 490 square metres of landscaped outdoor living, every corner has been designed for effortless luxury. Floor-to-ceiling windows dissolve the boundary between indoors and out, while the 36-square-metre heated pool with hydro-massage becomes the centrepiece of sun-drenched days.",
      "From the gourmet summer kitchen to the PlayStation 5 in the living room, Villa Bamm balances sophisticated design with genuine warmth — a home that feels as indulgent for a multi-generational family reunion as it does for a group of friends seeking the Croatian dolce vita.",
    ],
    stats: [
      { value: "280 m²", label: "Interior Space" },
      { value: "490 m²", label: "Outdoor Area" },
      { value: "36 m²", label: "Heated Pool" },
      { value: "5", label: "Private Parking" },
    ],
  },

  // -------------------------------------------------------------------------
  // Amenities
  // -------------------------------------------------------------------------
  amenities: [
    {
      category: "Pool & Outdoor Living",
      description: "Your private Mediterranean oasis",
      items: [
        { name: "Heated Swimming Pool (36 m²)", iconKey: "waves" },
        { name: "Pool Hydro-Massage", iconKey: "sparkles" },
        { name: "Sun Deck with 10 Loungers", iconKey: "sun" },
        { name: "Palm-Shaded Terrace", iconKey: "palmtree" },
        { name: "Outdoor Shower", iconKey: "showerhead" },
        { name: "Summer Kitchen (Fully Equipped)", iconKey: "utensils" },
        { name: "BBQ & Outdoor Dining for 10", iconKey: "beef" },
        { name: "Children's Playground & Swing", iconKey: "baby" },
        { name: "Table Tennis", iconKey: "activity" },
      ],
    },
    {
      category: "Interior & Comfort",
      description: "Thoughtfully appointed for effortless living",
      items: [
        { name: "Full Air Conditioning", iconKey: "airvent" },
        { name: "High-Speed Wi-Fi", iconKey: "wifi" },
        { name: "Smart TV in Every Room", iconKey: "tv" },
        { name: "PlayStation 5", iconKey: "gamepad" },
        { name: "In-Room Safe", iconKey: "lock" },
        { name: "Fire Extinguisher", iconKey: "shield" },
      ],
    },
    {
      category: "Gourmet Kitchen",
      description: "Everything a discerning chef could ask for",
      items: [
        { name: "DeLonghi Bean-to-Cup Coffee Machine", iconKey: "coffee" },
        { name: "Refrigerator with Ice Maker", iconKey: "refrigerator" },
        { name: "Microwave & Dishwasher", iconKey: "utensils" },
        { name: "Toaster & Kettle", iconKey: "cup" },
        { name: "Complete Cookware & Dinnerware", iconKey: "utensils" },
        { name: "High Chair Available", iconKey: "baby" },
      ],
    },
    {
      category: "Practical Essentials",
      description: "Every detail, considered",
      items: [
        { name: "Washing Machine & Dryer", iconKey: "washingmachine" },
        { name: "Iron & Ironing Board", iconKey: "shirt" },
        { name: "Hair Dryer", iconKey: "wind" },
        { name: "Premium Linens & Towels", iconKey: "bed" },
        { name: "Baby Cot on Request", iconKey: "baby" },
        { name: "Private Secured Parking (5 Cars)", iconKey: "car" },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // Bedrooms
  // -------------------------------------------------------------------------
  bedrooms: [
    {
      name: "The Penthouse Suite",
      floor: "Second Floor",
      size: "16.5 m²",
      bed: "King Bed (180 × 200 cm)",
      description:
        "The crown jewel of Villa Bamm. A generous master suite on the top floor with its own en-suite bathroom, opening onto a breathtaking 70 m² private terrace — the largest in the villa — with uninterrupted panoramic views across the islands and the glistening Adriatic.",
      features: ["King Bed", "En-suite Shower", "70 m² Private Terrace", "Panoramic Sea View", "A/C", "Smart TV"],
      isMaster: true,
      image: "/images/bedrooms/bedroom-5.jpg",
    },
    {
      name: "The Adriatic Room",
      floor: "Ground Floor",
      size: "16.5 m²",
      bed: "King Bed (180 × 200 cm)",
      description:
        "Step directly from your pillow to the pool. This ground-floor retreat features an en-suite bathroom and direct access to the pool terrace, with sweeping views of the Adriatic Sea and islands stretching to the horizon.",
      features: ["King Bed", "En-suite Shower", "Direct Pool Access", "Sea View", "A/C", "Smart TV"],
      isMaster: false,
      image: "/images/bedrooms/bedroom-1.jpg",
    },
    {
      name: "The Island View Room",
      floor: "First Floor",
      size: "16.5 m²",
      bed: "King Bed (180 × 200 cm)",
      description:
        "Wake to the silhouette of distant islands from this luminous first-floor bedroom. An en-suite bathroom and a shared terrace with comfortable outdoor furniture make mornings here something to savour.",
      features: ["King Bed", "En-suite Shower", "Shared Sea-View Terrace", "Island Views", "A/C", "Smart TV"],
      isMaster: false,
      image: "/images/bedrooms/bedroom-2.jpg",
    },
    {
      name: "The Coastal Room",
      floor: "First Floor",
      size: "14.8 m²",
      bed: "King Bed (180 × 200 cm)",
      description:
        "Elegant and intimate, this room shares the first floor's generous terrace with panoramic coastal views. The en-suite bathroom and luxurious furnishings ensure a restful stay.",
      features: ["King Bed", "En-suite Shower", "Shared Sea-View Terrace", "Coastal Views", "A/C", "Smart TV"],
      isMaster: false,
      image: "/images/bedrooms/bedroom-3.jpg",
    },
    {
      name: "The Horizon Room",
      floor: "First Floor",
      size: "16 m²",
      bed: "King Bed (180 × 200 cm)",
      description:
        "A private covered terrace sets this first-floor room apart — your own quiet corner to watch the sun paint the Adriatic gold each evening. En-suite bathroom and refined furnishings throughout.",
      features: ["King Bed", "En-suite Shower", "Private Covered Terrace", "Sea & Sunset Views", "A/C", "Smart TV"],
      isMaster: false,
      image: "/images/bedrooms/bedroom-4.jpg",
    },
  ],

  // -------------------------------------------------------------------------
  // Location
  // -------------------------------------------------------------------------
  location_section: {
    headline: "Where the River Canyon Meets the Adriatic",
    description:
      "Omiš is one of Dalmatia's best-kept secrets — a storied pirate town cradled between the emerald Cetina River canyon and the sparkling Adriatic Sea. From Villa Bamm's hilltop perch, the ancient rooftops, distant islands, and Omiška Dinara peaks form a living panorama that changes with every hour of light.",
    distances: [
      { label: "Split Airport", value: "45 km", iconKey: "plane" },
      { label: "Nearest Beach", value: "3 km", iconKey: "anchor" },
      { label: "Omiš Centre", value: "3 km", iconKey: "pin" },
      { label: "Minimarket", value: "2 km", iconKey: "store" },
      { label: "Restaurants", value: "3 km", iconKey: "pin" },
      { label: "Cetina River", value: "3 km", iconKey: "waves" },
    ],
    attractions: [
      {
        name: "Diocletian's Palace, Split",
        description:
          "A UNESCO World Heritage Site — the 1,700-year-old Roman palace that forms the living heart of Croatia's second city.",
        distance: "29 km",
      },
      {
        name: "Cetina River Adventures",
        description:
          "Rafting, zip-lining, canyoning, and kayaking through one of Europe's most dramatic river canyons — all departing from Omiš.",
        distance: "3 km",
      },
      {
        name: "Biokovo Skywalk",
        description:
          "A glass-floored horseshoe viewpoint perched on a cliff edge above the Makarska Riviera, offering vertiginous views over the mid-Dalmatian islands.",
        distance: "60 km",
      },
      {
        name: "Island Hopping — Brač, Hvar & Vis",
        description:
          "Boat tours depart from Omiš harbour to some of the Adriatic's most celebrated islands, each with its own character and beaches.",
        distance: "By boat",
      },
      {
        name: "Makarska Riviera",
        description:
          "Renowned for its pristine pebble beaches — Brela, Baška Voda, and Makarska are all within easy reach for a day by the shore.",
        distance: "35 km",
      },
      {
        name: "Omiška Dinara Summit (Kula)",
        description:
          "An exhilarating trail from near the villa to the 863 m summit, rewarding hikers with sweeping views of the entire Dalmatian coast.",
        distance: "Trailhead nearby",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Reviews
  // -------------------------------------------------------------------------
  reviews: [
    {
      author: "Sarah & James",
      location: "London, United Kingdom",
      rating: 5,
      text: "We've stayed in luxury villas across the Mediterranean, but Villa Bamm is in a class of its own. The panoramic views from the pool are absolutely mesmerising — we'd spend hours just watching the light change over the islands. Every room is immaculate, the kitchen is a dream, and the privacy is unmatched. Already planning our return.",
      date: "August 2024",
      stayType: "Couple's Retreat",
    },
    {
      author: "Familie Fischer",
      location: "Munich, Germany",
      rating: 5,
      text: "Three generations, ten happy people, one unforgettable week. The children adored the pool and playground, the grandparents loved their morning coffee on the terrace, and the parents finally got to relax. The summer kitchen was perfect for big family dinners under the stars. Absolute perfection.",
      date: "July 2024",
      stayType: "Family Holiday",
    },
    {
      author: "Famille Moreau",
      location: "Paris, France",
      rating: 5,
      text: "From the moment we arrived, we knew this was special. The villa is even more beautiful than the photos — modern, spacious, and designed with real taste. The heated pool, the views, the fully equipped kitchen — nothing was missing. Omiš itself is a wonderful surprise, far less crowded than Split or Dubrovnik.",
      date: "June 2024",
      stayType: "Group of Friends",
    },
    {
      author: "The Hendersons",
      location: "Sydney, Australia",
      rating: 5,
      text: "Worth every cent and then some. We travelled halfway around the world and Villa Bamm exceeded every expectation. The master terrace alone is worth the trip — 70 square metres of pure bliss overlooking the sea. The villa is spotlessly clean, the beds are incredibly comfortable, and the location is perfect for exploring Dalmatia.",
      date: "September 2024",
      stayType: "Extended Family",
    },
  ],

  // -------------------------------------------------------------------------
  // FAQ
  // -------------------------------------------------------------------------
  faq: [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in is from 16:00 and check-out is by 10:00. Early check-in or late check-out may be arranged upon request, subject to availability.",
    },
    {
      question: "How many guests can Villa Bamm accommodate?",
      answer:
        "Villa Bamm comfortably accommodates up to 10 guests across 5 luxuriously appointed bedrooms, each with its own en-suite bathroom. A baby cot is also available on request.",
    },
    {
      question: "Is the pool heated? When is it available?",
      answer:
        "Yes, the private 36 m² pool is heated and features hydro-massage jets. The pool is available from 15 April to 15 October each year.",
    },
    {
      question: "How far is the villa from the beach and town centre?",
      answer:
        "The nearest beach, restaurants, and Omiš town centre are all approximately 3 km away — around a 5-minute drive. The villa is situated in the peaceful hills above the coast, so a car is recommended. Five private parking spaces are secured at the property.",
    },
    {
      question: "Is airport transfer available?",
      answer:
        "Split Airport is approximately 45 km away (around 40 minutes by car). Private airport transfers can be arranged through our concierge team upon request.",
    },
    {
      question: "Are pets allowed at Villa Bamm?",
      answer:
        "Unfortunately, pets are not permitted at Villa Bamm to ensure the comfort of all guests and maintain the condition of the property.",
    },
    {
      question: "Is a security deposit required?",
      answer:
        "Yes, a fully refundable security deposit of €400 is collected upon arrival and returned at the end of your stay, provided no damage has occurred.",
    },
    {
      question: "What additional services are available?",
      answer:
        "We offer a curated selection of premium add-on experiences: in-villa grocery delivery, private chef dinners (from romantic suppers to family feasts), professional in-villa massage, guided sailing excursions, and island-hopping boat tours along the Dalmatian coast.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "We offer flexible cancellation terms. Please enquire at the time of booking for the specific cancellation policy applicable to your dates.",
    },
  ],

  // -------------------------------------------------------------------------
  // Pricing (2026 Season)
  // -------------------------------------------------------------------------
  pricing: [
    { period: "30 May – 12 Jun", perNight: 471, perWeek: 3297, minStay: "3 nights" },
    { period: "13 Jun – 19 Jun", perNight: 514, perWeek: 3598, minStay: "7 nights" },
    { period: "20 Jun – 3 Jul", perNight: 586, perWeek: 4102, minStay: "7 nights" },
    { period: "4 Jul – 17 Jul", perNight: 671, perWeek: 4697, minStay: "7 nights" },
    { period: "18 Jul – 21 Aug", perNight: 771, perWeek: 5397, minStay: "7 nights" },
    { period: "22 Aug – 28 Aug", perNight: 671, perWeek: 4697, minStay: "7 nights" },
    { period: "29 Aug – 4 Sep", perNight: 586, perWeek: 4102, minStay: "7 nights" },
    { period: "5 Sep – 11 Sep", perNight: 514, perWeek: 3598, minStay: "7 nights" },
    { period: "12 Sep – 18 Sep", perNight: 471, perWeek: 3297, minStay: "6 nights" },
    { period: "19 Sep – 2 Oct", perNight: 443, perWeek: 3101, minStay: "5 nights" },
    { period: "3 Oct – 31 Oct", perNight: 400, perWeek: 2800, minStay: "5 nights" },
  ],

  // -------------------------------------------------------------------------
  // Extra Services
  // -------------------------------------------------------------------------
  extraServices: [
    {
      name: "In-Villa Grocery Delivery",
      description: "Have your fridge stocked before you arrive — fresh local produce, wines, and essentials delivered to the villa at your chosen time.",
      iconKey: "shoppingbag",
    },
    {
      name: "Private Chef Experience",
      description: "From intimate candlelit dinners to lavish family feasts, our chef brings the finest Dalmatian cuisine to your table.",
      iconKey: "chefhat",
    },
    {
      name: "In-Villa Spa & Massage",
      description: "Unwind with a professional massage on your private terrace — the ultimate indulgence with the sea as your backdrop.",
      iconKey: "sparkles",
    },
    {
      name: "Private Sailing & Boat Tours",
      description: "Explore the Adriatic aboard a private vessel — sail to hidden coves, visit islands, or simply chase the sunset.",
      iconKey: "anchor",
    },
  ],

  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------
  navigation: [
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Suites", href: "#bedrooms" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],

  // -------------------------------------------------------------------------
  // Contact
  // -------------------------------------------------------------------------
  contact: {
    email: "booking@villabamm.com",
    phone: "+385 xx xxx xxxx",
    instagram: "@villabamm",
    bookingUrl: "https://feriehome.com/en/villas-croatia/omis/villa-bamm",
  },

  // -------------------------------------------------------------------------
  // Policies
  // -------------------------------------------------------------------------
  policies: {
    checkIn: "16:00",
    checkOut: "10:00",
    securityDeposit: "€400",
    petsAllowed: false,
    poolSeason: "15 April – 15 October",
    cancellation: "Flexible — enquire at time of booking.",
  },
};
