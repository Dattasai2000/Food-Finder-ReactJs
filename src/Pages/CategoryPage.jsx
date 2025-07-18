import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MealCard } from "../Components/MealCard";


export const CategoryPage = () => {
  const { name } = useParams();
  const [category, setCategory] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const catRes = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      const cat = catRes.data.categories.find(c => c.strCategory === name);
      setCategory(cat);

      const mealRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
      setMeals(mealRes.data.meals);
    };

    fetchData();
  }, [name]);

  return (
    <div className="p-4">
      {category && (
        <>
          <h1 className="text-2xl font-bold mb-2">{category.strCategory}</h1>
          <p className="mb-4">{category.strCategoryDescription}</p>
        </>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};
