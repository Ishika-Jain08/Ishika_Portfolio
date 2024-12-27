/* eslint-disable react/no-unescaped-entities */
import "remixicon/fonts/remixicon.css";
const Hero = () => {
  return (
<>
<div>
<section className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
          <div className="text-center p-5">
            <h6 className=" text-xs  text-gray-700 font-normal tracking-wider">
              LET'S BUILD SOMETHING TOGETHER
            </h6>
            <h1 className="py-3 text-3xl font-semibold">
              Hi, I'm <span className="text-main-color">Ishika Jain</span>
              <br />A Mern-Stack Web Developer
            </h1>
            <p className="text-base text-gray-700">
              I'm focused on building responsive Mern-Stack applications <br />
              integrating back-end technologies.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/ishika-jain08/"
              className="bg-bg-color shadow-md rounded-full p-4 transition-transform duration-300 hover:scale-105"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://github.com/Ishika-Jain08"
              className="bg-bg-color shadow-md rounded-full p-4 transition-transform duration-300 hover:scale-105"
            >
              <i className="ri-github-fill"></i>
            </a>
            
          </div>
        </section>
</div>
</>
  )
}

export default Hero