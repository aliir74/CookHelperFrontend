import IngredientType from "../types/ingredient";

function IngredientCategoryDropDown({
  title,
  ingredients,
  icon,
  selectedIngredients,
  onIngredientClick,
}: {
  title: string;
  ingredients: Array<{ name: string; type: string; type_display: string }>;
  icon: string;
  selectedIngredients: IngredientType[];
  onIngredientClick: (ingredient: IngredientType) => void;
}) {
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
                onClick={() => onIngredientClick(ingredient)}
                className={
                  selectedIngredients.some(
                    (selected) => selected.name === ingredient.name,
                  )
                    ? "bg-success text-white"
                    : ""
                }
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
