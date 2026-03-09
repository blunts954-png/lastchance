import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryGallery } from "@/components/StoryGallery";

const reputationCards = [
  {
    tag: "Expectation control",
    title: "Publish final-sale rules before shopping starts",
    body: "The fastest way to reduce bad reviews is to remove surprises. Policies, item grades, and pickup expectations should live on the site and on the sales floor."
  },
  {
    tag: "Photo reviews",
    title: "Ask for honest reviews with a picture at home",
    body: "Image-backed Google reviews are more persuasive than generic star ratings and feed the future Bakersfield homes gallery."
  },
  {
    tag: "Private recovery",
    title: "Intercept unhappy customers privately first",
    body: "A QR-driven feedback form gives the store a path to fix problems before frustration spreads across Yelp and other surfaces."
  }
];

const storySystem = [
  {
    tag: "Southwest Bakersfield",
    title: "Kitchen replacement story format",
    body: "Pair a home photo, neighborhood tag, item model, and condition tier so search engines see proof tied to place."
  },
  {
    tag: "Greenacres",
    title: "Laundry replacement story format",
    body: "Use washers and dryers as the review flywheel because that category creates urgency and visible before-and-after results."
  },
  {
    tag: "Rosedale",
    title: "Furniture setup story format",
    body: "Sectionals and patio sets are visually strong proof assets that can reinforce both SEO and social CTR."
  }
];

export const metadata = {
  title: "Reviews and Customer Stories",
  description: "A trust-first reputation page for review recovery, customer-story content, and image-backed local proof."
};

export default function ReviewsPage() {
  return (
    <main className="page-main">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Reputation engine</p>
            <h1>Better reviews happen when the process is visible.</h1>
            <p>
              This page does not hide the reputation problem. It reframes it. Clear rules, image
              reviews, and customer-home proof are how a rough liquidation narrative gets cleaned up.
            </p>
          </div>
          <div className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual__copy">
                <strong>Google review QR card slot</strong>
                <span>Use this space for the post-purchase review prompt and private-feedback intercept.</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>1 tap</strong>
                <span>Google review route for happy buyers</span>
              </div>
              <div className="metric">
                <strong>1 tap</strong>
                <span>Private feedback route for unhappy buyers</span>
              </div>
              <div className="metric">
                <strong>Real homes</strong>
                <span>Neighborhood-tagged proof beats vague testimonials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Review flywheel"
            title="The systems that compound trust instead of leaking it"
            intro="This page should turn every completed purchase into either public proof or recoverable private feedback."
          />
          <StoryGallery entries={reputationCards} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Wall of real homes"
            title="Customer-story structure for Bakersfield neighborhoods"
            intro="The exact stories can be loaded later from a CMS or review feed. The page structure is already tuned for local relevance."
          />
          <StoryGallery entries={storySystem} />
        </div>
      </section>

      <CtaBand
        title="Ask for honest reviews, not perfect reviews"
        body="The strongest script is simple: ask for an honest review with a photo of the item at home. That grows both trust and click-through rate."
      />
    </main>
  );
}
