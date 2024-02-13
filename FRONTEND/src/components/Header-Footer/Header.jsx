import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

const Header = () => {
  const { openSignIn, signOut } = useClerk();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-4 py-2 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Left Section - Logo */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AdvisioScreens</span>
            </Link>
          </div>

          {/* Center Section - Navigation Links */}
          <ul className="hidden lg:flex flex-grow justify-center space-x-8">
            <li>
              <Link to="/howitworks" className="py-2 px-4 text-gray-700 rounded lg:bg-transparent lg:p-0 dark:text-white">How It Works?</Link>
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
          <div className="flex items-center space-x-4">
            <SignedOut>
              <button onClick={() => openSignIn({})} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign In</button>
            </SignedOut>
            <SignedIn>
              <UserButton className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800" />
              <button onClick={() => signOut()} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800">Sign Out</button>
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
