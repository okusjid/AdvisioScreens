import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center">Welcome to AdvisoScreens</h1>
        <p className="text-xl text-center mt-2">Discover the future of digital screen technology.</p>
      </section>

      <section className="py-10">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold">Feature One</h2>
            <p className="mt-1">Description of Feature One.</p>
          </div>
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold">Feature Two</h2>
            <p className="mt-1">Description of Feature Two.</p>
          </div>
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold">Feature Three</h2>
            <p className="mt-1">Description of Feature Three.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-10">
        <h2 className="text-3xl font-bold text-center">Get Started Today</h2>
        <div className="text-center mt-4">
          <Link to="/Signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
