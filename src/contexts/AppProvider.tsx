import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";
import CategoryType from "../types/category";
import FoodType from "../types/food";
import IngredientType from "../types/ingredient";

export function AppProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientType[]
  >([]);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        foods,
        setFoods,
        selectedIngredients,
        setSelectedIngredients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
