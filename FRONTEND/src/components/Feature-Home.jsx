import React from 'react';
import { Link } from 'react-router-dom';

// Features Section Component
const FeaturesSection = () => {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Retail</h2>
              <p className="text-gray-700">Empower your retail business with dynamic and targeted ad displays.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Restaurant</h2>
              <p className="text-gray-700">Entice diners with mouth-watering visuals and promotions.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">Nonprofit</h2>
              <p className="text-gray-700">Amplify your cause with impactful and engaging advertisements.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default FeaturesSection;