import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (query.trim() === "") return;

        try {
            const { data } = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            console.log("Search Results:", data.meals);

            if (data.meals && data.meals.length > 0) {
                navigate(`/meal/${data.meals[0].idMeal}`);
            } else {
                alert("Meal not found!");
            }
        } catch (error) {
            console.error("Search error:", error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="h-96 bg-[url('C:\Users\pc\Desktop\Food-Finder-ReactJs\src\assets\kitchen-image.jpg')] bg-cover bg-center mt-0  ">
        <div className="flex items-center gap-2 max-w-lg mx-auto mb-6">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search Recipies heare..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-64 p-2 rounded-3xl pl-10 mt-36 ms-40 text-black bg-white"

                />
                <button
                    onClick={handleSearch}
                    className=" text-white p-3 rounded "
                    title="Search"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="  h-7 w-7 text-white border-white bg-orange-600 rounded-full p-2 "
                    />
                </button>
                <h1 className="text-white text-3xl text-center ms-20">What are your favorite Cuisines?</h1>
                <p className="text-white  text-center ms-20 mt-5">PERSONALIZE YOUR EXPERIENCE</p>

            </div>


        </div>
        </div>
    );
};
