import React from "react";
import {Link} from "react-router-dom"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export const AboutHeroSection = () => {
  return (
    <>
     <div className="relative px-6 isolate pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="max-w-2xl py-5 mx-auto sm:py-16 ">
         \
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
            About Us
            </h1>
            <p className="mt-4 text-base font-medium text-gray-400 text-pretty ">
            Earn 4u is built to make trading simple and accessible for everyone. Whether you're a beginner or an expert, we provide the right tools and guidance to help you succeed. Our platform is secure, easy to use, and designed to help you grow your earnings with confidence.
</p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link to='/'className="px-8 py-2 text-green-100 bg-pink-600 rounded-full hover:scale-105">Home</Link>
                     
                     <MdKeyboardDoubleArrowRight className="text-xl text-white"/>
                      <Link to='/about'className="px-8 py-2 text-yellow-100 bg-pink-600 rounded-full hover:scale-105">About</Link>
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};










































// <div className="relative min-h-screen bg-[#010D1F] overflow-hidden">
//         <div
//           className="absolute inset-0 object-center opacity-60"
//           style={{
//             backgroundImage:
//               "url('https://html.designingmedia.com/artelligence/assets/images/banner-background.png')",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <div className="px-2 mx-auto max-w-7xl sm:px-0">
//           <div className="grid items-center gap-12 pt-24 md:grid-cols-2 min-h-svh md:pt-0">
//             <div className="z-10">
//               <h1 className="mb-6 text-5xl font-semibold text-transparent sm:text-6xl bg-gradient-to-r from-blue-500 via-red-400 to-green-500 bg-clip-text lendings">
//               About Us
//               </h1>
//               <p className="max-w-xl mb-8 text-lg text-justify text-gray-300">
//               Take charge of your investments with FinRain, a smart trading designed to help you make more profit with less effort. Our advanced AI-powered technology allows you to trade 24/7 without the hassle of manual trading. Whether you are a beginner or an expert, FinRain makes trading simpler, safer, and more efficient for everyone.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="flex space-x-4">
//                   <div className="group">
//                     <div className="flex items-center justify-between gap-2 px-4 py-2 text-white transition-all duration-300 rounded-r-full rounded-tl-full bg-gradient-to-r from-blue-600 to-blue-800 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-cyan-600">
                    //  <Link to='/'className="hover:text-green-100 hover:underline">Home</Link>
                     
                    //  <MdKeyboardDoubleArrowRight className="text-xl"/>
                    //   <Link to='/about'className="hover:text-green-100 hover:underline">About</Link>
//                     </div>
//                   </div>

                  
//                 </div>
//               </div>
//             </div>

//             <div className="relative z-10">
//               <img
//                 src="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
//                 alt="AI Robot"
//                 className="absolute object-cover w-full h-auto -right-20 -top-28"
//               />
//             </div>
//           </div>
//         </div>
//       </div>