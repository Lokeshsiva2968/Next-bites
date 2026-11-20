import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <>
      <main className="home">
        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">
            Find your next <span>bite.</span>
          </h1>
          <p>
            {recipes.length} recipes to browse, search, and cook. Pick one and get
            the full method.
          </p>
        </section>
        <RecipeGrid recipes={recipes} />
      </main>
      <footer className="site-footer">
        Built with Next.js + TypeScript · NextBites
      </footer>
    </>
  );
}
