export const categories = [
  {
    slug: "appliances",
    name: {
      en: "Appliances",
      es: "Electrodomesticos"
    },
    eyebrow: {
      en: "Most searched",
      es: "Lo mas buscado"
    },
    summary: {
      en: "Open-box refrigerators, washers, dryers, ranges, microwaves, and scratch-and-dent kitchen packages with price-first labeling.",
      es: "Refrigeradores, lavadoras, secadoras, estufas, microondas y paquetes de cocina open-box y scratch-and-dent con precios claros."
    },
    priceBand: "From $89 to $899",
    landingPath: "/appliance-liquidation-bakersfield",
    featuredTypes: ["Refrigerators", "Washers", "Dryers", "Ranges", "Microwaves"],
    buyingPoints: [
      "Check model number and measurements before loading.",
      "Match the condition tier to the risk you are willing to take.",
      "Ask about testing steps before you pay."
    ]
  },
  {
    slug: "furniture",
    name: {
      en: "Furniture",
      es: "Muebles"
    },
    eyebrow: {
      en: "High ticket",
      es: "Ticket alto"
    },
    summary: {
      en: "Sectionals, dining sets, bedroom pieces, accent chairs, and patio furniture priced for same-day pickup.",
      es: "Seccionales, comedores, recamaras, sillas decorativas y muebles de patio listos para llevar el mismo dia."
    },
    priceBand: "From $45 to $799",
    landingPath: "/discount-furniture-outlet-bakersfield",
    featuredTypes: ["Sectionals", "Dining sets", "Bed frames", "Recliners", "Patio furniture"],
    buyingPoints: [
      "Bring measurements for your room and doorway.",
      "Inspect fabric, seams, and legs before checkout.",
      "Ask staff whether a matching piece is still available."
    ]
  },
  {
    slug: "tools-misc",
    name: {
      en: "Tools & Misc",
      es: "Herramientas y mas"
    },
    eyebrow: {
      en: "Treasure hunt",
      es: "Busqueda de tesoros"
    },
    summary: {
      en: "Power tools, storage, patio gear, small appliances, shelf pulls, and weekly overstock finds that move fast.",
      es: "Herramientas electricas, organizacion, patio, pequenos electrodomesticos y sobrestock semanal que se vende rapido."
    },
    priceBand: "From $8 to $299",
    landingPath: "/deals-of-the-week",
    featuredTypes: ["Combo kits", "Tool storage", "Patio gear", "Small appliances", "Seasonal deals"],
    buyingPoints: [
      "Open boxes and verify accessories in-store.",
      "Grab limited-quantity deals early on truck days.",
      "Join the alert list if you are waiting on a brand."
    ]
  }
];

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}
