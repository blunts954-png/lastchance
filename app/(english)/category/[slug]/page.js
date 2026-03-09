import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, getCategoryBySlug } from "@/data/categories";
import { inventory } from "@/data/inventory";
import { buildCollectionSchema } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug
  }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name.en,
    description: category.summary.en
  };
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const items = inventory.filter((item) => item.category === category.slug);
  const schema = buildCollectionSchema(
    `${category.name.en} in Bakersfield`,
    category.summary.en,
    items.map((item) => ({
      name: item.title,
      path: `/inventory/${item.slug}`
    })),
    `/category/${category.slug}`
  );

  return (
    <main className="page-main">
      <SchemaScript schema={schema} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">{category.eyebrow.en}</p>
            <h1>{category.name.en} in Bakersfield, CA</h1>
            <p>{category.summary.en}</p>
            <div className="button-row">
              <Link href={category.landingPath} className="button">
                Open money-intent landing
              </Link>
              <Link href="/visit" className="button button--secondary">
                Visit the store
              </Link>
            </div>
          </div>

          <div className="content-panel">
            <SectionHeading kicker="Price band" title={category.priceBand} />
            <ul className="bullet-list">
              {category.featuredTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading kicker="Why this category works" title="Representative inventory beats vague promises" />
            <p>
              Searchers in this category want object-level proof, price context, and condition
              clarity. That is why this page links out to exact inventory instead of pretending the
              whole store is a stable ecommerce catalog.
            </p>
          </div>
          <div className="content-panel">
            <SectionHeading kicker="Buying checklist" title="What to confirm before checkout" />
            <ul className="bullet-list">
              {category.buyingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Featured inventory"
            title={`${category.name.en} object pages`}
            intro="These are the specific items search engines and buyers can understand quickly."
          />
          <InventoryGrid items={items} />
        </div>
      </section>

      <CtaBand
        title={`Make ${category.name.en.toLowerCase()} searches convert faster`}
        body="Category pages should route people into exact objects, reserve flows, and local visit intent without forcing them through fake ecommerce steps."
        itemLabel={category.name.en}
      />
    </main>
  );
}
