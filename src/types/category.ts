type Category = {
  type_display: string;
  icon: string;
  ingredients: Array<{
    name: string;
    type: string;
    type_display: string;
  }>;
};
export default Category;
