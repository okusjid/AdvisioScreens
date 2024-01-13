import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaRegChartBar, FaTools } from 'react-icons/fa'; // Import icons from 'react-icons'

const BenefitsSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Why Partner with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Benefit 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaDollarSign className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Increased Revenue</h3>
              <p className="text-gray-600">Monetize your digital screens effectively and boost your earnings. We cater to a variety of budgets, making digital billboards accessible and profitable.</p>
            </div>
            {/* Benefit 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Tailored to Your Needs</h3>
              <p className="text-gray-600">Whether you have one screen or a network, our platform adapts to your inventory seamlessly. With our user-friendly interface, managing your billboard space has never been easier.</p>
            </div>
            {/* Benefit 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaRegChartBar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Support & Analytics</h3>
              <p className="text-gray-600">Get detailed analytics and full support to optimize your ad spaces.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BenefitsSection;
