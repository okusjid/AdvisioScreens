import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 animate-fadeIn">
        <p className="text-3xl text-blue-800 font-bold mb-6">
          Empowering your business with innovative digital signage solutions.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At AdvisioScreens, we specialize in creating cutting-edge display
          technology that transforms how businesses connect with their audience.
          Our mission is to provide intuitive, dynamic, and impactful digital
          signage that elevates your brand's presence.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 animate-slideUp">
        {/* Box 1 */}
        <div className="max-w-md bg-blue-200 shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Innovative Technology
          </h3>
          <p className="text-gray-700">
            We leverage the latest in display technology to ensure your message
            stands out.
          </p>
        </div>

        {/* Box 2 */}
        <div className="max-w-md bg-blue-200 shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-500 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Custom Solutions
          </h3>
          <p className="text-gray-700">
            Tailored solutions that fit the unique needs of your business.
          </p>
        </div>
      </div>

      <div className="bg-gray-300 p-8 rounded-lg shadow-inner animate-fadeIn">
        <h3 className="text-3xl font-semibold text-center text-blue-800 mb-6">
          Our Story
        </h3>
        <p className="text-center text-lg text-gray-700 mb-4">
          Founded in 2023, AdvisioScreens has grown from a small startup to a
          leading player in the digital display industry.
        </p>
        <p className="max-w-4xl mx-auto text-gray-700">
          Our journey began with a vision to revolutionize how businesses
          communicate with their customers. Over the years, we've expanded our
          offerings, pioneered new technologies, and helped countless businesses
          enhance their customer engagement.
        </p>
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg animate-bounce"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
