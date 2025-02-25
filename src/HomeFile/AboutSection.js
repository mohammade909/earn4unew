import {
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
  FiArrowRight,
  FiUsers,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function AboutSection() {
  const stats = [
    { value: "50K+", label: "Active Traders", icon: <FiUsers /> },
    { value: "98%", label: "Success Rate", icon: <FiAward /> },
    { value: "24/7", label: "Support", icon: <FiGlobe /> },
  ];

  return (
    <div className="relative pt-6 pb-16 overflow-hidden bg-gray">
      <div className="relative px-4 mx-auto lg:px-0 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative p-1 ">
              <img
                src="https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137537.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid"
                alt="MetaMask"
                className="relative object-cover w-full h-auto shadow-2xl rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="inline-flex items-center px-8 py-1 text-sm text-indigo-600 border rounded-full bg-indigo-500/10 border-indigo-500/20">
                Web3
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-semibold text-green-500">
                  <span className="text-transparent text-yellow-400 bg-clip-text ">
                  How It 
                  </span>{" "}
                  Works
                </h2>
                <p className="text-base leading-relaxed text-justify text-gray-600">
                Trading with Earn 4U is simple and hassle-free. Follow these easy steps to begin your journey toward financial growth.

                </p>
              </div>
              <div className="">
                
                <ul className="pl-5 text-base text-gray-600">
                  <li className="list-disc">
                    <span>Sign Up & Verify – Create your free account and complete a quick verification.</span>
                  </li>
                  <li className="list-disc">
                    <span>2️ Fund Your Wallet – Deposit funds securely to start trading.</span>
                  </li>
                  <li className="list-disc">
                    <span>Trade & Earn – Choose your market, place trades, and withdraw profits anytime.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/registration">
              <button className="relative mt-4 overflow-hidden font-semibold transition-all duration-300 rounded-lg group ">
                <button className="flex items-center gap-2 p-1 py-1 text-white bg-yellow-400 rounded-full ">
                  <span className="px-4 py-2 bg-green-800 rounded-full">
                    {" "}
                    Conncet
                  </span>
                  <div className="p-3 bg-white rounded-full">
                    <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                </button>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
