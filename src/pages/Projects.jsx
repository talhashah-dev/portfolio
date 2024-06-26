import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Blog_App, Weather_App, CRUD_App, Js_Projects, Portfolio } from "../assets/images/index.js"

function Projects() {
  return (
    <div className="flex flex-wrap justify-between gap-y-5 pb-5">

      <div className="max-w-sm min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all border border-white">
        <img className="w-full" src={Weather_App} alt="Weather App" />
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-black">
              Weather App 
            </h1>
            <a href="https://github.com/talhashah-dev/weather-app-react" className="font-bold text-xl mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://weather-app-react-st.netlify.app/" className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Hosted Link" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
            </div>
          <p className="text-gray-700 text-base">
          A Weather App built on React.js using Openweathermap API
          </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">api</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
        </div>
      </div>

      <div className="max-w-sm min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all border border-white">
        <img className="w-full" src={Blog_App} alt="Blog App" />
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-black">
              Blog App
            </h1>
            <a href="https://github.com/talhashah-dev/blogging-app" className="font-bold text-xl mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://talhashah-dev.github.io/blogging-app/" className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Hosted Link" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-700 text-base">
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

      <div className="max-w-sm min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all border border-white">
        <img className="w-full" src={CRUD_App} alt="CRUD App" />
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-black">
              CRUD App
            </h1>
            <a href="https://github.com/talhashah-dev/react-crud-app" className="font-bold text-xl mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://react-crud-app-gilt.vercel.app/" className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Hosted Link" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-700 text-base">
              CRUD Operation App inform of Employee Management Software built with React & Bootstrap
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">bootstrap</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">api</span>
        </div>
      </div>

      <div className="max-w-sm min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all border border-white">
        <img className="w-full" src={Js_Projects} alt="JavaScript Projects" />
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-black">
              JavaScript Projects
            </h1>
            <a href="https://github.com/talhashah-dev/js-projects" className="font-bold text-xl mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://talhashah-dev.github.io/js-projects/" className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Hosted Link" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-700 text-base">
              Showcasing all JavaScript projects that I have built.
            </p>
        </div>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">html</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">css</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">javascript</span>
        </div>
      </div>

      <div className="max-[500px]:max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 transition-all border border-white">
        <img className="w-full" src={Portfolio} alt="JavaScript ProjectsPortfolio Website" />
        <div className="px-4">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-xl mb-1 mt-1 text-black">
            Portfolio
            </h1>
            <a href="https://github.com/talhashah-dev/portfolio" className="font-bold text-xl mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://talhashah.vercel.app/" className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110" target="_blank" title="Hosted Link" rel="noreferrer">
              <FaExternalLinkAlt /> 
            </a>
          </div>
            <p className="text-gray-700 text-base">
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
  )
}

export default Projects