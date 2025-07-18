import { Link } from "react-router-dom";

export const MealCard = ({ meal }) => (
  <Link to={`/meal/${meal.idMeal}`} className="border rounded p-2 hover:shadow">
    <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded" />
    <h4 className="mt-2 text-center font-medium">{meal.strMeal}</h4>
  </Link>
);
