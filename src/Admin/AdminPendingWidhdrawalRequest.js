import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
import Scanner from "./Scanner";
import { useParams } from "react-router-dom";

import {
  getAllWithdrawal,
  deleteWithdrawal,
  clearErrors,
  clearMessage,
  updateWithdrawal,
} from "../redux/withdrawalSlice";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import { getAllUsers } from "../redux/userSlice";
import BNBTransfer from "./BalanceTransfer";

export default function AdminPendingWidhdrawalRequest() {
  const { action } = useParams();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editableWithdrawal, setEditableWithdrawal] = useState(null);
  const [allWithdrawalRequest, setAllWithdrawalRequest] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState();
  const [link, setLink] = useState();
  const [text, setText] = useState();
  const [filterquery, setFilterquery] = useState();
  const [openModel, setOpenModel] = useState(false);

  const { allwithdrawal, loading, error, message } = useSelector(
    (state) => state.allwithdrawal
  );

  useEffect(() => {
    dispatch(getAllWithdrawal());
    setAllWithdrawalRequest(allwithdrawal);
    dispatch(getAllUsers());

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

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (action) {
      setFilterquery(action);
    }
  }, [action]);

  const handleSearch = (e) => {
    setAllWithdrawalRequest(
      allwithdrawal?.filter((p) => p.email?.includes(e.target.value))
    );
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    setDeleteID(id);
    setModalOpen(true);
  };

  const isClose = () => {
    setModalOpen(false);
    setOpenModel(false);
    setLink(null);
    setText(null);
  };

  const handleEdit = (item) => {
    setEditableWithdrawal(item);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableWithdrawal(null);
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleSaveChange = (id) => {
    if (editableWithdrawal) {
      dispatch(
        updateWithdrawal({
          id: id,
          status: values,
          amount: editableWithdrawal?.amount + editableWithdrawal?.deduction,
          user_id: editableWithdrawal?.user_id,
        })
      );
      setEditMode(false);
      setEditableWithdrawal(null);
    }
  };
  function handleScan(l, t) {
    setOpenModel(true);
    setLink(l);
    setText(t);
  }
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toISOString().split("T")[0];
    const formattedTime = date.toTimeString().split(" ")[0];
    return `${formattedDate} - ${formattedTime}`;
  };
  return (
    <div className="my-5 lg:mx-3 sm:mx-3 p-4 bg-[#111c54c7]">
      <div className="px-8 pt-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="search"
          value={searchQuery}
          onChange={handleSearch}
          type="text"
          placeholder="search here . . ."
          className="block w-[50vh] px-2 py-1 rounded-md border-0 text-gray-100 bg-[#7e66c5b3] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="px-8 pt-5">
        <label htmlFor="filterquery" className="sr-only">
          Filter
        </label>
        <select
          id="filterquery"
          name="filterquery"
          value={filterquery}
          onChange={(e) => setFilterquery(e.target.value)}
          className="block w-[50vh] px-2 py-1 rounded-md border-0 text-gray-100 bg-[#7e66c5b3] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="" disabled>
            Select status...
          </option>
          <option value="complete">Complete</option>
          <option value="decline">Decline</option>
          <option value="pending">Pending</option>
          <option value="TRN-ADM002">By Admin</option>
        </select>
      </div>

      <div className="flow-root mt-4">
        {message && <SuccessAlert message={message} />}
        {error && <ErrorAlert error={error} />}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="w-full mt-6 text-left border-collapse whitespace-nowrap text-gray-100 bg-[#569182c7]">
              <thead className="text-sm leading-6 border-b border-gray-300">
                <tr>
                  <th className="px-4 py-3 font-medium  border-r border-gray-300">
                    Name
                  </th>
                  <th className="px-4 py-3 font-medium  border-r border-gray-300">
                    Amount
                  </th>
                  <th className="px-4 py-3 font-medium  border-r border-gray-300">
                    Deduction
                  </th>
                  <th className="px-4 py-3 font-medium  border-r border-gray-300">
                    Total
                  </th>
                  <th className="px-4 py-3 font-medium  text-right border-r border-gray-300">
                    Status
                  </th>
                  <th className="px-4 py-3 font-medium  border-r border-gray-300">
                    Request/Action
                  </th>
                  <th className="px-4 py-3 font-medium  text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-2xl divide-y divide-gray-300 bg-[#0f1b61a8]">
                {(searchQuery ? allWithdrawalRequest : allwithdrawal)
                  ?.filter(
                    (item) =>
                      item?.type == "working" &&
                      (filterquery ? item?.status === filterquery : true)
                  )
                  ?.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 text-gray-100 even:bg-[#7e66c5b3] even:text:white">
                      <td className="py-4 px-4 border-r border-gray-200  lg:w-[200px]">
                        <span className="block text-[12px]">
                          {" "}
                          {item?.email}
                        </span>

                        {item?.bep20 && item?.bep20?.length > 5 && (
                          <>
                            {item.status === "pending" && (
                              <BNBTransfer user={item} id={item?.id} />
                            )}
                          </>
                        )}
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200">
                        <div className="font-mono text-sm">${item?.amount}</div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200">
                        <div className="font-mono text-sm ">
                          ${item?.deduction}
                        </div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200">
                        <div className="font-mono text-sm ">
                          ${item?.amount + item?.deduction}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right border-r border-gray-200">
                        <div className="px-2 py-1 text-xs font-medium rounded bg-gray-700/40 ring-1 ring-gray-300">
                          {editMode && editableWithdrawal?.id === item?.id ? (
                            <select
                              id="status"
                              name="status"
                              className="w-full px-3 py-1 text-sm bg-gray-200 border-0 rounded-sm shadow focus:outline-none"
                              onChange={handleChange}
                              defaultValue={item?.status}
                            >
                              <option value="pending">Pending</option>
                              <option value="inprogress">In Progress</option>
                              <option value="decline">Decline</option>
                              <option value="complete">Complete</option>
                            </select>
                          ) : (
                            item?.status
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-200">
                        <div className="px-2 py-1 text-xs font-medium rounded bg-gray-700/40 ring-1 ring-gray-300">
                          {formatDateTime(item?.createdAT)}/{" "}
                          {formatDateTime(item?.acceptat)}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center space-x-4">
                          <Link to={`/admin/check/profile/${item?.user_id}`}>
                            <FaEye className="w-4 h-4 text-green-700 cursor-pointer" />
                          </Link>
                          {editMode && editableWithdrawal?.id === item?.id ? (
                            <>
                              <FaCheck
                                className="w-4 h-4 text-green-700 cursor-pointer"
                                onClick={() => handleSaveChange(item?.id)}
                              />
                              <FaTimes
                                className="w-4 h-4 text-red-700 cursor-pointer"
                                onClick={handleCancelEdit}
                              />
                            </>
                          ) : (
                            <>
                              {item?.status == "decline" ||
                              item?.status == "complete" ? (
                                ""
                              ) : (
                                <GrEdit
                                  className="w-4 h-4 text-blue-400 cursor-pointer"
                                  onClick={() => handleEdit(item)}
                                />
                              )}
                              <AiFillDelete
                                className="w-4 h-4 text-red-400 cursor-pointer"
                                onClick={() => handleDelete(item?.id)}
                              />
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteWithdrawal}
          id={deleteID}
        />
      )}

      {link && (
        <Scanner
          openModel={openModel}
          link={link}
          text={text}
          isClose={isClose}
        />
      )}
    </div>
  );
}
