import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SignIn,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => setShowSignIn(!showSignIn);
  const toggleSignUp = () => setShowSignUp(!showSignUp);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-4 py-2 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Left Section - Logo */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AdvisoScreens</span>
            </Link>
          </div>

          {/* Center Section - Navigation Links */}
          <ul className="hidden lg:flex flex-grow justify-center space-x-8">
            <li>
              <Link to="/Howitworks" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">How It Works</Link>
            </li>
            <li>
              <Link to="/locations" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">Locations</Link>
            </li>
            <li>
              <Link to="/cost" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">Cost</Link>
            </li>
            <li>
              <Link to="/media-owners" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">Media Owners</Link>
            </li>
            <li>
              <Link to="/about" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">About</Link>
            </li>
          </ul>

          {/* Right Section - User Management Buttons */}
          <div className="flex justify-end space-x-8">
            <SignedOut>
              <button class="text-red-500 dark:text-red-300 hover:bg-red-50 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Sign In</button>
            </SignedOut>
            <SignedIn>
              <UserButton className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" />
              <SignOutButton className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800" />
            </SignedIn>
          </div>
        </div>
      </nav>

       {/* SignIn Modal */}
       {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden transform transition-all ease-in-out duration-500 scale-95">
            <div>
              <div className="text-lg font-medium text-gray-900 flex justify-center font-bold">Sign In</div>
              <SignIn />
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end">
              <button onClick={toggleSignIn} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close</button>
            </div>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Header;