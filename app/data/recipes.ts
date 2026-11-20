export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  difficulty: "Easy" | "Medium";
  cuisine: string;
  emoji: string;
  color: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    emoji: "🍕",
    color: "#ffe0d2",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup crushed San Marzano tomatoes",
      "150 g fresh mozzarella, torn",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
      "Salt",
    ],
    steps: [
      "Heat the oven and a pizza stone to 250°C (480°F), or as hot as your oven allows.",
      "Stretch the dough into a thin round and spread the tomatoes over it, leaving a small edge.",
      "Top with mozzarella, drizzle with olive oil, and season lightly with salt.",
      "Bake until the crust is blistered and the cheese is bubbling, about 8–12 minutes.",
      "Scatter fresh basil over the pizza and serve hot.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    emoji: "🧆",
    color: "#ffddb2",
    ingredients: [
      "400 g paneer, cut into cubes",
      "1/2 cup plain yogurt",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon each paprika and garam masala",
      "1 red bell pepper and 1 onion, cut into chunks",
      "1 tablespoon lemon juice",
      "Salt",
    ],
    steps: [
      "Mix the yogurt, ginger-garlic paste, spices, lemon juice, and salt in a bowl.",
      "Fold in the paneer, pepper, and onion; marinate for at least 20 minutes.",
      "Thread the paneer and vegetables onto skewers.",
      "Grill or broil, turning occasionally, until lightly charred and heated through.",
      "Serve warm with lemon wedges and chutney.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
    emoji: "☕",
    color: "#dff1ff",
    ingredients: [
      "1 cup coarsely ground coffee",
      "4 cups cold filtered water",
      "Ice",
      "Milk or sweetener, optional",
    ],
    steps: [
      "Combine the coffee grounds and cold water in a large jar.",
      "Cover and steep in the refrigerator for 12–18 hours.",
      "Strain through a fine-mesh sieve lined with a coffee filter.",
      "Pour over ice and dilute with water or milk to taste.",
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
    emoji: "🍔",
    color: "#ffe0cd",
    ingredients: [
      "2 vegetable burger patties",
      "2 burger buns",
      "2 lettuce leaves",
      "1 tomato, sliced",
      "2 slices of cheese, optional",
      "2 tablespoons burger sauce",
      "1 tablespoon oil",
    ],
    steps: [
      "Cook the patties in a lightly oiled pan according to their directions, until crisp and hot.",
      "Toast the cut sides of the buns in the pan.",
      "Spread burger sauce over each bun base and add lettuce and tomato.",
      "Place a patty on each bun, add cheese if using, then close with the top bun.",
      "Serve immediately with your favorite sides.",
    ],
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    description: "Golden fries tossed in chaat masala and chilli.",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Snacks",
    emoji: "🍟",
    color: "#ffefad",
    ingredients: [
      "500 g potatoes, cut into fries",
      "2 tablespoons oil",
      "1 teaspoon chaat masala",
      "1/2 teaspoon chili powder",
      "Salt",
      "Chopped cilantro and lemon wedges, to serve",
    ],
    steps: [
      "Rinse the cut potatoes and pat them completely dry.",
      "Toss with oil and a pinch of salt, then spread in a single layer on a baking tray.",
      "Bake at 220°C (425°F), turning once, until golden and crisp, about 25 minutes.",
      "Toss the hot fries with chaat masala and chili powder.",
      "Finish with cilantro and serve with lemon wedges.",
    ],
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    description: "Bright, fizzy, lightly sweet, perfect for a hot day.",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Drinks",
    emoji: "🧋",
    color: "#dff1ff",
    ingredients: [
      "2 black tea bags",
      "2 cups boiling water",
      "2 tablespoons sugar or honey",
      "1 lemon, juiced",
      "2 cups cold water",
      "Ice and lemon slices, to serve",
    ],
    steps: [
      "Steep the tea bags in boiling water for 4–5 minutes, then remove them.",
      "Stir in the sugar or honey while the tea is warm.",
      "Add the lemon juice and cold water, then chill until cold.",
      "Pour over ice and garnish with lemon slices.",
    ],
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    description: "Warm, gooey single-serve cake from the microwave.",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Dessert",
    emoji: "🍫",
    color: "#f8e0fb",
    ingredients: [
      "4 tablespoons all-purpose flour",
      "2 tablespoons cocoa powder",
      "2 tablespoons sugar",
      "1/4 teaspoon baking powder",
      "3 tablespoons milk",
      "1 tablespoon neutral oil",
      "1 tablespoon chocolate chips",
    ],
    steps: [
      "Whisk the flour, cocoa, sugar, and baking powder in a microwave-safe mug.",
      "Stir in the milk and oil until the batter is smooth.",
      "Fold in the chocolate chips.",
      "Microwave for 60–90 seconds, until risen and just set in the center.",
      "Cool for a minute before eating.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    description: "Crisp cucumber, tomato, olives and feta in olive oil.",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    emoji: "🥗",
    color: "#e1ffe4",
    ingredients: [
      "1 cucumber, chopped",
      "2 tomatoes, chopped",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "100 g feta, crumbled",
      "2 tablespoons olive oil",
      "1 tablespoon red wine vinegar",
      "Dried oregano and black pepper",
    ],
    steps: [
      "Add the cucumber, tomatoes, red onion, and olives to a serving bowl.",
      "Whisk the olive oil and red wine vinegar together with a pinch of oregano.",
      "Pour the dressing over the vegetables and toss gently.",
      "Top with feta and black pepper, then serve.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
