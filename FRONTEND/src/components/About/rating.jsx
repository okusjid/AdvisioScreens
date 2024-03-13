import React from "react";

const Rating = () => {
  return (
    <section className="bg-white p-5 m-3 rounded shadow-lg">
      <h4 className="text-2xl font-extrabold italic text-gray-800 mb-4">
        Rating Score
      </h4>
      <div className="flex flex-col lg:flex-row items-center gap-5 mt-5 ">
        {/* Very Satisfied */}
        <div className="flex flex-col items-center w-96 lg:w-1/3 p-5 border border-green-300 rounded shadow-md bg-green-50 transform transition-transform hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-green-500 w-16 h-16 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-600 mb-2">90%</h2>
            <h4 className="inline text-gray-700 text-md">Very Satisfied</h4>
          </div>
        </div>

        {/* Neutral */}
        <div className="flex flex-col items-center w-96 lg:w-1/3 p-5 border border-gray-300 rounded shadow-md bg-gray-100 transform transition-transform hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-gray-500 w-16 h-16 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-700 mb-2 ">10%</h2>
            <h4 className="inline text-gray-700 text-md">Neutral</h4>
          </div>
        </div>

        {/* Very Unsatisfied */}
        <div className="flex flex-col items-center w-96 lg:w-1/3 p-5 border border-red-300 rounded shadow-md bg-red-50 transform transition-transform hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-red-500 w-16 h-16 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-red-600 mb-2">0%</h2>
            <h4 className="inline text-gray-700 text-md">Very Unsatisfied</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
