export function StoryGallery({ entries }) {
  return (
    <div className="story-grid">
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.tag}`} className="story-card">
          <span className="chip">{entry.tag}</span>
          <h3>{entry.title}</h3>
          <p>{entry.body}</p>
        </article>
      ))}
    </div>
  );
}
