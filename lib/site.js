export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatDate(value, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export function compactPhone(phone) {
  return phone.replace(/[^\d+]/g, "");
}

export function mapConditionToSchema(condition) {
  const normalized = condition.toLowerCase();

  if (normalized.includes("new")) {
    return "https://schema.org/NewCondition";
  }

  if (normalized.includes("scratch") || normalized.includes("as-is")) {
    return "https://schema.org/DamagedCondition";
  }

  return "https://schema.org/UsedCondition";
}
