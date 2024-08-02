import React from "react";
import { Design_Certificate, JS_Certificate } from "../assets/images";

const Certificates = () => {
  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">
        Certificates
      </h1>

      <div className="flex flex-wrap justify-between gap-y-5">

        <div className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer">
          <img className="w-full" src={Design_Certificate} alt="Blog App" />
          <div className="px-4">
            <div className="">
              <h1 className="font-bold text-xl mb-1 mt-1 text-black">
                Responsive Web Design
              </h1>
              <p className="text-gray-700 text-base">
                This certification covers HTML and CSS for webpage development,
                starting with a basic cat photo app and advancing to responsive
                design techniques like Flexbox and CSS Grid.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer">
          <img className="w-full" src={JS_Certificate} alt="Blog App" />
          <div className="px-4">
            <div className="">
              <h1 className="font-bold text-xl mb-1 mt-1 text-black">
                JavaScript Algorithms and Data Stracture
              </h1>
              <p className="text-gray-700 text-base">
                This certification teaches JavaScript
                basics variables, arrays, objects, functions, DOM and advanced
                topics OOP, Functional Programming, algorithms, local storage,
                API usage.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificates;
