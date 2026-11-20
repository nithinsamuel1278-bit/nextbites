export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    emoji: "🍛",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Fried onions"],
    steps: [
      "Marinate the vegetables in yogurt and masala.",
      "Parboil the rice with whole spices.",
      "Layer the rice over the vegetables and top with fried onions.",
      "Cover tightly and cook on low heat for 20 minutes.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Bread slices", "Ripe avocado", "Lemon juice", "Salt", "Chili flakes"],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with lemon juice and salt.",
      "Spread on the toast and finish with chili flakes.",
    ],
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Avocado", "Rice vinegar"],
    steps: [
      "Cook the rice and season it with rice vinegar.",
      "Spread the rice over a nori sheet.",
      "Add the fillings and roll tightly.",
      "Slice into pieces with a wet knife.",
    ],
  },
  {
    id: "tacos",
    title: "Street Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Corn tortillas", "Seasoned filling", "Onion", "Coriander", "Lime"],
    steps: [
      "Cook the filling until browned and well seasoned.",
      "Warm the tortillas on a hot pan.",
      "Fill, then top with onion, coriander and a squeeze of lime.",
    ],
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Thai",
    ingredients: ["Rice noodles", "Tofu", "Bean sprouts", "Tamarind sauce", "Crushed peanuts"],
    steps: [
      "Soak the noodles until soft.",
      "Fry the tofu until crisp, then add the noodles and sauce.",
      "Toss in the bean sprouts and top with peanuts.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}