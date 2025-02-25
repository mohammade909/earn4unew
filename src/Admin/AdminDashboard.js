import { useState, useEffect } from "react";

import { getAllUsers, getUser } from "../redux/userSlice";
import { getAllDeposite } from "../redux/depositeSlice";
import { ScaleIcon } from "@heroicons/react/24/outline";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AdminSetting from "./AdminSetting";
import { getAllWithdrawal } from "../redux/withdrawalSlice";
import Connect from "../metamask/Connect";
export default function AdminDashboard() {
  const { admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { allusers, loading, error, message } = useSelector(
    (state) => state.allusers
  );
  const { alldeposite } = useSelector((state) => state.alldeposite);
  const { allwithdrawal } = useSelector((state) => state.allwithdrawal);
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllDeposite());
    dispatch(getAllWithdrawal());
  }, [admin?.id]);
  let totalCount = allusers?.length;
  let activeCount = allusers?.filter(
    (user) => user?.is_active == "active"
  ).length;
  let blockCount = allusers?.filter((user) => user?.status == "block").length;
  let activePlanSum = allusers
    ?.filter((user) => user.is_active)
    .reduce((sum, user) => sum + user.active_plan, 0);
  let totalbusiness = allusers?.reduce(
    (sum, user) => sum + user.active_plan,
    0
  );
  let inactiveCount = totalCount - activeCount;
  let unblockCount = totalCount - blockCount;

  const today = new Date().toISOString().slice(0, 10);

  // Filter users who joined today
  let joinedTodayCount = allusers?.filter((user) => {
    const createdAtDate = user?.created_at?.slice(0, 10); // Extract YYYY-MM-DD from created_at
    return createdAtDate === today;
  }).length;

  let pendingDepositsCount = alldeposite?.filter(
    (deposit) => deposit.status === "pending"
  ).length;
  let pendingaWithdrawalCount = allwithdrawal?.filter(
    (wd) => wd.status === "pending"
  ).length;

  let TotalDepositsAmount = alldeposite
    ?.filter(
      (deposit) =>
        deposit.status === "complete" || deposit.status === "TRN-ADM002"
    )
    .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

  let TotalWithdrawalAmount = allwithdrawal
    ?.filter((wd) => wd.status === "complete" || wd.status === "TRN-ADM002")
    .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

  let TotalPendingDepositsAmount = alldeposite
    ?.filter((deposit) => deposit.status === "pending")
    .reduce((sum, deposit) => sum + (deposit.amount || 0), 0);

  let TotalPendingWithdrawalAmount = allwithdrawal
    ?.filter((wd) => wd.status === "pending")
    .reduce((sum, wd) => sum + (wd.amount || 0) + (wd.deduction || 0), 0);

  const cards = [
    {
      name: "Total User",
      to: "/admin/user/all",
      icon: ScaleIcon,
      amount: totalCount,
      bgColor: "bg-blue-500",
      iconBgColor: "bg-blue-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-[#751bc0] shadow-lg ",
      percentage: "76",
    },
    {
      name: "Active Member",
      to: "/admin/user/active",
      icon: ScaleIcon,
      amount: activeCount,
      bgColor: "bg-green-500",
      iconBgColor: "bg-green-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-blue-700 shadow-lg ",
      percentage: "36",
    },
    {
      name: "Inactive Member",
      to: "/admin/user/inactive",
      icon: ScaleIcon,
      amount: inactiveCount,
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-red-700 shadow-lg ",
      percentage: "98",
    },
    {
      name: "Subscription Plan Amount",
      to: "/admin/dashboard",
      icon: ScaleIcon,
      amount: `$${activePlanSum}`,
      bgColor: "bg-yellow-500",
      iconBgColor: "bg-yellow-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
      percentage: "76",
    },
    {
      name: "Block Member",
      to: "/admin/user/block",
      icon: ScaleIcon,
      amount: blockCount,
      bgColor: "bg-purple-500",
      iconBgColor: "bg-purple-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
      percentage: "69",
    },
    {
      name: "Unblock Member",
      to: "/admin/user/unblock",
      icon: ScaleIcon,
      amount: unblockCount,
      bgColor: "bg-indigo-500",
      iconBgColor: "bg-indigo-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
      percentage: "66",
    },
  ];

  const cards2 = [
    {
      name: "Total Business",
      to: "/admin/income",
      icon: ScaleIcon,
      amount: "$" + totalbusiness,
      bgColor: "bg-indigo-500",
      iconBgColor: "bg-indigo-700",
      gredient: "bg-gradient-to-r from-[#182a91] to-green-700 shadow-lg ",
    },
    {
      name: "Today Join",
      to: "/admin/user/all",
      icon: ScaleIcon,
      amount: joinedTodayCount,
      bgColor: "bg-blue-500",
      iconBgColor: "bg-blue-700",
      gredient: "bg-gradient-to-r from-blue-800 to-purple-900 shadow-lg ",
    },
    {
      name: "Pending Deposite",
      to: "/admin/deposite",
      icon: ScaleIcon,
      amount: pendingDepositsCount,
      bgColor: "bg-purple-500",
      iconBgColor: "bg-purple-700",
      gredient: "bg-gradient-to-r from-pink-800 to-teal-700 shadow-lg ",
    },
    {
      name: "Pending Withdrawal",
      to: "/admin/pendingwithdrawalrequest",
     
      icon: ScaleIcon,
      amount: pendingaWithdrawalCount,
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-700",
      iconColor: "text-blue-500",
      percentage: "66",
      gredient: "bg-gradient-to-r from-indigo-900 to-green-700 shadow-lg ",
    },
    {
      name: "Total Deposite",
      to: "/admin/deposite",
      icon: ScaleIcon,
      amount: TotalDepositsAmount,
      bgColor: "bg-purple-500",
      iconBgColor: "bg-purple-700",
      iconColor: "text-blue-500",
      percentage: "66",
      gredient: "bg-gradient-to-r from-black to-pink-700 shadow-lg ",
    },
    {
      name: "Total Withdrawal",
      to: "/admin/pendingwithdrawalrequest",
      icon: ScaleIcon,
      amount: TotalWithdrawalAmount?.toFixed(2),
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-700",
      iconColor: "text-blue-500",
      percentage: "66",
      gredient: "bg-gradient-to-r from-amber-700 to-purple-700 shadow-lg ",
    },
    {
      name: "Pending Deposite",
      to: "/admin/deposite/pending",
      icon: ScaleIcon,
      amount: TotalPendingDepositsAmount,
      bgColor: "bg-purple-500",
      iconBgColor: "bg-purple-700",
      iconColor: "text-blue-500",
      percentage: "66",
      gredient: "bg-gradient-to-r from-orange-600 to-purple-700 shadow-lg ",
    },
    {
      name: "Pending Withdrawal",
      to: "/admin/pendingwithdrawalrequest/pending",
      icon: ScaleIcon,
      amount: TotalPendingWithdrawalAmount?.toFixed(2),
      bgColor: "bg-red-500",
      iconBgColor: "bg-red-700",
      iconColor: "text-blue-500",   
      percentage: "66",
      gredient: "bg-gradient-to-r from-pink-800 to-red-700 shadow-lg ",
    },
  ];
  return (
    <>
      {/* <div className=" relative min-h-screen flex flex-col overflow-hidden text-gray-900 ">
    <div className="absolute inset-0 z-5 bg-black opacity-30"></div>
        <div className="flex flex-col flex-1">
          <main className="flex-1 pb-8 ">
            <Connect />
            <div className="mt-8">
              <div className="mx-auto max-w-7xl">
                <section>
                  <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-4 gap-y-10  ">
                    {cards.map((item, i) => (
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
                            {item.amount}
                          </h2>
                        </div>
                        <p
                          className={`text-sm font-medium pb-4 px-4 text-white `}
                        >
                          {item.percentage} vs last month
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-8 w-full h-[2px] bg-gray-300" />

                
                <div className="py-8 ">
                  <AdminSetting />
                </div>

                <div className="mt-8 w-full h-[2px] bg-gray-300" />

                
                <section className="mt-8">
                  <h2 className="mb-4 text-2xl font-bold ">
                    Other Information
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {cards2.map((card) => (
                      <>
                        <div class="relative flex flex-col my-6 bg-gradient-to-bl from-red-300 via-fuchsia-300 to-pink-300 shadow-sm border border-slate-200 rounded-lg w-96   ">
                          <div class="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1  flex  justify-center">
                            <span class="text-sm font-medium text-slate-600 ">
                              <card.icon
                                aria-hidden="true"
                                className="w-8 h-8 "
                              />
                            </span>
                          </div>

                          <div class="p-4">
                            <h5 class="mb-2 text-slate-800 text-xl font-semibold text-center">
                              {card.name}
                            </h5>
                            <p class="text-[#272727] leading-normal  text-center ">
                              {card.amount}
                            </p>
                          </div>
                          <div class="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 text-center">
                            <span class="text-sm text-slate-600 font-medium">
                              <Link
                                to={card.to}
                                className="text-lg font-medium text-cyan-700 hover:text-cyan-900"
                              >
                                View all
                              </Link>
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div> */}

      <div className="relative min-h-screen flex flex-col overflow-hidden text-gray-900">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10 flex flex-col flex-1">
          <main className="flex-1 pb-8">
            <Connect />
            <div className="mt-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cards Section */}
                <section>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-4">
                    {cards.map((item, i) => (
                      <div
                        key={i}
                        className={`relative bg-white shadow-lg border border-white/50 rounded-md flex ${item.gredient} flex-col gap-3 p-4`}
                      >
                        {/* Icon Section */}
                        <div
                          className={`absolute -top-6 left-4 border border-white/50 p-3 rounded-md shadow-md ${item.bgColor}`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Card Content */}
                        <div className="text-right p-4 border-b">
                          <p className="text-gray-200 text-sm">{item.name}</p>
                          <h2 className="text-lg text-gray-200 font-medium">
                            {item.amount}
                          </h2>
                        </div>
                        <p className="text-sm font-medium pb-4 px-4 text-white">
                          {item.percentage} vs last month
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Divider */}
                <div className="mt-8 w-full h-[2px] bg-gray-300" />

                {/* Admin Settings Section */}
                <div className="py-8">
                  <AdminSetting />
                </div>

                {/* Divider */}
                <div className="mt-8 w-full h-[2px] bg-gray-300" />

                {/* Other Information Section */}
                <section className="mt-8">
                  <h2 className="mb-4 text-2xl font-bold">Other Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 mt-4">
                    {cards2?.map((card, i) => (
                      <div
                        key={i}
                        className={`relative bg-white shadow-lg border border-white/50 rounded-md flex ${card.gredient} flex-col gap-3 p-4`}
                      >
                        {/* Icon Section */}
                        <div
                          className={`absolute top-4 left-4 border border-white/50 p-3 rounded-md shadow-md ${card.bgColor}`}
                        >
                          <card.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Card Content */}
                        <div className="text-right p-4 border-b">
                          <p className="text-gray-200 text-sm">{card.name}</p>
                          <h2 className="text-lg text-gray-200 font-medium">
                            {card.amount}
                          </h2>
                        </div>
                        <p className="text-sm font-medium px-4 text-white">
                          <Link
                            to={card.to}
                            className="text-base font-medium text-white"
                          >
                            View all
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
