import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Partner with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Benefit 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Increased Revenue</h3>
              <p className="text-gray-600">Monetize your digital screens effectively and boost your earnings.</p>
            </div>
            {/* Benefit 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Full Control</h3>
              <p className="text-gray-600">You have complete control over your advertising space and content.</p>
            </div>
            {/* Benefit 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Support & Analytics</h3>
              <p className="text-gray-600">Get detailed analytics and full support to optimize your ad spaces.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default BenefitsSection;
  