import { serviceAreas } from "@/data/serviceAreas";

export const pillarLandings = [
  {
    slug: "appliance-liquidation-bakersfield",
    type: "pillar",
    title: "Appliance Liquidation in Bakersfield, CA",
    summary: "A search-first landing page for shoppers who want refrigerators, washers, dryers, ranges, and microwaves at liquidation pricing without the usual guesswork.",
    sections: [
      {
        heading: "Why appliance liquidation wins when the rules are clear",
        body: "Most shoppers do not mind cosmetic wear if the price gap is real and the exact condition is obvious. That is the opportunity here. Instead of pretending to be a polished ecommerce appliance chain, this site leans into honest deal math: model number, condition tier, price, pickup expectations, and a plain-language inspection flow."
      },
      {
        heading: "What Bakersfield appliance buyers actually search",
        body: "They search by object, not by brand story. Cheap refrigerator Bakersfield. Washer and dryer deals Bakersfield. Scratch-and-dent appliances near me. That is why this architecture promotes object-level inventory pages and not just a single generic category page."
      },
      {
        heading: "How this page supports store-floor trust",
        body: "The right liquidation message is disciplined, not flashy. Publish the all-sales-final policy early, show the condition tiers visually, and use real inventory examples so the customer arrives knowing exactly how the process works."
      }
    ],
    relatedAreas: ["oildale", "rosedale", "lamont", "delano"],
    relatedInventory: [
      "lg-refrigerator-open-box-bakersfield",
      "whirlpool-washer-scratch-dent-bakersfield",
      "samsung-side-by-side-fridge-bakersfield"
    ]
  },
  {
    slug: "discount-furniture-outlet-bakersfield",
    type: "pillar",
    title: "Discount Furniture Outlet in Bakersfield",
    summary: "Controlled-showroom messaging for sectionals, dining sets, bed frames, patio pieces, and fast-turn furniture deals.",
    sections: [
      {
        heading: "Discount furniture works when the site shows restraint",
        body: "Furniture buyers are more skeptical than tool buyers because size, condition, and presentation matter more. This landing page answers those concerns by emphasizing room-fit planning, same-day pickup, and exact-condition merchandising instead of vague discount hype."
      },
      {
        heading: "A better frame than 'cheap furniture'",
        body: "The store should sound like a disciplined outlet, not a random warehouse. That means clean cards, measured language, and side-by-side value framing against big-box retail rather than noisy countdown promotions."
      },
      {
        heading: "Content that keeps this page fresh",
        body: "Truck-arrival pages, neighborhood customer-home submissions, and weekly couch or patio roundups feed the local furniture cluster over time. Search engines reward that freshness when internal links stay tight."
      }
    ],
    relatedAreas: ["seven-oaks", "greenacres", "southwest-bakersfield"],
    relatedInventory: [
      "ashley-sectional-open-box-bakersfield",
      "coaster-dining-set-bakersfield",
      "patio-set-bakersfield"
    ]
  },
  {
    slug: "scratch-and-dent-refrigerators-bakersfield",
    type: "pillar",
    title: "Scratch-and-Dent Refrigerators in Bakersfield",
    summary: "Exact-match search landing for shoppers comparing cosmetic wear against price relief.",
    sections: [
      {
        heading: "The search intent is already commercial",
        body: "Anyone searching scratch-and-dent refrigerators in Bakersfield is not at the awareness stage. They are comparing risk versus savings. The page should therefore remove ambiguity fast: what condition means, what to inspect, and which refrigerator examples are on the floor."
      },
      {
        heading: "Use proof, not reassurance",
        body: "Searchers trust process more than slogans. Show a refrigerator checklist, show dimensions, show model numbers, and show the retail gap. That makes the offer feel reasoned instead of improvised."
      },
      {
        heading: "How this page helps review recovery",
        body: "Rough reviews around bad appliance experiences often come from expectation mismatch. A page like this reduces mismatch by telling the customer exactly how to evaluate the item before it leaves the store."
      }
    ],
    relatedAreas: ["oildale", "delano", "wasco", "tehachapi"],
    relatedInventory: [
      "lg-refrigerator-open-box-bakersfield",
      "samsung-side-by-side-fridge-bakersfield"
    ]
  },
  {
    slug: "washer-dryer-deals-bakersfield",
    type: "pillar",
    title: "Washer and Dryer Deals in Bakersfield",
    summary: "A conversion-focused landing page for urgent laundry replacements and budget-first move-ins.",
    sections: [
      {
        heading: "Laundry buyers are urgency buyers",
        body: "Washer and dryer shoppers are often replacing a broken unit now, not browsing for fun. This page earns those clicks by surfacing exact inventory, price bands, and the reserve flow immediately."
      },
      {
        heading: "Short answers work best here",
        body: "Does it fit my hookups? Can I pick it up today? Is it tested? Is it open-box or scratch-and-dent? Those are voice-search and AI-answer questions, which is why the page uses direct response blocks rather than decorative filler."
      },
      {
        heading: "Local SEO compounding effect",
        body: "Laundry content can support area pages, inventory objects, and truck-arrival pages at the same time. That internal link cluster is how a local liquidation store starts to feel dominant in search instead of merely present."
      }
    ],
    relatedAreas: ["lamont", "shafter", "arvin", "greenacres"],
    relatedInventory: [
      "whirlpool-washer-scratch-dent-bakersfield",
      "samsung-dryer-open-box-bakersfield"
    ]
  }
];

export const areaLandings = serviceAreas.map((area) => ({
  slug: `liquidation-appliances-${area.slug}`,
  type: "area",
  title: `Liquidation Appliances Near ${area.name}`,
  summary: `${area.name} shoppers can reach Last Chance Store on White Lane in about ${area.driveTime}. This page is built for fridge, washer, dryer, and scratch-and-dent appliance searches tied to ${area.shortName}.`,
  areaSlug: area.slug
}));

export const landingPages = [...pillarLandings, ...areaLandings];

export function getLandingBySlug(slug) {
  return landingPages.find((landing) => landing.slug === slug);
}
