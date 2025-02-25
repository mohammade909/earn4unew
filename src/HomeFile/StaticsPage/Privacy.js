import React from "react";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import { PrivacyHeroSection } from "./PrivacyHeroSection";


export const Privacy = () => {
  return (
    <>
      <Header />
      <PrivacyHeroSection/>
      <div className="px-2 py-12 bg-white">
        <div className="px-2 mx-auto max-w-7xl sm:px-0">
          <div className="">
            {/* Header */}
            <h1 className="mb-6 text-4xl font-bold text-gray-800">
              <span className="">Privacy Policy</span>
            </h1>
            {/* Section: Introduction */}
            <section className="mb-8 text-base leading-relaxed text-gray-600">
              <p className="mb-4 ">
              Welcome to{" "}
                <span className="font-semibold text-[#00326a]">
                Earn 4u,
                </span>{" "}
               
              </p>
              <p className="px-4 mb-3 text-base text-justify">
              We value your trust and take your privacy seriously. Our policies are designed to keep your data secure and transparent, so you can trade with confidence.
              </p>
            </section>
            {/* Divider */}
            <div className="my-6 border-b border-gray-300" />
            {/* Section: Information We Collect */}



            
           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">



           <section className="p-4 mb-8 border-2 shadow-lg ">
              <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="px-4 mb-3 text-base text-justify">
              We gather essential details like name, email, and transaction data to improve your experience.
              </p>
              <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
                <li>
                  <strong>Personal Information :</strong> Name, email address, phone number, and payment details.

                </li>
                <li>
                  <strong>Technical Data :</strong>IP address, browser type, and device information.
                </li>
                <li>
                  <strong>Usage Data :</strong>  Interactions with our website, pages visited, and features used.
                </li>
              </ul>
            </section>
            {/* Section: How We Use Information */}
            <section className="p-4 mb-8 border-2 shadow-lg ">
              <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="px-4 mb-3 text-base text-justify">
              Your data helps us enhance our services, provide support, and ensure security.


          </p>
              <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
                <li>
                Provide and improve our services.
                </li>
                <li>
                Process transactions securely.
                </li>
                <li>
                Communicate with you regarding updates or support.
                </li>
                <li>
                Ensure the security and integrity of our platform.
                </li>
              </ul>
            </section>

            <section className="p-4 mb-8 border-2 shadow-lg ">
              <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
                  3
                </span>
                Sharing of Information
              </h2>
              <p className="px-4 mb-3 text-base text-justify">
              We do not sell your data and only share it with trusted partners when necessary.


          </p>
              <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
                <li>
                When required by law or to protect our rights

                </li>
                <li>
                To trusted service providers for operational purposes, under strict confidentiality agreements.
                </li>
              </ul>
            </section>
            {/* Section: Data Sharing */}
           
            {/* Section: Account Deletion */}
            <section className="p-4 mb-8 border-2 shadow-lg ">
              <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
                  4
                </span>
                Your Rights
              </h2>
              <p className="mb-4 text-base text-gray-600">
              You have full control over your personal information, including access and deletion requests.

              </p>
              <ol className="pl-4 space-y-2 text-base text-gray-600 list-inside ">
                <li>
                1️⃣ Access and update your personal information.

                </li>
                <li>
                2️⃣ Request data deletion or restriction of processing.
                </li>
                <li>
                3️⃣ Withdraw consent for marketing communications.
                </li>
              </ol>
            </section>
            {/* Section: Contact Us */}
            <section className="p-4 mb-8 border-2 shadow-lg ">
              <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
                <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
                  5
                </span>
                Updates to This Policy
              </h2>
              <p className="mb-4 text-base text-gray-600">
              We may update our privacy policy as needed and will notify you of any significant changes.

              </p>
             
            </section>


            
           </div>
            {/* Section: Data Deletion Form */}
       
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};


































































// <div className="py-12 mt-5 bg-white">
// <div className="px-2 mx-auto max-w-7xl sm:px-0">
//   <div className="">
//     {/* Header */}
//     <h1 className="mb-6 text-4xl font-extrabold text-gray-800">
//       <span className="text-[#006A4E]">Privacy Policy</span>
//     </h1>
//     {/* Section: Introduction */}
//     <section className="mb-8 text-base leading-relaxed text-gray-600">
//       <p className="mb-4 ">
//       Welcome to{" "}
//         <span className="font-semibold text-[#006A4E]">
//           !At Finrain,
//         </span>{" "}
       
//       </p>
//       <p className="px-4 mb-3 text-base text-justify">
//       At FinRain, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our website and services.
//       </p>
//     </section>
//     {/* Divider */}
//     <div className="my-6 border-b border-gray-300" />
//     {/* Section: Information We Collect */}
//     <section className="mb-8">
//       <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
//         <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
//           1
//         </span>
//         Information We Collect
//       </h2>
//       <p className="px-4 mb-3 text-base text-justify">
//       We may collect the following types of information:-
//       </p>
//       <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
//         <li>
//           <strong>Personal Information :</strong> Name, email address, phone number, and payment details.

//         </li>
//         <li>
//           <strong>Technical Data :</strong>IP address, browser type, and device information.
//         </li>
//         <li>
//           <strong>Usage Data :</strong>  Interactions with our website, pages visited, and features used.
//         </li>
//       </ul>
//     </section>
//     {/* Section: How We Use Information */}
//     <section className="mb-8">
//       <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
//         <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
//           2
//         </span>
//         How We Use Your Information
//       </h2>
//       <p className="px-4 mb-3 text-base text-justify">
//       We use your data to :

//   </p>
//       <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
//         <li>
//         Provide and improve our services.
//         </li>
//         <li>
//         Process transactions securely.
//         </li>
//         <li>
//         Communicate with you regarding updates or support.
//         </li>
//         <li>
//         Ensure the security and integrity of our platform.
//         </li>
//       </ul>
//     </section>

//     <section className="mb-8">
//       <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
//         <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
//           3
//         </span>
//         Sharing of Information
//       </h2>
//       <p className="px-4 mb-3 text-base text-justify">
//       We do not sell or share your personal information with third parties, except :

//   </p>
//       <ul className="pl-4 space-y-2 text-base text-gray-600 list-disc list-inside">
//         <li>
//         When required by law or to protect our rights

//         </li>
//         <li>
//         To trusted service providers for operational purposes, under strict confidentiality agreements.
//         </li>
//       </ul>
//     </section>
//     {/* Section: Data Sharing */}
   
//     {/* Section: Account Deletion */}
//     <section className="mb-8">
//       <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
//         <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
//           4
//         </span>
//         Your Rights
//       </h2>
//       <p className="mb-4 text-base text-gray-600">
//       You have the right to:
//       </p>
//       <ol className="pl-4 space-y-2 text-base text-gray-600 list-inside ">
//         <li>
//         1️⃣ Access and update your personal information.

//         </li>
//         <li>
//         2️⃣ Request data deletion or restriction of processing.
//         </li>
//         <li>
//         3️⃣ Withdraw consent for marketing communications.
//         </li>
//       </ol>
//     </section>
//     {/* Section: Contact Us */}
//     <section className="mb-8">
//       <h2 className="flex items-center mb-4 text-2xl font-bold text-gray-800">
//         <span className="bg-[#006A4E] text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
//           5
//         </span>
//         Updates to This Policy
//       </h2>
//       <p className="mb-4 text-base text-gray-600">
//       We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
//       </p>
     
//     </section>
//     {/* Section: Data Deletion Form */}

//   </div>
// </div>
// </div>
