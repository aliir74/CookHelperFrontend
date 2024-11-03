import FoodType from "../types/food";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { DIFFICULTY_COLORS, DIFFICULTY_TEXT, TEXTS } from "../types/consts";
import IngredientType from "../types/ingredient";

function Food({
  food,
  selectedIngredients,
}: {
  food?: FoodType;
  selectedIngredients?: IngredientType[];
}) {
  if (!food || !selectedIngredients) {
    return (
      <div className="card flex w-1/4 cursor-pointer border-2 border-transparent bg-base-100 shadow-xl hover:border-success hover:shadow-2xl">
        <div className="card-body">
          <div className="card-title skeleton h-10 w-20"></div>
          <div className="flex w-full flex-row">
            <div className="flex w-full flex-row justify-between">
              <div className="skeleton h-8 w-20"></div>
              <div className="skeleton h-8 w-16"></div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="skeleton h-24"></div>
        </div>
      </div>
    );
  }
  const cookingTimeText = (cookingTime: number) => {
    if (cookingTime < 60) return `${cookingTime} ${TEXTS.cookingTime.minutes}`;
    return `${Math.floor(cookingTime / 60)} ${TEXTS.cookingTime.hours} ${
      cookingTime % 60 === 0
        ? ""
        : `${TEXTS.and} ${cookingTime % 60} ${TEXTS.cookingTime.minutes}`
    } `;
  };
  return (
    <div className="card flex w-1/4 cursor-pointer border-2 border-transparent bg-base-100 shadow-xl hover:border-success hover:shadow-2xl">
      <div className="card-body">
        <div className="card-title">{food.name}</div>
        <div className="flex w-full flex-row">
          <div className="flex w-full flex-row justify-between">
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className="mx-1 text-sm font-thin">
                {cookingTimeText(food.cooking_time)}
              </span>
            </div>
            <div>
              <span
                className={`badge text-white badge-${
                  food.difficulty === "Easy"
                    ? DIFFICULTY_COLORS.Easy
                    : food.difficulty === "Medium"
                      ? DIFFICULTY_COLORS.Medium
                      : DIFFICULTY_COLORS.Hard
                }`}
              >
                {DIFFICULTY_TEXT[food.difficulty]}
              </span>
            </div>
          </div>
        </div>
        <div className="divider my-1"></div>
        <div className="flex w-full flex-row flex-wrap justify-between">
          {food.ingredients.map((ingredient) => (
            // TODO: make responsive
            <div
              key={ingredient.name}
              className={`badge badge-outline m-1 p-1 ${
                selectedIngredients.some(
                  (selectedIngredient) =>
                    selectedIngredient.name === ingredient.name,
                )
                  ? "badge-success order-first"
                  : "badge-error order-last"
              }`}
            >
              {ingredient.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Food;
