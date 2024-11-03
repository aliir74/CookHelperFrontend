import { useState } from "react";
import IngredientType from "../types/ingredient";

function useSelectedIngredients() {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientType[]
  >([]);

  return { selectedIngredients, setSelectedIngredients };
}

export default useSelectedIngredients;
