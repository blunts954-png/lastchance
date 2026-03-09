import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalStrip } from "@/components/SignalStrip";
import { TrustProtocol } from "@/components/TrustProtocol";
import { business } from "@/data/business";
import { categories } from "@/data/categories";
import { voiceFaqsEs } from "@/data/faqs";
import { inventory } from "@/data/inventory";
import { purchaseProtocolEs } from "@/data/process";

export const metadata = {
  title: "Espanol",
  description: business.description.es,
  alternates: {
    canonical: "/es",
    languages: {
      en: "/"
    }
  }
};

export default function SpanishHomePage() {
  return (
    <main className="page-main">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Arquitectura para dominar busquedas</p>
            <h1>Liquidacion clara, reglas visibles, menos dudas.</h1>
            <p>
              Esta version en español presenta la tienda como un outlet disciplinado en Bakersfield:
              electrodomesticos, muebles, herramientas y mercancia nueva cada semana con apoyo
              bilingue.
            </p>
            <SignalStrip items={business.trustSignals} />
            <div className="button-row">
              <Link href="/es/ofertas-de-la-semana" className="button">
                Ver ofertas
              </Link>
              <Link href="/es/visitanos" className="button button--secondary">
                Visitanos
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual__copy">
                <strong>Espacio para foto real de la tienda</strong>
                <span>Reemplaza este panel con una foto del piso de venta antes del lanzamiento.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>Bilingue</strong>
                <span>Las paginas clave existen en ingles y español</span>
              </div>
              <div className="metric">
                <strong>Objetos</strong>
                <span>Paginas por articulo para refrigeradores, lavadoras y mas</span>
              </div>
              <div className="metric">
                <strong>Semanal</strong>
                <span>Contenido nuevo con cada llegada de camion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Categorias"
            title="Categorias con precios y ejemplos reales"
            intro="No fingimos ecommerce completo. Mostramos rangos, condiciones y ejemplos para que la visita a la tienda tenga contexto."
          />
          <div className="card-grid">
            {categories.map((category) => (
              <article key={category.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip chip--ghost">{category.eyebrow.es}</span>
                  <span>{category.priceBand}</span>
                </div>
                <h3>{category.name.es}</h3>
                <p>{category.summary.es}</p>
                <Link href={`/es/categoria/${category.slug}`} className="text-link">
                  Explorar {category.name.es.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Proceso"
            title="Como debe funcionar la compra"
            intro="La confianza sube cuando el proceso es visible antes de pagar."
          />
          <TrustProtocol items={purchaseProtocolEs} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Inventario"
            title="Ejemplos de objetos que ayudan al SEO local"
            intro="Las paginas por articulo son la capa mas fuerte para capturar busquedas exactas."
          />
          <InventoryGrid items={inventory.slice(0, 6)} locale="es" />
        </div>
      </section>

      <FaqSection
        kicker="Preguntas directas"
        title="Respuestas para voz, IA y clientes locales"
        intro="Estas respuestas son cortas y claras para que tambien funcionen en busquedas por voz."
        faqs={voiceFaqsEs}
      />

      <CtaBand
        title="Alertas por mensaje y apartado por 2 horas"
        body="El sitio debe captar intencion rapido con mensajes, WhatsApp y direcciones claras."
        locale="es"
      />
    </main>
  );
}
