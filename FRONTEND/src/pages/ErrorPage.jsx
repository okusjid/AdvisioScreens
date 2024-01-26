import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

const ErrorPage = ({ errorCode, message }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl text-gray-600 mx-auto">
          <FiAlertCircle className="inline-block" /> {/* Ensuring the icon is inline */}
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mt-4">{errorCode}</h1>
        <p className="text-xl text-gray-600 mt-2">{message}</p>
        <p className="mt-2 text-gray-500">It seems we can't find what you're looking for. Perhaps searching can help or go back to the Homepage.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
