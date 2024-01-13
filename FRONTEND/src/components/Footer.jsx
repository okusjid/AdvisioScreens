import React from 'react';
import { Link } from 'react-router-dom';
import '../animations.css';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400 fade-in">
          © 2023 <Link to="/" className="hover:underline">AdvisoScreens</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li className="slide-in mx-4">
            <Link to="/Gallary" className="hover:underline">Gallary</Link>
          </li>
          <li className="slide-in mx-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </li>
          <li className="slide-in mx-4">
            <Link to="/contacts" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
