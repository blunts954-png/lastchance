import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { SchemaScript } from "@/components/SchemaScript";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
import { voiceFaqsEs } from "@/data/faqs";
import { purchaseProtocolEs } from "@/data/process";
import { buildFAQSchema } from "@/lib/seo";

export const metadata = {
  title: "Como Funciona",
  description: "Condiciones, reglas finales y proceso de inspeccion para comprar en una tienda de liquidacion."
};

export default function SpanishHowItWorksPage() {
  return (
    <main className="page-main">
      <SchemaScript schema={buildFAQSchema(voiceFaqsEs)} />

      <section className="section">
        <div className="shell two-up">
          <div className="content-panel">
            <SectionHeading
              kicker="Antes de pagar"
              title="Reglas claras desde el inicio"
              intro="La meta es evitar sorpresas y reclamos publicando el proceso de compra antes del pago."
            />
            <ul className="bullet-list">
              {business.policiesEs.map((policy) => (
                <li key={policy.title}>
                  <strong>{policy.title}:</strong> {policy.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="content-panel">
            <SectionHeading kicker="Proceso" title="Tres pasos sencillos" />
            <ol className="bullet-list">
              {purchaseProtocolEs.map((step) => (
                <li key={step.step}>
                  <strong>{step.step}:</strong> {step.detail}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection
        kicker="Preguntas frecuentes"
        title="Respuestas cortas para clientes locales"
        intro="Estas respuestas ayudan a clientes, buscadores y asistentes de voz."
        faqs={voiceFaqsEs}
      />

      <CtaBand
        title="La claridad reduce reclamos"
        body="Cuando las condiciones, el proceso y las expectativas se publican con anticipacion, las compras son mas limpias."
        locale="es"
      />
    </main>
  );
}
