import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2023 <Link to="/" className="hover:underline">AdvisoScreens</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link to="/about" className="hover:underline mx-4">About</Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline mx-4">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/licensing" className="hover:underline mx-4">Licensing</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline mx-4">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
