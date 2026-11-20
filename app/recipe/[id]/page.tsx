import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export default async function RecipeDetailPage({
  params,
}: PageProps<"/recipe/[id]">) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <main className="recipe-detail">
        <Link className="recipe-detail__back" href="/#recipes">
          ← Back to recipes
        </Link>
        <header className="recipe-detail__header">
          <div
            className="recipe-detail__art"
            style={{ backgroundColor: recipe.color }}
            aria-hidden="true"
          >
            <span>{recipe.emoji}</span>
          </div>
          <div>
            <p className="recipe-detail__eyebrow">{recipe.cuisine} recipe</p>
            <h1>{recipe.title}</h1>
            <p className="recipe-detail__description">{recipe.description}</p>
            <ul className="recipe-card__tags" aria-label="Recipe details">
              <li>{recipe.minutes} min</li>
              <li>{recipe.difficulty}</li>
              <li className="recipe-card__cuisine">{recipe.cuisine}</li>
            </ul>
          </div>
        </header>
        <div className="recipe-detail__content">
          <section aria-labelledby="ingredients-title">
            <h2 id="ingredients-title">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={`${recipe.id}-ingredient-${index}`}>{ingredient}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="steps-title">
            <h2 id="steps-title">Method</h2>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={`${recipe.id}-step-${index}`}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        Built with Next.js + TypeScript · NextBites
      </footer>
    </>
  );
}
