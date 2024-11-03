import { useState } from "react";
import FoodType from "../types/food";

function useFoods() {
  const [foods, setFoods] = useState<FoodType[]>([]);

  return { foods, setFoods };
}

export default useFoods;
