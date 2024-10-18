import React from 'react';
import RecipeCard from '../components/RecipeCard';

function Recipes({ recipes }) {
  return (
    <>
    <div className="recipe-list-header">
    <h1 className="mb-4 text-center">All Recipes</h1>
    </div>
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Recipes;