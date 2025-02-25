import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const WhyChoose = () => {
  const services = [
    {
      icon: "https://img.freepik.com/free-vector/global-stock-market-concept-illustration_114360-19030.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid",
      title: "✅ Beginner-Friendly",
      description: "Simple tools and guides to help you start.",
    },
    {
      icon: "https://img.freepik.com/free-photo/top-view-finger-pressing-percentage-tablet_1134-278.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid",
      title: "✅ Real-Time Insights",
      description: "Stay ahead with live market updates.",
    },
    {
      icon: "https://img.freepik.com/free-vector/income-graph-is-rising_530521-1785.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid",
      title: "✅ Low Fees, High Profits",
      description: "Trade more, keep more of your earnings.",
    },
    {
      icon: "https://img.freepik.com/free-vector/call-center-design_24877-49645.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid",
      title: "✅ 24/7 Support",
      description: " Our team is always here to help you.",
    },
  ];

  return (
    <div className="px-4 pt-6 pb-8 mx-auto max-w-7xl sm:pt-16 sm:px-2">
      {/* Header */}
      <div className="mb-8">
        <span className="block mb-1 text-sm font-medium text-indigo-500">Why Choose Us?</span>
        <div className="items-center justify-between block sm:flex">
          <h2 className="text-3xl font-semibold">
            <span className="text-yellow-400"> Your Trusted Partner in  </span> Trading Success
            <p className="max-w-2xl mx-auto text-lg font-normal text-gray-600">
            We make trading easy, safe, and profitable for everyone.
          </p>
          </h2>
          <button className="flex items-center gap-2 p-1 py-1 mt-3 text-white bg-yellow-400 rounded-full sm:mt-0">
           <span className="px-4 py-2 bg-green-800 rounded-full"> View All Services</span>
            <div className="p-3 bg-white rounded-full">
              <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
            </div>
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="p-6 transition-shadow bg-white border border-gray-300 rounded-lg hover:shadow-lg">
            <img src={service.icon} alt={service.title} className="w-8 h-8 mb-4" />
            <h3 className="mb-2 text-lg font-medium text-gray-800">{service.title}</h3>
            <p className="mb-4 text-sm text-gray-500">{service.description}</p>
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
              Learn more
              <AiOutlineArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;


