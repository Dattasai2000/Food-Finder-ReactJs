import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => setCategories(res.data.categories));
  }, []);

  return (
    <header className="flex justify-between items-center p-4 shadow bg-orange-500">
      <h1 className="text-xl font-bold text-white">🍽️ MEAL FINDER</h1>

      <div className="relative">
        <FaBars
          className="text-2xl cursor-pointer text-white"
          onClick={() => setShowMenu(true)}
        />

        {showMenu && (
          <div className="absolute right-0 bg-white border mt-2 rounded shadow p-4 z-10 w-48">
            {/* Close button inside menu */}
            <div className="flex justify-end mb-2">
              <FaTimes
                className="text-xl cursor-pointer text-red-600"
                onClick={() => setShowMenu(false)}
              />
            </div>

            {/* Category list */}
            {categories.map(cat => (
              <Link
                key={cat.idCategory}
                to={`/category/${cat.strCategory}`}
                className="block px-2 py-1 hover:bg-gray-100"
                onClick={() => setShowMenu(false)}
              >
                {cat.strCategory}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
