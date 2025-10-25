"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        return data.meals || [];
    };

    const loadMealIdeas = async () => {
        const mealList = await fetchMealIdeas(ingredient);
        setMeals(mealList);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (!ingredient) {
        return (
            <div>
                <h1 className="mt-4 font-bold text-xl mb-2">Meal ideas (select an item)</h1>
                <p className="text-gray-500">Choose an item to see ideas.</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="mt-4 font-bold text-xl mb-2">Meal ideas for &quot;{ingredient}&quot;</h1>
            
            {meals.length > 0 ? (
            <ul className="grid grid-cols-2 gap-3 w-120 mb-5">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="p-2 border rounded-md">
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
            ) : (
                <p className="text-red-400"> No meal ideas found.</p>
            )}
        </div>
    );
}