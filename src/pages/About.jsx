/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"
import my from "../assets/my.jpg"
import CV from "../../public/cv.pdf"
const About = () => {
  return (
  <>
<section className="w-full py-12 bg-gray-50 bg">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-8">
          <span className="text-lg font-semibold text-main-color">ABOUT</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">What Defines Me</h1>
        </div>
        <div className="flex flex-col  md:flex-row items-center justify-between gap-8 py-5">
          <div className="md:w-3/5 ">
            <p className="text-gray-700 text-sm mb-4">
              Jai Jinendra! 🌟 "I'm Ishika Jain, a B.Tech (Computer Science) graduate specializing in Web Development. With expertise in Full-Stack  and MERN Stacks Developer, I am passionate about crafting impactful and user-focused web solutions.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              My goal is to explore new opportunities and collaborate on exciting projects. Feel free to connect with me!
            </p>
            
            <Link
            to="/contact"
              className="inline-block bg-main-color text-second-bg-color font-medium rounded-lg px-6 py-3 transition-transform duration-500 hover:scale-105"
            >
              Let's Talk
            </Link>
            <a
            href={CV}
              className=" ml-7 inline-block bg-main-color text-second-bg-color font-medium rounded-lg px-6 py-3 transition-transform duration-500 hover:scale-105" download="Ishika_Jain_CV.pdf"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/3  flex items-center justify-center p-3">
            <img
              src={my}              alt="Ishika Jain"
              className="w-1/3  h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default About