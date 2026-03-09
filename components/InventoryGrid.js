import Link from "next/link";
import { formatCurrency } from "@/lib/site";

export function InventoryGrid({ items, locale = "en" }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article key={item.slug} className="card">
          <div className="card__eyebrow">
            <span className="chip chip--ghost">{item.condition}</span>
            <span>{item.categoryLabel}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="price-row">
            <strong>{formatCurrency(item.price)}</strong>
            <span>Retail est. {formatCurrency(item.retail)}</span>
          </div>
          <div className="meta-row">
            <span>{item.model}</span>
            <span>{item.availability}</span>
          </div>
          <Link href={`/inventory/${item.slug}`} className="text-link">
            {locale === "es" ? "Ver detalles del articulo" : "View item details"}
          </Link>
        </article>
      ))}
    </div>
  );
}
