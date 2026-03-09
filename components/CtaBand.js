import { business } from "@/data/business";

export function CtaBand({ title, body, itemLabel = "inventory", locale = "en" }) {
  const reserveBase = locale === "es" ? business.reserveMessageEs : business.reserveMessage;
  const dealsBase = locale === "es" ? business.dealsMessageEs : business.dealsMessage;
  const whatsappBase = locale === "es" ? business.whatsappMessageEs : business.whatsappMessage;
  const itemLabelKey = locale === "es" ? "Articulo" : "Item";
  const reserveText = encodeURIComponent(`${reserveBase} ${itemLabelKey}: ${itemLabel}`);
  const dealsText = encodeURIComponent(dealsBase);
  const whatsappText = encodeURIComponent(`${whatsappBase} ${itemLabelKey}: ${itemLabel}`);

  return (
    <section className="section">
      <div className="shell">
        <div className="cta-band">
          <div>
            <p className="section-kicker">{locale === "es" ? "Conversion" : "Conversion engine"}</p>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>

          <div className="cta-band__actions">
            <a href={`sms:${business.phone.sms}?body=${reserveText}`} className="button">
              {locale === "es" ? "Apartar por 2 horas" : "Reserve for 2 hours"}
            </a>
            <a href={`sms:${business.phone.sms}?body=${dealsText}`} className="button button--secondary">
              {locale === "es" ? "Recibir alertas" : "Join truck alert list"}
            </a>
            <a href={`https://wa.me/${business.phone.sms.replace("+", "")}?text=${whatsappText}`} className="text-link">
              {locale === "es" ? "Preguntar por WhatsApp" : "Ask on WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
