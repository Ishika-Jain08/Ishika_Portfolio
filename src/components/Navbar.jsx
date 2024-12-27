import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line ,RiCloseLine } from "@remixicon/react";
import logo from "../assets/mypick.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-screen h-16 flex items-center justify-between px-4 md:justify-around rounded-lg py-1.5 sticky top-0 z-30 bg-second-bg-color">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-11 rounded-full object-cover" />
        </Link>

        {/* Menu Icon for Mobile View */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Link
            to="/"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Experience
          </Link>
          <Link
            to="/skill"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Skills
          </Link>
          <Link
            to="/project"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Projects
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden md:block bg-main-color px-4 py-3 rounded-lg text-second-bg-color font-bold transition-transform duration-500 hover:scale-105"
        >
          Contact
        </Link>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-second-bg-color shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-800 hover:text-main-color"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-gray-800 hover:text-main-color"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/experience"
              className="text-lg font-semibold text-gray-800 hover:text-main-color"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="/skill"
              className="text-lg font-semibold text-gray-800 hover:text-main-color"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="/project"
              className="text-lg font-semibold text-gray-800 hover:text-main-color"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="bg-main-color text-second-bg-color px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
