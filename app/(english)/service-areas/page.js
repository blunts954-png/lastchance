import { AreaGrid } from "@/components/AreaGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceAreas } from "@/data/serviceAreas";

export const metadata = {
  title: "Service Areas",
  description: "Neighborhood and nearby-town landing routes for Bakersfield liquidation search coverage."
};

export default function ServiceAreasIndexPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Hyperlocal"
            title="Programmatic location pages for Bakersfield and nearby towns"
            intro="These routes are the GEO layer: drive time, landmarks, neighborhood references, and inventory context."
          />
          <AreaGrid areas={serviceAreas} />
        </div>
      </section>
    </main>
  );
}
