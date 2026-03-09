import Link from "next/link";
import { AreaGrid } from "@/components/AreaGrid";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalStrip } from "@/components/SignalStrip";
import { StoryGallery } from "@/components/StoryGallery";
import { TrustProtocol } from "@/components/TrustProtocol";
import { business } from "@/data/business";
import { categories } from "@/data/categories";
import { homeFaqs } from "@/data/faqs";
import { inventory } from "@/data/inventory";
import { purchaseProtocol } from "@/data/process";
import { serviceAreas } from "@/data/serviceAreas";

export const metadata = {
  alternates: {
    languages: {
      es: "/es"
    }
  }
};

const proofBlueprint = [
  {
    tag: "Southwest Bakersfield",
    title: "Fridge install gallery",
    body: "Feature customer-home refrigerator photos here with neighborhood tags once the review flow is live."
  },
  {
    tag: "Oildale",
    title: "Washer pickup stories",
    body: "Use image-backed Google reviews or direct submissions to reinforce local trust for laundry buyers."
  },
  {
    tag: "Seven Oaks",
    title: "Furniture at home",
    body: "Sectionals, dining sets, and patio installs should be tagged by neighborhood to compound GEO relevance."
  }
];

export default function HomePage() {
  const featuredInventory = inventory.slice(0, 6);
  const featuredAreas = serviceAreas.slice(0, 6);

  return (
    <main className="page-main">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Search domination architecture</p>
            <h1>Liquidation deals, clear rules, no guesswork.</h1>
            <p>
              Last Chance Store is being framed as Bakersfield&apos;s disciplined liquidation
              outlet: appliances, furniture, tools, and overstock with condition tiers, bilingual
              support, and weekly fresh inventory.
            </p>
            <SignalStrip items={business.trustSignals} />
            <div className="button-row">
              <Link href="/deals-of-the-week" className="button">
                Shop representative deals
              </Link>
              <Link href="/visit" className="button button--secondary">
                Visit 5301 White Lane
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual__copy">
                <strong>Store-floor hero image slot</strong>
                <span>
                  Replace this panel with a real wide-angle showroom photo before launch.
                </span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>12+</strong>
                <span>Micro-location pages for Bakersfield and nearby towns</span>
              </div>
              <div className="metric">
                <strong>12</strong>
                <span>Object-level inventory pages seeded for search intent</span>
              </div>
              <div className="metric">
                <strong>Weekly</strong>
                <span>Truck-arrival content feeding fresh local signals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Pillars"
            title="Money-intent pages built to rank"
            intro="Each route targets a commercial local query and pushes the customer into exact inventory, policy clarity, and fast contact paths."
          />
          <div className="card-grid">
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Appliances</span>
                <span>Core pillar</span>
              </div>
              <h3>Appliance liquidation in Bakersfield</h3>
              <p>Build authority around refrigerators, laundry, ranges, and scratch-and-dent demand.</p>
              <Link href="/appliance-liquidation-bakersfield" className="text-link">
                Open pillar page
              </Link>
            </article>
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Furniture</span>
                <span>Core pillar</span>
              </div>
              <h3>Discount furniture outlet in Bakersfield</h3>
              <p>Push a cleaner, more controlled showroom narrative for higher-trust furniture searches.</p>
              <Link href="/discount-furniture-outlet-bakersfield" className="text-link">
                Open pillar page
              </Link>
            </article>
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Laundry + Fridges</span>
                <span>Exact match</span>
              </div>
              <h3>Search pages for refrigerator and laundry urgency</h3>
              <p>Capture the searches where buyers are already comparing value and risk, not browsing inspiration.</p>
              <Link href="/washer-dryer-deals-bakersfield" className="text-link">
                Open urgency landing
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Categories"
            title="Representative categories, not fake ecommerce"
            intro="The site sells trust by showing price ranges, condition tags, and example inventory rather than pretending every floor item is always in stock."
          />
          <div className="card-grid">
            {categories.map((category) => (
              <article key={category.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip chip--ghost">{category.eyebrow.en}</span>
                  <span>{category.priceBand}</span>
                </div>
                <h3>{category.name.en}</h3>
                <p>{category.summary.en}</p>
                <Link href={`/category/${category.slug}`} className="text-link">
                  Explore {category.name.en.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Trust engineering"
            title="A 3-step purchase protocol that lowers anxiety"
            intro="The website should publish process before the customer reaches the register. That is how rough review themes get neutralized upstream."
          />
          <TrustProtocol items={purchaseProtocol} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Inventory authority"
            title="Object-level deal pages seeded for local search"
            intro="Google ranks objects and exact offers more reliably than broad category talk. These pages are the raw material for local domination."
          />
          <InventoryGrid items={featuredInventory} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="GEO"
            title="Micro-location pages for Bakersfield neighborhoods and nearby towns"
            intro="These routes turn generic local SEO into neighborhood intent capture with drive-time context, landmarks, and area-specific copy."
          />
          <AreaGrid areas={featuredAreas} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Visual proof system"
            title="A Bakersfield homes gallery designed to compound trust"
            intro="Customer-home photos should be tagged by item type and neighborhood so review proof, GEO relevance, and social proof reinforce each other."
          />
          <StoryGallery entries={proofBlueprint} />
        </div>
      </section>

      <FaqSection
        kicker="Ask Last Chance"
        title="Voice-search answers written to be lifted cleanly"
        intro="These blocks are intentionally direct so search engines, AI agents, and voice assistants can quote them without adding ambiguity."
        faqs={homeFaqs}
      />

      <CtaBand
        title="Truck alerts and 2-hour reserve are the conversion engine"
        body="The site should behave like a foot-traffic machine, not a brochure. Text flows, WhatsApp inquiry paths, and hold requests turn searchers into buyers before inventory disappears."
      />
    </main>
  );
}
