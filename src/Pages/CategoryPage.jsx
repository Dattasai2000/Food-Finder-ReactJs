import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MealCard } from "../Components/MealCard";
import { SearchBar } from "../Components/searchbar";


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
    <div >
      {category && (
        <>
        <SearchBar/>
      
        <div className="border-2 border-pink-800 mb-8 mt-5 ms-36 me-20 p-4">
          <h1 className="text-2xl font-bold mb-2 ">{category.strCategory}</h1>
          <p className="mb-4">{category.strCategoryDescription}</p>
          </div>
        </>
      )}
        <h1 className="text-4xl ms-36 me-20 ">MEALS</h1>
        <hr className="text-5xl text-orange-600 font-extrabold w-26 ms-36 " />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4  mt-5 ms-36 me-20">
        {meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};
