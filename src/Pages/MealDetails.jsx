import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchBar } from "../Components/searchbar";



export const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (

    <>
      <SearchBar />
      <div className="p-4 max-w-4xl mx-auto ">
        {/* Home Icon */}
        <div className=" w-auto bg-orange-500 mb-4 flex p-2 ">
          <i
            className="fa-solid fa-house text-xl text-white cursor-pointer hover:text-blue-500 mt-2 ms-2"
            title="Back to Home"
            onClick={() => navigate("/")}
          ></i>
          <h2 className="text-2xl font-light mb-4 ms-7"><span><i className="fa-solid fa-chevron-right text-white "></i><i className="fa-solid fa-chevron-right text-white me-7"></i>
          </span>{meal.strMeal.toUpperCase()}</h2>
        </div>
        <h4 className="font-bold text-3xl ">MEAL DETAILS</h4>
        <hr className="w-14 text-5xl text-orange-500 mb-4" />
        {/* Meal Details Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-96 h-96">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded mb-4"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
            <hr className="text-pink-600 mb-2" />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            {meal.strTags ? (
              <p>
                <strong>Tags:</strong>{" "}
                {meal.strTags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-pink-700 text-white text-sm px-2 py-1 rounded mr-2 mb-1"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </p>
            ) : (
              <p><strong>Tags:</strong> N/A</p>
            )}

            <p><strong>Source:</strong> {meal.strSource ? (
              <a href={meal.strSource} target="_blank" rel="noopener noreferrer" >
                {meal.strSource}
              </a>
            ) : "N/A"}</p>

            {/* Ingredients Section */}
            <div className="border bg-orange-500 p-4 mt-4 rounded">
              <h5 className="text-lg font-bold mb-2 text-white">Ingredients</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Array.from({ length: 10 }, (_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  return ingredient && (
                    <p key={i} className="text-white flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center border border-white rounded-full bg-cyan-400 text-white text-xs">{i + 1}</span>
                      {ingredient}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Measures Section */}
        <h5 className="font-bold mt-6">Measure :</h5>
        <div className="border-sky-200 grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 bg-cyan-50">
          {Array.from({ length: 10 }, (_, i) => {
            const measure = meal[`strMeasure${i + 1}`];
            return measure && (
              <p key={i}>
                <i className="fa-solid fa-vial text-red-500 mr-2"></i>
                {measure}
              </p>
            );
          })}
        </div>

        {/* Instructions Section */}
        <div className="mt-6">
          <strong className="block text-lg font-bold mb-2">Instructions:</strong>
          <ul className="pl-5 space-y-2">
            {meal.strInstructions?.split('.').map((step, index) => {
              const trimmedStep = step.trim();
              return trimmedStep ? (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] bg-red-500 text-white flex items-center justify-center rounded text-xs mt-1">
                    <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                  </span>
                  <span>{trimmedStep}.</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
         

    </>
  );
};
