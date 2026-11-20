export default function Loading() {
  return (
    <main className="state-page loading-state" aria-busy="true">
      <span className="loading-state__spinner" aria-hidden="true" />
      <p role="status">Loading NextBites...</p>
    </main>
  );
}
