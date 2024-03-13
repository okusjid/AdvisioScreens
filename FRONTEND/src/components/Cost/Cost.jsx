import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cost= () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardName) => {
    if (expandedCard === cardName) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardName);
    }
  };

  const renderExpandedCard = (cardName, price, description, features) => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-300">
          <h2 className="text-4xl font-bold text-gray-900">{cardName}</h2>
          <p className="text-3xl font-bold text-gray-800 my-4">{price}</p>
          <p className="text-2xl text-gray-800 mb-6">{description}</p>
          <hr className="border-gray-400 my-6" />
          <ul className="text-2xl text-gray-800 pl-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleCardClick(cardName)}
            className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg mt-8"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto mt-16 bg-gradient-to-br from-blue-200 to-purple-300 py-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-gray-900">
            Pricing Strategies
          </h1>
          <div className="w-32 h-1 bg-gray-900 mx-auto my-4"></div>
          <p className="text-3xl font-semibold text-gray-800">
            <br />
            Discover Your Path to Success with Our Versatile Pricing Solutions{" "}
            <br />-{" "}
            <span style={{ color: "#3B82F6" }}>
              Tailored to Elevate Your Business Strategies!{" "}
            </span>
            <br />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div
            className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-300 transition duration-300 ease-in-out transform hover:shadow-xl hover:bg-blue-100"
            onClick={() => handleCardClick("Basic")}
          >
            <h2 className="text-5xl font-bold text-gray-900">Basic</h2>
            <p className="text-3xl font-bold text-gray-800 my-4">
              Rs. 10,000/mon
            </p>
            <p className="text-2xl text-gray-800 mb-6">
              Unlock the basics for building your unique brand identity.
            </p>
            <hr className="border-gray-400 my-6" />
            <ul className="text-2xl text-gray-800 pl-6">
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">10k impressions</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Basic locations</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Standard customer support</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Monthly report insights</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Limited time promotion offers</span>
              </li>
            </ul>
          </div>

          <div
            className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-300 relative transition duration-300 ease-in-out transform hover:shadow-xl hover:bg-blue-100"
            onClick={() => handleCardClick("Hot Take!!")}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
              Most Popular
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Hot Take!!</h2>
            <p className="text-3xl font-bold text-gray-800 my-4">
              Rs. 20,000/mon
            </p>
            <p className="text-2xl text-gray-800 mb-6">
              Elevate your reach with targeted marketing solutions.
            </p>
            <hr className="border-gray-400 my-6" />
            <ul className="text-2xl text-gray-800 pl-6">
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">20k impressions</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Demanding sites</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Priority customer support</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Customized advertising campaigns</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Performance analytics dashboard</span>
              </li>
            </ul>
          </div>

          <div
            className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-300 transition duration-300 ease-in-out transform hover:shadow-xl hover:bg-blue-100"
            onClick={() => handleCardClick("Advanced")}
          >
            <h2 className="text-5xl font-bold text-gray-900">Advanced</h2>
            <p className="text-3xl font-bold text-gray-800 my-4">
              Rs. 30,000/mon
            </p>
            <p className="text-2xl text-gray-800 mb-6">
              Unleash your brand's full potential with premium strategies.
            </p>
            <hr className="border-gray-400 my-6" />
            <ul className="text-2xl text-gray-800 pl-6">
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">30k impressions</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Premium locations</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">24/7 dedicated customer support</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">
                  Exclusive partnership opportunities
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500">&#10003;</span>
                <span className="ml-4">Ad optimization consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Render expanded card if expandedCard is truthy */}
      {expandedCard &&
        renderExpandedCard(
          expandedCard,
          expandedCard === "Basic"
            ? "Rs. 10,000/mon"
            : expandedCard === "Hot Take!!"
            ? "Rs. 20,000/mon"
            : "Rs. 30,000/mon",
          expandedCard === "Basic"
            ? "Unlock the basics for building your unique brand identity."
            : expandedCard === "Hot Take!!"
            ? "Elevate your reach with targeted marketing solutions."
            : "Unleash your brand's full potential with premium strategies.",
          expandedCard === "Basic"
            ? [
                "10k impressions",
                "Basic locations",
                "Standard customer support",
                "Monthly report insights",
                "Limited time promotion offers",
              ]
            : expandedCard === "Hot Take!!"
            ? [
                "20k impressions",
                "Demanding sites",
                "Priority customer support",
                "Customized advertising campaigns",
                "Performance analytics dashboard",
              ]
            : [
                "30k impressions",
                "Premium locations",
                "24/7 dedicated customer support",
                "Exclusive partnership opportunities",
                "Ad optimization consulting",
              ]
        )}

      <div className="text-center mt-8">
        <p className="text-2xl text-gray-700 font-bold mb-2">
          <br />
          JOIN THE HUNDREDS OF ADVERTISERS THAT SAVED MILLIONS LAST YEAR <br />
          <span className="text-6xl font-semibold text-black">
            <br />
            Ready to get started?
          </span>
        </p>
        <br />
        <div className="mb-4">
          <span className="font-semibold text-2xl mr-4">
            <span className="text-blue-800">&#10003;</span> Industry Leading
            Technology
          </span>
          <span className="font-semibold text-2xl mr-4">
            <span className="text-blue-800">&#10003;</span> 99% of Billboard Ads
          </span>
          <span className="font-semibold text-2xl mr-4">
            <span className="text-blue-800">&#10003;</span> Best Billboard
            Prices Guaranteed
          </span>
        </div>

        <p className="text-4xl text-gray-700 font-bold mb-2">
          <br />
          Interested in a custom plan or need more info?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Cost;
