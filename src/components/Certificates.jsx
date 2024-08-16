import React from "react";
import { Design_Certificate, JS_Certificate } from "../assets/images";

const Certificates = () => {
  const certificates = [
    {
      title: "Responsive Web Design",
      description: "This certification covers HTML and CSS for webpage development, starting with a basic cat photo app and advancing to responsive design techniques like Flexbox and CSS Grid.",
      image: Design_Certificate,
      imageAlt: "Responsive Web Design Certificates"
    },
    {
      title: "JavaScript Algorithms and Data Stracture",
      description: 
      "This certification teaches JavaScript basics variables, arrays, objects, functions, DOM and advanced topics OOP, Functional Programming, algorithms, local storage, API usage.",
      image: JS_Certificate,
      imageAlt: "Lagacy JavaScript Certificate"
    }
  ]
  
  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">
        Certificates
      </h1>

      <div className="flex flex-wrap justify-between gap-y-5">

        {
          certificates.map((value, index) => {
            return (
              <div className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer" key={index}>
                <img className="w-full" src={value.image} alt={value.imageAlt} />
                <div className="px-4">
                  <div className="">
                    <h1 className="font-bold text-xl mb-1 mt-1 text-black">
                      {value.title}
                    </h1>
                    <p className="text-gray-700 text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Certificates;
