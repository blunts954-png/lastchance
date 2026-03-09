import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { truckArrivals } from "@/data/truckArrivals";
import { formatDate } from "@/lib/site";

export const metadata = {
  title: "Truck Arrivals",
  description: "Event-style truck arrival landing pages for Bakersfield liquidation inventory drops."
};

export default function TruckArrivalsIndexPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Event content"
            title="Truck-arrival pages that keep the site alive"
            intro="Liquidation is treasure hunting. These routes turn that energy into crawlable local content."
          />
          <div className="card-grid">
            {truckArrivals.map((event) => (
              <article key={event.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip">{formatDate(event.date)}</span>
                  <span>Event page</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <Link href={`/truck-arrivals/${event.slug}`} className="text-link">
                  View arrival page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
