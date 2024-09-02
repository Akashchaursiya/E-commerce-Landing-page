import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ imgSrc, title, description, price, rating, onAddToCart, onBuyNow }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState("");

  const renderStars = () => {
  
    const validRating = typeof rating === 'number' && rating >= 0 && rating <= 5 ? rating : 0;
    
    const fullStars = Math.floor(validRating);
    const halfStar = validRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index}>&#9733;</span> 
        ))}
        {halfStar && <span>&#9734;</span>} 
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index}>&#9734;</span> 
        ))}
      </div>
    );
  };
  
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
      setMessage("Please Login and fill Adress");
      setTimeout(() => setMessage(""), 3000); 
    }
  };

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-45 object-cover" />
      <div className="absolute top-2 right-2 z-10">
        <FaHeart
          className={`cursor-pointer ${
            isFavorite ? "text-red-700" : "text-white-500"
          } hover:text-red-700`}
          onClick={toggleFavorite}
        />
      </div>
      <div className="p-4">
      <div className="text-yellow-500">{renderStars()}</div> 
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
