import Link from "next/link";

const links = [
  { href: "/deals-of-the-week", label: "Deals of the Week" },
  { href: "/category/appliances", label: "Appliances" },
  { href: "/category/furniture", label: "Furniture" },
  { href: "/category/tools-misc", label: "Tools & Misc" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/visit", label: "Visit" }
];

export function Header({ locale = "en" }) {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href={locale === "es" ? "/es" : "/"} className="brand-mark">
          <span className="brand-mark__kicker">Last Chance Store</span>
          <span className="brand-mark__name">
            {locale === "es" ? "Liquidación Bakersfield" : "Bakersfield Liquidation"}
          </span>
        </Link>

        <nav className="nav-row" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={locale === "es" ? toSpanishPath(link.href) : link.href}
            >
              {locale === "es" ? spanishLabel(link.label) : link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href={locale === "es" ? "/" : "/es"} className="locale-toggle">
            {locale === "es" ? "English" : "Español"}
          </Link>
        </div>
      </div>
    </header>
  );
}

function toSpanishPath(path) {
  const pathMap = {
    "/deals-of-the-week": "/es/ofertas-de-la-semana",
    "/how-it-works": "/es/como-funciona",
    "/visit": "/es/visitanos",
    "/category/appliances": "/es/categoria/appliances",
    "/category/furniture": "/es/categoria/furniture",
    "/category/tools-misc": "/es/categoria/tools-misc",
    "/reviews": "/reviews"
  };

  return pathMap[path] || path;
}

function spanishLabel(label) {
  const map = {
    "Deals of the Week": "Ofertas de la Semana",
    Appliances: "Electrodomesticos",
    Furniture: "Muebles",
    "Tools & Misc": "Herramientas y mas",
    "How It Works": "Como Funciona",
    Reviews: "Resenas",
    Visit: "Visitanos"
  };

  return map[label] || label;
}
