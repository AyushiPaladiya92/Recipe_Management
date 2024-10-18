import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-2 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">About Us</h5>
            <p className="text-white">We are passionate about sharing delicious recipes and cooking tips with food enthusiasts around the world.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none"><i className="bi bi-house-door me-2"></i>Home</a></li>
              <li className="mb-2"><a href="/recipes" className="text-white text-decoration-none"><i className="bi bi-book me-2"></i>Recipes</a></li>
              <li className="mb-2"><a href="/add-recipe" className="text-white text-decoration-none"><i className="bi bi-plus-circle me-2"></i>Add Recipe</a></li>
              <li className="mb-2"><a href="/contact" className="text-white text-decoration-none"><i className="bi bi-envelope me-2"></i>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white text-decoration-none me-3 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white text-decoration-none me-3 fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white text-decoration-none me-3 fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white text-decoration-none fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary"/>
        <div className="text-center text-white">
          <p>&copy; 2023 Recipe Management App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;