import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../BaseFile/comman/Spinner";
import { addQrLink, clearErrors, clearMessage } from "../redux/qrSlice";


export default function AdminQRModel({ openModel, modelClose }) {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.qr);
  const [values, setValues] = useState({});

  useEffect(() => {
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
  }, [dispatch, error, message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    if (form.checkValidity()) {
        console.log(values)
      dispatch(addQrLink({ values }));
      modelClose();
    } else {
      form.reportValidity();
    }
  };

  return (
    <>

    <Dialog open={openModel} onClose={modelClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative px-4 pt-5 pb-4 overflow-hidden text-left text-gray-900 transition-all transform border rounded-lg shadow-xl bg-gradient-to-bl from-red-300 via-fuchsia-300 to-pink-300 sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
          >
            <div>
              <div className="p-5">
                <div className="flex items-center justify-between py-4">
                  <h2 className="mb-5 text-xl font-semibold ">
                    Payment Setting Form
                  </h2>
                  <button onClick={modelClose}>
                  <div class="group flex  cursor-pointer items-center justify-center mb-2 ">
                    <div class="space-y-2">
                      <span class="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                      <span class="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                    </div>
                  </div>
                  </button>
                </div>
                <form onSubmit={handleSaveChanges}>
                  <div className="space-y-4">
                  <h2 className="mb-5 text-xl font-semibold ">
                   USDT BEB20
                  </h2>
                    <div>
                      <label htmlFor="BEB20" className="block text-lg font-medium ">
                      BEB20 QR Link
                      </label>
                      <input
                        type="text"
                        id="BEB20"
                        name="BEB20"
                        value={values.BEB20}
                        onChange={handleChange}
                        
                        className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm sm:text-lg"
                      />
                    </div>
                   
                  </div>

                  <div className="space-y-4">
                  <h2 className="mb-5 text-xl font-semibold ">
                   USDT TRC20
                  </h2>
                    <div>
                      <label htmlFor="TRC20" className="block text-lg font-medium ">
                      TRC20 QR Link
                      </label>
                      <input
                        type="text"
                        id="TRC20"
                        name="TRC20"
                        value={values.TRC20}
                        onChange={handleChange}
                        
                        className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm sm:text-lg"
                      />
                    </div>
                   
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={modelClose}
                      className="inline-flex justify-center px-4 py-2 mr-2 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                     {loading ?  <Spinner/> : "Save Changes" }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </>
  );
}
