import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { inventory } from "@/data/inventory";
import { buildCollectionSchema } from "@/lib/seo";

export const metadata = {
  title: "Inventory",
  description: "Object-level inventory pages for Bakersfield liquidation appliances, furniture, tools, and overstock."
};

export default function InventoryIndexPage() {
  const schema = buildCollectionSchema(
    "Inventory pages",
    "Search-focused inventory pages for Bakersfield liquidation shopping.",
    inventory.map((item) => ({
      name: item.title,
      path: `/inventory/${item.slug}`
    })),
    "/inventory"
  );

  return (
    <main className="page-main">
      <SchemaScript schema={schema} />
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Inventory authority"
            title="Object-level pages designed to capture exact-match searches"
            intro="This is the layer that shifts the site from category talk into actual searchable objects."
          />
          <InventoryGrid items={inventory} />
        </div>
      </section>
    </main>
  );
}
