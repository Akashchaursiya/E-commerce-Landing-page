import React, { useState, useEffect } from "react";
import background from "../asete/background.png";
import background1 from "../asete/background1.png";

const HeroSection = ({ addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [background, background1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  
  return (
    <header className="hero-container">
      <img src={backgrounds[currentIndex]} alt="Background" className="hero-image" />
      <div className="button-container">
        <a
          href="#shop"
          className="btn-shop-now bg-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 overflow-hidden"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
