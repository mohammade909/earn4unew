import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="relative w-full bg-black text-white min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/photorealistic-tree-money_23-2151027613.jpg?t=st=1740246807~exp=1740250407~hmac=2d6a75bb775bf3aa9114059f0f729d1b00b707fb769d62c51c9377050f5a72fc&w=740"
          alt="Satellite in space"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      <div className="relative z-10 px-4 py-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2 mb-4 text-blue-300">
          <span className="text-sm">— OUR MISSION</span>
        </div>

        <h2 className="mb-6 text-4xl font-light text-gray-300">Helping You Succeed in Trading</h2>

        <div className="max-w-lg">
          <p className="mb-8 text-base leading-relaxed text-justify text-gray-300">
          At Earn 4U, our goal is to empower traders with the right tools, knowledge, and support to grow their wealth. We believe in creating a secure and user-friendly platform where anyone can trade with confidence.

          </p>

          <button className="flex items-center gap-2 p-1 py-1 text-white bg-yellow-400 rounded-full ">
            <span className="px-6 py-2 bg-green-800 rounded-full">
              {" "}
              View All{" "}
            </span>
            <div className="p-3 bg-white rounded-full">
              <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Banner;