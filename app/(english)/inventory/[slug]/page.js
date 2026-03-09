import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
import { getInventoryBySlug, inventory } from "@/data/inventory";
import { buildBreadcrumbSchema, buildProductSchema } from "@/lib/seo";
import { formatCurrency } from "@/lib/site";

export function generateStaticParams() {
  return inventory.map((item) => ({
    slug: item.slug
  }));
}

export function generateMetadata({ params }) {
  const item = getInventoryBySlug(params.slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} in Bakersfield`,
    description: `${item.summary} ${item.condition} inventory at Last Chance Store on White Lane.`
  };
}

export default function InventoryDetailPage({ params }) {
  const item = getInventoryBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = inventory
    .filter((candidate) => candidate.category === item.category && candidate.slug !== item.slug)
    .slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: item.title, path: `/inventory/${item.slug}` }
  ]);

  return (
    <main className="page-main">
      <SchemaScript schema={buildProductSchema(item, business)} />
      <SchemaScript schema={breadcrumbSchema} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">{item.categoryLabel}</p>
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
            <div className="button-row">
              <a
                href={`sms:${business.phone.sms}?body=${encodeURIComponent(
                  `${business.reserveMessage} Item: ${item.title}`
                )}`}
                className="button"
              >
                Reserve for 2 hours
              </a>
              <a
                href={`https://wa.me/${business.phone.sms.replace("+", "")}?text=${encodeURIComponent(
                  `${business.whatsappMessage} Item: ${item.title}`
                )}`}
                className="button button--secondary"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="content-panel">
            <SectionHeading kicker="Object details" title={formatCurrency(item.price)} />
            <table className="table">
              <tbody>
                <tr>
                  <th>Retail estimate</th>
                  <td>{formatCurrency(item.retail)}</td>
                </tr>
                <tr>
                  <th>Condition</th>
                  <td>{item.condition}</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>{item.model}</td>
                </tr>
                <tr>
                  <th>Availability</th>
                  <td>{item.availability}</td>
                </tr>
                <tr>
                  <th>Pickup</th>
                  <td>{item.pickup}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{item.locationTag}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading kicker="Highlights" title="Why this item deserves its own page" />
            <ul className="bullet-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="content-panel">
            <SectionHeading kicker="Inspect before checkout" title="Checklist for the floor" />
            <ul className="bullet-list">
              {item.inspectionChecklist.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p>
              Final-sale inventory works best when the exact unit, condition, and accessories are
              confirmed before payment.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Internal links"
            title="More objects in the same category"
            intro="Exact-item pages should pass authority horizontally to related searches, not trap the shopper on one SKU."
          />
          <InventoryGrid items={relatedItems} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="content-panel">
            <SectionHeading kicker="Search cluster" title="Where this page sends next" />
            <p>
              The proper internal path is <Link href={`/category/${item.category}`}>category hub</Link>,
              then into nearby location pages and truck-arrival freshness pages. That is how the
              object becomes part of a ranked local cluster instead of an orphan page.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Object pages should convert before they impress"
        body="If the shopper found the exact model, price, and condition they wanted, the next best action is reserve, WhatsApp, or directions."
        itemLabel={item.title}
      />
    </main>
  );
}
