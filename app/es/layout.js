import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function SpanishLayout({ children }) {
  return (
    <>
      <Header locale="es" />
      {children}
      <Footer locale="es" />
    </>
  );
}
