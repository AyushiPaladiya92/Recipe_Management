import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mt-4">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid mb-3" />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  );
}

export default RecipeDetails;