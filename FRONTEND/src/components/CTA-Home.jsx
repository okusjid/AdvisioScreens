import React from 'react';
import { Link } from 'react-router-dom';


// CTA Section Component
const CTASection = () => {
    return (
      <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Trusted by over 200,000 independent businesses and advertisers</h2>
        <Link to="/signup" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Sign Up
        </Link>
      </section>
    );
  };
  export default CTASection;