import { useAppContext } from "../hooks/useAppContext";
import IngredientType from "../types/ingredient";

function IngredientCategoryDropDown({
  title,
  ingredients,
  icon,
}: {
  title: string;
  ingredients: Array<{ name: string; type: string; type_display: string }>;
  icon: string;
}) {
  const { selectedIngredients, setSelectedIngredients } = useAppContext();
  const handleIngredientClick = (ingredient: IngredientType) => {
    const newIngredients = (prevIngredients: IngredientType[]) =>
      prevIngredients.some((selected) => selected.name === ingredient.name)
        ? prevIngredients.filter(
            (selected) => selected.name !== ingredient.name,
          )
        : [...prevIngredients, ingredient];
    setSelectedIngredients(newIngredients(selectedIngredients));
  };
  const isAnySelected = selectedIngredients.some((selected) =>
    ingredients.some((ingredient) => ingredient.name === selected.name),
  );

  return (
    <div className="card flex max-h-32 max-w-48 cursor-pointer bg-base-100 shadow-xl">
      <div className="card-body dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className={`card-title ${isAnySelected ? "text-success" : ""}`}
        >
          <span className="text-xl">{icon}</span>
          {title}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-48 rounded-box bg-base-100 p-2 shadow"
        >
          {ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              <a
                onClick={() => handleIngredientClick(ingredient)}
                className={`${
                  selectedIngredients.some(
                    (selected) => selected.name === ingredient.name,
                  )
                    ? "bg-success text-white"
                    : ""
                } rounded-none`}
              >
                {ingredient.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientCategoryDropDown;
