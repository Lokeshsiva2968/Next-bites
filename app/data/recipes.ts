export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  difficulty: "Easy" | "Medium";
  cuisine: string;
  emoji: string;
  color: string;
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
  },
];
