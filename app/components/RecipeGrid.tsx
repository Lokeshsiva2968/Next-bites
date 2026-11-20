"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matchingRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <section id="recipes" aria-label="Recipes">
      <div className="recipe-search">
        <label htmlFor="recipe-search">Search by recipe or cuisine</label>
        <input
          id="recipe-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try pizza or Italian"
        />
      </div>
      {matchingRecipes.length > 0 ? (
        <div className="recipe-grid">
          {matchingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="recipe-grid__empty" role="status">
          No recipes match “{query}”. Try a different title or cuisine.
        </p>
      )}
    </section>
  );
}
