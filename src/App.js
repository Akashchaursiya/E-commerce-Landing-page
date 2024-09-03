import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartItemsCount={cartItems.length} />
      <HeroSection addToCart={addToCart} />
      <FeaturesSection addToCart={addToCart} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;