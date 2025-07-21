import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => (
  <Link to={`/category/${category.strCategory}`} className="block  rounded p-2 hover:shadow-md">
    <h3 className="text-center font-semibold mt-2 border w-28 bg-orange-500 ml-auto text-white rounded ">{category.strCategory}</h3>
    <img src={category.strCategoryThumb} alt={category.strCategory} className="rounded " />
    
  </Link>
);
