export const serviceAreas = [
  {
    slug: "southwest-bakersfield",
    name: "Southwest Bakersfield",
    shortName: "Southwest",
    driveTime: "8-12 minutes",
    anchor: "Valley Plaza Mall",
    summary: "White Lane access makes the store a fast stop for apartment moves, kitchen replacements, and same-day furniture pickups in Southwest Bakersfield.",
    neighborhoods: ["Silver Creek", "Stockdale West", "Campus Park"],
    directionsBlurb: "Head east on White Lane and turn in near Grissom Street. Weekday mornings usually mean the easiest loadout.",
    shopperFit: "Strong match for fridge, washer, sectional, and patio searches."
  },
  {
    slug: "oildale",
    name: "Oildale",
    shortName: "Oildale",
    driveTime: "18-24 minutes",
    anchor: "North Chester corridor",
    summary: "Oildale shoppers often search for value-first refrigerators, washers, and utility furniture without paying big-box clearance prices.",
    neighborhoods: ["North Bakersfield", "Airport Drive", "Olive Drive"],
    directionsBlurb: "Take CA-99 south toward White Lane, then head west for the final approach to the store.",
    shopperFit: "High intent for affordable appliances and scratch-and-dent inventory."
  },
  {
    slug: "rosedale",
    name: "Rosedale",
    shortName: "Rosedale",
    driveTime: "17-22 minutes",
    anchor: "Allen Road",
    summary: "Rosedale buyers tend to over-index on open-box kitchen appliances, patio sets, and family-room furniture with same-day pickup.",
    neighborhoods: ["Liberty High area", "Brimhall", "Olive Drive"],
    directionsBlurb: "Use CA-99 or Stockdale Highway toward White Lane depending on traffic and trailer size.",
    shopperFit: "Best for open-box refrigerators, sectionals, and outdoor furniture."
  },
  {
    slug: "east-bakersfield",
    name: "East Bakersfield",
    shortName: "East Bakersfield",
    driveTime: "19-25 minutes",
    anchor: "Bakersfield College",
    summary: "East Bakersfield searches frequently lean toward low-ticket appliances, microwaves, bed frames, and move-in furniture bundles.",
    neighborhoods: ["Baker Street", "College Heights", "Niles District"],
    directionsBlurb: "Take Brundage Lane or Hwy 58 to White Lane depending on your starting point and cargo size.",
    shopperFit: "Good fit for apartments, first homes, and utility-price appliance replacements."
  },
  {
    slug: "greenacres",
    name: "Greenacres",
    shortName: "Greenacres",
    driveTime: "10-14 minutes",
    anchor: "Ming Avenue",
    summary: "Greenacres shoppers are close enough to treat the store like a recurring inventory stop, especially for washer, dryer, and dining set hunts.",
    neighborhoods: ["Ming Avenue", "Wilson Road", "Ashe Road"],
    directionsBlurb: "Quick access via Ming or White Lane keeps this location practical for repeat truck-day visits.",
    shopperFit: "Repeat buyers, landlords, and deal hunters."
  },
  {
    slug: "seven-oaks",
    name: "Seven Oaks",
    shortName: "Seven Oaks",
    driveTime: "12-16 minutes",
    anchor: "Grand Island Village",
    summary: "Seven Oaks visitors typically care about clean presentation, exact dimensions, and the spread between retail and liquidation pricing.",
    neighborhoods: ["River Walk", "Old River Road", "Grand Island"],
    directionsBlurb: "Use Buena Vista or Old River toward White Lane. Bring measurements before you come for larger furniture pieces.",
    shopperFit: "Best for better-condition open-box appliances and controlled-showroom furniture."
  },
  {
    slug: "lamont",
    name: "Lamont",
    shortName: "Lamont",
    driveTime: "20-28 minutes",
    anchor: "Main Street Lamont",
    summary: "Lamont shoppers tend to search for affordable fridges, laundry, and quick replacement furniture that can be loaded the same day.",
    neighborhoods: ["Di Giorgio", "Arvin outskirts", "Weedpatch"],
    directionsBlurb: "Take CA-184 or Hwy 58 west, then connect to White Lane for the last stretch.",
    shopperFit: "Budget-first appliance and furniture replacements."
  },
  {
    slug: "delano",
    name: "Delano",
    shortName: "Delano",
    driveTime: "38-48 minutes",
    anchor: "Downtown Delano",
    summary: "Delano searches are worth capturing because shoppers making a longer drive usually arrive ready to buy large-ticket appliances or whole-room sets.",
    neighborhoods: ["Cecil Avenue", "Highway 99 corridor", "north Delano"],
    directionsBlurb: "Head south on CA-99, exit near White Lane, and confirm inventory before driving down.",
    shopperFit: "Long-drive buyers who want confirmed availability first."
  },
  {
    slug: "shafter",
    name: "Shafter",
    shortName: "Shafter",
    driveTime: "26-34 minutes",
    anchor: "Shafter Avenue",
    summary: "Shafter traffic tends to convert when the site answers the exact question: what appliance or furniture deal is actually on the floor right now?",
    neighborhoods: ["North Shafter", "Famoso approach", "airport corridor"],
    directionsBlurb: "Use CA-99 south and text ahead if you are coming for a specific refrigerator or washer.",
    shopperFit: "Availability-driven appliance shoppers."
  },
  {
    slug: "arvin",
    name: "Arvin",
    shortName: "Arvin",
    driveTime: "28-36 minutes",
    anchor: "Bear Mountain Boulevard",
    summary: "Arvin search demand leans toward washer, dryer, and kitchen replacement deals with clear rules and minimal surprises.",
    neighborhoods: ["Comanche Point", "Old town Arvin", "south Bakersfield edge"],
    directionsBlurb: "Take Bear Mountain or Hwy 223 west, then connect toward White Lane.",
    shopperFit: "Utility-value shoppers who need clarity before driving."
  },
  {
    slug: "wasco",
    name: "Wasco",
    shortName: "Wasco",
    driveTime: "40-50 minutes",
    anchor: "7th Street Wasco",
    summary: "Wasco buyers rarely browse casually; they respond better to exact inventory pages, truck pages, and fast contact buttons.",
    neighborhoods: ["Rose Avenue", "F Street", "Scofield"],
    directionsBlurb: "The cleanest route is CA-99 south. Confirm the item is still available before you leave town.",
    shopperFit: "Longer-distance shoppers with strong purchase intent."
  },
  {
    slug: "tehachapi",
    name: "Tehachapi",
    shortName: "Tehachapi",
    driveTime: "48-60 minutes",
    anchor: "Downtown Tehachapi",
    summary: "Tehachapi traffic is valuable when high-ticket appliances are in stock because the buyer is looking for a deal worth the drive.",
    neighborhoods: ["Golden Hills", "Downtown", "Old Town"],
    directionsBlurb: "Follow Hwy 58 west and use the reserve link before heading down for a single-item purchase.",
    shopperFit: "High-intent buyers for refrigerators, ranges, and sectionals."
  }
];

export function getServiceAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}
