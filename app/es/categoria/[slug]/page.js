import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, getCategoryBySlug } from "@/data/categories";
import { inventory } from "@/data/inventory";

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
    title: category.name.es,
    description: category.summary.es
  };
}

export default function SpanishCategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const items = inventory.filter((item) => item.category === category.slug);

  return (
    <main className="page-main">
      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading
              kicker={category.eyebrow.es}
              title={`${category.name.es} en Bakersfield`}
              intro={category.summary.es}
            />
          </div>
          <div className="content-panel">
            <SectionHeading kicker="Rango" title={category.priceBand} />
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
          <InventoryGrid items={items} locale="es" />
        </div>
      </section>

      <CtaBand
        title={`Convierte busquedas de ${category.name.es.toLowerCase()} en visitas reales`}
        body="La pagina de categoria debe llevar al cliente a objetos exactos, mensajes y a la tienda."
        locale="es"
        itemLabel={category.name.es}
      />
    </main>
  );
}
