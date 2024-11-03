import Food from "./Food";
import { useAppContext } from "../hooks/useAppContext";
import { TEXTS } from "../types/consts";
function FoodsSection() {
  const { foods, selectedIngredients, isLoading, firstLoad } = useAppContext();
  return (
    <div className="card w-full bg-base-100 bg-white/80 shadow-xl">
      <div className="card-body">
        <span className="card-title m-1 justify-center text-4xl text-gray-700">
          غذاها
        </span>
        <div className="flex flex-wrap justify-around gap-5">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : firstLoad ? (
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
