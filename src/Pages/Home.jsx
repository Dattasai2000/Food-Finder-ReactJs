import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "../Components/searchbar";
import { CategoryCard } from "../Components/CategoryCard";


export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => setCategories(res.data.categories));
  }, []);

  return (
    <div >
            <SearchBar />
      <h2 className="text-xl font-semibold mb-4 mt-8 "> CATEGORIES</h2>
      <hr className="w-16 text-orange-500 font-bold" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(cat => (
          <CategoryCard key={cat.idCategory} category={cat} />
        ))}
      </div>
    </div>
  );
};
