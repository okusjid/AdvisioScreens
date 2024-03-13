import React from "react";
import hec from "../../assets/hec.png"; // Update the path
import fast from "../../assets/fast.png"; // Update the path
import pakweel from "../../assets/pakweel.png"; // Update the path
import nbp from "../../assets/nbp.png"; // Update the path
import psl from "../../assets/psl.png"; // Update the path
import lq from "../../assets/lq.png"; // Update the path
import nayapak from "../../assets/nayapak.png"; // Update the path
import colgate from "../../assets/colgate.png"; // Update the path
const OurInvestor = () => {
  // Import logos from local storage
  // Add more logos as needed

  return (
    <section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36">
     

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-black italic sm:text-4xl sm:leading-tight">
            Our Investors
          </h2>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={hec}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={fast}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={psl}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={nbp}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={lq}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={pakweel}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={colgate}
              alt=""
            />
          </div>
          <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-20 mx-auto"
              src={nayapak}
              alt=""
            />
          </div>

          {/* Add more logo components as needed */}
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>
      </div>
    </section>
  );
};

export default OurInvestor;
