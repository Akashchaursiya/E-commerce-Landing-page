import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import tshirt2 from '../asete/t-shirt2.png';
import tshirt3 from '../asete/t-shirt3.png';
import tshirt1 from '../asete/tshirt1.png';
import tshirt5 from '../asete/tshirt5.png'
import tshirt6 from '../asete/tshirt6.png';
import tshirt7 from '../asete/tshirt7.png';
import tshirt8 from '../asete/tshirt8.png';
import tshirt9 from '../asete/tshirt9.png';

const FeaturesSection = ({ addToCart }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.title} has been added to your cart!`);
    setTimeout(() => setMessage(''), 2000); 
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    setMessage(`You have purchased ${product.title}!`);
    setTimeout(() => setMessage(''), 2000); 
  };

  return (
    <section id="shop" className="py-3">
      <div className="container mx-auto px-1">
        <h2 className="text-3xl font-bold text-center mb-8"> T-Shirts for Girls</h2>

      
        {message && (
          <div className="bg-green-500 text-white text-center p-2 rounded mb-2">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <ProductCard
            imgSrc={tshirt5}
            rating={4.4} 
            title="Cool Graphic Tee"
            description="A trendy tee with a cool graphic print."
            price="$8.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
          <ProductCard
            imgSrc={tshirt6}
            rating={3.9} 
            title="Classic White Tee"
            description="A versatile white T-shirt for any wardrobe."
            price="$7.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
          <ProductCard
            imgSrc={tshirt7}
            rating={4.2} 
            title="Vintage Band Tee"
            description="Show off your favorite band with this vintage tee."
            price="$9.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
           <ProductCard
            imgSrc={tshirt9}
            rating={4.1} 
            title="Vintage Band Tee"
            description="Show off your favorite band with this vintage tee."
            price="$9.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 mt-8">T-Shirts for Men</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProductCard
            imgSrc={tshirt2}
            rating={4.4} 
            title="Cool Graphic Tee"
            description="A trendy tee with a cool graphic print."
            price="$8.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
          <ProductCard
            imgSrc={tshirt3}
            rating={4.7} 
            title="Classic White Tee"
            description="A versatile white T-shirt for any wardrobe."
            price="$7.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
          <ProductCard
            imgSrc={tshirt1}
            rating={4.0} 
            title="Classic white t-shirt"
            description="Show off your favorite band with this vintage tee."
            price="$9.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
          <ProductCard
            imgSrc={tshirt8}
            rating={4.5} 
            title="Cloer t-shirt"
            description="Show off your favorite band with this vintage tee."
            price="$9.99"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;