import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChartBar, FaTh, FaTrophy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const features = [
  {
    icon: FaTrophy,
    title: "🔹 Simple & Easy ",
    desc: " No experience needed, just start and learn.",
  },
  {
    icon: FaTh,
    title: "🔹 Safe & Secure",
    desc: "Trade with confidence on a trusted platform.",
  },
  {
    icon: FaChartBar,
    title: "🔹 Fast Withdrawals",
    desc: " Get your money anytime, hassle-free.",
  },
];
export const HeroSection = () => {
  return (
    <div className="bg-black">
      <div className="container px-6 pt-16 pb-8 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-tight text-white">
              <span className="text-amber-500">Trade Smarter </span>
              <br />  Earn Faster
            </h1>
            <p className="text-base text-justify text-gray-400">
            💰 Grow your money with easy and secure trading. Start today and take control of your financial future!
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link to="/registration">
                <button className="flex items-center gap-2 p-1 py-1 text-white bg-yellow-400 rounded-full ">
                  <span className="px-4 py-2 bg-green-800 rounded-full">
                    {" "}
                    Register Now
                  </span>
                  <div className="p-3 bg-white rounded-full">
                    <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-amber-500">✅ $1M+</div>
                <div className="text-gray-400">Profits Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">🏆 300K+</div>
                <div className="text-gray-400">Happy Traders
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <img
              src="/money.png"
              alt="Earn money"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8 text-center lg:text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 lg:items-start"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-amber-300 rounded-xl">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-gray-400 lg:text-left">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
