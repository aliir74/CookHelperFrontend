import IngredientType from "./ingredient";

type FoodType = {
  name: string;
  ingredients: IngredientType[];
  cooking_time: number;
  difficulty: "Easy" | "Medium" | "Hard";
  matched_ingredients: number;
  missing_ingredients: number;
  start_to_work_time: number;
  working_time: number;
};

export default FoodType;
