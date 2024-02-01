import React from "react";
import {
  FaHardHat,
  FaHeart,
  FaMarkdown,
  FaRegChartBar,
  FaSmile,
  FaKeycdn,
} from "react-icons/fa"; // Import icons from 'react-icons'

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl text-center italic font-semibold text-blue-600 mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Benefit 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMarkdown className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Try it</h3>
          </div>
          {/* Benefit 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaSmile className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Make Customers insanely happy.
            </h3>
          </div>
          {/* Benefit 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaRegChartBar className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Make out-of-Home easy.</h3>
          </div>
          {/* Benefit 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaKeycdn className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Extreme ownership</h3>
          </div>
          {/* Benefit 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaHardHat className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Hard work wins.</h3>
          </div>
          {/* Benefit 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaHeart className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Honest because we care.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
