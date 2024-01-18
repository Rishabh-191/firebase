import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Head(props) {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-xl text-indigo-600">
            FAQ Quizz
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={toggleNav}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className={`md:flex ${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          <Link
            to="/contact"
            className={`p-2 lg:px-4 md:mx-2 ${
              location.pathname === '/contact'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600'
            } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
          >
            Contact
          </Link>
          <Link
            to="/"
            className={`p-2 lg:px-4 md:mx-2 ${
              location.pathname === '/'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600'
            } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
          >
            Home
          </Link>
          {!props.username ? (
            <>
              <Link
                to="/login"
                className={`p-2 lg:px-4 md:mx-2 ${
                  location.pathname === '/login'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600'
                } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`p-2 lg:px-4 md:mx-2 ${
                  location.pathname === '/register'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600'
                } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
              >
                Register
              </Link>
              <Link
                to="/question"
                className={`p-2 lg:px-4 md:mx-2 ${
                  location.pathname === '/question'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600'
                } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
              >
                Add Quiz
              </Link>
            </>
          ) : (
            <>
              <span className="text-black p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                Welcome, {props.username}
              </span>
              <Link
                to="/logout"
                className={`p-2 lg:px-4 md:mx-2 ${
                  location.pathname === '/logout'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600'
                } rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`}
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}