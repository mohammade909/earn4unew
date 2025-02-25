import React from 'react'
import Header from '../../CoreFile/Header'
import Footer from '../../CoreFile/Footer'
import { TermsHeroSection } from './TermsHeroSection'



export const Terms = () => {
  return (
  <>
  <Header/>
  <TermsHeroSection/>
<div className="px-2 text-black bg-white ">
  <div className="px-2 py-8 mx-auto max-w-7xl sm:px-0">
    <div className="flex w-full">
      <h1 className="mb-0 text-3xl font-bold ">Terms and Conditions </h1>
    </div>
    <br />
    <p className="mb-4 text-base text-justify">
    These terms outline the rules and guidelines for using Earn 4u. By accessing our services, you agree to comply with these conditions to ensure a secure and fair trading experience.


    </p>
    <br />
    {/* repeat this section for each section of terms */}
  
   <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 '>

   <div className="p-5 border-2 shadow-md shadow-gray-200 ">
      <h2 className="font-bold text-green-600 dark:text-orange-300"> Trading and Transactions

      </h2>
      <br /> 
      
      <ul className='px-2'>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ All trades executed on Earn 4u are final and cannot be reversed.

          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ Users must ensure they have sufficient funds before placing trades.

          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          
✅ Earn 4u is not responsible for any losses resulting from market fluctuations.

          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ We reserve the right to monitor and review transactions for security and compliance.

          </p>
        </li>
        <br />
        
      </ul>
    </div> 
  
    <div className="p-5 border-2 shadow-md shadow-gray-200">
      <h2 className="font-bold text-green-600 dark:text-orange-300">     Account Security

      </h2>
      <br /> 
      {/* <p className="text-base text-justify">
      Account Security
          </p> */}
      <ul className='px-2'>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ Users are responsible for maintaining the confidentiality of their login details.

          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ Any unauthorized access or suspicious activity must be reported immediately.



          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ Earn 4u will never ask for your password or sensitive account information.


          </p>
        </li>
        <li className="mt-2 ">
          <p className="text-base text-justify">
          ✅ We use advanced security measures, but users should also enable two-factor authentication for added protection.

          </p>
        </li>
        <br />
        
      </ul>
    </div>
    <div className="p-5 border-2 shadow-md shadow-gray-200">
      <h2 className="font-bold text-green-600 dark:text-orange-300">Limitation of Liability
      </h2>
      <br /> 
      <p className="text-base text-justify">
      Earn 4u is not responsible for any financial losses incurred through trading.

          </p>
      <ul className='px-4'>
        <li className="mt-2 list-disc ">
          <p className="text-base text-justify">
          ✅ We do not guarantee profits, and all trading decisions are at the user’s own risk.


          </p>
        </li>
        <li className="mt-2 list-disc ">
          <p className="text-base text-justify">
          ✅ Technical issues, including website downtime, may occur, and we are not liable for losses caused by such disruptions.

          </p>
        </li>
        <li className="mt-2 list-disc ">
          <p className="text-base text-justify">
          ✅ Users agree that Earn 4u is not responsible for third-party services or external financial institutions linked to the platform.

          </p>
        </li>
        <br />
        
      </ul>
    </div>
   </div>
    
    
    <div className="pt-7">
      <ul>
        <li className="">
          <p className="text-base text-center ">
          We encourage all users to stay informed about market conditions and carefully monitor their trading activities.
          </p>
        </li>
        <br />
        
      </ul>
    </div>
  </div>
</div>

  <Footer/>
  </>
  )
}






















// <div className="mt-4 text-black bg-white dark:bg-black dark:text-white">
//   <div className="px-2 py-8 mx-auto max-w-7xl sm:px-0">
//     <div className="flex w-full">
//       <h1 className="mb-0 text-3xl font-bold text-green-600">Terms and Conditions </h1>
//     </div>
//     <br />
//     <p className="mb-4 text-base text-justify">
//     To access FinRain and use our services, you must create an account with accurate and complete information. By using our platform, you agree to adhere to the terms outlined below.


//     </p>
//     <br />
//     {/* repeat this section for each section of terms */}
//     <div className="pb-5">
//       <h2 className="font-bold text-green-600 dark:text-orange-300"> Trading and Transactions

//       </h2>
//       <br /> 
//       <p className="text-base text-justify">
//       When using FinRain for trading, you agree to comply with all applicable laws and regulations.
//           </p>
//       <ul className='px-2'>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹FinRain is not liable for trading errors or incorrect transactions.
//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Always review transaction details carefully before confirming.
//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Transaction fees may vary based on the exchange platform or trade type.
//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Users are solely responsible for ensuring the accuracy and authorization of their trades.
//           </p>
//         </li>
//         <br />
        
//       </ul>
//     </div> 
//     <br/>
//     <div className="pb-5">
//       <h2 className="font-bold text-green-600 dark:text-orange-300">     Account Security

//       </h2>
//       <br /> 
//       {/* <p className="text-base text-justify">
//       Account Security
//           </p> */}
//       <ul className='px-2'>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Keep your account credentials, including your password, secure at all times.
//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Notify us immediately if you suspect unauthorized access to your account.


//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Notify us immediately if you suspect unauthorized access to your account.

//           </p>
//         </li>
//         <li className="mt-2 ">
//           <p className="text-base text-justify">
//           🔹Follow platform security guidelines for a safe experience.
//           </p>
//         </li>
//         <br />
        
//       </ul>
//     </div>
//     <div className="pb-5">
//       <h2 className="font-bold text-green-600 dark:text-orange-300">Limitation of Liability
//       </h2>
//       <br /> 
//       <p className="text-base text-justify">
//       While FinRain is committed to providing a secure and seamless trading experience, we are not liable for : -
//           </p>
//       <ul className='px-4'>
//         <li className="mt-2 list-disc ">
//           <p className="text-base text-justify">
//           Financial losses, including lost funds or incorrect trades.

//           </p>
//         </li>
//         <li className="mt-2 list-disc ">
//           <p className="text-base text-justify">
//           Technical errors, service interruptions, or system outages.
//           </p>
//         </li>
//         <li className="mt-2 list-disc ">
//           <p className="text-base text-justify">
//           Market fluctuations that may affect trading outcomes.
//           </p>
//         </li>
//         <br />
        
//       </ul>
//     </div>
//     <div className="pb-5">
      
//       <ul>
//         <li className="">
//           <p className="text-base text-justify">
//           We encourage all users to stay informed about market conditions and carefully monitor their trading activities.
//           </p>
//         </li>
//         <br />
        
//       </ul>
//     </div>
//   </div>
// </div>