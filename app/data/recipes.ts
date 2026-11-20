export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veg-biryani", title: "Veg Biryani", emoji: "🍛", minutes: 50, difficulty: "Hard", cuisine: "Indian" },
  { id: "avocado-toast", title: "Avocado Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "American" },
  { id: "sushi-rolls", title: "Sushi Rolls", emoji: "🍣", minutes: 45, difficulty: "Hard", cuisine: "Japanese" },
  { id: "tacos", title: "Street Tacos", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican" },
  { id: "pad-thai", title: "Pad Thai", emoji: "🍜", minutes: 30, difficulty: "Medium", cuisine: "Thai" },
];