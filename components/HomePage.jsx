import React from 'react';
import { Droplets, Map, Phone } from 'lucide-react';

const HomePage = ({ onAddToCart }) => {
  const waterProducts = [
    { id: '1', name: '20L Mineral Water Can', price: 15.99, image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80&w=500' },
    { id: '2', name: '10L Purified Water Bottle', price: 8.99, image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=500' },
    { id: '3', name: '5L Spring Water Bottle', price: 5.99, image: 'https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=1600"
          alt="Pure Water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
          <div className="text-white ml-12 space-y-4 max-w-xl">
            <h1 className="text-5xl font-bold">Pure Water Delivered to Your Doorstep</h1>
            <p className="text-xl">Get fresh, clean water delivered whenever you need it. Fast, reliable, and convenient.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waterProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <button
                  onClick={() => onAddToCart({ ...product, quantity: 1 })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Droplets className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 rounded-xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pure & Fresh</h3>
            <p className="text-gray-600">100% pure and fresh water from trusted sources</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick delivery to your doorstep</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;