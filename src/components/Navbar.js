import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItemsCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 animate-slideIn">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            T-Shirt
          </h1>
        </div>
        <div className="flex justify-center space-x-4 py-4 lg:hidden flex-grow">
          <button className="text-gray-600 hover:text-gray-800">
            <FaSearch className="w-6 h-6" />
          </button>
          <button className="header__icon">
            <FaShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="badge">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="#home" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
          <button className="relative text-gray-600 hover:text-gray-800">
            <FaSearch className="w-6 h-6" />
          </button>
          <button className="relative header__icon text-gray-600 hover:text-gray-800">
            <FaShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="badge">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md`}
        id="mobile-menu"
      >
        <ul className="flex flex-col text-center space-y-2 p-4">
          <li>
            <a href="#home" className="block text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="block text-gray-600 hover:text-gray-800">
              Shop
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-800"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
