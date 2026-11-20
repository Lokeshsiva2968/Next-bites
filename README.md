# NextBites

A responsive recipe app built with Next.js and TypeScript. Recipes are defined
in `app/data/recipes.ts`, searchable by title or cuisine on the home page, and
available on individual `/recipe/[id]` pages with ingredients and cooking steps.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the recipes.

## Deploy

The GitHub Actions workflow builds and deploys the static export to GitHub Pages:
[NextBites live site](https://lokeshsiva2968.github.io/Next-bites/).
