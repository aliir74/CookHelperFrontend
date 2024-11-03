import { createContext } from "react";
import CategoryType from "../types/category";
import FoodType from "../types/food";
import IngredientType from "../types/ingredient";

type AppContextType = {
  categories: CategoryType[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  foods: FoodType[];
  setFoods: React.Dispatch<React.SetStateAction<FoodType[]>>;
  selectedIngredients: IngredientType[];
  setSelectedIngredients: React.Dispatch<
    React.SetStateAction<IngredientType[]>
  >;
};

export const AppContext = createContext<AppContextType | null>(null);
