import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:shadow-2xl hover:scale-105">
      <img src={recipe.image} className="w-full h-48 object-cover" alt={recipe.title} />
      <div className="p-6 bg-gray-50">
        <h5 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h5>
        <p className="text-gray-700 mb-4">{recipe.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <small>Cooking Time: {recipe.cookingTime} minutes</small>
        </p>
        <Link to={`/recipe/${recipe.id}`} className="block w-full no-underline bg-yellow-500 text-white text-center font-semibold py-2 rounded-md hover:bg-yellow-400 transition duration-200">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
