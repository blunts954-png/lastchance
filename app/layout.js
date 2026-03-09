import "./globals.css";
import { SchemaScript } from "@/components/SchemaScript";
import { categories } from "@/data/categories";
import { business } from "@/data/business";
import { buildLocalBusinessSchema } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Last Chance Store Bakersfield | Liquidation Appliances, Furniture & Tools",
    template: "%s | Last Chance Store Bakersfield"
  },
  description: business.description.en
};

export default function RootLayout({ children }) {
  const schema = buildLocalBusinessSchema(business, categories);

  return (
    <html lang="en">
      <body>
        <SchemaScript schema={schema} />
        {children}
      </body>
    </html>
  );
}
