import React from "react";
import Hamad from "../../assets/Hamad.jpg"; // Path to CEO's image
import CEO from "../../assets/CEO.jpg"; // Path to CEO's image
import bilal from "../../assets/bilal.jpg"; // Path to CEO's image

const TeamSection = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-solid border-gray-300 bg-gray-100 m-5">
            {/* card body */}
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-9 text-center">
                  <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">
                    Our Executive Team
                  </h1>
                  <span className="text-[1.15rem] font-medium text-muted">
                    Meet our talented team, a dynamic group of experts driven by
                    passion and innovation.
                  </span>
                </div>
                <div className="flex flex-wrap justify-center">
                  {/* Executive Member 1 */}
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem] overflow-hidden">
                      <img
                        className="inline-block w-[150px] h-[150px] object-cover"
                        src={CEO}
                        alt="avatar image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Usjid Nisar
                      </a>
                      <span className="block font-medium text-muted">
                        CEO
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem] overflow-hidden">
                      <img
                        className="inline-block w-[150px] h-[150px] object-cover"
                        src={Hamad}
                        alt="avatar image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Hamad Hasan
                      </a>
                      <span className="block font-medium text-muted">
                        Co-Founder
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                    <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem] overflow-hidden">
                      <img
                        className="inline-block w-[150px] h-[150px] object-cover"
                        src={bilal}
                        alt="avatar image"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                      >
                        Bilal Mehmood
                      </a>
                      <span className="block font-medium text-muted">
                        Co-Founder
                      </span>
                    </div>
                  </div>

                  {/* Executive Member 2 */}
                  {/* Add similar blocks for other executive members */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
