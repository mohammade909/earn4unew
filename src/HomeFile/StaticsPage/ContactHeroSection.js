import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export const ContactHeroSection = () => {
  return (
    <>
     <div className="relative overflow-hidden isolate pt-14">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 object-cover -z-10 size-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl py-40 mx-auto ">
           
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white text-balance ">
              Contact Us
              </h1>
              <p className="mt-4 text-base font-medium text-gray-400 text-pretty ">
              Have questions or need assistance? Our team is here to support you every step of the way. Reach out to us anytime!
              </p>
              <div className="flex items-center justify-center mt-10 text-white gap-x-6">
              <Link to="/" className="px-8 py-2 rounded-full hover:text-green-100 bg-pink-600/35 hover:scale-105">Home</Link>               <MdKeyboardDoubleArrowRight className="text-xl" />
              <Link to="/contact"className="px-8 py-2 rounded-full hover:text-green-100 bg-pink-600/35 hover:scale-105">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};















































// <div className="relative min-h-screen bg-[#010D1F] overflow-hidden">
// <div
//   className="absolute inset-0 object-center opacity-60"
//   style={{
//     backgroundImage:
//       "url('https://html.designingmedia.com/artelligence/assets/images/banner-background.png')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// />
// <div className="px-2 mx-auto max-w-7xl sm:px-0">
//   <div className="grid items-center min-h-screen gap-12 pt-24 md:grid-cols-2 md:pt-0">
//     <div className="z-10">
//       <h1 className="mb-6 text-5xl font-semibold text-transparent sm:text-6xl bg-gradient-to-r from-blue-500 via-red-400 to-green-500 bg-clip-text lendings">
//       Contact Us
//       </h1>
//       <p className="max-w-xl mb-8 text-gray-300">
//       We’re here to help! Whether you have questions about our trading, need assistance, or want to provide feedback, feel free to reach out.
//       </p>
//       <div className="flex space-x-4">
//         <div className="flex space-x-4">
//           <div className="group">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-2.5 flex justify-between gap-2 items-center text-white rounded-r-full rounded-tl-full px-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-cyan-600">
//               <Link to="/" className="hover:text-green-100 hover:underline">Home</Link>
//               <MdKeyboardDoubleArrowRight className="text-xl" />
//               <Link to="/contact"className="hover:text-green-100 hover:underline">Contact</Link>
//             </div>
//           </div>

         
//         </div>
//       </div>
//     </div>

//     <div className="relative z-10">
//       <img
//         src="https://cdn-apinb.nitrocdn.com/LGFQTZTBRQFYZkDHnBAkeTYvUEPBCNKO/assets/images/optimized/rev-220ff1a/www.instancy.com/wp-content/uploads/2023/08/Home-bg-image.png"
//         alt="AI Robot"
//         className="w-full h-auto"
//       />
//     </div>
//   </div>
// </div>
// </div>