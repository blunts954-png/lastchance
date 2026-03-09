import { notFound } from "next/navigation";
import { AreaGrid } from "@/components/AreaGrid";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
import { getInventoryBySlug } from "@/data/inventory";
import { getLandingBySlug, landingPages } from "@/data/landings";
import { getServiceAreaBySlug, serviceAreas } from "@/data/serviceAreas";
import { buildBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return landingPages.map((landing) => ({
    landingSlug: landing.slug
  }));
}

export function generateMetadata({ params }) {
  const landing = getLandingBySlug(params.landingSlug);

  if (!landing) {
    return {};
  }

  return {
    title: landing.title,
    description: landing.summary
  };
}

export default function LandingPage({ params }) {
  const landing = getLandingBySlug(params.landingSlug);

  if (!landing) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: landing.title, path: `/${landing.slug}` }
  ]);

  if (landing.type === "area") {
    const area = getServiceAreaBySlug(landing.areaSlug);

    if (!area) {
      notFound();
    }

    const items = [
      "lg-refrigerator-open-box-bakersfield",
      "whirlpool-washer-scratch-dent-bakersfield",
      "samsung-dryer-open-box-bakersfield"
    ]
      .map(getInventoryBySlug)
      .filter(Boolean);

    return (
      <main className="page-main">
        <SchemaScript schema={breadcrumbSchema} />

        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="section-kicker">{area.anchor}</p>
              <h1>{landing.title}</h1>
              <p>{landing.summary}</p>
            </div>
            <div className="content-panel">
              <SectionHeading kicker="Drive time" title={area.driveTime} />
              <p>{area.directionsBlurb}</p>
              <p>
                <strong>Best fit:</strong> {area.shopperFit}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell two-up">
            <div className="content-panel">
              <SectionHeading kicker="Neighborhood relevance" title={`Why ${area.name} traffic matters`} />
              <p>{area.summary}</p>
              <ul className="bullet-list">
                {area.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood}>{neighborhood}</li>
                ))}
              </ul>
            </div>
            <div className="content-panel">
              <SectionHeading kicker="Visit intent" title="What this page should make easy" />
              <ul className="bullet-list">
                <li>Confirm an item before leaving {area.shortName}.</li>
                <li>Understand pickup and final-sale expectations before driving.</li>
                <li>Route into exact refrigerator, washer, or dryer pages instead of guessing from social posts.</li>
              </ul>
              <a href={business.directionsUrl} className="text-link">
                Get directions to White Lane
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              kicker="Inventory highlights"
              title={`Objects likely to convert ${area.name} searchers`}
              intro="Area pages should stay close to appliance objects because that is the strongest local commercial intent cluster."
            />
            <InventoryGrid items={items} />
          </div>
        </section>

        <CtaBand
          title={`Make ${area.name} shoppers comfortable before they drive`}
          body="Drive time, neighborhood references, and exact object pages are what turn a local landing page into a real GEO asset."
          itemLabel={area.name}
        />
      </main>
    );
  }

  const items = landing.relatedInventory.map(getInventoryBySlug).filter(Boolean);
  const relatedAreas = landing.relatedAreas
    .map((areaSlug) => getServiceAreaBySlug(areaSlug))
    .filter(Boolean);

  return (
    <main className="page-main">
      <SchemaScript schema={breadcrumbSchema} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Pillar page</p>
            <h1>{landing.title}</h1>
            <p>{landing.summary}</p>
          </div>
          <div className="content-panel">
            <SectionHeading kicker="Why this route exists" title="This is the commercial search layer" />
            <p>
              The page exists to win a tight local query cluster, answer objections cleanly, and
              hand the shopper into exact inventory or a store visit.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="card-grid">
            {landing.sections.map((section) => (
              <article key={section.heading} className="card">
                <div className="card__eyebrow">
                  <span className="chip chip--ghost">Strategy</span>
                  <span>{landing.title}</span>
                </div>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Objects"
            title="Representative inventory that supports the query"
            intro="Pillar pages should prove the category with actual objects rather than generic promises."
          />
          <InventoryGrid items={items} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Related geographies"
            title="Nearby areas that reinforce the local cluster"
            intro="Pillar pages become stronger when they hand off into neighborhood and town-specific routes."
          />
          <AreaGrid areas={relatedAreas} />
        </div>
      </section>

      <CtaBand
        title="Pillar pages should feel commercial, not informational"
        body="The goal is not generic traffic. The goal is high-intent local traffic that moves into objects, directions, and reserve requests."
        itemLabel={landing.title}
      />
    </main>
  );
}
