"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMealIdeas = async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  const handleMealClick = (meal) => {
    console.log(`Clicked on: ${meal.strMeal}`);
  };


  const MealList = ({ meals, onMealClick }) => {
    return (
      <ul className="list-disc pl-8 space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="text-lg text-black bg-white p-3 rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
            onMouseEnter={() => console.log(`Hovered on: ${meal.strMeal}`)}
            onMouseLeave={() => console.log(`Unhovered on: ${meal.strMeal}`)}
            onClick={() => onMealClick(meal)}
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-8 bg-gray-200 rounded-lg shadow-lg m-6">
      <h1 className="text-3xl font-bold text-black mb-8">Meal Ideas</h1>
        <MealList meals={meals} onMealClick={handleMealClick} />    
    </div>
  );
}
