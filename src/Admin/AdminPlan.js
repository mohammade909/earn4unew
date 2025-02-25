import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import Loader from "../BaseFile/comman/Loader";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Spinner from "../BaseFile/comman/Spinner";

import {
  getAllPlans,
  clearErrors,
  deletePlan,
  clearMessage,
} from "../redux/planSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AdminPlan() {
  const dispatch = useDispatch();
  const { allplans, loading, error, message } = useSelector(
    (state) => state.allplans
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [deleteID, setdeleteID] = useState();

  useEffect(() => {
    dispatch(getAllPlans());
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
  }, [dispatch, error, message, clearErrors, clearMessage]);

  function isClose() {
    setModalopen(false);
  }
  function handleDelete(id) {
    setdeleteID(id);
    if (deleteID) {
      console.log(id);
      setModalopen(true);
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center ">
          <div className="px-4 mx-auto max-w-7xl ">
            <div className="grid  grid-cols-1 gap-4 mx-auto my-2 mt-10 isolate lg:grid-cols-4 sm:grid-cols-2  ">
              {allplans?.map((allPlan) => (
                <div className="p-4 text-gray-100 transition-transform duration-300 transform border shadow-xl bg-[#5e3dc9] ">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold text-center capitalize">
                      {allPlan?.name}
                    </h3>
                  </div>
                  <div key={allPlan?.id}>
                    <p className="mt-4 text-lg leading-6 ">
                      {allPlan?.description}
                    </p>
                    <p className="flex items-baseline mt-6 gap-x-1">
                      <span className="text-3xl  font-bold tracking-tight ">
                        ${allPlan?.monthly_price}
                      </span>
                    </p>

                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-base leading-6 text-justify"
                    >
                      <li className="flex gap-x-3 ">
                        <CheckIcon
                          aria-hidden="true"
                          className="flex-none w-5 h-6 text-indigo-100 "
                        />
                        {allPlan?.ROI_overall} % ROI Overall
                      </li>
                      <li className="flex gap-x-3 text-base text-justify">
                        <CheckIcon
                          aria-hidden="true"
                          className="flex-none w-5 h-6 text-indigo-100 "
                        />
                        {allPlan?.Sponser_bonus} % Sponser Bonus
                      </li>
                      <li className="flex gap-x-3 text-base text-justify">
                        <CheckIcon
                          aria-hidden="true"
                          className="flex-none w-5 h-6 text-indigo-100"
                        />
                        T & C : Participants must be at least 18 years old to enroll in any marketing plan
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {modalopen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deletePlan}
          id={deleteID}
        />
      )}
    </>
  );
}


























// (
//   <div className="">
//     <div className="px-2 mx-auto max-w-7xl ">
//     <div className="grid max-w-md grid-cols-1 gap-8 mx-auto my-2 mt-10 isolate md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
//         {allplans?.map((allPlan) => (
//           <div className="p-8 transition-transform duration-300 transform border shadow-xl bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl hover:scale-105">
//             <div className="flex justify-between">
//               <h3 className="text-2xl font-semibold text-center text-gray-300 capitalize">
//                 {allPlan?.name}
//               </h3>
//             </div>
//             <div key={allPlan?.id}>
//               <p className="mt-4 text-lg leading-6 text-gray-400">
//                 {allPlan?.description}
//               </p>
//               <p className="flex items-baseline mt-6 gap-x-1">
//                 <span className="text-3xl font-bold tracking-tight text-gray-300">
//                   ${allPlan?.monthly_price}
//                 </span>
//               </p>

//               <ul
//                 role="list"
//                 className="mt-8 space-y-3 text-lg leading-6 text-gray-600"
//               >
//                 <li className="flex text-gray-300 gap-x-3">
//                   <CheckIcon
//                     aria-hidden="true"
//                     className="flex-none w-5 h-6 text-indigo-100"
//                   />
//                   {allPlan?.ROI_overall} % ROI Overall
//                 </li>
//                 <li className="flex text-gray-300 gap-x-3">
//                   <CheckIcon
//                     aria-hidden="true"
//                     className="flex-none w-5 h-6 text-indigo-100"
//                   />
//                   {allPlan?.Sponser_bonus} % Sponser Bonus
//                 </li>
//                 <li className="flex text-gray-300 gap-x-3">
//                   <CheckIcon
//                     aria-hidden="true"
//                     className="flex-none w-5 h-6 text-indigo-100"
//                   />
//                   T & C : Participants must be at least 18 years old to enroll in any marketing plan
//                 </li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )