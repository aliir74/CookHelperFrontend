import { useState } from "react";
import CategoryType from "../types/category";

function useCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  return { categories, setCategories };
}
export default useCategories;
