import React, { useState, useEffect } from 'react';

function RecipeForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        ingredients: initialData.ingredients.join(', '),
        instructions: initialData.instructions.join('\n')
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions.split('\n').filter(item => item.trim() !== '')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {initialData ? 'Update Recipe' : 'Add Recipe'}
      </h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients (comma-separated)</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Instructions (one per line)</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cookingTime" className="block text-gray-700 font-semibold mb-2">Cooking Time (minutes)</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="cookingTime"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image URL</label>
        <input
          type="url"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="w-full bg-yellow-600 text-white font-semibold p-2 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-700">
        {initialData ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
}

export default RecipeForm;
