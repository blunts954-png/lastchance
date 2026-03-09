export function TrustProtocol({ items }) {
  return (
    <div className="protocol-grid">
      {items.map((item, index) => (
        <article key={item.step} className="protocol-card">
          <span className="protocol-card__index">0{index + 1}</span>
          <h3>{item.step}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
