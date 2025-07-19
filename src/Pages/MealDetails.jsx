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
      <div className="flex">
        <div className="w-96 h-96">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-4 " /></div>

        <div className="ms-20">
          <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
          <hr className="text-pink-600" />
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong> Tags:</strong> {meal.strTags}</p>
          <p><strong>Source:</strong>"{meal.strSource}"</p>
          <div className="border bg-orange-500 p-4">
            <h5 className="text-lg font-bold mb-2">Ingredients</h5>
            <div className="grid grid-cols-3 gap-2">
              <p className="text-white ms-1"><span className="w-4 h-4 justify-center border border-white rounded-full text-white bg-cyan-400">
  1</span> {meal.strIngredient1}</p>
              <p  className="text-white ms-1"><strong>2:</strong> {meal.strIngredient2}</p>
              <p  className="text-white ms-1"><strong>3:</strong> {meal.strIngredient3}</p>
              <p  className="text-white ms-1"><strong>4:</strong> {meal.strIngredient4}</p>
              <p  className="text-white ms-1"><strong>5:</strong> {meal.strIngredient5}</p>
              <p  className="text-white ms-1"><strong>6:</strong> {meal.strIngredient6}</p>
              <p  className="text-white ms-1"><strong>7:</strong> {meal.strIngredient7}</p>
              <p  className="text-white ms-1"><strong>8:</strong> {meal.strIngredient8}</p>
              <p  className="text-white ms-1"><strong>9:</strong> {meal.strIngredient9}</p>
              <p   className="text-white ms-1"><strong>10:</strong> {meal.strIngredient10}</p>
            </div>
          </div>

        </div>
      </div>
      <div>
        <p><strong>Measurement1:</strong>"{meal.strMeasure1}"</p>
        <p><strong>Measurement2:</strong>"{meal.strMeasure2}"</p>
        <p><strong>Measurement3:</strong>"{meal.strMeasure3}"</p>
        <p><strong>Measurement4:</strong>"{meal.strMeasure4}"</p>
        <p><strong>Measurement5:</strong>"{meal.strMeasure5}"</p>
        <p><strong>Measurement6:</strong>"{meal.strMeasure6}"</p>
        <p><strong>Measurement7:</strong>"{meal.strMeasure7}"</p>
        <p><strong>Measurement8:</strong>"{meal.strMeasure8}"</p>
        <p><strong>Measurement9:</strong>"{meal.strMeasure9}"</p>
        <p><strong>Measurement10:</strong>"{meal.strMeasure10}"</p>
      </div>
      <p><strong>Instructions:</strong>"{meal.strInstructions}"</p>
    </div>
  );
};
