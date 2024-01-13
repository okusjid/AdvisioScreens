import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join us today and transform your digital screens into a dynamic advertising platform.</p>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Sign Up
          </Link>
        </div>
      </section>
    );
  };

export default ContactSection;  
  