
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePieChart, AiOutlineBulb, AiOutlineAppstore } from "react-icons/ai";

const services = [
  {
    icon: <AiOutlineSearch className="w-8 h-8 text-yellow-500" />,
    title: "✅ AI-Powered Insights",
    description: "Get smart recommendations for better trades.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <AiOutlinePieChart className="w-8 h-8 text-green-500" />,
    title: "✅ Risk Management Tools",
    description: "Trade safely with stop-loss and take-profit features.",
    bgColor: "bg-green-100",
  },
  {
    icon: <AiOutlineBulb className="w-8 h-8 text-purple-500" />,
    title: "✅ Mobile & Web Access",
    description: "Trade anytime, anywhere on any device.",
    bgColor: "bg-purple-100",
  },
  {
    icon: <AiOutlineAppstore className="w-8 h-8 text-red-500" />,
    title: "✅ Exclusive Bonuses ",
    description: " Enjoy special rewards and promotions for active traders.",
    bgColor: "bg-red-100",
  },
];

const ServicesSection = () => {
  const [hoverBg, setHoverBg] = useState("bg-purple-100");

  return (
    <div className={` sm:py-12 py-4 sm:px-2 px-4 transition-all duration-300 mb-8 ${hoverBg}`}>
      <div className="mx-auto max-w-7xl ">
        {/* Header */}
        <div className="mb-8 sm:text-center">
          <h2 className="text-3xl font-semibold text-yellow-400">
            Maximize Your
            <span className="text-red-500">Trading Potential</span>
          </h2>
          <p className="mt-1 text-gray-500">
          Trade smarter with the best tools and support.

          </p>
        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
              onMouseEnter={() => setHoverBg(service.bgColor)}
              onMouseLeave={() => setHoverBg("bg-white")}
            >
              <div className={`w-16 h-12 flex items-center justify-center rounded-tl-lg rounded-br-lg ${service.bgColor}`}>
                <span>{service.icon}</span>
              </div>
              <div className="px-6 pb-6">
                <h3 className="mt-4 text-lg font-medium text-gray-800">{service.title}</h3>
                <p className="text-gray-500 text-[15px] text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

