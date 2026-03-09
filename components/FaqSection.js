import { SectionHeading } from "@/components/SectionHeading";

export function FaqSection({ kicker, title, intro, faqs }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading kicker={kicker} title={title} intro={intro} />
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
