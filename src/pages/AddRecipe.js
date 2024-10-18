import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RecipeForm from '../components/RecipeForm';

function AddRecipe({ onAddRecipe }) {
  const navigate = useNavigate();

  const handleSubmit = (recipeData) => {
    onAddRecipe(recipeData);
    toast.success('Recipe added successfully!');
    navigate('/recipes');
  };

  return (
    <>
    <div className="recipe-list-header">
  <h1 className="mb-4 text-center">Add New Recipe</h1>
</div>
    <div className="container mt-4">
      
      <RecipeForm onSubmit={handleSubmit} />
    </div>
    </>
  );
}

export default AddRecipe;