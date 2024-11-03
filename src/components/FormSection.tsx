import { FORM_SECTION_TEXT } from "../types/consts";
import FoodType from "../types/food";
import useSelectedIngredients from "../hooks/useSelectedIngredients";
import useFoods from "../hooks/useFoods";
function FormSection() {
  const { selectedIngredients } = useSelectedIngredients();
  const { setFoods } = useFoods();
  const submitHandler = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/foods/", {
        method: "POST",
        body: JSON.stringify({
          ingredients: selectedIngredients,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFoods(data.foods as FoodType[]);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setFoods([]);
    }
  };

  return (
    <div
      className={`card-compact mx-auto my-5 w-56 rounded-lg bg-base-100 text-center text-white shadow-xl ${
        selectedIngredients.length === 0
          ? "btn-disabled bg-red-600"
          : "bg-green-600"
      }`}
    >
      <div
        className="card-body flex cursor-pointer flex-row justify-center rounded-lg"
        onClick={submitHandler}
      >
        <div className="max-w-56 text-2xl">
          <span>
            {selectedIngredients.length === 0
              ? FORM_SECTION_TEXT.disabled
              : FORM_SECTION_TEXT.submit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
