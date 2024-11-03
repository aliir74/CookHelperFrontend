import { createContext, useState, ReactNode } from "react";
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
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  firstLoad: boolean;
  setFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientType[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        foods,
        setFoods,
        selectedIngredients,
        setSelectedIngredients,
        isLoading,
        setIsLoading,
        firstLoad,
        setFirstLoad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
