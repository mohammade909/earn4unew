import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      direct: "0%",
      color: "text-red-600",
      features: ["0% ROI", "No Level income", "No Rewards"],
      price: "$5",
    },
    {
      id: "advanced",
      name: "Advanced",
      direct: "2%",
      color: "text-blue-700",
      features: ["0.2% ROI Daily", "Level income", "Rewards"],
      price: "$25",
    },
    {
      id: "premium",
      name: "Premium",
      direct: "3%",
      color: "text-yellow-500",
      features: ["0.4% ROI Daily", "Level income", "Rewards"],
      price: "$50",
    },
    {
      id: "elite",
      name: "Elite",
      direct: "4%",
      color: "text-green-700",
      features: ["0.5% ROI Daily", "Level income", "Rewards"],
      price: "$100",
    },
  ];

  // Find the selected plan details
  const currentPlan = pricingPlans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="mx-auto max-w-7xl sm:px-2 px-4 pt-8 sm:pt-12">
      <div className=" mb-5 text-green-600 text-3xl font-semibold">
        <span className=" text-yellow-500">— Choose </span>Your Plan
      </div>

      <div className="grid md:grid-cols-2 gap-10 grid-cols-1 border border-gray-300 p-6 rounded-md shadow-sm">
        <div>
          <div className="space-y-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "border-[#6366F1] bg-[#F3F4FF]"
                    : "border-gray-300 hover:border-[#6366F1]"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="pricing"
                    id={plan.id}
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                    className="h-5 w-5 text-[#6366F1] focus:ring-[#6366F1]"
                  />
                  <label
                    htmlFor={plan.id}
                    className={`text-lg font-medium ${
                      selectedPlan === plan.id
                        ? "text-[#6366F1]"
                        : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </label>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-medium">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className={`text-2xl font-semibold   ${currentPlan.color} `}>
            {currentPlan.name} Plan
          </h2>
          <div className="sm:flex justify-between items-center ">
            <div className="sm:block flex justify-between items-center  ">
              <p className="text-gray-700  mt-2">
                Direct Income: {currentPlan?.direct}
              </p>
            </div>
            <div className="text-center sm:mt-0 mt-4">
              <button
                onClick={() => console.log(`Buying ${currentPlan.name} Plan`)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white p-1 py-1 rounded-full flex items-center gap-2 "
              >
                <span className="bg-green-800 hover:bg-green-700 px-7 py-2 rounded-full ">
                  Buy Plan
                </span>
                <div className="bg-white group rounded-full p-3 flex items-center justify-center  hover:bg-green-200">
                  <AiOutlineArrowRight className="w-4 h-4 text-green-600 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-lg border-t-2 pt-2 border-gray-300">
              Features :-
            </p>
            {currentPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600 text-base">{feature}</span>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>

          {/* Buy Plan Button */}
        </div>
      </div>
    </div>
  );
}
