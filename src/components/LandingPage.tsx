import { useState } from "react";
import FormSection from "./FormSection";
import IngredientSection from "./IngredientSection";
import FoodsSection from "./FoodsSection";
import FoodType from "../types/food";
import IngredientType from "../types/ingredient";
function LandingPage() {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientType[]
  >([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  return (
    <div>
      <IngredientSection
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
      <FormSection
        selectedIngredients={selectedIngredients}
        setFoods={setFoods}
      />
      <FoodsSection selectedIngredients={selectedIngredients} foods={foods} />
    </div>
  );
}

export default LandingPage;
