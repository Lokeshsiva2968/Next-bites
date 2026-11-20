import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Find your next bite",
  description: "Browse tasty recipes and find your next favorite bite.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" href="/" aria-label="NextBites home">
              <span className="brand__icon" aria-hidden="true">🍴</span>
              <span>NextBites</span>
            </Link>
            <div className="site-nav__links">
              <Link href="/#recipes">Recipes</Link>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
