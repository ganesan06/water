import React, { useState } from 'react';
import { Package, CheckCircle, Truck, Home } from 'lucide-react';

const Tracking = () => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    setIsTracking(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Track Your Delivery</h2>
      
      <form onSubmit={handleTrack} className="mb-12">
        <div className="flex gap-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter your order ID"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Track Order
          </button>
        </div>
      </form>

      {isTracking && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold">Order #123456</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              In Transit
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

            <div className="space-y-8">
              <div className="relative flex items-center">
                <div className="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-24">
                  <h4 className="text-lg font-semibold">Order Confirmed</h4>
                  <p className="text-gray-600">Your order has been confirmed</p>
                  <p className="text-sm text-gray-500">Today, 10:00 AM</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-24">
                  <h4 className="text-lg font-semibold">Order Processed</h4>
                  <p className="text-gray-600">Your order has been processed and packed</p>
                  <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-24">
                  <h4 className="text-lg font-semibold">Out for Delivery</h4>
                  <p className="text-gray-600">Your order is on its way</p>
                  <p className="text-sm text-gray-500">Today, 11:00 AM</p>
                </div>
              </div>

              <div className="relative flex items-center opacity-50">
                <div className="absolute left-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-gray-400" />
                </div>
                <div className="ml-24">
                  <h4 className="text-lg font-semibold">Delivered</h4>
                  <p className="text-gray-600">Estimated delivery by 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracking;