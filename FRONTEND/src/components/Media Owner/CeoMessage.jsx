import React from 'react';
import ceoImage from '../../assets/CEO.jpg'; // Path to CEO's image

const CEOMessage = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="flex flex-wrap items-center justify-center lg:justify-start">
                    <div className="lg:w-1/3 px-4 mb-10 lg:mb-0">
                        <div className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full mx-auto lg:mx-0 border-4 border-blue-500 shadow-lg">
                            <img 
                                src={ceoImage} 
                                alt="USJID NISAR" 
                                className="object-cover object-center w-full h-full" 
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 px-4">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                            A Message from Our CEO, <span className="text-blue-600">USJID NISAR</span>
                        </h2>
                        <p className="text-md lg:text-lg text-gray-600">
                            "At AdvisioScreen, our passion is to drive the digital advertising industry forward through innovative solutions and exceptional service. We're committed to empowering our clients and contributing to their success. Join us on this exciting journey."
                        </p>
                        <p className="text-md lg:text-lg text-gray-600 mt-4 font-medium">
                            - USJID NISAR, <span className="italic">CEO of AdvisioScreen</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOMessage;
