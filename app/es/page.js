import Link from "next/link";
import Image from "next/image";
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
  title: "Liquidacion en Bakersfield",
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
            <p className="section-kicker">Est. en el Condado de Kern</p>
            <h1>Liquidación de Alta Gama. Ahorro Disciplinado.</h1>
            <p>
              Last Chance Store es la fuente autoridada de Bakersfield para electrodomésticos premium, 
              muebles de diseñador y herramientas de grado contratista. Sin juegos, solo camiones 
              semanales de inventario verificado con un 40-70% de descuento.
            </p>
            <SignalStrip items={business.trustSignals} />
            <div className="button-row">
              <Link href="/es/ofertas-de-la-semana" className="button">
                Ver Ofertas Actuales
              </Link>
              <Link href="/es/visitanos" className="button button--secondary">
                Visítanos en 5301 White Lane
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-visual">
              <Image 
                src="/hero.png" 
                alt="Showroom de Last Chance Store en Bakersfield" 
                fill
                priority
                className="hero-image"
              />
              <div className="hero-visual__overlay"></div>
              <div className="hero-visual__copy">
                <strong>Nuestro Showroom en White Lane</strong>
                <span>Abierto al público con camiones nuevos cada semana.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>Local</strong>
                <span>Sirviendo a Bakersfield y todo el condado de Kern</span>
              </div>
              <div className="metric">
                <strong>Expertos</strong>
                <span>Personal bilingüe listo para ayudarle a inspeccionar y cargar</span>
              </div>
              <div className="metric">
                <strong>Semanal</strong>
                <span>Inventario nuevo llega cada martes y viernes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Categorías"
            title="Inventario de calidad a precio de liquidación"
            intro="Nos especializamos en excedentes de minoristas, electrodomésticos de caja abierta y muebles con detalles estéticos donde el ahorro supera con creces cualquier detalle."
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
            kicker="Confianza"
            title="El Protocolo de Compra de 3 Pasos"
            intro="La liquidación no debería ser una apuesta. Hemos estandarizado el proceso para que compre con total confianza."
          />
          <TrustProtocol items={purchaseProtocolEs} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Inventario"
            title="Llegadas Destacadas de la Semana"
            intro="Una muestra de lo que está actualmente en nuestro piso. Los artículos se mueven rápido—visítenos hoy."
          />
          <InventoryGrid items={inventory.slice(0, 6)} locale="es" />
        </div>
      </section>

      <FaqSection
        kicker="Preguntas Frecuentes"
        title="Respuestas Directas para Compradores Inteligentes"
        intro="Todo lo que necesita saber sobre nuestro abastecimiento, entrega y modelo de liquidación sin rodeos."
        faqs={voiceFaqsEs}
      />

      <CtaBand
        title="Reciba alertas instantáneas de camiones nuevos"
        body="Únase a nuestra lista de alertas para ser el primero en saber cuándo llega mercancía nueva. También ofrecemos apartados de 2 horas."
        locale="es"
      />
    </main>
  );
}

