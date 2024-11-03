import { useEffect, useState } from "react";
import IngredientCategoryDropDown from "./IngredientCategory";
import IngredientType from "../types/ingredient";

type Category = {
  type_display: string;
  icon: string;
  ingredients: Array<{
    name: string;
    type: string;
    type_display: string;
  }>;
};

function IngredientSection({
  selectedIngredients,
  setSelectedIngredients,
}: {
  selectedIngredients: IngredientType[];
  setSelectedIngredients: (ingredients: IngredientType[]) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/foods/");
        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }
        const data = await response.json();
        const categoriesArray = Object.entries(
          data.ingredients_by_type as Category[],
        ).map(([type_display, data]) => ({
          type_display: type_display as string,
          icon: data.icon as string,
          ingredients: data.ingredients as Array<{
            name: string;
            type: string;
            type_display: string;
          }>,
        }));
        setCategories(categoriesArray);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleIngredientClick = (ingredient: IngredientType) => {
    const newIngredients = (prevIngredients: IngredientType[]) =>
      prevIngredients.some((selected) => selected.name === ingredient.name)
        ? prevIngredients.filter(
            (selected) => selected.name !== ingredient.name,
          )
        : [...prevIngredients, ingredient];
    setSelectedIngredients(newIngredients(selectedIngredients));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card w-full bg-base-100 bg-white/80 shadow-xl">
      <div className="card-body">
        <span className="card-title m-1 justify-center text-4xl text-gray-700">
          مواد اولیه
        </span>
        <div className="flex flex-wrap justify-around gap-5">
          {categories.map((category) => (
            <IngredientCategoryDropDown
              key={category.type_display}
              title={category.type_display}
              ingredients={category.ingredients}
              icon={category.icon}
              selectedIngredients={selectedIngredients}
              onIngredientClick={handleIngredientClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientSection;
