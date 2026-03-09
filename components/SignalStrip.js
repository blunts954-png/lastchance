export function SignalStrip({ items }) {
  return (
    <div className="signal-strip">
      {items.map((item) => (
        <div key={item} className="signal-chip">
          {item}
        </div>
      ))}
    </div>
  );
}
