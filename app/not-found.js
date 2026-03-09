import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell">
          <div className="content-panel">
            <p className="section-kicker">404</p>
            <h1>That page is not on the floor.</h1>
            <p>
              The route may have moved, the inventory may have sold, or the URL may have been
              typed incorrectly.
            </p>
            <Link href="/" className="button">
              Back to the Bakersfield home page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
