import Food from "./Food";
import { useAppContext } from "../hooks/useAppContext";
import { TEXTS } from "../types/consts";
import { useEffect } from "react";
import { useCallback } from "react";
import FoodType from "../types/food";
function FoodsSection() {
  const {
    foods,
    selectedIngredients,
    isLoading,
    setFoods,
    setFirstLoad,
    firstLoad,
    setIsLoading,
  } = useAppContext();

  const submitHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(import.meta.env.VITE_API_URL + "/foods/", {
        method: "POST",
        body: JSON.stringify({
          ingredients: selectedIngredients,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(async () => {
        const data = await response.json();
        setFoods(data.foods as FoodType[]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setFoods([]);
      setIsLoading(false);
    }
  }, [selectedIngredients, setFoods, setIsLoading]);

  useEffect(() => {
    if (selectedIngredients.length !== 0 && firstLoad) {
      setFirstLoad(false);
    }
    if (firstLoad) return;
    submitHandler();
  }, [selectedIngredients, submitHandler, firstLoad, setFirstLoad]);
  return (
    <div className="card mt-10 w-full bg-base-100 bg-white/80 shadow-xl">
      <div className="card-body">
        <span className="card-title m-1 justify-center text-4xl text-gray-700">
          {isLoading ? TEXTS.loading : TEXTS.foods}
        </span>
        <div className="flex flex-wrap justify-around gap-5">
          {isLoading ? (
            <>
              <Food />
              <Food />
              <Food />
            </>
          ) : foods.length > 0 ? (
            foods.map((food) => (
              <Food
                key={food.name}
                food={food}
                selectedIngredients={selectedIngredients}
              />
            ))
          ) : firstLoad ? (
            <div className="flex h-full items-center justify-center">
              <span className="text-2xl text-gray-700">{TEXTS.firstLoad}</span>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-2xl text-gray-700">
                {TEXTS.noFoodsFound}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodsSection;
