import React from 'react';
import { Droplets, ShoppingCart, Map, Home } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, cartItemCount }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2" onClick={() => setCurrentPage('home')} role="button">
            <Droplets className="h-8 w-8" />
            <span className="text-xl font-bold">AquaExpress</span>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-1 ${currentPage === 'home' ? 'text-blue-200' : ''}`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('cart')}
              className={`flex items-center space-x-1 relative ${currentPage === 'cart' ? 'text-blue-200' : ''}`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setCurrentPage('tracking')}
              className={`flex items-center space-x-1 ${currentPage === 'tracking' ? 'text-blue-200' : ''}`}
            >
              <Map className="h-5 w-5" />
              <span>Tracking</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;