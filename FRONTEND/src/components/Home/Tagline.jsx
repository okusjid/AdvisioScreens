import React from 'react';

// CTA Section Component
const Tagline = () => {
    return (
      <section className="bg-indigo-300 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Innovation in Action - <span className="block text-indigo-700 md:inline-block">The Proof is in the Numbers</span>
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the difference with data-driven results
        </p>
      </section>
    );
};

export default Tagline;
