import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../BaseFile/comman/Spinner";
import { getUserbyemail } from "../redux/userSlice";
import UserEntryFeeConfirmation from "./UserEntryFeeConfirmation";
import { addTopup,  clearErrors, clearMessage,} from "../redux/topupSlice";
export default function UserTopupModel({ openModel, modelClose }) {
  const dispatch = useDispatch();
  const { allplans } = useSelector((state) => state.allplans);
  const { emailuser } = useSelector((state) => state.allusers);
  const { auth } = useSelector((state) => state.auth);
  const { loading, error, message } = useSelector((state) => state.alltopup);
  const [investment_amount, setInvestment_amount] = useState(null);
  const [amount, setAmount] = useState();
  const [plan, setPlan] = useState();
  const [userby, setUserby] = useState(auth?.refferal_code);
  const [entryPlanModel, setEntryPlanModel] = useState(false);

  useEffect(() => {
      if (userby ) {
        dispatch(getUserbyemail(userby));
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
}, [dispatch, error, message ,auth?.id,userby]);


  const handleSaveChanges = (e) => {
    if (amount < 50 && plan?.id==2) {
      alert(`Amount must be greater than 50`);
      return;
    }
    e.preventDefault();
    const form = e.target.closest("form");
    if (form.checkValidity()) {
      const allValues = {
        userby_id: auth?.id,
        userto_id: emailuser?.id,
        investment_amount:plan?.id==1 ? 20 : amount,
        id:plan?.id,
      };
      dispatch(addTopup({ values: allValues }));
      modelClose()
    } else {
      form.reportValidity();
    }
  };  
  function handleEntryPlan(){
    setEntryPlanModel(true)
  }
  const isClose = () => {
    // setModalOpen(false);
    setEntryPlanModel(false)

  };
  return (
    <Dialog open={openModel} onClose={modelClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg text-gray-900 bg-[#ffeded] border px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="p-5">
                <div className="flex items-center justify-between py-4">
                  <h2 className="mb-5 text-xl font-semibold ">
                    Top-Up form
                  </h2>
                  <button onClick={modelClose} className="">
                  <div class="group flex  cursor-pointer items-center justify-center mb-2   bg-[#fadddd] border border-gray-300 rounded-md h-12 px-2 w-12">
                    <div class="space-y-2">
                      <span class="block h-1 w-10 origin-center rounded-full bg-blue-800 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                      <span class="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                    </div>
                  </div>
                  </button>
                </div>
                <form className="">
              <div className="w-full ">
                <div className="mb-4 ">
                  <label className="block text-lg font-medium ">
                    User
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={userby}
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm "
                    placeholder="type user E-Mail . . ."
                    onChange={(e) => setUserby(e.target.value)}
                  />
                  <p
                    className={
                      emailuser?.username ? "text-green-500" : "text-red-500"
                    }
                  >
                    {emailuser?.username
                      ? emailuser.username
                      : "Provide user email"}
                  </p>
                </div>
               

                <div className="mb-4">
                      <label className="block text-lg font-medium ">
                        Plan
                      </label>

                      <select
                        name="id"
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm "
                        onChange={(e) => {
                          const selectedPlan =
                            allplans[e.target.selectedIndex - 1];
                          setPlan(selectedPlan);
                        }}
                        required
                      >
                        <option value="">Select a plan</option>
                        {allplans?.filter((item)=>item?.name!=="entry bot")?.map((plan, index) => (
                          <option key={index} value={plan.id}>
                            {plan.name} - ${plan.monthly_price} Activation Plan
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-lg font-medium ">
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={amount}
                        required
                        disabled={plan?.id==1 ? true:false}
                         min="50"
                        step="50"
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm "
                        placeholder="Enter your Amount . . ."
                        onChange={(e) => setAmount( e.target.value)}
                      />
                    </div>
                <div className="flex items-center justify-center pb-4 ">
                  <button
                    type="submit"
                    disabled={!emailuser} // Disable if emailuser is falsy
                    onClick={handleSaveChanges}
                    className={`px-4 py-2 rounded text-white focus:outline-none w-full mt-3 border bg-green-800 hover:bg-gray-900 ${
                      emailuser
                        ? "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 " // Styles for the enabled state
                        : "bg-gray-400 cursor-not-allowed" // Styles for the disabled state
                    }`}
                  >
                    {loading ? <Spinner /> : "Transfer"}
                  </button>
                </div>
              </div>
            </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
      {entryPlanModel && (
              <UserEntryFeeConfirmation
                isclose={isClose}
                userby_id={auth?.id}
                user_id={emailuser?.id}
              />
            )}
    </Dialog>
  );
}
