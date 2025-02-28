import React from "react";

import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { FiCheck, FiCopy } from "react-icons/fi";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import UserTransaction from "./UserTransaction";
import { getTreeData } from "../redux/referralSlice";
import { getctoListByid } from "../redux/ctoSlice";
import { getUser } from "../redux/userSlice";
import { getAllDepositeByid } from "../redux/depositeSlice";
import { getAllWithdrawalByid } from "../redux/withdrawalSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserRewardDetail from "./UserRewardDetail";
import Trading from "./Trading";
import NotificationPopup from "./NotificationPopup";
import NotificationList from "./NotificationList";
import { UserAchievement } from "./UserAchivement";
import { Link } from "react-router-dom";
import UserTradingView from "./UserTradingView";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { singleuser } = useSelector((state) => state.allusers);
  const { singlecto } = useSelector((state) => state.cto);
  const { singleDeposite } = useSelector((state) => state.alldeposite);
  const { singleWithdrawal } = useSelector((state) => state.allwithdrawal);
  const { treeData } = useSelector((state) => state.referralTree);
  const [topGenerations, setTopGenerations] = useState([]);
  const [totalBusiness, setTotalBusiness] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const thresholds = [2500, 7500, 17500, 37500, 87500, 187500, 387500, 887500];

  useEffect(() => {
    dispatch(getUser(auth?.id));
    dispatch(getAllDepositeByid(auth?.id));
    dispatch(getAllWithdrawalByid(auth?.id));
    dispatch(getTreeData(auth?.refferal_code));
  }, [auth?.id]);
  useEffect(() => {
    if (singleuser?.cto == "true") {
      dispatch(getctoListByid(auth?.id));
    }
  }, [singleuser, auth?.id]);

  const referralCode = singleuser?.refferal_code;
  let registerUrl;
  registerUrl = `https://www.earn4u.info/registration?referral=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(registerUrl)
      .then(() => {
        alert("Referral link copied to clipboard!");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy referral link: ", err);
      });
  };

  let combinedArray = [];
  const depositsWithType =
    singleDeposite?.map((deposit) => ({ ...deposit, type: "deposit" })) || [];
  const withdrawalsWithType =
    singleWithdrawal?.map((withdrawal) => ({
      ...withdrawal,
      type: "withdrawal",
    })) || [];
  if (withdrawalsWithType.length > 0) {
    combinedArray = [...depositsWithType, ...withdrawalsWithType];
    combinedArray.sort((a, b) => new Date(a.createdAT) - new Date(b.createdAT));
  }
  const totalDeposits = depositsWithType?.reduce(
    (total, deposit) => total + (deposit.amount || 0),
    0
  );
  const totalWithdrawals = withdrawalsWithType?.reduce(
    (total, withdrawal) =>
      total + (withdrawal.amount || 0) + (withdrawal.deduction || 0),
    0
  );

  function countTotalTeamWithActiveInactive(user) {
    let totalTeam = 0;
    let activeCount = 0;
    let inactiveCount = 0;
    const stack = [user];

    while (stack.length > 0) {
      const currentUser = stack.pop();
      totalTeam += 1;

      if (currentUser.is_active === "active") {
        activeCount += 1;
      } else if (currentUser.is_active === "inactive") {
        inactiveCount += 1;
      }
      if (currentUser.referrals && currentUser.referrals.length > 0) {
        stack.push(...currentUser.referrals);
      }
    }

    return { totalTeam, activeCount, inactiveCount };
  }

  const totalDirectActiveMembers = treeData?.filter(
    (user) => user.is_active === "active"
  ).length;
  const totalDirectInactiveMembers = treeData?.filter(
    (user) => user.is_active === "inactive"
  ).length;

  let totalTeamCount = 0;
  let totalActiveMembers = 0;
  let totalInactiveMembers = 0;

  treeData?.forEach((user) => {
    const { totalTeam, activeCount, inactiveCount } =
      countTotalTeamWithActiveInactive(user);
    totalTeamCount += totalTeam;
    totalActiveMembers += activeCount;
    totalInactiveMembers += inactiveCount;
  });

  const calculateBusinessForTeam = (user) => {
    let totalBusiness = user.active_plan || 0;

    if (user.referrals && user.referrals.length > 0) {
      user.referrals.forEach((referral) => {
        totalBusiness += calculateBusinessForTeam(referral); // Recursively calculate for all referrals
      });
    }

    return totalBusiness;
  };

  useEffect(() => {
    if (treeData) {
      const businessByLeg = calculateBusinessForLegs(treeData);

      // Extract and sort legs by total business
      const sortedLegs = Object.entries(businessByLeg)
        .map(([legId, totalBusiness]) => ({
          legId: parseInt(legId),
          totalBusiness,
        }))
        .sort((a, b) => b.totalBusiness - a.totalBusiness);

      // Determine the top two legs
      const topTwoLegs = sortedLegs.slice(0, 2);

      // Sum up the total business of all legs
      const totalBusiness = Object.values(businessByLeg).reduce(
        (acc, value) => acc + value,
        0
      );

      // Calculate the third leg as the sum of all other legs
      const thirdLegTotalBusiness = sortedLegs
        .slice(2)
        .reduce((acc, leg) => acc + leg.totalBusiness, 0);

      // Combine top two legs and the third leg
      const topGenerations = [
        ...topTwoLegs,
        { legId: "Other", totalBusiness: thirdLegTotalBusiness },
      ];

      setTopGenerations(topGenerations);
      setTotalBusiness(totalBusiness);
    }
  }, [treeData]);

  const calculateBusinessForLegs = (users) => {
    const result = {};

    users?.forEach((user) => {
      result[user.id] = calculateTeamBusiness(user);
    });

    return result;
  };

  const calculateTeamBusiness = (user) => {
    let totalBusiness = user.active_plan || 0;

    if (user.referrals && user.referrals.length > 0) {
      user.referrals.forEach((referral) => {
        totalBusiness += calculateTeamBusiness(referral);
      });
    }

    return totalBusiness;
  };

  const cardData = [
    {
      id: 1,
      value: `$ ${singleuser?.active_plan}`,
      description: "Active Package",
      borderColor: "border-blue-200 ",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-blue-500",
      iconBgColor: "bg-blue-400",
      gredient: "border-t bg-gradient-to-r from-gray-900 to-blue-900",
      percentage: "45",
      href: "/user/plan",
    },
    {
      id: 2,
      value: `$ ${singleuser?.direct_income}`,
      description: "Direct",
      borderColor: "border-green-100 ",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-green-500",
      iconBgColor: "bg-green-400",
      gredient: "border-t bg-gradient-to-r from-green-900 to-gray-900",
      percentage: "25",
      href: "/user/directmember",
    },
    {
      id: 3,
      value: `$ ${singleuser?.roi_income}`,
      description: "ROI",
      borderColor: "border-green-100 ",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-green-500",
      iconBgColor: "bg-green-400",
      gredient: "border-t bg-gradient-to-r from-green-900 to-gray-900",
      percentage: "25",
      href: "/user/transaction/roi_transaction/Invest",
    },
    {
      id: 4,
      description: "Inactive Sponser",
      value: `${totalDirectInactiveMembers} Member`,
      upadtePlan: "Need Support",
      borderColor: "border-red-800 ",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-300",
      gredient: " border-t bg-gradient-to-r from-gray-900 to-red-900",
      percentage: "55",
    },
    {
      id: 5,

      description: "Reward Rank",
      value: `${singleuser?.reward_level} Level`,
      // value: `$ ${singleuser?.reward}`,
      // description: "Reward",
      upadtePlan: "Add More",
      borderColor: "border-yellow-500 ",
      percentage: "25",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-yellow-500",
      iconBgColor: "bg-yellow-300",
      gredient: "border-t bg-gradient-to-r from-yellow-900 to-gray-900",
    },

    {
      id: 6,
      value:
        `$ ${(
          singleuser?.level_month +
          singleuser?.roi_income +
          singleuser?.reward
        ).toFixed(2)}` || " - ",
      description: "Total Earning",
      upadtePlan: "Add More",
      borderColor: "border-pink-500 ",
      percentage: "21",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-pink-500",
      iconBgColor: "bg-pink-700",
      href: "",
      gredient: "border-t bg-gradient-to-r from-pink-900 to-gray-900",
    },
  ];
  const cardDetails = [
    // {
    //   id: 7,
    //   value: `$ ${totalWithdrawals}`,
    //   description: "Total Withdrawal",
    //   upadtePlan: "Copy Link",
    //   percentage: "20",
    //   borderColor: "border-indigo-500 ",
    //   icon: CursorArrowRaysIcon,
    //   bgColor: "bg-indigo-500",
    //   iconBgColor: "bg-indigo-700",
    //   gredient: "border-t bg-gradient-to-r from-indigo-900 to-gray-900",
    // },
    {
      id: 8,
      value: `$${totalBusiness}`,
      description: "Total Business",
      percentage: "75",
      borderColor: "border-purple-500 ",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-purple-500",
      iconBgColor: "bg-purple-700",
      gredient: "border-t bg-gradient-to-r from-purple-900 to-gray-900",
    },
    {
      id: 9,
      value: `${
        topGenerations?.[0]?.totalBusiness
          ? "$" + topGenerations?.[0]?.totalBusiness
          : 0
      }`,
      description: "Team A",
      percentage: "10",
      // upadtePlan: "Copy Link",
      icon: CursorArrowRaysIcon,
      borderColor: "border-orange-500 ",
      bgColor: "bg-orange-500",
      iconBgColor: "bg-orange-700",
      gredient: "border-t bg-gradient-to-r from-orange-900 to-gray-900",
    },
    {
      id: "10",
      value: `${
        topGenerations?.[1]?.totalBusiness
          ? "$" + topGenerations?.[1]?.totalBusiness
          : 0
      }`,
      description: "Team B",
      percentage: "13",
      // upadtePlan: "Copy Link",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-sky-500",
      iconBgColor: "bg-sky-700",
      borderColor: "border-sky-500 ",
      gredient: "border-t bg-gradient-to-r from-sky-900 to-gray-900",
    },
    {
      id: 11,
      value: `${
        topGenerations?.[2]?.totalBusiness
          ? "$" + topGenerations?.[2]?.totalBusiness
          : 0
      } Business`,
      description: "Team Others",
      percentage: "48",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-amber-500",
      borderColor: "border-amber-500 ",
      iconColor: "text-amber-500",
      gredient: "bg-gradient-to-r from-amber-900 to-gray-900",
    },
    {
      id: 7,
      value: "Inactive Team",
      description: `${totalInactiveMembers} Member` || "0",
      icon: ClipboardDocumentIcon,
      iconColor: "text-blue-500",
      change: "5.4%",
      changeType: "increase",
      percentage: 51,
      bgColor: "bg-blue-800",
      gredient:
        "bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg shadow-blue-500/50",
    },
  ];

  const stat = [
    {
      name: "Total Direct",
      members: `${
        totalDirectActiveMembers + totalDirectInactiveMembers
      } Member`,
      icon: CursorArrowRaysIcon,
      bgColor: "bg-purple-600",
      percentage: "+22%",
      iconColor: "text-purple-500",
      href: "/user/directmember",
      gredient: "bg-gradient-to-r from-[#182a91] to-[#751bc0] shadow-lg ",
    },

    {
      name: "Active Sponser",
      initials: "AS",
      members: `${totalDirectActiveMembers} Member`,
      bgColor: "bg-blue-600",
      iconColor: "text-blue-500",
      percentage: "66",
      icon: CursorArrowRaysIcon,
      href: "/user/plan",
      gredient: "bg-gradient-to-r from-[#182a91] to-blue-700 shadow-lg ",
    },
    {
      members: `$ ${singleuser?.level_month}` || 0,
      name: "Level Income",

      initials: "IS",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-red-600",
      iconColor: "text-red-500",
      percentage: "99",
      href: "/user/transaction/invest_level_transaction/invest",
      gredient: "bg-gradient-to-r from-[#182a91] to-red-700 shadow-lg ",
    },
    {
      members: `$ ${totalWithdrawals}`,
      name: "Total Withdrawal",
      href: "/user/addwithdrawal",
      icon: CursorArrowRaysIcon,
      bgColor: "bg-green-600",
      iconColor: "text-green-500",
      percentage: "+3%",
      gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
    },
  ];

  const incomedetail = [
    {
      id: 1,
      name: "Total Team",
      title: "Total Team ",
      stat: `${totalTeamCount} Member` || 0,
      icon: CursorArrowRaysIcon,
      iconColor: "text-indigo-500",
      change: "3.2%",
      changeType: "decrease",
      bgColor: "bg-indigo-800",
      percentage: 55,
      gredient:
        "bg-gradient-to-r from-indigo-900 to-gray-900 shadow-lg shadow-indigo-500/50",
    },
    {
      id: 2,
      name: "Referral Code",
      title: "Referral Code",
      stat: singleuser?.refferal_code,
      icon: ClipboardDocumentIcon,
      iconColor: "text-red-500",
      change: "1.2%",
      changeType: "increase",
      percentage: 50,
      bgColor: "bg-red-800",
      gredient:
        "bg-gradient-to-r from-red-900 to-gray-900 shadow-lg shadow-red-500/50",
    },

    {
      id: 3,
      name: "Reffer By",
      title: "Referral Code",
      stat: singleuser?.reffer_by || " - ",
      icon: CursorArrowRaysIcon,
      iconColor: "text-yellow-500",
      change: "3.2%",
      changeType: "decrease",
      percentage: 24,
      bgColor: "bg-yellow-800",
      gredient:
        "bg-gradient-to-r from-[#182a91] to-yellow-900 shadow-lg shadow-yellow-500/50",
    },

    {
      id: 4,
      name: "Status",
      stat: singleuser?.status || " - ",
      icon: ClipboardDocumentIcon,
      iconColor: "text-orange-500",
      change: "1.2%",
      changeType: "increase",
      bgColor: "bg-orange-800",
      percentage: 29,
      gredient:
        "bg-gradient-to-r from-orange-900 to-gray-900 shadow-lg shadow-red-500/50",
    },
    {
      id: 5,
      name: "Active Team",
      stat: `${totalActiveMembers} Member`,
      icon: UsersIcon,
      iconColor: "text-green-500",
      change: "122",
      changeType: "increase",
      bgColor: "bg-green-800",
      percentage: 20,
      gredient:
        "bg-gradient-to-r from-green-900 to-gray-900 shadow-lg shadow-green-500/50",
    },
    {
      id: 6,
      name: "Inactive Team",
      stat: `${totalInactiveMembers} Member` || "0",
      icon: EnvelopeOpenIcon,
      iconColor: "text-blue-500",
      change: "5.4%",
      changeType: "increase",
      percentage: 51,
      bgColor: "bg-pink-800",
      gredient:
        "bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg shadow-blue-500/50",
    },
  ];

  return (
    <>
      <div className=" text-gray-900  relative z-10 ">
        <div className="absolute inset-0 z-5  opacity-30"></div>

        <div className=" sm:px-0 px-4 relative z-10  lg:max-w-7xl  ">
          <div className="p-4 grid sm:grid-cols-2 grid-cols-1 gap-6 items-center bg-white/5 backdrop-blur-lg border border-white/20 rounded-sm shadow-xl">
            {/* Welcome Message */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                Welcome {singleuser?.fullname || "User"}
                <CheckCircleIcon className="h-7 w-7 text-green-400 drop-shadow-md" />
              </h2>
              <span className="text-gray-300 text-lg sm:ml-3">Dashboard</span>
            </div>
            <div className="sm:flex justify-end">
              {singleuser?.active_plan == 0 && (
                <button className="relative sm:w-64 w-full flex items-center justify-center gap-3 py-3 px-6 font-medium text-white border border-gray-400 rounded-sm shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300">
                  <span className="uppercase tracking-wide">Referral Link</span>

                  <button
                    onClick={handleCopy}
                    className={`inline-flex items-center transition-colors duration-200 ${
                      isCopied ? "text-green-300" : "text-white"
                    }`}
                  >
                    {isCopied ? (
                      <FiCheck className="h-6 w-6" />
                    ) : (
                      <FiCopy className="h-6 w-6" />
                    )}
                  </button>
                  {/* Glow Effect on Copy */}
                  {isCopied && (
                    <span className="absolute inset-0 bg-green-400/10 blur-md rounded-full animate-ping"></span>
                  )}
                </button>
              )}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-x-4 gap-y-10   mt-10">
            {stat.map((item, i) => (
              <div
                key={i}
                className={`relative bg-white shadow-lg border border-white/50 rounded-md flex ${item.gredient} flex-col gap-3 `}
              >
                <div
                  className={`absolute -top-6 left-4 border border-white/50 p-3 rounded-md shadow-md ${item.bgColor}`}
                >
                  <item.icon className={`w-6 h-6  text-white`} />
                </div>
                <div className="text-right p-4 border-b">
                  <p className="text-gray-200 text-sm">{item.name}</p>
                  <h2 className="text-lg text-gray-200 font-medium">
                    {item.members}
                  </h2>
                </div>
                <Link to={item?.href}>
                  <p className="text-sm font-medium pb-4 px-4 text-gray-200 hover:text-indigo-300">
                    View All
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4  lg:grid-cols-6 ">
            <div className="grid col-span-full">
              <div className="grid grid-cols-1 gap-4 my-6 lg:grid-cols-2">
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 ">
                  {cardData.map((card) => (
                    <div
                      key={card.id}
                      className={`relative bg-white shadow-lg border border-white/50 rounded-md flex flex-col gap-3 ${card.gredient}`}
                    >
                      {/* Icon Container */}
                      <div
                        className={`absolute top-4 left-4 border border-white/50 p-3 rounded-md shadow-md ${card.bgColor}`}
                      >
                        <card.icon className={`w-6 h-6  text-white`} />
                      </div>

                      {/* Card Content */}
                      <div className="text-right p-4 border-b">
                        <p className="text-gray-200 text-sm">
                          {card.description}
                        </p>
                        <h2 className="text-lg text-gray-200 font-medium">
                          {card.value}
                        </h2>
                      </div>

                      {/* Percentage Change */}
                      <Link to={card?.href}>
                        <p className="text-sm font-medium pb-4 px-4 text-gray-200 hover:text-indigo-300">
                          View All
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
                <ul className="grid grid-cols-1 gap-4 bg-[#320730a3] border border-white/50 p-4 ">
                  {cardDetails?.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center justify-between gap-4 border rounded-sm shadow-sm  p-2 ${item.gredient}`}
                    >
                      <p className="text-base text-gray-300">{item.value}</p>
                      <p className="text-base text-gray-300 font-medium">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4  lg:grid-cols-6 ">
            <div className="grid col-span-full">
              <div className="grid grid-cols-1 gap-4 my-1 lg:grid-cols-2">
                <ul className="grid grid-cols-1 gap-4 bg-[#320730a3] border border-white/50 p-4 ">
                  {incomedetail?.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center justify-between gap-4 border rounded-sm shadow-sm  p-2 ${item.bgColor}`}
                    >
                      <p className="text-base text-gray-300">{item.name}</p>
                      <p className="text-base text-gray-300 font-medium">
                        {item.stat}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center bg-blue-900/50">
                  <UserTradingView />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <aside className="w-full px-3 py-2 overflow-y-auto rounded-md ">
              <h2 className="text-lg font-semibold relative z-10  text-gray-100 ">
                Transaction History
              </h2>
              <div className="">
                <div className="flow-root mt-1">
                  <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <UserTransaction />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
