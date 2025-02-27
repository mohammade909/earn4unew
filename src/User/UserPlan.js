import { useState, useEffect } from "react";
import Loader from "../BaseFile/comman/Loader";
import { CheckIcon } from "@heroicons/react/20/solid";
import Spinner from "../BaseFile/comman/Spinner";
import UserPlanConfirmation from "./UserPlanConfirmation";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import UserEntryFeeConfirmation from "./UserEntryFeeConfirmation";
import { getAllPlans } from "../redux/planSlice";
import { getUser } from "../redux/userSlice";
import { clearErrors, clearMessage } from "../redux/depositeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UserPlan() {
  const dispatch = useDispatch();
  const { allplans, loading } = useSelector((state) => state.allplans);
  const { error, message } = useSelector((state) => state.alltopup);
  const { auth } = useSelector((state) => state.auth);
  const { singleuser } = useSelector((state) => state.allusers);

  const [planConfirm, setPlanConfirm] = useState(false);
  const [plan, setPlan] = useState();
  const [entryPlanModel, setEntryPlanModel] = useState(false);

  useEffect(() => {
    dispatch(getAllPlans());
    if (auth?.id) {
      const id = auth?.id;
      dispatch(getUser(id));
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
  }, [dispatch, error, message, clearErrors, clearMessage]);

  function handleBuyPlan(plan) {
    setPlan(plan);
    setPlanConfirm(true);
  }
  function isclose() {
    setPlan(null);
    setPlanConfirm(false);
    setEntryPlanModel(false);
  }

  function handleEntryPlan() {
    setEntryPlanModel(true);
  }
  return (
    <>
      {message && <SuccessAlert message={message} />}
      {error && <ErrorAlert error={error} />}
      {loading ? (
        <Loader />
      ) : (
        // <div className="bg-gray-200 py-1">
        //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
        //     <div className=" isolate mx-auto mt-10 grid max-w-md grid-cols-1 my-2   gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        //  {singleuser?.entry_fees==0  ? (allplans?.filter((item)=>item.name =='entry')?.map((allPlan) => (
        //         <div className="transition-transform duration-300 p-8 bg-gradient-to-r from-gray-900 to-indigo-900 border rounded-2xl shadow-xl transform hover:scale-105">
        //           <div className="flex justify-between">
        //             <h3 className="text-center text-gray-300 text-2xl capitalize font-semibold">
        //               {allPlan?.name}
        //             </h3>
        //           </div>
        //           <div key={allPlan?.id}>
        //             <p className="mt-4 text-sm leading-6 text-gray-400">
        //               {allPlan?.description}
        //             </p>
        //             <p className="mt-6 flex items-baseline gap-x-1">
        //               <span className="text-3xl font-bold tracking-tight text-gray-300">
        //                 ${allPlan?.monthly_price}
        //               </span>
        //             </p>

        //             <ul
        //               role="list"
        //               className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
        //             >

        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                  {allPlan?.ROI_day} ROI Overall
        //               </li>
        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                 {allPlan?.Sponser_bonus} % Sponser Bonus
        //               </li>
        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                 T & C : Participants must be at least 18 years old to enroll in any marketing plan
        //               </li>
        //             </ul>
        //             <button
        //               onClick={()=>handleEntryPlan()}
        //               className="text-indigo-400 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-900 hover:text-white  hover:ring-indigo-300 mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 w-full"
        //             >
        //               {loading ? <Spinner /> : "Buy Plan "}
        //             </button>
        //           </div>
        //         </div>
        //       )))

        //      :
        //     (allplans?.filter((item)=>item.name !=='entry')?.map((allPlan) => (
        //         <div className="transition-transform duration-300 p-8 bg-gradient-to-r from-gray-900 to-indigo-900 border rounded-2xl shadow-xl transform hover:scale-105">
        //           <div className="flex justify-between">
        //             <h3 className="text-center text-gray-300 text-2xl capitalize font-semibold">
        //               {allPlan?.name}
        //             </h3>
        //           </div>
        //           <div key={allPlan?.id}>
        //             <p className="mt-4 text-sm leading-6 text-gray-400">
        //               {allPlan?.description}
        //             </p>
        //             <p className="mt-6 flex items-baseline gap-x-1">
        //               <span className="text-3xl font-bold tracking-tight text-gray-300">
        //                 ${allPlan?.monthly_price}
        //               </span>
        //             </p>

        //             <ul
        //               role="list"
        //               className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
        //             >

        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                  {allPlan?.ROI_day} ROI Overall
        //               </li>
        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                 {allPlan?.Sponser_bonus} % Sponser Bonus
        //               </li>
        //               <li className="flex gap-x-3 text-gray-300">
        //                 <CheckIcon
        //                   aria-hidden="true"
        //                   className="h-6 w-5 flex-none text-indigo-600"
        //                 />
        //                 T & C : Participants must be at least 18 years old to enroll in any marketing plan
        //               </li>
        //             </ul>
        //             <button
        //               onClick={()=>handleBuyPlan(allPlan)}
        //               className="text-indigo-400 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-900 hover:text-white  hover:ring-indigo-300 mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 w-full"
        //             >
        //               {loading ? <Spinner /> : "Buy Plan "}
        //             </button>
        //           </div>
        //         </div>
        //       ))) }
        //     </div>
        //   </div>
        // </div>

        <div className="bg-[#111c54c7] py-1">
          <div className="mx-auto max-w-7xl ">
            <div className="isolate mx-auto  overflow-x-auto p-5">
              <table className="min-w-full  border  shadow-xl">
                <thead className="bg-[#569182c7]">
                  <tr className="text-gray-300 border-b border-indigo-700">
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Plan Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      ROI & Sponsor Bonus
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold w-[250px]">
                      T&C
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-100 bg-[#0f1b61a8]">
                  {singleuser?.entry_fees === 0
                    ? allplans
                        ?.filter((item) => item.name === "entry")
                        ?.map((allPlan) => (
                          <tr
                            key={allPlan?.id}
                            className="text-gray-100  even:bg-[#7e66c5b3] even:text:white text-sm border-b border-indigo-700 hover:bg-indigo-800 transition duration-300"
                          >
                            <td className="px-6 py-4 capitalize font-semibold">
                              {allPlan?.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-100">
                              {allPlan?.description}
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-100">
                              ${allPlan?.monthly_price}
                            </td>
                            <td className="px-6 py-4 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                              {allPlan?.ROI_day} ROI Overall
                              </div>
                              <div className=" flex items-center gap-2">
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                              {allPlan?.Sponser_bonus}% Sponsor Bonus
                            </div>
                            </td>
                            
                            <td className="px-6 py-4 text-sm w-[250px]">
                             Participants must be at least 18 years old
                              to enroll in any marketing plan
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={handleEntryPlan}
                                className="px-4 py-2 text-sm font-semibold text-indigo-300 border border-indigo-200 rounded-md hover:bg-indigo-900 hover:text-white transition"
                              >
                                {loading ? <Spinner /> : "Buy Plan"}
                              </button>
                            </td>
                          </tr>
                        ))
                    : allplans
                        ?.filter((item) => item.name !== "entry")
                        ?.map((allPlan) => (
                          <tr
                            key={allPlan?.id}
                            className="text-gray-300 border-b border-indigo-700 hover:bg-indigo-800 transition duration-300"
                          >
                            <td className="px-6 py-4 text-base capitalize font-semibold">
                              {allPlan?.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-400">
                              {allPlan?.description}
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-300">
                              ${allPlan?.monthly_price}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <div className="flex items-center gap-2">
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                              {allPlan?.ROI_day} ROI Overall
                              </div>
                              <div className="flex items-center gap-2">
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                              {allPlan?.Sponser_bonus}% Sponsor Bonus
                            </div>
                            </td>
                           
                            <td className="px-6 py-4 text-sm w-[250px]">
                               Participants must be at least 18 years old
                              to enroll in any marketing plan
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleBuyPlan(allPlan)}
                                className="px-4 py-2 text-sm font-semibold text-indigo-400 border border-indigo-200 rounded-md hover:bg-indigo-900 hover:text-white transition"
                              >
                                {loading ? <Spinner /> : "Buy Plan"}
                              </button>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {planConfirm && (
        <UserPlanConfirmation
          isclose={isclose}
          plan={plan}
          user_id={auth?.id}
        />
      )}
      {entryPlanModel && (
        <UserEntryFeeConfirmation isclose={isclose} user_id={auth?.id} />
      )}
    </>
  );
}
