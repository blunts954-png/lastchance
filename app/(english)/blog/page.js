import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description: "Weekly Bakersfield liquidation content that turns truck flow into search freshness."
};

export default function BlogIndexPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Content cadence"
            title="Weekly posts tied directly to live inventory flow"
            intro="Every post should support a category page, an inventory object, and a visit or policy page."
          />
          <div className="card-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card">
                <div className="card__eyebrow">
                  <span className="chip">{formatDate(post.date)}</span>
                  <span>Blog post</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className="text-link">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
