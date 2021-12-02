import React from "react";

export default function ProjectCard() {
  return (
    <div
      className="
        relative
        flex flex-col
        md:flex-row md:space-x-5
        space-y-3
        md:space-y-0
        rounded-xl
        shadow-lg
        p-3
        max-w-xs
        md:max-w-3xl
        border border-white
        bg-white
      "
    >
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="/ventex.png"
          alt="BMI Ventex homepage"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 justify-between">
        <div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            BMI Ventex site
          </h3>
          <p className="md:text-lg text-gray-500 text-base mb-4">
            A static website showcasing BMI's Ventex product line.
          </p>
          <button className="bg-pink-400 hover:bg-pink-600 text-white font-bold px-4 py-1 rounded-md">
            Explore
          </button>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <div
            className="
              bg-gray-200
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              text-gray-800
              hidden
              md:block
            "
          >
            React
          </div>
          <div
            className="
              bg-gray-200
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              text-gray-800
              hidden
              md:block
            "
          >
            Gatsby
          </div>
          <div
            className="
              bg-gray-200
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              text-gray-800
              hidden
              md:block
            "
          >
            TailwindCSS
          </div>
        </div>
      </div>
    </div>
  );
}
