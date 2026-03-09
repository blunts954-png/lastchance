import { blogPosts } from "@/data/blogPosts";
import { categories } from "@/data/categories";
import { inventory } from "@/data/inventory";
import { landingPages } from "@/data/landings";
import { truckArrivals } from "@/data/truckArrivals";
import { absoluteUrl } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = [
    "/",
    "/deals-of-the-week",
    "/how-it-works",
    "/reviews",
    "/visit",
    "/inventory",
    "/blog",
    "/truck-arrivals",
    "/service-areas",
    "/es",
    "/es/ofertas-de-la-semana",
    "/es/como-funciona",
    "/es/visitanos"
  ];

  const categoryRoutes = categories.flatMap((category) => [
    `/category/${category.slug}`,
    `/es/categoria/${category.slug}`
  ]);

  const dynamicRoutes = [
    ...inventory.map((item) => `/inventory/${item.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...truckArrivals.map((event) => `/truck-arrivals/${event.slug}`),
    ...landingPages.map((landing) => `/${landing.slug}`)
  ];

  return [...staticRoutes, ...categoryRoutes, ...dynamicRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-03-09")
  }));
}
