const inventory = [
  {
    slug: "lg-refrigerator-open-box-bakersfield",
    title: "LG Counter-Depth Refrigerator",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "LG",
    model: "LFXS26973S",
    condition: "Open-Box",
    price: 699,
    retail: 1499,
    availability: "Available now",
    locationTag: "White Lane floor",
    pickup: "Pickup preferred",
    summary: "Counter-depth stainless refrigerator with verified shelves and clear condition labeling.",
    highlights: [
      "Counter-depth fit for tighter kitchens",
      "Open-box condition with visible cosmetic notes",
      "Same-day pickup or local delivery confirmation in-store"
    ],
    inspectionChecklist: [
      "Verify doors seal cleanly",
      "Check shelves, bins, and handles",
      "Confirm dimensions before loading"
    ]
  },
  {
    slug: "whirlpool-washer-scratch-dent-bakersfield",
    title: "Whirlpool Top Load Washer",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "Whirlpool",
    model: "WTW4957PW",
    condition: "Scratch-and-Dent",
    price: 329,
    retail: 679,
    availability: "Available now",
    locationTag: "Appliance row",
    pickup: "Pickup only",
    summary: "Value-focused washer with cosmetic wear priced for budget-conscious families.",
    highlights: [
      "Scratch-and-dent savings without hiding condition",
      "Popular family-size top-load format",
      "Strong fit for Bakersfield rental turnovers"
    ],
    inspectionChecklist: [
      "Check lid alignment and drum movement",
      "Confirm hoses and power cord",
      "Review cosmetic dents before payment"
    ]
  },
  {
    slug: "samsung-dryer-open-box-bakersfield",
    title: "Samsung Electric Dryer",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "Samsung",
    model: "DVE45T6000W",
    condition: "Open-Box",
    price: 349,
    retail: 749,
    availability: "Limited availability",
    locationTag: "Appliance row",
    pickup: "Pickup only",
    summary: "Open-box front-load dryer positioned for same-day pickup and fast turnover.",
    highlights: [
      "Front-load dryer for matching laundry sets",
      "Open-box savings versus retail floor models",
      "Limited quantity item"
    ],
    inspectionChecklist: [
      "Confirm dents, scratches, and accessories",
      "Check door seal and hinge",
      "Verify vent connection type"
    ]
  },
  {
    slug: "ge-range-scratch-dent-bakersfield",
    title: "GE Freestanding Electric Range",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "GE",
    model: "JB645RKSS",
    condition: "Scratch-and-Dent",
    price: 399,
    retail: 799,
    availability: "Available now",
    locationTag: "Kitchen line",
    pickup: "Pickup preferred",
    summary: "Full-size range with cosmetic dents priced well below big-box clearance.",
    highlights: [
      "Full kitchen replacement value",
      "Scratch-and-dent discount for utility-focused buyers",
      "Good fit for landlords and quick remodels"
    ],
    inspectionChecklist: [
      "Check cooktop surface and knobs",
      "Open oven door and inspect racks",
      "Verify outlet compatibility"
    ]
  },
  {
    slug: "frigidaire-microwave-new-bakersfield",
    title: "Frigidaire Countertop Microwave",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "Frigidaire",
    model: "FFCM1134LB",
    condition: "New",
    price: 89,
    retail: 149,
    availability: "Available now",
    locationTag: "Small appliance endcap",
    pickup: "Pickup only",
    summary: "Compact microwave priced for dorms, apartments, and fast move-ins.",
    highlights: [
      "New condition and easy same-day loadout",
      "Small-footprint appliance for apartment kitchens",
      "Fast impulse-purchase price point"
    ],
    inspectionChecklist: [
      "Verify original accessories",
      "Inspect box corners and outer shell",
      "Confirm wattage for intended use"
    ]
  },
  {
    slug: "samsung-side-by-side-fridge-bakersfield",
    title: "Samsung Side-by-Side Refrigerator",
    category: "appliances",
    categoryLabel: "Appliances",
    brand: "Samsung",
    model: "RS27T5200SR",
    condition: "Scratch-and-Dent",
    price: 549,
    retail: 1199,
    availability: "Available now",
    locationTag: "Front appliance wall",
    pickup: "Pickup preferred",
    summary: "Large-capacity side-by-side refrigerator for shoppers hunting big-brand value.",
    highlights: [
      "Family-size storage capacity",
      "Visible cosmetic notes rather than vague condition",
      "High click potential for local fridge searches"
    ],
    inspectionChecklist: [
      "Confirm water line connections",
      "Check shelves and bins",
      "Measure door clearance at home"
    ]
  },
  {
    slug: "ashley-sectional-open-box-bakersfield",
    title: "Ashley 4-Piece Sectional",
    category: "furniture",
    categoryLabel: "Furniture",
    brand: "Ashley",
    model: "Altari 87213",
    condition: "Open-Box",
    price: 599,
    retail: 1299,
    availability: "Available now",
    locationTag: "Furniture showroom",
    pickup: "Pickup preferred",
    summary: "Neutral-toned sectional built for renters, first apartments, and family rooms.",
    highlights: [
      "Large seating at a liquidation price",
      "Neutral upholstery for broad appeal",
      "Best for shoppers who bring measurements"
    ],
    inspectionChecklist: [
      "Inspect fabric, seams, and feet",
      "Confirm all pieces are present",
      "Measure doorway and room fit"
    ]
  },
  {
    slug: "coaster-dining-set-bakersfield",
    title: "Coaster 6-Seat Dining Set",
    category: "furniture",
    categoryLabel: "Furniture",
    brand: "Coaster",
    model: "180121",
    condition: "Open-Box",
    price: 349,
    retail: 749,
    availability: "Limited availability",
    locationTag: "Furniture showroom",
    pickup: "Pickup only",
    summary: "Compact six-seat dining set that works for apartments and starter homes.",
    highlights: [
      "Six-seat setup for budget dining rooms",
      "Open-box value and quick turnover",
      "Limited quantity floor piece"
    ],
    inspectionChecklist: [
      "Verify hardware and chair count",
      "Inspect tabletop corners",
      "Measure room width for chair clearance"
    ]
  },
  {
    slug: "queen-bed-frame-bakersfield",
    title: "Queen Upholstered Bed Frame",
    category: "furniture",
    categoryLabel: "Furniture",
    brand: "Lifestyle Solutions",
    model: "LUC-QB-ASH",
    condition: "Scratch-and-Dent",
    price: 189,
    retail: 429,
    availability: "Available now",
    locationTag: "Bedroom row",
    pickup: "Pickup only",
    summary: "Entry-point queen bed frame with cosmetic wear and a strong retail gap.",
    highlights: [
      "Budget bedroom upgrade",
      "Cosmetic wear called out before checkout",
      "Good item for first-home and rental setups"
    ],
    inspectionChecklist: [
      "Verify side rails and slats",
      "Inspect headboard fabric",
      "Confirm box dimensions for transport"
    ]
  },
  {
    slug: "patio-set-bakersfield",
    title: "4-Piece Patio Conversation Set",
    category: "furniture",
    categoryLabel: "Furniture",
    brand: "Allen + Roth",
    model: "A42301",
    condition: "New",
    price: 279,
    retail: 599,
    availability: "Available now",
    locationTag: "Seasonal furniture zone",
    pickup: "Pickup preferred",
    summary: "Seasonal patio seating timed for warm Bakersfield weekends and backyard refreshes.",
    highlights: [
      "Strong seasonal search demand",
      "New condition with immediate takeaway appeal",
      "Good candidate for customer-home photo content"
    ],
    inspectionChecklist: [
      "Confirm cushion count",
      "Check frame finish",
      "Measure vehicle cargo space"
    ]
  },
  {
    slug: "dewalt-combo-kit-bakersfield",
    title: "DeWalt 5-Tool Combo Kit",
    category: "tools-misc",
    categoryLabel: "Tools & Misc",
    brand: "DeWalt",
    model: "DCK594P2",
    condition: "Open-Box",
    price: 249,
    retail: 499,
    availability: "Available now",
    locationTag: "Tool cage",
    pickup: "Pickup only",
    summary: "Contractor-friendly combo kit with batteries and charger priced for fast conversion.",
    highlights: [
      "Big-brand power tool value",
      "Open-box savings for pros and homeowners",
      "Easy add-on for truck-day shoppers"
    ],
    inspectionChecklist: [
      "Check battery count and charger",
      "Inspect carrying bag and manuals",
      "Verify tool list matches the box"
    ]
  },
  {
    slug: "milwaukee-tool-chest-bakersfield",
    title: "Milwaukee Rolling Tool Chest",
    category: "tools-misc",
    categoryLabel: "Tools & Misc",
    brand: "Milwaukee",
    model: "48-22-8428",
    condition: "Scratch-and-Dent",
    price: 99,
    retail: 229,
    availability: "Available now",
    locationTag: "Tool aisle",
    pickup: "Pickup only",
    summary: "Heavy-duty rolling tool storage with cosmetic wear and wide price separation from retail.",
    highlights: [
      "High-perceived-value tool storage item",
      "Scratch-and-dent tag lowers hesitation",
      "Strong for contractor and garage searches"
    ],
    inspectionChecklist: [
      "Check wheel movement",
      "Inspect latches and handle",
      "Confirm tray inserts are present"
    ]
  }
];

export { inventory };

export function getInventoryBySlug(slug) {
  return inventory.find((item) => item.slug === slug);
}
