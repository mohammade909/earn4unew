import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaChartBar,
  FaUsersCog,
  FaClipboardList,
  FaNewspaper,
} from "react-icons/fa";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import { AboutHeroSection } from "./AboutHeroSection";

export const About = () => {
  const statsData = [
    {
      icon: <FaBuilding className="w-6 h-6 text-blue-500" />,
      title: "✅ 400K+ Active Users ",
      description:
        "Trusted by a growing community of traders.",
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-green-500" />,
      title: "✅ 50M+ Trades Executed",
      description:
        "Proven success with high trading volume.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-purple-500" />,
      title: "✅ 24/7 Automated Trading",
      description:
        " Earn anytime, even while you sleep.",
    },
  ];

  const infoData = [
    {
      icon: <FaUsersCog className="w-6 h-6 text-red-500" />,
      title: "✅ Financial Growth for Everyone ",
      description:
        "Helping people earn through simple trading.",
    },
    {
      icon: <FaClipboardList className="w-6 h-6 text-yellow-500" />,
      title: "✅ Transparency & Trust ",
      description:
        "Clear and fair trading with no hidden fees.",
    },
    {
      icon: <FaNewspaper className="w-6 h-6 text-indigo-500" />,
      title: "✅ Continuous Improvement ",
      description:
        "Evolving our platform for better user experience and success.",
    },
  ];
  return (
    <>
      <Header />
      <AboutHeroSection />
      <div className="px-4 mx-auto max-w-7xl sm:px-2">
        {/* Hero Section */}
        <div className="flex items-center p-5 mb-4 bg-white border-2 shadow-md shadow-gray-200">

          <div className="w-full">
            {/* <div>
              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-lg border-blue-500  border-b-[2px] ">
                About Us
              </span>
              <h1 className="mt-2 mb-3 text-4xl font-semibold leading-snug">
                We Make Automated Trading Easy and Profitable
              </h1>
              <p className="text-base text-justify text-gray-600">
                Take charge of your investments with FinRain, a smart trading designed to help you make more profit with less effort. Our advanced AI-powered technology allows you to trade 24/7 without the hassle of manual trading. Whether you are a beginner or an expert, FinRain makes trading simpler, safer, and more efficient for everyone.
              </p>
            </div> */}
            <div className="relative sm:h-[400px] rounded-lg overflow-hidden group">
              <img
                src="https://img.freepik.com/free-photo/man-analyzing-stock-market-charts-financial-data-electronic-board_169016-14897.jpg?t=st=1739871639~exp=1739875239~hmac=7b12199b8da6de6c9a35c3d4f81485b5f9e9a4cf40dfeec2f839b5c8666664c5&w=1380"
                alt="Office workspace"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />

              {/* The text to appear on hover */}

            </div>


            <div className="py-4 sm:p-5 sm:text-center ">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-lg border-blue-500  border-b-[2px] ">
                About Us
              </span>
              <h1 className="mt-2 mb-3 text-2xl font-semibold leading-snug sm:text-4xl">
                We Make Automated Trading Easy and Profitable
              </h1>
              <p className="text-base text-justify text-gray-600">
                We simplify automated trading so you can earn without stress. Our platform is designed to help both beginners and experienced traders maximize their profits with minimal effort. Just set up, trade, and watch your earnings grow.
              </p>
            </div>

          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-8 mb-6 sm:mb-20 lg:grid-cols-3 sm:grid-cols-2">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center border border-gray-300 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <h3 className="mb-1 text-base font-semibold">{stat.title}</h3>
              <p className="text-lg text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="">
          <div className="px-2 sm:p-5">
            <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-justify text-gray-600">
            Our mission is to empower individuals by making trading accessible, simple, and profitable. We believe everyone deserves the chance to earn and grow financially, regardless of their background or experience. That’s why we provide a secure and beginner-friendly platform designed to help you succeed.
 </p>
            <p className="mt-2 text-lg text-justify text-gray-600">
            We are committed to offering the best trading experience with transparent processes, expert guidance, and a supportive community. Our goal is to ensure that every trader, whether new or experienced, has the resources and confidence to make smart trading decisions.

            </p>
          </div>
          <div className="grid gap-4 p-2 lg:p-5">
            {infoData.map((info, index) => (
              <div
                key={index}
                className="items-start gap-4 p-4 border border-gray-200 rounded-lg sm:flex"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mb-3 bg-gray-100 rounded-full sm:mb-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{info.title}</h3>
                  <p className="text-base text-justify text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
































// hero section



// <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
//           <div>
//             <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-lg border-blue-500  border-b-[2px] ">
//               About Us
//             </span>
//             <h1 className="mt-2 mb-3 text-4xl font-semibold leading-snug">
//             We Make Automated Trading Easy and Profitable
//             </h1>
//             <p className="text-base text-justify text-gray-600">
//             Take charge of your investments with FinRain, a smart trading designed to help you make more profit with less effort. Our advanced AI-powered technology allows you to trade 24/7 without the hassle of manual trading. Whether you are a beginner or an expert, FinRain makes trading simpler, safer, and more efficient for everyone.
//             </p>
//           </div>
//           <div className="relative sm:h-[400px] rounded-lg overflow-hidden">
//             <img
//               src="https://img.freepik.com/free-photo/robot-with-final-piece-jigsaw-puzzle_1048-3550.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid"
//               alt="Office workspace"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>