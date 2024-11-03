import Food from "./Food";
import useSelectedIngredients from "../hooks/useSelectedIngredients";
import useFoods from "../hooks/useFoods";
function FoodsSection() {
  const { foods } = useFoods();
  const { selectedIngredients } = useSelectedIngredients();
  return (
    <div className="card w-full bg-base-100 bg-white/80 shadow-xl">
      <div className="card-body">
        <span className="card-title m-1 justify-center text-4xl text-gray-700">
          غذاها
        </span>
        <div className="flex flex-wrap justify-around gap-5">
          {foods.length > 0 ? (
            foods.map((food) => (
              <Food
                key={food.name}
                food={food}
                selectedIngredients={selectedIngredients}
              />
            ))
          ) : (
            <>
              <Food />
              <Food />
              <Food />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodsSection;
