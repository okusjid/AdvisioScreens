import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const ByNumber = () => {
  const [counts, setCounts] = useState({
    countto1: 0,
    countto2: 0,
    countto3: 0,
    countto4: 0,
  });

  useEffect(() => {
    const updateCounts = () => {
      setCounts({
        countto1: 570,
        countto2: 12,
        countto3: 320,
        countto4: 18000,
      });
    };

    updateCounts();

    // Clean up any resources if needed
    return () => {
      // Clear any resources or intervals here
    };
  }, []);

  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <h2 className="text-3xl font-bold text-center italic mb-6">
              Advisioscreens by the numbers
            </h2>
            <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
              <div className="flex flex-col items-center">
                <h3
                  className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"
                  id="countto1"
                >
                  <CountUp end={counts.countto1} duration={6} separator="," />
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Successful Projects
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3
                  className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"
                  id="countto2"
                >
                  <CountUp
                    end={counts.countto2}
                    duration={6}
                    separator=","
                    prefix="$"
                  />
                  m
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Annual Revenue Growth
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3
                  className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"
                  id="countto3"
                >
                  <CountUp
                    end={counts.countto3}
                    duration={6}
                    separator=","
                    
                  />
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Global Clients
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3
                  className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"
                  id="countto4"
                >
                  <CountUp end={counts.countto4} duration={6} separator="," />
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Monthly Impressions on EveryScreen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByNumber;
