/* eslint-disable react/no-unescaped-entities */
import job from "../assets/projectImg/job_portal_about.svg";
import Laza from "../assets/projectImg/lazaWeb.jpg";
import code from "../assets/projectImg/code.png";
import ai from "../assets/projectImg/ai.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="mb-8 p-8 mt-4  ">
        <div className=" text-center">
        <span className="block text-lg font-semibold text-main-color">
          PROJECTS
        </span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          What I've Built
        </h1>
        </div>
       
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project Cards */}
            <div className="relative w-full h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
              <img
                className="w-full h-[160px] object-cover rounded-lg object-top"
                src={job}
                alt="Job Portal Application"
              />
              <div className="text-center font-bold text-sm mt-2">
                Job Portal Application
              </div>
              <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
                <p className="font-medium">
                  Job Portal Application
                  <br />
                  MERN STACK
                </p>
                <Link to="https://job-portal-jr9p.onrender.com" target="_blank">
                  <p className="block mt-2 bg-blue-600 text-white rounded px-3 py-1">
                   Live Demo
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
              <img
                className="w-full h-[160px] object-cover rounded-lg object-top"
                src={ai}
                alt="AI-Mocker-Interview"
              />
              <div className="text-center font-bold text-sm mt-2">
                AI-Mocker-Interview
              </div>
              <div className="absolute top-[12%] left-0 w-[80%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
                <p className="font-medium">
                  AI-Mocker-Interview
                  <br />
                  NextJS, Neon, Drizzle ORM
                </p>
                <Link
                  to="https://ai-mocker-interview-two.vercel.app/"
                  target="_blank"
                >
                  <p className="block mt-2 bg-blue-600 text-white rounded px-3 py-1">
                   Live Demo
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
              <img
                className="w-full h-[160px] object-cover rounded-lg object-top"
                src={code}
                alt="Realtime Code Editor"
              />
              <div className="text-center font-bold text-sm mt-2">
                Realtime Code Editor
              </div>
              <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
                <p className="font-medium">
                  Realtime Code Editor
                  <br />
                  Socket.io
                </p>
                <Link
                  to="https://realtime-code-editor-2-nhwj.onrender.com/"
                  target="_blank"
                >
                  <p className="block mt-2 bg-blue-600 text-white rounded px-3 py-1">
                    Live Demo
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
              <img
                className="w-full h-[160px] object-cover rounded-lg object-top"
                src={Laza}
                alt="Animated Website"
              />
              <div className="text-center font-bold text-sm mt-2">
                Animated Website
              </div>
              <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
                <p className="font-medium">
                  Lazarev - Product Design Agency
                  <br />
                  GsapJS
                </p>
                <Link
                  to="https://ishika-jain08.github.io/LAZAREV._WEBSITE/"
                  target="_blank"
                >
                  <p className="block mt-2 bg-blue-600 text-white rounded px-3 py-1">
                   Live Demo
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
