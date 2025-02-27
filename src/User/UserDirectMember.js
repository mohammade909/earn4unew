import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReferralTree } from "../redux/referralSlice";
import Loader from "../BaseFile/comman/Loader";

export default function UserDirectMember() {
  const [searchQuery, setSearchQuery] = useState("");
  const { auth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { referralTree } = useSelector((state) => state.referralTree);
  const [allRefferal, setAllRefferal] = useState();

  useEffect(() => {
    dispatch(getReferralTree(auth?.refferal_code));
    setAllRefferal(referralTree);
  }, [dispatch, allRefferal, auth?.refferal_code]);

  const handleSearch = (e) => {
    setAllRefferal(
      referralTree?.filter((p) => p.username?.includes(e.target.value))
    );
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="my-5 lg:mx-3 sm:mx-3 p-4 bg-[#111c54c7]">
        <div className="flex flex-wrap items-center justify-between w-full mb-3 ">
          <div className="sm:order-2 order-1">
            <h3 className="text-lg font-semibold text-gray-200 sm:text-end">Your Member</h3>
            <p className="text-lg text-gray-300">
              Overview of the Your Member.
            </p>
          </div>
          <div className="mt-3 lg:ml-3 sm:mt-0 sm:order-1 order-2">
            <div className="relative flex w-full max-w-sm gap-5">
              <div className="relative">
                <input
                  id="search"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e)}
                  className="w-full h-10 py-2 pl-3 text-lg transition duration-200 border rounded shadow-sm text-gray-100 bg-[#7e66c5b3] pr-11 placeholder:text-slate-100  border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-100 focus:shadow-md"
                  placeholder="Search for invoice..."
                />
                <button
                  className="absolute flex items-center justify-center h-8 px-2 my-auto rounded jus right-1 top-1"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full mb-4 text-gray-100 bg-[#569182c7] rounded-sm shadow-md bg-clip-border">
          <div className="overflow-x-auto">
            <table className="w-full text-left border rounded-sm table-auto min-w-max">
              <thead>
                <tr>
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      S. No
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      UserName
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      is_active
                    </p>
                  </th>
                 
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      E-Mail
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      Active Plan
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 ">
                    <p className="text-base font-normal leading-none ">
                      Created at
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#0f1b61a8] ">
                {(searchQuery ? allRefferal : referralTree)?.length > 0 ? (
                  (searchQuery ? allRefferal : referralTree)?.map(
                  (item, index) => (
                    <tr
                      key={index}
                      className="text-gray-100 even:bg-[#7e66c5b3] even:text:white"
                    >
                      <td className="py-4 pl-4 pr-3 text-lg font-medium whitespace-nowrap sm:pl-3">
                        {index+1}
                      </td>
                      <td className="py-4 pl-4 pr-3 text-lg font-medium whitespace-nowrap sm:pl-3">
                        {item?.username}
                      </td>
                      <td className="px-3 py-4 text-lgwhitespace-nowrap">
                        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                          {item?.is_active === "active" ? (
                            <div className="flex-none p-1 rounded-full">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-800" />
                            </div>
                          ) : (
                            <div className="flex-none p-1 rounded-full">
                              <div className="h-1.5 w-1.5 rounded-full bg-red-800" />
                            </div>
                          )}
                          <div className="hidden sm:block">
                            {item?.is_active}
                          </div>
                        </div>
                      </td>
                     
                      <td className="px-3 py-4 text-lg whitespace-nowrap">
                        {item?.email}
                      </td>
                      <td className="px-3 py-4 text-lg whitespace-nowrap">
                        ${item?.active_plan}
                      </td>
                      <td className="px-3 py-4 text-lg whitespace-nowrap">
                        {item?.created_at
                          ? new Date(item.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "N/A"}
                      </td>
                    </tr>
                  )
                )):(
                  <tr>
                      <td
                        colSpan="6"
                        className="py-4 text-lg text-center text-gray-100 bg-[#4b1725ab]"
                      >
                        No data available
                      </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
