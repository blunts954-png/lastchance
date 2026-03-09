export const truckArrivals = [
  {
    slug: "truck-arrival-appliances-bakersfield-march-2026",
    title: "Truck Arrival: Appliance Drop for Bakersfield",
    date: "2026-03-14",
    summary: "Refrigerators, laundry pairs, ranges, and microwaves arriving for the White Lane floor with same-day pickup opportunities.",
    highlights: [
      "LG, Samsung, Whirlpool, and GE floor hits",
      "Fresh scratch-and-dent and open-box tags",
      "Best day for repeat shoppers and landlords"
    ],
    featuredInventory: [
      "lg-refrigerator-open-box-bakersfield",
      "whirlpool-washer-scratch-dent-bakersfield",
      "samsung-dryer-open-box-bakersfield"
    ]
  },
  {
    slug: "truck-arrival-furniture-bakersfield-march-2026",
    title: "Truck Arrival: Furniture Reset for Bakersfield",
    date: "2026-03-21",
    summary: "Sectionals, dining sets, bed frames, and patio pieces refreshing the showroom for spring move-ins.",
    highlights: [
      "Sectionals and dining for same-weekend pickup",
      "Strong photo-content opportunity for social posts",
      "Ideal week for apartment and rental refreshes"
    ],
    featuredInventory: [
      "ashley-sectional-open-box-bakersfield",
      "coaster-dining-set-bakersfield",
      "patio-set-bakersfield"
    ]
  },
  {
    slug: "truck-arrival-tools-bakersfield-april-2026",
    title: "Truck Arrival: Tools and Garage Deals",
    date: "2026-04-04",
    summary: "Tool combos, rolling storage, patio gear, and jobsite-friendly closeouts landing for early April traffic.",
    highlights: [
      "Open-box tool kits",
      "Garage storage and home-improvement value buys",
      "Good week for contractors and weekend projects"
    ],
    featuredInventory: [
      "dewalt-combo-kit-bakersfield",
      "milwaukee-tool-chest-bakersfield"
    ]
  },
  {
    slug: "truck-arrival-refrigerators-bakersfield-april-2026",
    title: "Truck Arrival: Refrigerator Week in Bakersfield",
    date: "2026-04-18",
    summary: "Counter-depth, side-by-side, and replacement-ready refrigerators spotlighted for Bakersfield kitchen shoppers.",
    highlights: [
      "Refrigerator-heavy floor mix",
      "Good week for scratch-and-dent kitchen upgrades",
      "Strong search intent around White Lane fridge deals"
    ],
    featuredInventory: [
      "lg-refrigerator-open-box-bakersfield",
      "samsung-side-by-side-fridge-bakersfield"
    ]
  },
  {
    slug: "truck-arrival-laundry-bakersfield-may-2026",
    title: "Truck Arrival: Laundry Deals Under Control",
    date: "2026-05-09",
    summary: "Washers and dryers priced for same-day replacement buyers looking for working-room value rather than showroom markup.",
    highlights: [
      "Washer and dryer replacement week",
      "Strong price gap versus retail clearance",
      "Useful for move-ins and rental turnovers"
    ],
    featuredInventory: [
      "whirlpool-washer-scratch-dent-bakersfield",
      "samsung-dryer-open-box-bakersfield"
    ]
  },
  {
    slug: "truck-arrival-summer-patio-bakersfield-june-2026",
    title: "Truck Arrival: Summer Patio and Outdoor Week",
    date: "2026-06-06",
    summary: "Outdoor seating, grill-adjacent furniture, and backyard pieces timed for Bakersfield summer shopping.",
    highlights: [
      "Seasonal patio demand",
      "Strong customer-photo potential for the homes gallery",
      "Easy cross-sell with small appliances and fans"
    ],
    featuredInventory: [
      "patio-set-bakersfield",
      "frigidaire-microwave-new-bakersfield"
    ]
  }
];

export function getTruckArrivalBySlug(slug) {
  return truckArrivals.find((event) => event.slug === slug);
}
