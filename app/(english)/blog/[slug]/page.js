import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { InventoryGrid } from "@/components/InventoryGrid";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { getInventoryBySlug } from "@/data/inventory";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedInventory = post.relatedInventory.map(getInventoryBySlug).filter(Boolean);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  return (
    <main className="page-main">
      <SchemaScript schema={buildBlogPostingSchema(post)} />
      <SchemaScript schema={breadcrumbSchema} />

      <section className="section">
        <div className="shell">
          <div className="content-panel">
            <p className="section-kicker">{formatDate(post.date)}</p>
            <h1>{post.title}</h1>
            <p>{post.intro}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Article"
            title="Built to support category, object, and visit intent"
          />
          <div className="card-grid">
            {post.sections.map((section) => (
              <article key={section} className="card">
                <p>{section}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Related inventory"
            title="Objects that keep the post commercially useful"
            intro="Each article should hand off into actual items the buyer can inquire about now."
          />
          <InventoryGrid items={relatedInventory} />
        </div>
      </section>

      <CtaBand
        title="Use content to route shoppers into exact objects"
        body="Posts create freshness, but inventory and reserve flows are what close the loop."
        itemLabel={post.title}
      />
    </main>
  );
}
