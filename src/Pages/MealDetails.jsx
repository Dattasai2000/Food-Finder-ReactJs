import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => setMeal(res.data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-4" />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p className="mt-2"><strong>Instructions:</strong> {meal.strInstructions}</p>
    </div>
  );
};
