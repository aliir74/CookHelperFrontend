import { useEffect } from "react";
import IngredientCategoryDropDown from "./IngredientCategory";
import { useAppContext } from "../hooks/useAppContext";
import CategoryType from "../types/category";

function IngredientSection() {
  const { categories, setCategories } = useAppContext();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/foods/");
        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }
        const data = await response.json();
        const categoriesArray = Object.entries(
          data.ingredients_by_type as CategoryType[],
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
        console.error(err);
      }
    };

    fetchCategories();
  }, [setCategories]);

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientSection;
