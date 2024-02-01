import React from "react";
import hec from "../../assets/hec.png"; // Update the path
import fast from "../../assets/fast.png"; // Update the path

const OurInvestor = () => {
  // Import logos from local storage
  // Add more logos as needed

  return (
    <section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36">
      <svg
        id="visual"
        viewBox="0 0 2000 600"
        className="w-full absolute top-0 left-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 18L65 18L65 66L129 66L129 37L194 37L194 44L258 44L258 25L323 25L323 35L387 35L387 36L452 36L452 38L516 38L516 34L581 34L581 26L645 26L645 68L710 68L710 32L774 32L774 27L839 27L839 29L903 29L903 31L968 31L968 83L1032 83L1032 65L1097 65L1097 57L1161 57L1161 66L1226 66L1226 90L1290 90L1290 66L1355 66L1355 32L1419 32L1419 35L1484 35L1484 18L1548 18L1548 94L1613 94L1613 96L1677 96L1677 72L1742 72L1742 88L1806 88L1806 42L1871 42L1871 46L1935 46L1935 33L2000 33L2000 18L2000 0L2000 0L1935 0L1935 0L1871 0L1871 0L1806 0L1806 0L1742 0L1742 0L1677 0L1677 0L1613 0L1613 0L1548 0L1548 0L1484 0L1484 0L1419 0L1419 0L1355 0L1355 0L1290 0L1290 0L1226 0L1226 0L1161 0L1161 0L1097 0L1097 0L1032 0L1032 0L968 0L968 0L903 0L903 0L839 0L839 0L774 0L774 0L710 0L710 0L645 0L645 0L581 0L581 0L516 0L516 0L452 0L452 0L387 0L387 0L323 0L323 0L258 0L258 0L194 0L194 0L129 0L129 0L65 0L65 0L0 0Z"
          fill="#eaeaea"
          strokeLinecap="square"
          stroke="#eaeaea"
          strokeLinejoin="miter"
        ></path>
      </svg>

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
