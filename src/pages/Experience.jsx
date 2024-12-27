import becil from "../assets/ExImg/becil.png";
import iByte from "../assets/ExImg/innobyte.jpeg"
const Experience = () => {
  return (
   <>
       <div className="py-12 px-6 bg-gray-50">
        <div className="text-center">
          <span className="text-xl font-semibold text-blue-600">MY EXPERIENCE</span>
        </div>
        <div className="mt-8 space-y-8">
          {/* InnoBytes Experience */}
          <div className="p-6 rounded-lg transition-transform duration-500 shadow-lg bg-white hover:shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={iByte}
                alt="InnoBytes Services"
                className="w-20 h-20 rounded-md shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">InnoBytes Services</h3>
                <h4 className="text-md font-semibold text-main-color">Node.js Developer</h4>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              • Developed and maintained RESTful APIs using React.js, Node.js, and Express, enabling efficient data exchange between frontend and backend systems.
              <br />
              • Designed and optimized database schemas and queries for MongoDB, resulting in improved data retrieval performance.
              <br />
              • Implemented user authentication and authorization mechanisms, ensuring secure access to sensitive data and resources.
            </p>
          </div>

          {/* BECIL Experience */}
          <div className="p-6 rounded-lg transition-transform duration-500 shadow-lg bg-white hover:shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={becil}
                alt="BECIL"
                className="w-16 h-16 rounded-md shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Broadcast Engineering Consultants India Limited
                </h3>
                <h4 className="text-md font-semibold text-main-color">MERN Stack Developer</h4>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              • Developed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js), creating dynamic and responsive user interfaces and robust server-side logic.
              <br />
              • Implemented user authentication and authorization using JWT (JSON Web Tokens) and Passport.js, ensuring secure access to application resources.
              <br />
              • Participated in the deployment of applications on cloud platforms like AWS, Render, and Vercel, managing server configurations.
            </p>
          </div>
        </div>
      </div>
   </>
  )
}

export default Experience