import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
import { getInventoryBySlug } from "@/data/inventory";
import { getTruckArrivalBySlug, truckArrivals } from "@/data/truckArrivals";
import { buildBreadcrumbSchema, buildEventSchema } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export function generateStaticParams() {
  return truckArrivals.map((event) => ({
    slug: event.slug
  }));
}

export function generateMetadata({ params }) {
  const event = getTruckArrivalBySlug(params.slug);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.summary
  };
}

export default function TruckArrivalPage({ params }) {
  const event = getTruckArrivalBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const featuredItems = event.featuredInventory.map(getInventoryBySlug).filter(Boolean);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Truck Arrivals", path: "/truck-arrivals" },
    { name: event.title, path: `/truck-arrivals/${event.slug}` }
  ]);

  return (
    <main className="page-main">
      <SchemaScript schema={buildEventSchema(event, business)} />
      <SchemaScript schema={breadcrumbSchema} />

      <section className="section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">{formatDate(event.date)}</p>
            <h1>{event.title}</h1>
            <p>{event.summary}</p>
          </div>
          <div className="content-panel">
            <SectionHeading kicker="Why it matters" title="Freshness that search engines can index" />
            <ul className="bullet-list">
              {event.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Featured inventory"
            title="Representative objects tied to this arrival"
            intro="Truck pages should point directly at exact inventory objects or category hubs so the freshness signal compounds."
          />
          <InventoryGrid items={featuredItems} />
        </div>
      </section>

      <CtaBand
        title="Truck pages should create urgency without faking scarcity"
        body="The real job is to show what kind of inventory arrived, who it fits, and how to claim it fast."
        itemLabel={event.title}
      />
    </main>
  );
}
