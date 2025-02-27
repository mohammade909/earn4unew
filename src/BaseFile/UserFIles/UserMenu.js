// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   TransitionChild,
// } from "@headlessui/react";
// import {
//   Bars3CenterLeftIcon,
//   BellIcon,
//   ClockIcon,
//   CreditCardIcon,
//   DocumentChartBarIcon,
//   HomeIcon,
//   ScaleIcon,
//   UserGroupIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import { FaRegUser } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signoutuser } from "../../redux/authSlice";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { defaulterNotification, getUser } from "../../redux/userSlice";
// import NotificationPopup from "../../User/NotificationPopup";
// import RewardNotification from "../../User/RewardNotification";

// const network = [
//   { name: "Direct Member", to: "/user/directmember", current: false },
//   { name: "Referral Tree", to: "/user/referraltree", current: false },
// ];
// const wallet = [
//   // { name: "Deposite", to: "/user/adddeposite", current: false },
//   // { name: "Withdrawal", to: "/user/addwithdrawal", current: false },
//   // { name: "TopUp", to: "/user/topup", current: false },
//   // { name: "ReTopUp", to: "/user/retopup", current: false },
// ];
// const income = [
//   { name: "Detail", to: "/user/income", current: false },
//   {
//     name: "Reward",
//     to: "/user/transaction/reward_transaction",
//     current: false,
//   },
//   {
//     name: "Direct",
//     to: "/user/transaction/direct_transaction",
//     current: false,
//   },
//   {
//     name: "Level",
//     to: "/user/transaction/invest_level_transaction/invest",
//     current: false,
//   },

//   {
//     name: "ROI",
//     to: "/user/transaction/roi_transaction/Invest",
//     current: false,
//   },
// ];
// const navigation = [
//   {
//     name: "Dashboard",
//     to: "/user/dashboard",
//     current: true,
//     icon: HomeIcon,
//     submenu: [],
//   },
//   {
//     name: "Direct",
//     to: "/user/directmember",
//     current: false,
//     icon: ClockIcon,
//     submenu: [],
//   },
//   {
//     name: "Tree",
//     to: "/user/referraltree",
//     current: false,
//     icon: ClockIcon,
//     submenu: [],
//   },
//   {
//     name: "Deposit",
//     to: "/user/adddeposite",
//     current: false,
//     icon: ScaleIcon,
//     submenu: wallet,
//   },
//   {
//     name: "Withdrawal",
//     to: "/user/addwithdrawal",
//     current: false,
//     icon: CreditCardIcon,
//     submenu: wallet,
//   },
//   {
//     name: "Top-Up",
//     to: "/user/topup",
//     current: false,
//     icon: ScaleIcon,
//     submenu: wallet,
//   },
//   // {
//   //   name: "Top-Up",
//   //   to: "/user/retopup",
//   //   current: false,
//   //   icon: DocumentChartBarIcon,
//   //   submenu: wallet,
//   // },
//   // {
//   //   name: "Transfer",
//   //   to: "/user/transfer",
//   //   current: false,
//   //   icon: DocumentChartBarIcon,
//   //   submenu: [],
//   // },
//   {
//     name: "Income",
//     to: "/user/income",
//     current: false,
//     icon: CreditCardIcon,
//     submenu: income,
//   },
//   {
//     name: "Membership Plan",
//     to: "/user/plan",
//     current: false,
//     icon: UserGroupIcon,
//     submenu: [],
//   },
//   {
//     name: "Support",
//     to: "/user/sendsupport",
//     current: false,
//     icon: DocumentChartBarIcon,
//     submenu: [],
//   },
//   // {
//   //   name: "Reward",
//   //   to: "/user/reward",
//   //   current: false,
//   //   icon: DocumentChartBarIcon,
//   //   submenu: [],
//   // },
//   {
//     name: "Notification",
//     to: "/user/Notification",
//     current: false,
//     icon: DocumentChartBarIcon,
//     submenu: [],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// export default function UserMenu({ Children, PageName }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [defaulternotification, setDefaulterNotification] = useState(false);
//   const { auth } = useSelector((state) => state.auth);
//   const { singleuser, userrewardnotification } = useSelector(
//     (state) => state.allusers
//   );

//   const [tabs, setTabs] = useState([]);
//   const [currentMenu, setCurrentMenu] = useState("Dashboard");
//   const [currentTabs, setCurrentTabs] = useState(tabs?.[0]);
//   const [timeRemaining, setTimeRemaining] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [timeRemaining2, setTimeRemaining2] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   useEffect(() => {
//     dispatch(getUser(auth?.id));
//     dispatch(defaulterNotification(auth?.id));
//   }, [auth?.id]);

//   useEffect(() => {
//     if (userrewardnotification) {
//       setDefaulterNotification(true);
//     }
//   }, [userrewardnotification]);

//   function handleLogout() {
//     dispatch(signoutuser());
//     navigate("/");
//   }
//   function handleMenu(submenu, name) {
//     setTabs(submenu);
//     setCurrentMenu(name);
//   }

//   useEffect(() => {
//     if (!singleuser?.created_at) return;
//     const createdAtDate = new Date(singleuser.created_at);
//     const referenceDate = new Date("2025-02-08T00:00:00Z"); // 7 Feb 2025 (UTC)

//     // If created_at is before 7th Feb 2025, stop the countdown
//     if (createdAtDate < referenceDate) {
//       setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       return;
//     }

//     const timerDuration = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
//     const endDate = createdAtDate.getTime() + timerDuration;

//     const calculateTimeRemaining = () => {
//       const now = new Date().getTime();
//       const difference = endDate - now;

//       if (difference <= 0) {
//         clearInterval(timerInterval);
//         setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         setTimeRemaining({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     const timerInterval = setInterval(calculateTimeRemaining, 1000);
//     return () => clearInterval(timerInterval);
//   }, [singleuser?.created_at]);

//   useEffect(() => {
//     if (!singleuser?.created_at) return;

//     const createdAtDate = new Date(singleuser.created_at);
//     const referenceDate = new Date("2025-02-08T00:00:00Z"); // 7 Feb 2025 (UTC)

//     // If created_at is before 7th Feb 2025, stop the countdown
//     if (createdAtDate < referenceDate) {
//       setTimeRemaining2({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       return;
//     }

//     const timerDuration2 = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
//     const endDate2 = createdAtDate.getTime() + timerDuration2;

//     const calculateTimeRemaining2 = () => {
//       const now = new Date().getTime();
//       const difference2 = endDate2 - now;

//       if (difference2 <= 0) {
//         clearInterval(timerInterval2);
//         setTimeRemaining2({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         setTimeRemaining2({
//           days: Math.floor(difference2 / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference2 % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     const timerInterval2 = setInterval(calculateTimeRemaining2, 1000);
//     return () => clearInterval(timerInterval2);
//   }, [singleuser?.created_at]);

//   function isClose() {
//     setDefaulterNotification(false);
//   }
//   return (
//     <>
//       <div className="min-h-full bg-gray-200">
//         <Dialog
//           open={sidebarOpen}
//           onClose={setSidebarOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative flex w-full max-w-xs flex-1 transform flex-col bg-black pb-4  transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//             >
//               <TransitionChild>
//                 <div className="absolute right-0 top-0 -mr-12 pt-2 duration-300 ease-in-out data-[closed]:opacity-0">
//                   <button
//                     type="button"
//                     onClick={() => setSidebarOpen(false)}
//                     className="relative flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Close sidebar</span>
//                     <XMarkIcon
//                       aria-hidden="true"
//                       className="w-6 h-6 text-white"
//                     />
//                   </button>
//                 </div>
//               </TransitionChild>
//               <div className="flex items-center flex-shrink-0 px-4 border-b ">
//                 <Link to="/">
//                   {/* <img alt="Logo" src="/finrain.png" className="w-28" /> */}
//                   <div className="flex items-center justify-center w-20 h-20 ">
//                     <img
//                       alt="Finrain Logo"
//                       src="https://img.freepik.com/free-vector/logotype-made-with-three-human-avatars_1025-91.jpg?ga=GA1.1.1673403856.1719407260&semt=ais_hybrid"
//                       className="w-auto h-16 rounded-full"
//                     />
//                   </div>
//                 </Link>
//               </div>
//               <nav
//                 aria-label="Sidebar"
//                 className="flex-shrink-0 h-full mt-5 pb-24 overflow-y-auto divide-y divide-gray-300"
//               >
//                 <div className="px-2 space-y-1">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.to}
//                       onClick={() => {
//                         handleMenu(item?.submenu, item.name);
//                         setSidebarOpen(false);
//                       }}
//                       className={classNames(
//                         item.name == currentMenu
//                         ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                         : "text-gray-100  ",
//                       "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                       )}
//                     >
//                       <item.icon
//                         aria-hidden="true"
//                         className="flex-shrink-0 w-6 h-6 mr-4 "
//                       />
//                       {item.name}
//                     </Link>
//                   ))}
//                   <Link
//                     to={`/user/profile/${auth?.id}`}
//                     onClick={() => handleMenu([], "Profile")}
//                     className={classNames(
//                       "Profile" == currentMenu
//                       ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                       : "text-gray-100  ",
//                     "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                     )}
//                   >
//                     <FaRegUser
//                       aria-hidden="true"
//                       className="flex-shrink-0 w-5 h-5 mr-4 "
//                     />
//                     Profile
//                   </Link>
//                   <Link
//                     onClick={handleLogout}
//                     className={classNames(
//                      "   text-gray-100",
//                     "group  flex items-center hover:bg-gray-900/50 hover:border border-white/50 hover:rounded-r-full px-2 py-2 text-sm  font-medium leading-6 "
//                     )}
//                   >
//                     <IoMdLogOut
//                       aria-hidden="true"
//                       className="flex-shrink-0 w-5 h-5 mr-4 text-gray-100"
//                     />
//                     Logout
//                   </Link>
//                 </div>
//               </nav>
//             </DialogPanel>
//             <div aria-hidden="true" className="flex-shrink-0 w-14"></div>
//           </div>
//         </Dialog>
//         <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col ">
//           <div className="flex flex-col flex-grow pb-4 overflow-y-auto border-r text-gray-100  bg-black">
//             <div className="flex items-center flex-shrink-0 px-4 py-2  text-gray-200 border-b">
//               <Link to="/" className="">
//                 {/* <img alt="Logo" src="/finrain.png" className="w-28" /> */}
//                 <div className="flex items-center justify-center w-20 h-20 ">
//                   <img
//                     alt="Finrain Logo"
//                     src="https://img.freepik.com/free-vector/logotype-made-with-three-human-avatars_1025-91.jpg?ga=GA1.1.1673403856.1719407260&semt=ais_hybrid"
//                     className="w-auto h-16 rounded-full"
//                   />
//                 </div>
//               </Link>
//             </div>
//             <nav
//               aria-label="Sidebar"
//               className="flex flex-col flex-1 px-3 pt-2 overflow-y-auto divide-y divide-gray-100"
//             >
//               <div className="p-2 space-y-1 ">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.to}
//                     onClick={() => handleMenu(item?.submenu, item.name)}
//                     className={classNames(
//                       item.name == currentMenu
//                         ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//                         : "text-gray-100  ",
//                       "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//                     )}
//                   >
//                     <item.icon
//                       aria-hidden="true"
//                       className={classNames(
//                         item.name === currentMenu ? "" : "",
//                         "mr-4 h-6 w-6 flex-shrink-0 "
//                       )}
//                     />
//                     {item.name}
//                   </Link>
//                 ))}
// <Link
//   to={`/user/profile/${auth?.id}`}
//   onClick={() => handleMenu([], "Profile")}
//   className={classNames(
//     "Profile" == currentMenu
//       ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
//       : "text-gray-100  ",
//     "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
//   )}
// >
//   <FaRegUser
//     aria-hidden="true"
//     className={classNames(
//       "Profile" === currentMenu ? "" : "",
//       "mr-4 h-5 w-5 flex-shrink-0 "
//     )}
//   />
//   Profile
// </Link>
// <Link
//   onClick={handleLogout}
//   className={classNames(
//     "   text-gray-100",
//     "group  flex items-center hover:bg-gray-900/50 hover:border border-white/50 hover:rounded-r-full px-2 py-2 text-sm  font-medium leading-6 "
//   )}
// >
//   <IoMdLogOut
//     aria-hidden="true"
//     className="flex-shrink-0 w-5 h-5 mr-4 "
//   />
//   Logout
// </Link>
//               </div>
//             </nav>
//           </div>
//         </div>

//         <div className="flex flex-col flex-1 item-center lg:pl-64">
//           <nav
//             aria-label="Breadcrumb"
//             className="flex border-b w-full   px-4 py-2   text-gray-100 bg-[#569182]"
//           >
//             <ol role="list" className="hidden space-x-4 lg:flex w-full">
//               <li className="flex">
//                 <div className="flex items-center">
//                   <a href="#" className="text-gray-100 hover:text-gray-200/85">
//                     <HomeIcon
//                       aria-hidden="true"
//                       className="flex-shrink-0 w-5 h-5"
//                     />
//                     <span className="sr-only">Home</span>
//                   </a>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex items-center">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 44"
//                     preserveAspectRatio="none"
//                     aria-hidden="true"
//                     className="flex-shrink-0 w-6 h-full text-gray-100 hover:text-gray-200/85"
//                   >
//                     <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                   </svg>
//                   <a className="ml-4 text-base font-medium text-gray-100 hover:text-gray-200/85">
//                     {singleuser?.username}
//                   </a>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex items-center">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 44"
//                     preserveAspectRatio="none"
//                     aria-hidden="true"
//                     className="flex-shrink-0 w-6 h-full text-gray-100 hover:text-gray-200/85"
//                   >
//                     <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                   </svg>
//                   <a className="ml-4 text-base font-medium text-gray-100 hover:text-gray-200/85">
//                     {singleuser?.email}
//                   </a>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex items-center">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 44"
//                     preserveAspectRatio="none"
//                     aria-hidden="true"
//                     className="flex-shrink-0 w-6 h-full text-gray-100 hover:text-gray-200/85"
//                   >
//                     <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                   </svg>
//                   <a className="ml-4 text-base font-medium text-gray-100 hover:text-gray-200/85">
//                     {PageName}
//                   </a>
//                 </div>
//               </li>
//             </ol>
//             <div className="items-center justify-between w-full gap-2 sm:flex">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="h-12 px-4 text-gray-100 bg-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-inset lg:hidden"
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <Bars3CenterLeftIcon
//                   aria-hidden="true"
//                   className="w-6 h-6 text-white"
//                 />
//               </button>
//             </div>
//           </nav>
//           <div>
//             <div className=" sm:block">
//               <nav aria-label="Tabs" className="flex rounded-lg shadow isolate">
//                 {tabs?.map((tab, tabIdx) => (
//                   <Link
//                     key={tab?.name}
//                     to={tab?.to}
//                     onClick={() => setCurrentTabs(tab?.name)}
//                     aria-current={tab?.current ? "page" : undefined}
//                     className={classNames(
//                       tab?.name == currentTabs
//                         ? "text-gray-50 border-b-4 border-[#12c195c7] bg-[#4f5a9d]"
//                         : "text-gray-300 hover:text-gray-50 bg-[#5e3dc9] ",
//                       tabIdx === 0 ? "" : "",
//                       tabIdx === tabs.length - 1 ? "" : "",
//                       "group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-lg font-medium  "
//                     )}
//                   >
//                     <span>{tab?.name}</span>
//                     <span
//                       aria-hidden="true"
//                       className={classNames(
//                         tab?.name == currentTabs
//                           ? "bg-red-900 "
//                           : "bg-green-900 ",
//                         "absolute inset-x-0 bottom-0 "
//                       )}
//                     />
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//           <div className="flex flex-shrink-0 bg-gray-900/50 border-b border-gray-200 lg:border-none p-2">

//             <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 p-4 sm:p-0  gap-4  w-full ">
//               {singleuser?.cto == "false" && (
//                 <button
//                   type="button"
//                   className="relative px-3 py-1.5 rounded-lg text-[14px]  font-semibold  text-gray-300  focus:outline-none border bg-gradient-to-r from-pink-700 to-pink-800 shadow-lg"
//                 >
//                   {timeRemaining2.days > 0 ? (
//                     <p>
//                       {timeRemaining2.days}:{timeRemaining2.hours}:
//                       {timeRemaining2.minutes}:{timeRemaining2.seconds}{" "}
//                       <span className="block text-[12px] font-medium">
//                         Times
//                       </span>
//                     </p>
//                   ) : (
//                     <p>Timer expired!</p>
//                   )}
//                 </button>
//               )}
//               <button
//                 type="button"
//                 className="relative px-3 py-1.5 rounded-lg text-[14px]  font-semibold  text-gray-100  focus:outline-none border bg-gradient-to-tr from-[#4151ff]  to-[#698f96] shadow-lg"
//               >
//                 {timeRemaining.days > 0 ? (
//                   <p>
//                     {timeRemaining.days}:{timeRemaining.hours}:
//                     {timeRemaining.minutes}:{timeRemaining.seconds}{" "}
//                     <span className="block text-[11px] font-medium">Times</span>
//                   </p>
//                 ) : (
//                   <p>Timer expired!</p>
//                 )}
//               </button>
//               <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-[#7344e6]  to-[#8d9696] shadow-lg">
//                 <p className="text-[14px]  font-semibold text-gray-100">
//                   ${singleuser?.business?.toFixed(2) || 0}
//                 </p>
//                 <p className="text-[12px] font-medium text-gray-100">
//                   Active Wallet
//                 </p>
//               </button>
//               <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-[#0d2c28]  to-[#4497ac]  shadow-lg">
//                 <p className="text-[14px]  font-semibold text-gray-100">
//                   $ {singleuser?.non_working?.toFixed(2) || 0}
//                 </p>
//                 <p className="text-[12px] font-medium text-gray-100">
//                   Income Wallet
//                 </p>
//               </button>
//               <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-sky-700  to-rose-500 shadow-lg">
//                 <p className="text-[14px]  font-semibold text-gray-100">
//                   $ {singleuser?.working?.toFixed(2) || 0}
//                 </p>
//                 <p className="text-[12px] font-medium text-gray-100">
//                   ROI Wallet
//                 </p>
//               </button>
//             </div>
//           </div>

//           <div
//             className="relative h-screen flex flex-col gap-5 overflow-auto"
//             style={{
//               backgroundImage:
//                 "url('https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691899.jpg?ga=GA1.1.1673403856.1719407260&semt=ais_authors_boost')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* Overlay to control opacity without affecting children */}
//             {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

//             {/* Content Wrapper */}
//             <div className="relative z-10">{Children}</div>
//           </div>
//         </div>
//       </div>

//       <NotificationPopup />
//       {defaulternotification && (
//         <RewardNotification
//           userrewardnotification={userrewardnotification}
//           isClose={isClose}
//         />
//       )}
//     </>
//   );
// }

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signoutuser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { defaulterNotification, getUser } from "../../redux/userSlice";
import NotificationPopup from "../../User/NotificationPopup";
import RewardNotification from "../../User/RewardNotification";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserTickerTape from "../../User/UserTickerTape";
const network = [
  { name: "Direct Member", to: "/user/directmember", current: false },
  { name: "Referral Tree", to: "/user/referraltree", current: false },
];
// const wallet = [
// {
//   name: "Top-Up",
//   to: "/user/topup",
//   current: false,
//   icon: ScaleIcon,
//   submenu: wallet,
// },
// {
//   name: "Income",
//   to: "/user/income",
//   current: false,
//   icon: CreditCardIcon,
//   submenu: income,
// },
// {
//   name: "Membership Plan",
//   to: "/user/plan",
//   current: false,
//   icon: UserGroupIcon,
//   submenu: [],
// },
// {
//   name: "Support",
//   to: "/user/sendsupport",
//   current: false,
//   icon: DocumentChartBarIcon,
//   submenu: [],
// },
// {
//   name: "Notification",
//   to: "/user/Notification",
//   current: false,
//   icon: DocumentChartBarIcon,
//   submenu: [],
// },
// ];
const navigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    to: "/user/dashboard",
    icon: HomeIcon,
    submenu: [],
  },
  {
    name: "Direct",
    icon: ClockIcon,
    to: "/user/directmember",
    icon: ClockIcon,
    submenu: [],
  },
  {
    name: "Tree",
    icon: ClockIcon,
    to: "/user/referraltree",
    icon: ClockIcon,
    submenu: [],
  },
  {
    name: "Membership Plan",
    icon: DocumentChartBarIcon,
    to: "/user/plan",
    submenu: [],
  },
  {
    name: "Wallet",
    to: "#",
    icon: ScaleIcon,
    submenu: [
      { name: "Deposit", icon: ScaleIcon, to: "/user/adddeposite" },
      { name: "Withdrawal", icon: CreditCardIcon, to: "/user/addwithdrawal" },
      { name: "Top-Up", icon: ScaleIcon, to: "/user/topup" },
    ],
  },

  {
    name: "Income",
    to: "#",
    icon: CreditCardIcon,
    submenu: [
      { name: "Detail", icon: DocumentChartBarIcon, to: "/user/income" },
      // {
      //   name: "Reward",
      //   icon: CreditCardIcon,
      //   to: "/user/transaction/reward_transaction",
      // },
      {
        name: "Level",
        to: "/user/transaction/invest_level_transaction/invest",
        current: false,
      },
      {
        name: "ROI",
        to: "/user/transaction/roi_transaction/Invest",
        current: false,
      },
    ],
  },
  {
    name: "More",
    to: "#",
    icon: DocumentChartBarIcon,
    submenu: [
      { name: "Support", icon: DocumentChartBarIcon, to: "/user/sendsupport" },
      {
        name: "Notification",
        icon: DocumentChartBarIcon,
        to: "/user/Notification",
      },
    ],
  },
];

const wallet = [
  // { name: "Deposite", to: "/user/adddeposite", current: false },
  // { name: "Withdrawal", to: "/user/addwithdrawal", current: false },
  // { name: "TopUp", to: "/user/topup", current: false },
  // { name: "ReTopUp", to: "/user/retopup", current: false },
];

const income = [
  { name: "Detail", to: "/user/income", current: false },
  // {
  //   name: "Reward",
  //   to: "/user/transaction/reward_transaction",
  //   current: false,
  // },
  {
    name: "Direct",
    to: "/user/transaction/direct_transaction",
    current: false,
  },
  {
    name: "Level",
    to: "/user/transaction/invest_level_transaction/invest",
    current: false,
  },

  {
    name: "ROI",
    to: "/user/transaction/roi_transaction/Invest",
    current: false,
  },
];

const userNavigations = [
  {
    name: "Dashboard",
    to: "/user/dashboard",
    current: true,
    icon: HomeIcon,
    submenu: [],
  },
  {
    name: "Direct",
    to: "/user/directmember",
    current: false,
    icon: ClockIcon,
    submenu: [],
  },
  {
    name: "Tree",
    to: "/user/referraltree",
    current: false,
    icon: ClockIcon,
    submenu: [],
  },
  {
    name: "Deposit",
    to: "/user/adddeposite",
    current: false,
    icon: ScaleIcon,
    submenu: wallet,
  },
  {
    name: "Withdrawal",
    to: "/user/addwithdrawal",
    current: false,
    icon: CreditCardIcon,
    submenu: wallet,
  },
  {
    name: "Top-Up",
    to: "/user/topup",
    current: false,
    icon: ScaleIcon,
    submenu: wallet,
  },

  {
    name: "Income",
    to: "/user/income",
    current: false,
    icon: CreditCardIcon,
    submenu: income,
  },
  {
    name: "Membership Plan",
    to: "/user/plan",
    current: false,
    icon: UserGroupIcon,
    submenu: [],
  },
  {
    name: "Support",
    to: "/user/sendsupport",
    current: false,
    icon: DocumentChartBarIcon,
    submenu: [],
  },
  {
    name: "Notification",
    to: "/user/Notification",
    current: false,
    icon: DocumentChartBarIcon,
    submenu: [],
  },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserMenu({ Children, PageName }) {
  const [openMenu, setOpenMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [defaulternotification, setDefaulterNotification] = useState(false);
  const { auth } = useSelector((state) => state.auth);
  const { singleuser, userrewardnotification } = useSelector(
    (state) => state.allusers
  );

  const [tabs, setTabs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("Dashboard");
  const [currentTabs, setCurrentTabs] = useState(tabs?.[0]);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeRemaining2, setTimeRemaining2] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    dispatch(getUser(auth?.id));
    dispatch(defaulterNotification(auth?.id));
  }, [auth?.id]);

  useEffect(() => {
    if (userrewardnotification) {
      setDefaulterNotification(true);
    }
  }, [userrewardnotification]);

  function handleLogout() {
    dispatch(signoutuser());
    navigate("/");
  }
  function handleMenu(submenu, name) {
    setTabs(submenu);
    setCurrentMenu(name);
  }

  useEffect(() => {
    if (!singleuser?.created_at) return;
    const createdAtDate = new Date(singleuser.created_at);
    const referenceDate = new Date("2025-02-08T00:00:00Z"); // 7 Feb 2025 (UTC)
    if (createdAtDate < referenceDate) {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const timerDuration = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
    const endDate = createdAtDate.getTime() + timerDuration;

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timerInterval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timerInterval);
  }, [singleuser?.created_at]);

  useEffect(() => {
    if (!singleuser?.created_at) return;

    const createdAtDate = new Date(singleuser.created_at);
    const referenceDate = new Date("2025-02-08T00:00:00Z"); // 7 Feb 2025 (UTC)

    // If created_at is before 7th Feb 2025, stop the countdown
    if (createdAtDate < referenceDate) {
      setTimeRemaining2({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const timerDuration2 = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    const endDate2 = createdAtDate.getTime() + timerDuration2;

    const calculateTimeRemaining2 = () => {
      const now = new Date().getTime();
      const difference2 = endDate2 - now;

      if (difference2 <= 0) {
        clearInterval(timerInterval2);
        setTimeRemaining2({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeRemaining2({
          days: Math.floor(difference2 / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference2 % (1000 * 60)) / 1000),
        });
      }
    };

    const timerInterval2 = setInterval(calculateTimeRemaining2, 1000);
    return () => clearInterval(timerInterval2);
  }, [singleuser?.created_at]);

  function isClose() {
    setDefaulterNotification(false);
  }
  const [activeTab, setActiveTab] = useState();
  const dropdownRef = useRef(null);

  // Handle toggling dropdown
  const handleToggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <div className="min-h-full">
        <div className="">
          <UserTickerTape />
        </div>
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-1">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <Link to="/">
                    {/* <img alt="Logo" src="/finrain.png" className="w-28" /> */}
                    <div className="flex items-center justify-center w-28">
                      <img
                        alt="Earn4u2 Logo"
                        src="/Earn4u2.png"
                        className="w-auto  "
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className="relative"
                        ref={dropdownRef}
                      >
                        {item.submenu.length > 0 ? (
                          <button
                            onClick={() => {
                              handleToggleMenu(item.name);
                              setActiveTab(item.name);
                            }}
                            className={`group flex items-center w-full rounded-md px-4 py-2 text-sm font-medium leading-6 hover:bg-gray-700 ${
                              activeTab === item.name
                                ? "bg-gray-700 text-white"
                                : "text-gray-100"
                            }`}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            to={item.to}
                            onClick={() => {setActiveTab(item.name);
                              setOpenMenu(null);
                            }}
                            className={`group flex items-center w-full rounded-md px-4 py-2 text-sm font-medium leading-6 hover:bg-gray-700 ${
                              activeTab === item.name
                                ? "bg-gray-700 text-white"
                                : "text-gray-100"
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}

                        {/* Dropdown for submenu */}
                        {openMenu === item.name && item.submenu.length > 0 && (
                          <div className="absolute z-50 left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem?.to}
                                onClick={() => {
                                  setActiveTab(subItem.name);
                                  setOpenMenu(null); 
                                }}
                                className={`block px-4 py-2 hover:bg-gray-700 ${
                                  activeTab === subItem.name
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-100"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt="User"
                          src={user.imageUrl}
                          className="size-8 rounded-full"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems className="absolute right-0 z-50 mt-2 min-w-48 max-w-96 break-all origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 focus:outline-none">
                      <div className="flex items-center px-4 pb-1 border-b border-gray-400">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.imageUrl}
                            className="size-8 rounded-full"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-700">
                            {singleuser?.fullname}
                          </div>
                          <div className="text-sm font-medium text-gray-600">
                            {singleuser?.email}
                          </div>
                        </div>
                      </div>

                      <Link to={`/user/profile/${auth?.id}`}>
                        <button
                          className={`group flex w-full items-center px-4 py-2 text-sm font-medium ${
                            currentMenu === "Profile"
                              ? "bg-gray-900 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <FaRegUser className="mr-2 h-4 w-4" />
                          Profile
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center font-medium text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                      >
                        <IoMdLogOut className="mr-2 h-5 w-5 text-red-600" />
                        Logout
                      </button>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {userNavigations.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => {
                    handleMenu(item?.submenu, item.name);
                    setSidebarOpen(false);
                  }}
                  className={classNames(
                    item.name == currentMenu
                      ? "shadow-lg border-white/50 text-gray-100 border bg-gray-900/50 hover:bg-gray-900/50 hover:text-[#ffeded]"
                      : "text-gray-100  ",
                    "group flex items-center rounded-r-full px-2 py-2 text-sm font-medium leading-6 "
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 mr-4 "
                  />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {singleuser?.username}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {singleuser?.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Link to={`/user/profile/${auth?.id}`}>
                  <button
                    className={`group flex w-full items-center px-4 py-2 text-sm font-medium ${
                      currentMenu === "Profile"
                        ? "bg-gray-900 text-white"
                        : "text-gray-100 hover:bg-gray-100"
                    }`}
                  >
                    <FaRegUser className="mr-2 h-4 w-4" />
                    Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center font-medium text-left px-4 py-2 text-sm text-red-200 hover:bg-gray-100"
                >
                  <IoMdLogOut className="mr-2 h-5 w-5 text-red-200" />
                  Logout
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-2 ">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-4 sm:p-0  gap-4  w-full ">
              {singleuser?.cto == "false" && (
                <button
                  type="button"
                  className="relative px-3 py-1.5 rounded-lg text-[14px]  font-semibold  text-gray-300  focus:outline-none border bg-gradient-to-r from-pink-700 to-pink-800 shadow-lg"
                >
                  {timeRemaining2.days > 0 ? (
                    <p>
                      {timeRemaining2.days}:{timeRemaining2.hours}:
                      {timeRemaining2.minutes}:{timeRemaining2.seconds}{" "}
                      <span className="block text-[12px] font-medium">
                        Times
                      </span>
                    </p>
                  ) : (
                    <p>Timer expired!</p>
                  )}
                </button>
              )}
              <button
                type="button"
                className="relative px-3 py-1.5 rounded-lg text-[14px]  font-semibold  text-gray-100  focus:outline-none border bg-gradient-to-tr from-[#4151ff]  to-[#698f96] shadow-lg"
              >
                {timeRemaining.days > 0 ? (
                  <p>
                    {timeRemaining.days}:{timeRemaining.hours}:
                    {timeRemaining.minutes}:{timeRemaining.seconds}{" "}
                    <span className="block text-[11px] font-medium">Times</span>
                  </p>
                ) : (
                  <p>Timer expired!</p>
                )}
              </button>

              <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-[#7344e6]  to-[#8d9696] shadow-lg">
                <p className="text-[14px]  font-semibold text-gray-100">
                  ${singleuser?.business?.toFixed(2) || 0}
                </p>
                <p className="text-[12px] font-medium text-gray-100">
                  Active Wallet
                </p>
              </button>
              <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-[#0d2c28]  to-[#4497ac]  shadow-lg">
                <p className="text-[14px]  font-semibold text-gray-100">
                  $ {singleuser?.non_working?.toFixed(2) || 0}
                </p>
                <p className="text-[12px] font-medium text-gray-100">
                  Income Wallet
                </p>
              </button>
              <button className="  text-gray-100 px-3 py-1.5 rounded-lg focus:outline-none border bg-gradient-to-tr from-sky-700  to-rose-500 shadow-lg">
                <p className="text-[14px]  font-semibold text-gray-100">
                  $ {singleuser?.working?.toFixed(2) || 0}
                </p>
                <p className="text-[12px] font-medium text-gray-100">
                  ROI Wallet
                </p>
              </button>
            </div>
            <div></div>
          </div>
        </header>
        <main className="bg-black">
          <div className="mx-auto max-w-7xl px-4 py-6 ">{Children}</div>
        </main>
      </div>

      <NotificationPopup />
      {defaulternotification && (
        <RewardNotification
          userrewardnotification={userrewardnotification}
          isClose={isClose}
        />
      )}
    </>
  );
}
