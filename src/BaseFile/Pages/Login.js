import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../comman/ErrorAlert";
import SuccessAlret from "../comman/SuccessAlert";
import { loginUser, clearErrors } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../comman/Spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import {
  sendForgotLink,
  clearMessage,
  clearErrors as clrerr,
} from "../../redux/forgotSlice";
export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const { loading, error, auth } = useSelector((state) => state.auth);
  const {
    loading: load,
    message,
    error: Err,
  } = useSelector((state) => state.forgot);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email or username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (Err) {
      const timer = setTimeout(() => {
        dispatch(clrerr());
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (auth) {
      navigate(`/${auth?.role}/dashboard`);
    }
  }, [error, dispatch, auth, message, Err]);

  const handleForgotPass = () => {
    if (formik.values.email == "") {
      alert("enter email");
    }
    const forgotData = { email: formik.values.email, role: "user" };
    console.log(forgotData);
    dispatch(sendForgotLink(forgotData));
  };
  console.log(Err);
  return (
    <>
      <Header />
      {/* <div className="relative flex items-center justify-center min-h-screen pt-20 pb-6"> */}
        {/* Background Image */}
        <div
        className="relative flex items-center justify-end min-h-screen pb-8 bg-center bg-cover pt-28"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/3d-rendering-money-tree_23-2151575474.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10 "></div>

        {/* Form Container */}
        <div className="relative w-full max-w-md p-8 mx-3 text-gray-200 rounded-lg shadow-lg bg-gray-800/50 bg-opacity-10 sm:mx-0">
          <div className="w-full max-w-sm mx-auto">
            {/* Logo */}
            <div className="flex items-center justify-between text-center">
              <div>
                <h2 className="mt-6 text-4xl font-bold leading-9 tracking-tight text-left ">
                  Login
                </h2>
                <p className="mt-2 text-center =">Have an account?</p>
              </div>
              
            </div>

            {/* Form */}
            <div className="mt-8">
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="w-full">
                  <label htmlFor="email" className="block text-base">
                    Email or Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text"
                      placeholder="Enter email......"
                      required
                      className="block w-full px-4 py-2 rounded-full bg-opacity-10 relative bg-gray-800/50 border border-gray-400 backdrop-blur-lg focus:outline-none sm:text-lg"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-2 text-xs tracking-widest text-left text-red-500">
                      {formik.errors.email}*
                    </p>
                  )}
                </div>

                <div className="relative w-full ">
                  <label
                    htmlFor="password"
                    className="block text-base "
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={showPass ? "text" : "password"}
                      placeholder="Password...."
                      required
                      className="block w-full px-4 py-2 rounded-full relative bg-gray-800/50 bg-opacity-10 border border-gray-400  backdrop-blur-lg focus:outline-none sm:text-base"
                    />
                    <span
                      onClick={() => setShowPass(!showPass)}
                      className="absolute inset-y-0 right-2 top-[53px] transform -translate-y-1/2 pr-3 flex items-center text-white cursor-pointer"
                    >
                      {showPass ? (
                        <FaRegEyeSlash className="text-gray-200" />
                      ) : (
                        <FaRegEye className="text-gray-200" />
                      )}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-2 text-xs tracking-widest text-left text-red-500">
                      {formik.errors.password}*
                    </p>
                  )}
                </div>

                {error && <ErrorAlert error={error} />}
                {Err && <ErrorAlert error={Err} />}
                {message && <SuccessAlret message={message} />}
                <div className="flex items-center justify-between">
                  <label className="flex items-center ">
                    <input type="checkbox" className="rounded form-checkbox" />
                    <span className="ml-2">Remember Me</span>
                  </label>
                  <span
                    onClick={() => handleForgotPass()}
                    className="text-base cursor-pointer"
                  >
                    Forgot Password
                  </span>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full uppercase tracking-widest justify-center rounded-full ${
                      loading ? "bg-green-500" : "bg-green-500"
                    } px-6 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-green-600 focus:outline-none`}
                  >
                    {loading || load ? <Spinner /> : "Sign In"}
                  </button>
                </div>
              </form>

              <p className="mt-4 text-base text-center ">
                Not a member?{" "}
                <Link
                  to="/registration"
                  className="font-semibold leading-6 text-blue-500 hover:text-blue-600 hover:underline"
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
      {/* </div> */}
      <Footer />
    </>
  );
}
