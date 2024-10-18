import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes, onDelete }) {
  return (
    <>
    <div className="recipe-list-header">
    <h1 className="mb-4 text-center">Recipe List</h1>
  </div>
    <div className="container mt-4">
    
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Cooking Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.title}</td>
              <td>{recipe.cookingTime} minutes</td>
              <td>
                <Link to={`/edit-recipe/${recipe.id}`} className="btn btn-sm btn-success me-2">Edit Recipe</Link>
                <button onClick={() => onDelete(recipe.id)} className="btn btn-sm btn-danger">Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default RecipeList;