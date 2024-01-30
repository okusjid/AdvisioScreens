import React, { useState } from 'react';

const Stepper = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = {
        1: { name: "Choose Your Favorite Location", content: "Pick where you want your ads to live (and shine!). Start with single or multiple locations." },
        2: { name: "Set Your Budget & Schedule", content: "Align your spend and timing with your growth goals. We offer flexible options for first-timers and big-spenders, and everyone in between so you maximize every penny." },
        3: { name: "Upload Your Ad Design", content: "Create simple, easy-to-read artwork that stands out and grabs attention. Need help with your design? We have your back." },
        4: { name: "Get Approved", content: "We review and approve all designs with our Sign Partners to ensure they’re ready for action. From there, they’re up and running immediately so you see results ASAP." }
    };

    const handleStepClick = (step) => {
        setActiveStep(step === activeStep ? null : step);
    };

    return (
        <div className="max-w-lg w-full mx-auto p-4 md:p-6 bg-gradient-to-br from-cyan-500 to-blue-700 text-white rounded-lg shadow-xl">
            <ol className="divide-y divide-gray-300">
                {Object.entries(steps).map(([step, { name, content }]) => (
                    <li key={step} className={`transition duration-500 ease-in-out transform ${activeStep === parseInt(step) ? 'scale-105' : ''}`} onClick={() => handleStepClick(parseInt(step))}>
                        <div className="py-2 md:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-lg md:text-xl font-bold mr-3">{step}</span>
                                    <h3 className="text-md md:text-lg font-semibold">{name}</h3>
                                </div>
                                <svg className={`w-5 md:w-6 h-5 md:h-6 transform transition-transform ${activeStep === parseInt(step) ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                            {activeStep === parseInt(step) && (
                                <div className="mt-2 md:mt-3 text-xs md:text-sm">
                                    <p>{content}</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Stepper;
