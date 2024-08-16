import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Blog_App, Weather_App, CRUD_App, Js_Projects, Portfolio } from "../assets/images/index.js"

function Projects() {
  const [visible,setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const projects = [
    {
      id: 1,
      image: Blog_App,
      imageAlt: "Blog App",
      name: "Blog App",
      description: "Write your thoughts and publish them online on a secure and easy-to-use platform.",
      links: {
        gitHub: "https://github.com/talhashah-dev/blogging-app",
        hosted: "https://talhashah-dev.github.io/blogging-app/"
      },
      tags: [
        "html", "css", "javascript", "firebase"
      ]
    },
    // {
    //   id: 2,
    //   image: Js_Projects,
    //   imageAlt: "JavaScript Projects",
    //   name: "JavaScript Projects",
    //   description: "Showcasing all JavaScript projects that I have built.",
    //   links: {
    //     gitHub: "https://github.com/talhashah-dev/js-projects",
    //     hosted: "https://talhashah-dev.github.io/js-projects/"
    //   },
    //   tags: [
    //     "html", "css", "javascript"
    //   ]
    // },
    {
      id: 3,
      image: Portfolio,
      imageAlt: "Portfolio",
      name: "Portfolio",
      description: "Personal Portfolio built with React.js & Tailwind CSS",
      links: {
        gitHub: "https://github.com/talhashah-dev/portfolio",
        hosted: "https://talhashah.vercel.app/"
      },
      tags: [
        "react", "tailwind", "javascript"
      ]
    },
    {
      id: 4,
      image: Weather_App,
      imageAlt: "React Weather App",
      name: "Weather App",
      description: "A Weather App built with React.js and OpenWeatherMap API",
      links: {
        gitHub: "https://github.com/talhashah-dev/weather-app-react",
        hosted: "https://weather-app-react-st.netlify.app/"
      },
      tags: [
        "react", "css", "api"
      ]
    },
    {
      id: 5,
      image: CRUD_App,
      imageAlt: "CRUD App",
      name: "CRUD App",
      description: "A CRUD operation Web App built with React.js and Bootstrap for UI and Mockapi as the DB.",
      links: {
        gitHub: "https://github.com/talhashah-dev/react-crud-app",
        hosted: "https://react-crud-app-gilt.vercel.app/"
      },
      tags: [
        "react", "bootstrap", "api"
      ]
    },
  ]

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
        {projects.map(cards => {
          return (
            <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" key={cards.id} onMouseOver={() => handleHover(cards.id)} onMouseLeave={() => setVisible(0)}>
              <img className="w-full h-full object-contain" src={cards.image} alt={cards.imageAlt} />
              <div className={`${visible === cards.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4">
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  {cards.name}
                  </h1>
                  <a href={cards.links.gitHub} className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
                    <FaGithub /> 
                  </a>
                  <a href={cards.links.hosted} className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
                    <FaExternalLinkAlt /> 
                  </a>
                </div>
                  <p className="text-gray-200 max-md:text-gray-600 text-base">
                    {cards.description}
                  </p>
              </div>

              <div className="px-4 pt-4 pb-2">
                {
                 cards.tags.map((element,index) => {
                  return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{element}</span>
                  )
                 })
                }
              </div>
            </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects;