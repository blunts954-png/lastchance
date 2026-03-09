import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { inventory } from "@/data/inventory";
import { truckArrivals } from "@/data/truckArrivals";
import { formatDate } from "@/lib/site";

export const metadata = {
  title: "Deals of the Week",
  description: "Representative liquidation deals, truck-arrival freshness, and fast reserve flows for Bakersfield shoppers."
};

export default function DealsPage() {
  return (
    <main className="page-main">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Weekly freshness</p>
            <h1>Deals of the week built for fast-moving inventory.</h1>
            <p>
              This page is the lightweight sales engine: representative deals, truck-arrival
              signals, and short paths into reserve or WhatsApp conversations.
            </p>
          </div>
          <div className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual__copy">
                <strong>Instagram and Facebook reel slot</strong>
                <span>Lazily load real short-form deal content here once exact profiles are verified.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>Same day</strong>
                <span>Pickup-first positioning for urgent buyers</span>
              </div>
              <div className="metric">
                <strong>SMS</strong>
                <span>Truck alert list tied directly to new arrivals</span>
              </div>
              <div className="metric">
                <strong>Exact</strong>
                <span>Representative objects instead of broad hype</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Featured inventory"
            title="Representative deals on the floor now"
            intro="Not full ecommerce. Just enough object-level precision to convert high-intent search traffic."
          />
          <InventoryGrid items={inventory.slice(0, 6)} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Truck arrivals"
            title="Event-style freshness pages that keep search signals moving"
            intro="Each truck becomes a landing page, not just a social post. That keeps the site alive in both search and local discovery surfaces."
          />
          <div className="card-grid">
            {truckArrivals.map((event) => (
              <article key={event.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip">{formatDate(event.date)}</span>
                  <span>Truck arrival</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <Link href={`/truck-arrivals/${event.slug}`} className="text-link">
                  Open event page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Make truck alerts the default habit"
        body="People want first access to refrigerators, washers, sectionals, and tool kits before a truck gets picked over. This page is built to collect that intent immediately."
      />
    </main>
  );
}
