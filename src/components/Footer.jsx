/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../assets/mypick.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-8 px-5 sm:px-10 py-10 sm:py-16 mt-28 min-h-[50vh]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[1.5fr_2fr_1fr] gap-8 sm:gap-12">
          {/* Left Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="italic text-lg sm:text-xl">
                "Your Vision, My Code—Together, We Build Success."
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="https://www.linkedin.com/in/ishika-jain08/"
                className="text-xl sm:text-2xl hover:text-blue-500 transition"
              >
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link
                to="https://github.com/Ishika-Jain08"
                className="text-xl sm:text-2xl hover:text-gray-400 transition"
              >
                <i className="ri-github-fill"></i>
              </Link>
             
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={logo}
              alt="Ishika Jain Logo"
              className="w-20 sm:w-28 rounded-full shadow-md"
            />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-200">
              ISHIKA JAIN
            </h3>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-200">
              Get in Touch
            </h2>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-sm sm:text-base">Email: ishikajian@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr className="w-full h-[1px] bg-gray-600 border-none my-6 sm:my-8" />

        <p className="text-center text-gray-400 text-sm sm:text-base font-bold">
          Copyright 2024 @ personal_portfolio_Ishika_Jain.com - All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
