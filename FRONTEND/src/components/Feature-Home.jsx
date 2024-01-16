import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUtensils, FaHandsHelping } from 'react-icons/fa';

const FeaturesSection = () => {
    return (
      <section className="py-16 bg-gradient-to-br from-purple-50 to-teal-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

            <div className="p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-xl bg-gradient-to-br from-blue-200 to-indigo-100">
              <FaShoppingCart className="w-12 h-12 mx-auto mb-4 text-blue-800" />
              <h2 className="text-2xl font-semibold mb-2">Retail</h2>
              <p className="text-gray-700 mb-4">Empower your retail business with dynamic and targeted ad displays.</p>
              <Link to="/retail" className="text-blue-600 hover:text-blue-800">Learn More</Link>
            </div>

            <div className="p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-xl bg-gradient-to-br from-green-200 to-lime-100">
              <FaUtensils className="w-12 h-12 mx-auto mb-4 text-green-800" />
              <h2 className="text-2xl font-semibold mb-2">Restaurant</h2>
              <p className="text-gray-700 mb-4">Entice diners with mouth-watering visuals and promotions.</p>
              <Link to="/restaurant" className="text-green-600 hover:text-green-800">Learn More</Link>
            </div>

            <div className="p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-xl bg-gradient-to-br from-red-200 to-pink-100">
              <FaHandsHelping className="w-12 h-12 mx-auto mb-4 text-red-800" />
              <h2 className="text-2xl font-semibold mb-2">Nonprofit</h2>
              <p className="text-gray-700 mb-4">Amplify your cause with impactful and engaging advertisements.</p>
              <Link to="/nonprofit" className="text-red-600 hover:text-red-800">Learn More</Link>
            </div>

          </div>
        </div>
      </section>
    );
};

export default FeaturesSection;
