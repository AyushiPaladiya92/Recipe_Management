import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link className="text-4xl font-extrabold text-gray-800 tracking-wide transition-all duration-300 hover:text-yellow-600" to="/">
          Gourmet<span className="text-yellow-600">Recipes</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={handleNavCollapse}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isNavCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-10 transition-all duration-500 ease-in-out`}
        >
          <ul className="text-center lg:flex lg:space-x-10 space-y-6 lg:space-y-0 text-gray-700 text-lg font-medium">
            <li>
              <Link
                className=" no-underline  text-yellow-600 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-600 pb-1"
                to="/" 
                onClick={handleNavCollapse}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-600 no-underline transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-600 pb-1"
                to="/recipes"
                onClick={handleNavCollapse}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-600 no-underline transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-600 pb-1"
                to="/add-recipe"
                onClick={handleNavCollapse}
              >
                Add Recipe
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-600 no-underline transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-600 pb-1"
                to="/recipe-list"
                onClick={handleNavCollapse}
              >
                Manage Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
