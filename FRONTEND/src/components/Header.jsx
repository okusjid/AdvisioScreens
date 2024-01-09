import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AdvisoScreens</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
            <Link to="/signup" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">Get started</Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/locations" className="block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">Locations</Link>
              </li>
              <li>
                <Link to="/cost" className="block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">Cost</Link>
              </li>
              <li>
                <Link to="/media-owners" className="block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">Media Owners</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
