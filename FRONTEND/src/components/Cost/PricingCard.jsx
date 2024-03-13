import React from "react";

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-3xl uppercase">{title}</h1>
        <h2 className="text-gray-800 font-bold text-2xl mt-2">${price}</h2>
      </div>
      <ul className="px-6 py-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="h-5 w-5 fill-current text-green-700 mr-2"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm3.707-10.293l-1.414-1.414-4.293 4.293-2.293-2.293-1.414 1.414 3 3 .707.707.707-.707 4.707-4.707z"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="px-6 py-4">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
