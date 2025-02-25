// import { useState } from "react"
// import { AiOutlinePlus } from "react-icons/ai";
 
// const faqs = [
//   {
//     question: "What services does your platform offer?",
//     answer:
//       "We offer automated trading solutions, AI-driven analytics, and a user-friendly interface to help maximize profits while minimizing risks.",
//   },
//   {
//     question: "Is your platform suitable for beginners?",
//     answer:
//       "Absolutely! Our platform is designed to be intuitive for new traders while also providing advanced tools for experienced users.",
//   },
//   {
//     question: "Are there any fees for using your platform?",
//     answer:
//       "Yes, transaction fees may apply depending on the type of trade and exchange platform used. Detailed fee structures are provided in your account dashboard.",
//   },
//   {
//     question: "How secure is my account information?",
//     answer:
//       "We prioritize security by implementing advanced encryption and multi-factor authentication to safeguard your account.",
//   },
//   {
//     question: "How can I contact support if I have an issue?",
//     answer:
//       "You can reach our support team via email, phone, or live chat available on our website. We're here to help 24/7.",
//   },
// ]
 
// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null)
 
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission
//   }
 
//   return (
//     <div className="py-16 mx-auto max-w-7xl ">
//       <div className="grid items-center gap-10 lg:grid-cols-">
//         {/* Left Column - Introduction */}
//         <div className="space-y-4 ">
//           <h2 className="text-lg font-medium tracking-wide text-center text-blue-500 uppercase">FAQs</h2>
//           <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-700 via-red-500 to-green-600 bg-clip-text">
//             Frequently Asked Questions
//           </h1>
//           <div className="flex justify-center text-center"> <p className="max-w-xl text-lg leading-relaxed text-gray-800">
//             Find answers to the most common questions about our services. If you don't see your question here, feel free to reach out to us for further assistance.
//           </p></div>
         
//         </div>
 
//         {/* Right Column - FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="overflow-hidden transition-all duration-200 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="flex items-center justify-between w-full p-5 text-left text-white"
//               >
//                 <span className="text-lg font-medium">{faq.question}</span>
//                 <div
//                   className={`rounded-full bg-blue-500 p-2 text-white transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
//                 >
//                   <AiOutlinePlus className="w-5 h-5" />
//                 </div>
//               </button>
//               {openIndex === index && (
//                 <div className="px-5 py-3 text-gray-400 border-t border-gray-700">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
 


import React, { useState } from "react";

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
          question: "❓ 1. How do I start trading on Earn 4U?",
          answer:
            "👉 Simply sign up, verify your account, deposit funds, and start trading right away.",
        },
        {
          question: "❓ 2. What markets can I trade on Earn 4U?",
          answer:
            "👉 You can trade Forex, Crypto, Stocks, and Commodities—all in one platform.",
        },
        {
          question: "❓ 3. Is Earn 4U safe and secure?",
          answer:
            "👉 Yes! We use advanced security measures to protect your funds and data.",
        },
        {
          question: "❓ 4. How can I withdraw my earnings?",
          answer:
            "👉 You can withdraw anytime using secure payment methods, with fast processing times.",
        },
        {
          question: "❓ 5. Do I need trading experience to start?",
          answer:
            "👉 No! Our platform is beginner-friendly, with learning resources to help you get started.",
        },
      ]
       

    // Filter FAQs based on the search query
    const filteredFaqs = faqs?.filter(faq =>
        faq?.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq?.answer?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-4 mx-auto max-w-7xl md:py-12 py-9 sm:px-2">
            <h2 className="text-3xl font-semibold text-gray-800">
            Frequently Asked <span className="text-red-500">Questions</span>
        </h2>

            {/* Search Input */}
            <div className="flex flex-col items-start justify-start mt-1 md:justify-between md:items-center md:flex-row">
                <p className="text-base font-normal text-gray-600 lg:w-8/12 md:w-9/12">
                    Here are a few of the most frequently asked questions by our valuable customers.
                </p>
                <div className="flex items-center justify-center w-full pb-2 mt-10 border-b-2 border-gray-200 md:mt-0 md:w-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-base font-normal leading-4 text-gray-600 placeholder-gray-600 lg:w-96 md:w-72 focus:outline-none"
                    />
                    <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 14L10 10" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* FAQ List */}
            <div className="flex flex-col mt-8 md:flex-row md:space-x-8 md:mt-16">
                <div className="w-full md:w-5/12 lg:w-4/12">
                    <img src="https://img.freepik.com/premium-vector/woman-holding-clipboard-with-question-it_951778-96119.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid" alt="FAQ Image" className="w-full " />
                </div>

                <div className="w-full mt-10 md:w-7/12 lg:w-8/12 md:mt-0">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <div key={faq.id}>
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    <h3 className="text-lg font-semibold leading-5 text-gray-800">{faq.question}</h3>
                                    <button aria-label="toggle" className="focus:outline-none">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={openIndex === index ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                {openIndex === index && <p className="w-11/12 mt-2 text-base font-normal leading-6 text-justify text-gray-600">{faq.answer}</p>}
                                <hr className="bg-gray-200 my-7" />
                            </div>
                        ))
                    ) : (
                        <p className="mt-4 text-lg text-gray-600">No results found for "{searchQuery}"</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;
