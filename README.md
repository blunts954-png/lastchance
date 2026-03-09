# Last Chance Store Search-Dominance Scaffold

This workspace was empty, so the site has been scaffolded from scratch as a data-driven Next.js App Router project.

## What is included

- Search-first information architecture for:
  - core brand pages
  - category pages
  - object-level inventory pages
  - Bakersfield and nearby-area landing pages
  - truck-arrival event pages
  - weekly content pages
- Local SEO and entity scaffolding:
  - `LocalBusiness`, `Product`, `FAQPage`, `BlogPosting`, `Event`, and breadcrumb schema
  - sitemap and robots endpoints
  - consistent NAP/footer/call-to-action patterns
- Bilingual key pages under `/es`
- Conversion modules for:
  - SMS truck alerts
  - 2-hour reserve requests
  - WhatsApp item inquiries

## Required before launch

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
2. Replace placeholder or inferred business profile URLs in `data/business.js`.
3. Swap in real store-floor, inventory, and customer-home photos.
4. Confirm operational claims before publishing them live:
   - appliance testing protocol
   - signed condition checklist
   - delivery radius
   - financing availability
5. Install dependencies and run `npm run build`.

## Notes on accuracy

The address and phone were populated from public directory references for the Bakersfield location. Exact social profile URLs, hours, and any operational policy claims should be verified with the owner before launch.
