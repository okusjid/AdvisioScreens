import React from "react";
import KFC from "../../assets/KFC.jpg";
import CocaCola from "../../assets/CocaCola.jpg";
import Pepsi from "../../assets/Pepsi.jpg";
import Samsung from "../../assets/Samsung.png";
import Redbull from "../../assets/Redbull.jpg";
import vivo from "../../assets/vivo.png";
import papajohns from "../../assets/papajohns.png";
import polo from "../../assets/polo.png";

export default function OurCustomer() {
  return (
    <div>
      <section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36">
       

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-light text-black sm:text-4xl sm:leading-tight">
              Trusted by world-class companies
            </h2>
          </div>

          <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={KFC}
                alt=""
              />
            </div>

            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={polo}
                alt=""
              />
            </div>

            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={Pepsi}
                alt=""
              />
            </div>
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={Samsung}
                alt=""
              />
            </div>
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={CocaCola}
                alt=""
              />
            </div>
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={vivo}
                alt=""
              />
            </div>
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={papajohns}
                alt=""
              />
            </div>
            <div className="bg-white h-20 w-50 flex shadow-lg items-center justify-center">
              <img
                className="object-contain w-full h-20 mx-auto"
                src={Redbull}
                alt=""
              />
            </div>

            {/* Include other logos similarly */}
          </div>

          <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          </div>

          <p className="mt-10 text-base text-center text-black md:mt-20 p-6 py-3 border w-72 border-black rounded-full mx-auto">
            and more companies
          </p>
        </div>
      </section>
    </div>
  );
}
