import Link from "next/link";
import { business } from "@/data/business";

export function Footer({ locale = "en" }) {
  const policies = locale === "es" ? business.policiesEs : business.policies;

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="section-kicker">Canonical NAP</p>
          <h2>{business.name}</h2>
          <p>
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region} {business.address.postalCode}
          </p>
          <p>
            <a href={`tel:${business.phone.sms}`}>{business.phone.display}</a>
          </p>
        </div>

        <div>
          <p className="section-kicker">
            {locale === "es" ? "Lo que publicamos" : "What we publish"}
          </p>
          <ul className="bullet-list">
            {policies.map((policy) => (
              <li key={policy.title}>
                <strong>{policy.title}:</strong> {policy.detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-kicker">
            {locale === "es" ? "Enlaces rapidos" : "Quick links"}
          </p>
          <div className="footer-links">
            <Link href={locale === "es" ? "/es/ofertas-de-la-semana" : "/deals-of-the-week"}>
              {locale === "es" ? "Ofertas" : "Deals"}
            </Link>
            <Link href={locale === "es" ? "/es/como-funciona" : "/how-it-works"}>
              {locale === "es" ? "Como funciona" : "How it works"}
            </Link>
            <Link href={locale === "es" ? "/es/visitanos" : "/visit"}>
              {locale === "es" ? "Visitanos" : "Visit the store"}
            </Link>
            <Link href="/inventory">{locale === "es" ? "Inventario" : "Inventory"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
