import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { inventory } from "@/data/inventory";
import { truckArrivals } from "@/data/truckArrivals";
import { formatDate } from "@/lib/site";

export const metadata = {
  title: "Ofertas de la Semana",
  description: "Ofertas representativas, llegadas de camion y rutas rapidas para convertir visitas en compras."
};

export default function SpanishDealsPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Ofertas"
            title="Ofertas de la semana"
            intro="Esta pagina existe para mover trafico local a mensajes, apartados y visitas a la tienda."
          />
          <InventoryGrid items={inventory.slice(0, 6)} locale="es" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Llegadas de camion"
            title="Contenido fresco que mantiene vivo el sitio"
            intro="Cada camion debe convertirse en una pagina rastreable, no solo en una publicacion social."
          />
          <div className="card-grid">
            {truckArrivals.map((event) => (
              <article key={event.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip">{formatDate(event.date, "es-US")}</span>
                  <span>Llegada</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Haz que las alertas por mensaje sean la costumbre"
        body="Los mejores compradores quieren enterarse primero cuando llegan refrigeradores, lavadoras, secadoras y muebles."
        locale="es"
      />
    </main>
  );
}
