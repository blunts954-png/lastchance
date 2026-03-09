import { AreaGrid } from "@/components/AreaGrid";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
import { serviceAreas } from "@/data/serviceAreas";

export const metadata = {
  title: "Visit the Store",
  description: "Directions, map, NAP, and service-area context for Last Chance Store on White Lane in Bakersfield."
};

const directions = [
  {
    from: "Valley Plaza Mall",
    time: "6 minutes",
    note: "Head west on Ming or White Lane for the fastest surface-street run."
  },
  {
    from: "CSU Bakersfield",
    time: "14 minutes",
    note: "Take Stockdale Highway or Ming Avenue depending on time of day and trailer size."
  },
  {
    from: "Oildale",
    time: "20 minutes",
    note: "Use CA-99 south, then exit toward White Lane and confirm exact inventory first."
  },
  {
    from: "Lamont",
    time: "24 minutes",
    note: "Take CA-184 or Hwy 58 west, then connect to White Lane for the final stretch."
  }
];

export default function VisitPage() {
  return (
    <main className="page-main">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Canonical location signal</p>
            <h1>5301 White Lane, Bakersfield, CA 93309.</h1>
            <p>
              The footer, schema, map, and directory signals should all repeat the same name,
              address, and phone so the website becomes the canonical truth for the entity.
            </p>
            <div className="button-row">
              <a href={business.directionsUrl} className="button">
                Get directions
              </a>
              <a href={`tel:${business.phone.sms}`} className="button button--secondary">
                Call the store
              </a>
            </div>
          </div>
          <div className="map-panel">
            <iframe
              title="Last Chance Store map"
              src="https://www.google.com/maps?q=5301+White+Lane+Bakersfield+CA+93309&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading kicker="NAP" title="Locked business identity" />
            <p>
              <strong>{business.name}</strong>
              <br />
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
              <br />
              <a href={`tel:${business.phone.sms}`}>{business.phone.display}</a>
            </p>
            <p>{business.hoursNote}</p>
          </div>

          <div className="content-panel">
            <SectionHeading kicker="Directions" title="Landmark-driven route hints" />
            <ul className="bullet-list">
              {directions.map((item) => (
                <li key={item.from}>
                  <strong>{item.from}:</strong> {item.time}. {item.note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Service areas"
            title="Areas we serve around Bakersfield"
            intro="Every one of these neighborhoods and nearby towns can support its own micro-location landing route."
          />
          <AreaGrid areas={serviceAreas} />
        </div>
      </section>

      <CtaBand
        title="Use the reserve flow before making a long drive"
        body="Service-area pages and inventory pages work best together when the shopper can confirm an item before leaving Oildale, Delano, Lamont, or Tehachapi."
      />
    </main>
  );
}
