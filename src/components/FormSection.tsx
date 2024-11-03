import { TEXTS } from "../types/consts";
import FoodType from "../types/food";
import { useAppContext } from "../hooks/useAppContext";

function FormSection() {
  const { selectedIngredients, setFoods, isLoading, setIsLoading } =
    useAppContext();
  const submitHandler = async () => {
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
        console.log(data);
        setFoods(data.foods as FoodType[]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setFoods([]);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`card-compact mx-auto my-5 w-56 cursor-pointer rounded-lg bg-base-100 text-center text-white shadow-xl ${
        isLoading
          ? "btn-disabled bg-gray-600"
          : selectedIngredients.length === 0
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
            {isLoading
              ? TEXTS.loading
              : selectedIngredients.length === 0
                ? TEXTS.disabled
                : TEXTS.submit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
