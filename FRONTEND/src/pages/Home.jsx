import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero section with dark background and red accent text */}
      <section className="bg-black text-white text-center py-24">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">ADVISOSCREENS</h1>
        <p className="text-2xl mb-6">Capture new audiences and boost your sales with digital billboards that you control. Surprisingly affordable and stunningly effective.</p>
        <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Get Started
        </Link>
      </section>

      {/* Features section with a cleaner layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {/* Feature One */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">Retail</h2>
              <p className="text-gray-700">Empower your retail business with dynamic and targeted ad displays.</p>
            </div>
            {/* Feature Two */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">Restaurant</h2>
              <p className="text-gray-700">Entice diners with mouth-watering visuals and promotions.</p>
            </div>
            {/* Feature Three */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">Nonprofit</h2>
              <p className="text-gray-700">Amplify your cause with impactful and engaging advertisements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with blue background */}
      <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Trusted by over 200,000 independent businesses and advertisers</h2>
        <Link to="/signup" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Sign Up
        </Link>
      </section>
    </div>
  );
};

export default Home;
