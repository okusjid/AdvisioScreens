import React from 'react';

// CTA Section Component
const Tagline = ({Tag1,Tag2,Tag3}) => {
    return (
      <section className="bg-indigo-300 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {Tag1} - <span className="block text-indigo-700 md:inline-block">{Tag2}</span>
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          {Tag3}
        </p>
      </section>
    );
};

export default Tagline;
