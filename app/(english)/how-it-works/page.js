import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustProtocol } from "@/components/TrustProtocol";
import { business } from "@/data/business";
import { policyFaqs } from "@/data/faqs";
import { feedbackResponse, purchaseProtocol } from "@/data/process";
import { buildFAQSchema } from "@/lib/seo";

export const metadata = {
  title: "How It Works",
  description: "Condition tiers, final-sale rules, and an inspect-first process for Bakersfield liquidation shopping."
};

export default function HowItWorksPage() {
  return (
    <main className="page-main">
      <SchemaScript schema={buildFAQSchema(policyFaqs)} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Brutally honest</p>
            <h1>Read this before you shop here.</h1>
            <p>
              The site has to neutralize uncertainty before it becomes a bad review. That means
              publishing the all-sales-final rule, condition tiers, and the inspection process in
              plain language.
            </p>
          </div>
          <div className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual__copy">
                <strong>Checklist and testing station image slot</strong>
                <span>Replace this with real purchase-protocol photography before publishing live.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>No refunds</strong>
                <span>Publish the rule up front, not at checkout</span>
              </div>
              <div className="metric">
                <strong>4 tiers</strong>
                <span>New, open-box, scratch-and-dent, and as-is</span>
              </div>
              <div className="metric">
                <strong>3 steps</strong>
                <span>Inspect, confirm, then load up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Protocol"
            title="The purchase process should feel procedural, not vague"
            intro="People trust visible systems more than promises. This is the core trust layer for a liquidation business with rough review history."
          />
          <TrustProtocol items={purchaseProtocol} />
        </div>
      </section>

      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading kicker="Condition tiers" title="How every featured item should be graded" />
            <table className="table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {business.conditionTiers.map((tier) => (
                  <tr key={tier.label}>
                    <td>{tier.label}</td>
                    <td>{tier.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-panel">
            <SectionHeading kicker="Policy layer" title="Non-negotiables that stay visible" />
            <ul className="bullet-list">
              {business.policies.map((policy) => (
                <li key={policy.title}>
                  <strong>{policy.title}:</strong> {policy.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Review recovery"
            title="What the website changes after hard feedback"
            intro="The site should answer the issues people complain about before they become disputes."
          />
          <div className="card-grid">
            {feedbackResponse.map((item) => (
              <article key={item.issue} className="card">
                <div className="card__eyebrow">
                  <span className="chip chip--ghost">Complaint theme</span>
                  <span>Response layer</span>
                </div>
                <h3>{item.issue}</h3>
                <p>{item.response}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        kicker="FAQ"
        title="Short answers for AI, search, and voice surfaces"
        intro="These are written to reduce expectation mismatch before someone drives to the store."
        faqs={policyFaqs}
      />

      <CtaBand
        title="Publish clarity before the customer reaches the register"
        body="This page should become the canonical source for rules, not an afterthought buried in a receipt dispute."
      />
    </main>
  );
}
