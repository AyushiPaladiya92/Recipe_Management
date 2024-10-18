import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';


function Home({ recipes }) {
  const featuredRecipes = recipes.slice(0, 6); // Show only first 6 recipes

  return (
    <div>
      <div className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-4 text-white">Welcome to Recipe Management</h1>
              <p className="lead text-white">Discover, create, and manage your favorite<br></br> recipes all in one place.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">Featured Recipes</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} className="col">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/recipes" className="btn  btn-lg">View All Recipes</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;