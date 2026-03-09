import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";

export const metadata = {
  title: "Visitanos",
  description: "Direccion, telefono y mapa de Last Chance Store en White Lane, Bakersfield."
};

export default function SpanishVisitPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Ubicacion</p>
            <h1>5301 White Lane, Bakersfield, CA 93309.</h1>
            <p>
              El sitio debe repetir exactamente el nombre, direccion y telefono en cada pagina para
              reforzar la identidad de la tienda en Google, mapas y asistentes.
            </p>
            <div className="button-row">
              <a href={business.directionsUrl} className="button">
                Obtener direcciones
              </a>
              <a href={`tel:${business.phone.sms}`} className="button button--secondary">
                Llamar
              </a>
            </div>
          </div>
          <div className="map-panel">
            <iframe
              title="Mapa de Last Chance Store"
              src="https://www.google.com/maps?q=5301+White+Lane+Bakersfield+CA+93309&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="content-panel">
            <SectionHeading kicker="NAP" title="Informacion canonica" />
            <p>
              <strong>{business.name}</strong>
              <br />
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
              <br />
              <a href={`tel:${business.phone.sms}`}>{business.phone.display}</a>
            </p>
            <p>{business.hoursNote}</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Confirma el articulo antes de manejar"
        body="Las paginas de inventario y el apartado por mensaje ayudan a evitar viajes largos sin necesidad."
        locale="es"
      />
    </main>
  );
}
