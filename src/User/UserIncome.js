import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, clearErrors, clearMessage } from "../redux/userSlice";
import { getTreeData } from "../redux/referralSlice";
import { getctoListByid } from "../redux/ctoSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserIncome() {
  const dispatch = useDispatch();
  const { singleuser, loading, error, message } = useSelector(
    (state) => state.allusers
  );
    const { singlecto } = useSelector((state) => state.cto);
  
  const { auth } = useSelector((state) => state.auth);
  const { treeData } = useSelector((state) => state.referralTree);

  useEffect(() => {
    if (auth?.id) {
      dispatch(getUser(auth?.id));
      dispatch(getTreeData(auth?.refferal_code));
    }

    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, error, message, clearErrors, clearMessage, auth?.id]);

  useEffect(() => {
      if (singleuser?.cto == "true") {
        dispatch(getctoListByid(auth?.id));
      }
    }, [singleuser, auth?.id]);

  function analyzeTeamData(treeData) {
    let totalMembers = 0;
    let activeMembers = 0;
    let totalActivePlanAmount = 0;
    let totalInvestmentPlanAmount = 0;

    let queue = Array.isArray(treeData) ? [...treeData] : [treeData];

    while (queue.length > 0) {
      let node = queue.shift();
      if (!node) continue;

      totalMembers++;
      if (node.is_active === "active") {
        activeMembers++;
        totalActivePlanAmount += node.active_plan || 0;
        totalInvestmentPlanAmount += node.investment_plan || 0;
      }

      if (node.referrals && node.referrals.length > 0) {
        queue.push(...node.referrals);
      }
    }

    return {
      totalMembers,
      activeMembers,
      totalActivePlanAmount,
      totalInvestmentPlanAmount,
    };
  }
  const {
    totalMembers,
    activeMembers,
    totalActivePlanAmount,
    totalInvestmentPlanAmount,
  } = analyzeTeamData(treeData);
  const projects = [

    {
      name: "Limit",
      initials: "Li",
      href: "#",
      members:((singleuser?.active_plan*singleuser?.max ) - (singleuser?.level_month +
        singleuser?.roi_income +(singlecto?.amount || 0))
      ).toFixed(2),
      bgColor: "bg-yellow-500",
    },
    // {
    //   name: "Direct Income",
    //   initials: "DI",
    //   href: "#",
    //   members: singleuser?.direct_income,
    //   bgColor: "bg-yellow-500",
    // },

    {
      name: "Level Income",
      initials: "ILI",
      href: "#",
      members: singleuser?.level_month,
      bgColor: "bg-purple-600",
    },

    {
      name: "Roi",
      initials: "RI",
      href: "#",
      members: singleuser?.roi_income,
      bgColor: "bg-purple-600",
    },

    {
      name: "Total Earning",
      initials: "TE",
      href: "#",
      members: (
        singleuser?.level_month +
        singleuser?.roi_income +
        singleuser?.reward + 
        singleuser?.total_salary 
      ).toFixed(2),
      bgColor: "bg-pink-600",
    },
    {
      name: "Total Reward",
      initials: "TR",
      href: "#",
      members: singleuser?.reward,
      bgColor: "bg-yellow-500",
    },
    {
      name: "Total Reward",
      initials: "TR",
      href: "#",
      members: singleuser?.total_salary,
      bgColor: "bg-yellow-500",
    },

    {
      name: "Total Member",
      initials: "TM",
      href: "#",
      members: totalMembers,
      bgColor: "bg-yellow-500",
    },
    {
      name: "Active Member",
      initials: "AM",
      href: "#",
      members: activeMembers,
      bgColor: "bg-green-500",
    },
    {
      name: "Total Team Business",
      initials: "TTB",
      href: "#",
      members: totalActivePlanAmount + totalInvestmentPlanAmount,
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#1e2a3a]">
    {projects.length > 0 ? (
      projects.map((project) => (
        <div key={project.name} className="bg-[#2a3b4c] p-4 rounded-sm shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center space-x-4">
            <div className={classNames(project.bgColor, 'h-14 w-14 rounded-full flex items-center justify-center text-white text-xl font-semibold')}>
              {project.initials}
            </div>
            <div>
              <h3 className="text-white text-base font-semibold">{project.name}</h3>
              <p className="text-gray-300 text-sm">Members: {project.members}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-span-full text-center text-gray-400 text-xl py-6 bg-[#2a3b4c] rounded-lg">
        No data available
      </div>
    )}
  </div>
  
  
  );
}
