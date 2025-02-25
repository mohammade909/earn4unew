import { FiArrowRight } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function TradingSection() {
  return (
    <div className="relative overflow-hidden ">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/woman-interacting-with-money_23-2151664813.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative p-4 mx-auto max-w-7xl sm:p-0 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 ">
          <div className="flex flex-col justify-center order-first text-white lg:order-last">
            <span className="mb-4 text-lg font-medium tracking-wider text-yellow-400 uppercase">
            About Us 
            </span>
            <h1 className="mb-6 text-3xl font-semibold text-transparent sm:text-4xl bg-gradient-to-r from-yellow-500 via-red-400 to-green-500 bg-clip-text">
            Trade & Earn with Ease
            </h1>
            <p className="mb-8 text-justify text-gray-300">
            At Earn 4U, we make trading simple, safe, and open to everyone. Whether you're new or experienced, our platform helps you trade confidently and grow your earnings.

            </p>

            {/* Bullet Points */}
            <div className="mb-8 space-y-4">
              {[
                " Learn & Grow – Access free guides and market insights to improve your skills.",
                " Multiple Trading Options – Trade Forex, Crypto, Stocks, and more in one place.",
                "Instant Trade Execution – No delays, no hassle—trade in real time.",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FiArrowRight className="w-5 h-5 text-yellow-500" />
                  <span className="text-green-300">{point}</span>
                </div>
              ))}
            </div>

            <Link to="/registration">
              <button className="flex items-center gap-2 p-1 py-1 text-white bg-yellow-400 rounded-full hover:bg-yellow-500 ">
                <span className="py-2 bg-green-800 rounded-full hover:bg-green-700 px-7 ">
                  Discover More
                </span>
                <div className="flex items-center justify-center p-3 bg-white rounded-full group hover:bg-green-200">
                  <AiOutlineArrowRight className="w-4 h-4 text-green-600 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </Link>
          </div>
          <div className="relative flex items-center justify-center order-last lg:order-first lg:justify-start">
            <img
              src="/treadings.png"
              alt="AI Robot with tablet"
              className="object-contain w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
            />
          </div>

          {/* Right Column - Content */}
        </div>
      </div>
    </div>
  );
}
