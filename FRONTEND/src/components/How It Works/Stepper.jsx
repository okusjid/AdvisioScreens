import React, { useState } from 'react';

const Stepper = () => {
    const [activeStep, setActiveStep] = useState(1); // Initialize the first step as active

    const steps = {
        1: {
            name: "Choose Your Favorite Location",
            content: "Begin your journey by selecting the prime location for your advertisements. Whether you're eyeing a single spot or envisioning a multi-location campaign, the choice is yours. Dive into our extensive list of high-traffic areas and premium spaces where your ads can truly make an impact. Discover locations that resonate with your brand and audience, setting the stage for your marketing success."
        },
        2: {
            name: "Set Your Budget & Schedule",
            content: "Craft a budget and schedule that aligns seamlessly with your marketing objectives. Whether you're taking your first steps into advertising or you're ready to launch a comprehensive campaign, we offer tailored options to ensure optimal use of every dollar. Explore our flexible spending solutions and scheduling strategies that work around your timeline. Maximize your investment with our expert guidance, ensuring your campaign not only meets but exceeds your expectations."
        },
        3: {
            name: "Upload Your Ad Design",
            content: "Bring your vision to life with striking ad designs that capture attention and spark interest. If you're crafting your artwork, aim for simplicity and clarity to stand out in a crowded marketplace. Should you need assistance, our design team is at your disposal, ready to elevate your concepts with professional flair. From brainstorming to final touches, we're here to support your creative journey. Upload your designs directly through our platform for swift and straightforward submission."
        },
        4: {
            name: "Get Approved",
            content: "The final step before your ads go live is our comprehensive review process. Partnering with our Sign Partners, we meticulously evaluate every design to ensure it meets our quality and compliance standards. This step is crucial for safeguarding your campaign's success and integrity. Once approved, your advertisements will launch without delay, marking the exciting beginning of your campaign's live phase. Watch as your ads come to life, ready to captivate audiences and drive results."
        }
    };

    const handleStepClick = (step) => {
        setActiveStep(step === activeStep ? null : step);
    };

    return (
        <div className="max-w-full w-full mx-auto p-4 md:p-6 bg-slate-400 shadow-xl">
            <div className="text-center mb-4">
                <h1 className="text-xl md:text-4xl font-bold">The Roadmap for Brilliance</h1>
            </div>
            <div className="space-y-4">
                {Object.entries(steps).map(([step, { name, content }]) => (
                    <div 
                        key={step} 
                        className={`border-l-4 pl-4 ${activeStep === parseInt(step) ? 'border-blue-500' : 'border-gray-300'} transition duration-300 ease-in-out`}
                        onClick={() => handleStepClick(parseInt(step))}
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="text-lg md:text-3xl font-bold">{step}.</span>
                            <h3 className="text-md md:text-2xl font-semibold">{name}</h3>
                        </div>
                        {activeStep === parseInt(step) && (
                            <div className="text-xs md:text-lg">
                                <p>{content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
