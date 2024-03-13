import React from "react";
import phone from "../../assets/phone.png"; // Update the path
import email from "../../assets/email.png"; // Update the path
import location from "../../assets/location.png"; // Update the path

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <img
                  src={email}
                  alt="Email Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Email
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Contact us at
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="mailto:hello@loopple.com"
                >
                  advisioscreens@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <img
                  src={phone}
                  alt="Phone Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Phone
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Reach out to us by phone
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="tel:+516-486-5135"
                >
                  +92 309 2232688
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <img
                  src={location}
                  alt="Location Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Location
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Find us at our office
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  target="_blank"
                  href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                >
                  Faisal Town, Lahore 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
