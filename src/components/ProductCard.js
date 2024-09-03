import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ imgSrc, title, description, price, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ title, price });
      setMessage("Added to cart!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow({ title, price });
      setMessage("Please Login and fill Address");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="p-card relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-auto object-cover" />
      <div className="icon-fav absolute top-2 right-2 z-10">
        <FaHeart
          className={`cursor-pointer ${isFavorite ? "text-red-700" : "text-gray-500"} hover:text-red-700`}
          onClick={toggleFavorite}
        />
      </div>
      <div className="p-description p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <p className="text-gray-800 font-bold mt-2">{price}</p>
        <div className="flex mt-4">
          <button
            className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
          <button
            className="w-1/2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 ml-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        {message && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
