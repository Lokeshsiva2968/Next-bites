import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <h1>Page not found</h1>
      <p>We couldn&apos;t find that page or recipe.</p>
      <Link className="state-page__link" href="/">
        Back to NextBites
      </Link>
    </main>
  );
}
