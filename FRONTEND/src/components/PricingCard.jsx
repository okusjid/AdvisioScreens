import React from "react";

const PricingCard = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Pricing Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                    <div className="p-1 bg-blue-200"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
                        <p className="text-gray-600 mb-6">Ideal for small businesses</p>
                        <p className="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
                        <ul className="text-sm text-gray-600 mb-6">
                            <li className="mb-2 flex items-center">
                                {/* SVG for checkmark */}
                            </li>
                            {/* ... other list items */}
                        </ul>
                    </div>
                    <div className="p-4">
                        <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Select Plan
                        </button>
                    </div>
                </div>

                {/* Pricing Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                    <div className="p-1 bg-green-200"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
                        <p className="text-gray-600 mb-6">Perfect for growing businesses</p>
                        <p className="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
                        {/* Similar list */}
                    </div>
                    <div className="p-4">
                        <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                            Select Plan
                        </button>
                    </div>
                </div>

                {/* Pricing Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                    <div className="p-1 bg-purple-200"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Enterprise Plan</h2>
                        <p className="text-gray-600 mb-6">For large-scale enterprises</p>
                        <p className="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
                        {/* Similar list */}
                    </div>
                    <div className="p-4">
                        <button className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                            Select Plan
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PricingCard;
