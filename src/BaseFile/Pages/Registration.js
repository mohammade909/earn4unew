import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spinner from "../comman/Spinner";
import { signupUser, clearErrors, clearMessage } from "../../redux/authSlice";
import ErrorAlert from "../comman/ErrorAlert";
import SuccessAlert from "../comman/SuccessAlert";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Registration() {
  const [referralCode, setReferralCode] = useState(null);
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message, auth } = useSelector((state) => state.auth);

  useEffect(() => {
    const referral = query.get("referral");
    if (referral) {
      setReferralCode(referral);
    }
    if (auth) {
      navigate(`/${auth?.role}/dashboard`);
    }
  }, [query, auth]);

  const [showPass, setShowPass] = useState(false);

  const initialValues = {
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralBy: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    fullname: Yup.string().required("fullname is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    phone: Yup.number().required("Phone is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (referralCode) {
        values.referralBy = referralCode;
      }
      dispatch(signupUser(values));
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 10000);
      return () => clearTimeout(timer);
    }
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch, message]);

  return (
    <>
      <Header />
      <div
        className="relative flex items-center justify-center min-h-screen pb-8 bg-center bg-cover pt-28"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/3d-rendering-money-tree_23-2151575474.jpg?uid=R176823449&ga=GA1.1.1433286368.1718702777&semt=ais_hybrid)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 "></div>
        <div className="flex flex-col justify-center items-center  p-6">
        <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white/10  max-w-7xl w-full shadow-lg rounded-md overflow-hidden">
            <div className="relative flex flex-col  bg-opacity-10  justify-center  bg-green-600/50  w-full h-full">
              <div className=" max-w-md space-y-6 mx-auto text-white">
              <div className=" mb-4 text-center">
                <div>
                  <h2 className="text-3xl font-bold leading-9 tracking-tight text-left ">
                 Register 
                  </h2>
                </div>
              </div>
                <div>
                  <h4 className="text-base font-semibold">Create Your Account</h4>
                  <p className="text-sm text-gray-200 mt-2">
                    Welcome! Get started by creating your account.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold">Simple & Secure</h4>
                  <p className="text-sm text-gray-200 mt-2">
                    Our process is secure and privacy-focused.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold">Agree to Terms</h4>
                  <p className="text-sm text-gray-200 mt-2">
                    Accept the terms & conditions during registration.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold">Agree to Terms</h4>
                  <p className="text-sm text-gray-200 mt-2">
                    Accept the terms & conditions during registration.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-lg p-8 mx-3 text-gray-200 rounded-r-lg shadow-lg bg-gray-800/50 bg-opacity-10 backdrop-blur-lg sm:mx-0">
             
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-base font-medium "
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-xs text-red-500">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="fullname"
                      className="block text-base font-medium "
                    >
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      placeholder="Enter fullname"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formik.touched.fullname && formik.errors.fullname && (
                      <p className="mt-2 text-xs text-red-500">
                        {formik.errors.fullname}
                      </p>
                    )}
                  </div>
                  
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="w-full">
                    <label
                      htmlFor="password"
                      className="block text-base font-medium "
                    >
                      Password
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        type={showPass ? "text" : "password"}
                        required
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block w-full px-4 py-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span
                        onClick={() => setShowPass(!showPass)}
                        className="absolute text-gray-300 cursor-pointer right-4 top-3 "
                      >
                        {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-2 text-xs text-red-500">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-base font-medium "
                    >
                      Confirm Password
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type={showPass ? "text" : "password"}
                        required
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block w-full px-4 py-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <p className="mt-2 text-xs text-red-500">
                          {formik.errors.confirmPassword}
                        </p>
                      )}
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 ">
                <div className="w-full">
                    <label
                      htmlFor="username"
                      className="block text-base font-medium "
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      placeholder="Enter Phone"
                      required
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="mt-2 text-xs text-red-500">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                <div>
                  <label
                    htmlFor="referralBy"
                    className="block text-base font-medium "
                  >
                    Referral Code
                  </label>
                  <input
                    id="referralBy"
                    name="referralBy"
                    placeholder="Enter Referral Code"
                    type="text"
                    required
                    value={referralCode || formik.values.referralBy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-200 bg-gray-700 border border-gray-500 rounded-md bg-opacity-10 backdrop-blur-lg focus:ring focus:ring-amber-500 focus:border-amber-500"
                    disabled={!!referralCode}
                  />
                </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : "Sign Up"}
                </button>
              </form>

              <p className="mt-6 text-center ">
                Already a member?{" "}
                <Link
                  to="/user/login"
                  className="font-medium hover:text-green-600 hover:underline"
                >
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Error and Success Alerts */}
      {error && <ErrorAlert error={error} />}
      {message && <SuccessAlert message={message} />}
    </>
  );
}
