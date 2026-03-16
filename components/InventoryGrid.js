import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/site";

export function InventoryGrid({ items, locale = "en" }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article key={item.slug} className="card inventory-card">
          <div className="card__visual">
            <Image 
              src={item.image || (item.category === 'appliances' ? '/appliance.png' : '/furniture.png')} 
              alt={item.title}
              width={400}
              height={300}
              className="inventory-image"
            />
          </div>
          <div className="card__content">
            <div className="card__eyebrow">
              <span className="chip chip--ghost">{item.condition}</span>
              <span className="availability-tag">{item.availability}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="price-row">
              <div className="price-info">
                <span>Ret. {formatCurrency(item.retail)}</span>
                <strong>{formatCurrency(item.price)}</strong>
              </div>
              <Link href={`/${locale === 'es' ? 'es/inventory' : 'inventory'}/${item.slug}`} className="text-link">
                {locale === "es" ? "Detalles" : "Details"}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

