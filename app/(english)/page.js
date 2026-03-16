import Link from "next/link";
import Image from "next/image";
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
    body: "Real installation photos from local Bakersfield homes showing our scratch-and-dent value in action."
  },
  {
    tag: "Oildale",
    title: "Washer pickup stories",
    body: "Neighborhood verified pickups. We help you load or arrange fast local delivery."
  },
  {
    tag: "Seven Oaks",
    title: "Furniture at home",
    body: "Designer sectionals and dining sets captured in living rooms across Kern County."
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
            <p className="section-kicker">Est. in Kern County</p>
            <h1>High-End Liquidation. Disciplined Saving.</h1>
            <p>
              Last Chance Store is Bakersfield&apos;s authoritative source for premium overstock appliances, 
              designer furniture, and contractor-grade tools. No games, just weekly truckloads of 
              verified inventory at 40-70% off retail.
            </p>
            <SignalStrip items={business.trustSignals} />
            <div className="button-row">
              <Link href="/deals-of-the-week" className="button">
                Shop Current Deals
              </Link>
              <Link href="/visit" className="button button--secondary">
                Visit 5301 White Lane
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-visual">
              <Image 
                src="/hero.png" 
                alt="Last Chance Store Showroom in Bakersfield" 
                fill
                priority
                className="hero-image"
              />
              <div className="hero-visual__overlay"></div>
              <div className="hero-visual__copy">
                <strong>Our White Lane Showroom</strong>
                <span>Open to the public with fresh truckloads weekly.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>Local</strong>
                <span>Serving Bakersfield and all Kern County towns</span>
              </div>
              <div className="metric">
                <strong>Expert</strong>
                <span>Bilingual staff ready to help you inspect and load</span>
              </div>
              <div className="metric">
                <strong>Weekly</strong>
                <span>New inventory arrives every Tuesday and Friday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Core Pillars"
            title="Quality inventory priced to move"
            intro="We specialize in retail overstock, open-box appliances, and scratch-and-dent furniture where the savings far outweigh the cosmetic notes."
          />
          <div className="card-grid">
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Appliances</span>
                <span>Top Sellers</span>
              </div>
              <h3>Appliance Clearance</h3>
              <p>Unbeatable deals on refrigerators, laundry sets, ranges, and microwaves with full transparency.</p>
              <Link href="/category/appliances" className="text-link">
                Browse Appliances
              </Link>
            </article>
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Furniture</span>
                <span>New Markdowns</span>
              </div>
              <h3>Furniture Outlet</h3>
              <p>Luxury sectionals, dining sets, and bedroom frames at a fraction of big-box retail prices.</p>
              <Link href="/category/furniture" className="text-link">
                Browse Furniture
              </Link>
            </article>
            <article className="card">
              <div className="card__eyebrow">
                <span className="chip">Tools & More</span>
                <span>Contractor Grade</span>
              </div>
              <h3>Tools & Essentials</h3>
              <p>DeWalt, Milwaukee, and Ryobi tool kits alongside seasonal patio and home hardware.</p>
              <Link href="/category/tools-misc" className="text-link">
                Browse Tools
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Inventory Categories"
            title="Transparent pricing, real examples"
            intro="We value your time. We show price ranges and actual floor examples so you know exactly what to expect before you drive over."
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
            kicker="Trust Architecture"
            title="The 3-Step Purchase Protocol"
            intro="Liquidation shouldn't be a gamble. We've standardized the process so you can buy with total confidence."
          />
          <TrustProtocol items={purchaseProtocol} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Current Inventory"
            title="Featured Weekly Arrivals"
            intro="A sampling of what's currently on our floor. Items move fast—visit us today for the best selection."
          />
          <InventoryGrid items={featuredInventory} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Local Presence"
            title="Serving Every Corner of Kern County"
            intro="From Southwest Bakersfield to Delano, we are the valley's choice for smart liquidation shopping."
          />
          <AreaGrid areas={featuredAreas} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Customer Proof"
            title="Bakersfield Homes Gallery"
            intro="See how our neighbors are upgrading their homes while keeping more money in their pockets."
          />
          <StoryGallery entries={proofBlueprint} />
        </div>
      </section>

      <FaqSection
        kicker="Last Chance FAQ"
        title="Direct Answers for Smart Buyers"
        intro="Everything you need to know about our sourcing, delivery, and 'no-fluff' liquidation model."
        faqs={homeFaqs}
      />

      <CtaBand
        title="Get instant alerts for new truck arrivals"
        body="Join our alert list to be the first to know when fresh inventory hits the floor. We also offer 2-hour holds on featured items."
      />
    </main>
  );
}

