import React from "react";

function DashboardCard12({ locations }) {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-white shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-800">
          Available Locations
        </h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-900 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-md font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {locations.map((location, index) => (
                <li className="flex px-2" key={index}>
                  <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-indigo-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                    </svg>
                  </div>

                  <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                    <div className="grow flex justify-between">
                      <div className="self-center">
                        <a
                          className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                          href="#0"
                        >
                          {location.name}
                        </a>{" "}
                        has{" "}
                        <a
                          className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                          href="#0"
                        >
                          {location.viewers} 
                        </a>{" "}
                        viewers
                      </div>
                      <div className="shrink-0 self-end ml-2">
                       
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className="text-xs uppercase text-slate-900 dark:text-slate-900 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-md font-semibold p-2">
            All Locations Where you Ehance your Business
          </header>
          {/* <ul className="my-1">
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-sky-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                      href="#0"
                    >
                      240+
                    </a>{" "}
                    users have subscribed to{" "}
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                      href="#0"
                    >
                      Newsletter #1
                    </a>
                  </div>
                  <div className="shrink-0 self-end ml-2">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      href="#0"
                    >
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-indigo-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    The post{" "}
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                      href="#0"
                    >
                      Post Name
                    </a>{" "}
                    was suspended by{" "}
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-800 dark:hover:text-white"
                      href="#0"
                    >
                      Nick Mark
                    </a>
                  </div>
                  <div className="shrink-0 self-end ml-2">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      href="#0"
                    >
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard12;
