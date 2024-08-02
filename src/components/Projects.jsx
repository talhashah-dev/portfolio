import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Blog_App, Weather_App, CRUD_App, Js_Projects, Portfolio } from "../assets/images/index.js"

function Projects() {
  const [visible,setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  // const handleHover = (index) => {
  //   setVisible(index);
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">

      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">

      {/* Card 1 */}
      <div className="max-md:w-[49%] w-[32%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" onMouseOver={() => handleHover(1)} onMouseLeave={() => setVisible(0)}>
        <img className="w-full h-full object-contain" src={Blog_App} alt="Blog App"/>

        <div className={`${visible === 1 || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
          <div className="px-4">
            <div className="flex items-center gap-5"> 
              <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                Blog App
              </h1>
              <a href="https://github.com/talhashah-dev/blogging-app" className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
                <FaGithub /> 
              </a>
              <a href="https://talhashah-dev.github.io/blogging-app/" className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
                <FaExternalLinkAlt /> 
              </a>
            </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
                Write your thoughts and publish them online on a secure and easy-to-use platform.
              </p>
          </div>
          <div className="px-4 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">html</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">firebase</span>
          </div>
        </div>

      </div>

      {/* Cars 2 */}
      <div className="max-md:w-[49%] w-[32%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" onMouseOver={() => handleHover(2)} onMouseLeave={() => setVisible(0)}>
        <img className="w-full h-full object-contain" src={Js_Projects} alt="JavaScript Projects" />
        
        <div className={`${visible === 2 || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>

        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
              JavaScript Projects
            </h1>
            <a href="https://github.com/talhashah-dev/js-projects" className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://talhashah-dev.github.io/js-projects/" className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-200 max-md:text-gray-600 text-base">
              Showcasing all JavaScript projects that I have built.
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">html</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
        </div>

        </div>
      </div>

      {/* Card 3 */}
      <div className="max-md:w-[49%] w-[32%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" onMouseOver={() => handleHover(3)} onMouseLeave={() => setVisible(0)}>
        <img className="w-full h-full object-contain" src={Portfolio} alt="JavaScript Projects Showcase" />

        <div className={`${visible === 3 || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
            Portfolio
            </h1>
            <a href="https://github.com/talhashah-dev/portfolio" className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://talhashah.vercel.app/" className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-200 max-md:text-gray-600 text-base">
            Personal Portfolio built with React.js & Tailwind CSS
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">tailwind</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
        </div>

      </div>

      </div>

      {/* Card 4 */}
      <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" onMouseOver={() => handleHover(4)} onMouseLeave={() => setVisible(0)}>
        <img className="w-full h-full object-contain" src={Weather_App} alt="React Weather App" />

        <div className={`${visible === 4 || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
            Weather App
            </h1>
            <a href="https://github.com/talhashah-dev/weather-app-react" className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://weather-app-react-st.netlify.app/" className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-200 max-md:text-gray-600 text-base">
            A Weather App built with React.js and OpenWeatherMap API
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">api</span>
        </div>

      </div>

      </div>

      {/* Card 5 */}
      <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" onMouseOver={() => handleHover(5)} onMouseLeave={() => setVisible(0)}>
        <img className="w-full h-full object-contain" src={CRUD_App} alt="CRUD App" />

        <div className={`${visible === 5 || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
            CRUP App
            </h1>
            <a href="https://github.com/talhashah-dev/react-crud-app" className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://react-crud-app-gilt.vercel.app/" className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-200 max-md:text-gray-600 text-base">
              An CRUD operation Web App built with React.js and Bootstrap for UI and Mockapi as the DB.
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">bootstrap</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">api</span> 
        </div>

      </div>

      </div>

      </div>

    </div>
  )
}

export default Projects;