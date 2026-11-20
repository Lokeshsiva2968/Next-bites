import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div
        className="recipe-card__art"
        style={{ backgroundColor: recipe.color }}
        aria-hidden="true"
      >
        <span>{recipe.emoji}</span>
      </div>
      <div className="recipe-card__content">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <ul className="recipe-card__tags" aria-label="Recipe details">
          <li>{recipe.minutes} min</li>
          <li>{recipe.difficulty}</li>
          <li className="recipe-card__cuisine">{recipe.cuisine}</li>
        </ul>
      </div>
    </article>
  );
}
