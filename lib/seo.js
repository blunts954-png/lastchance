import { absoluteUrl, compactPhone, mapConditionToSchema } from "@/lib/site";

export function buildLocalBusinessSchema(business, categories) {
  return {
    "@context": "https://schema.org",
    "@type": ["OutletStore", "Store", "HomeGoodsStore"],
    "@id": absoluteUrl("/#business"),
    name: business.name,
    description: business.description.en,
    url: absoluteUrl("/"),
    telephone: compactPhone(business.phone.display),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country
    },
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area
    })),
    hasMap: business.mapSearchUrl,
    sameAs: business.verifiedProfiles,
    slogan: business.tagline.en,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Liquidation categories",
      itemListElement: categories.map((category) => ({
        "@type": "OfferCatalog",
        name: category.name.en,
        url: absoluteUrl(`/category/${category.slug}`)
      }))
    }
  };
}

export function buildProductSchema(item, business) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": absoluteUrl(`/inventory/${item.slug}#product`),
    name: item.title,
    description: item.summary,
    sku: item.model,
    brand: {
      "@type": "Brand",
      name: item.brand
    },
    itemCondition: mapConditionToSchema(item.condition),
    category: item.categoryLabel,
    offers: {
      "@type": "Offer",
      availability:
        item.availability === "Available now"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      priceCurrency: "USD",
      price: item.price,
      url: absoluteUrl(`/inventory/${item.slug}`),
      seller: {
        "@type": "Organization",
        name: business.name
      },
      eligibleRegion: {
        "@type": "City",
        name: "Bakersfield"
      }
    }
  };
}

export function buildFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildCollectionSchema(name, description, items, pathname) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(pathname),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(item.path),
        name: item.name
      }))
    }
  };
}

export function buildBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    about: post.keywords,
    author: {
      "@type": "Organization",
      name: "Last Chance Store"
    },
    publisher: {
      "@type": "Organization",
      name: "Last Chance Store"
    }
  };
}

export function buildEventSchema(event, business) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: event.date,
    endDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country
      }
    },
    organizer: {
      "@type": "Organization",
      name: business.name,
      url: absoluteUrl("/")
    }
  };
}
