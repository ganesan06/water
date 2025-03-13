import React, { useState } from 'react';
import { Droplets, ShoppingCart, Map, Home, Phone } from 'lucide-react';
import HomePage from '../components/HomePage';
import Cart from '../components/Cart';
import Tracking from '../components/Tracking';
import Navbar from '../components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onAddToCart={addToCart} />;
      case 'cart':
        return <Cart items={cart} setCart={setCart} />;
      case 'tracking':
        return <Tracking />;
      default:
        return <HomePage onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} cartItemCount={cart.length} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;