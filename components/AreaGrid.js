import Link from "next/link";

export function AreaGrid({ areas }) {
  return (
    <div className="card-grid">
      {areas.map((area) => (
        <article key={area.slug} className="card">
          <div className="card__eyebrow">
            <span className="chip chip--ghost">{area.driveTime}</span>
            <span>{area.anchor}</span>
          </div>
          <h3>{area.name}</h3>
          <p>{area.summary}</p>
          <Link href={`/liquidation-appliances-${area.slug}`} className="text-link">
            Explore {area.shortName} landing
          </Link>
        </article>
      ))}
    </div>
  );
}
