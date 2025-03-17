import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../comman/ErrorAlert";
import { loginAdmin, clearErrors } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../comman/Spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

export default function AdminLogin() {
  const [showPass, setShowPass] = useState(false);
  const { loading, error, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(loginAdmin(values));
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (admin) {
      navigate(`/admin/dashboard`);
    }
  }, [error, dispatch, admin, navigate]);

  return (
    <>
      <Header />
      <div
        className="flex  bg-black pt-20"
        style={{
          backgroundImage: `url('/backadmin.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: "100vh",
          // width: "100vw",
          // position: "absolute",
          // top: 0,
          // left: 0,
        }}
      >
        <div className=" flex-1 flex-col justify-center6 flex  my-10">
          <div className="mx-auto w-full max-w-md  bg-opacity-50 bg-black  px-8 py-12 rounded-md ">
      
            <div className="text-center flex items-center justify-between mb-8">
              <div>
                <h2 className=" text-left text-3xl text-green-500 font-bold leading-9 tracking-tight">
                Admin Login
                </h2>
              </div>
           
            </div>

            <div className="mt-10">
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium leading-6 text-gray-100"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="email"
                      required
                      className="block w-full rounded-md border-0 bg-white bg-opacity-10 py-1.5 px-4 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 tracking-widest text-xs mt-2">
                      {formik.errors.email}*
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium leading-6 text-gray-100"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={showPass ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full bg-white bg-opacity-10 rounded-md border-0 py-1.5 px-4 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    />
                    <span
                      onClick={() => setShowPass(!showPass)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-lg leading-5 text-gray-600 cursor-pointer"
                    >
                      {showPass ? (
                        <FaRegEyeSlash className="h-6 w-6 text-gray-200" />
                      ) : (
                        <FaRegEye className="h-6 w-6 text-gray-200" />
                      )}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 tracking-widest text-xs mt-2">
                      {formik.errors.password}*
                    </p>
                  )}
                </div>

                {error && <ErrorAlert error={error} />}

                <div>
                  <button
                    type="submit"
                    className={`flex w-full justify-center rounded ${
                      loading ? "bg-green-500" : "bg-green-600"
                    } px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus:ring-2 focus:ring-green-600`}
                  >
                    {loading ? <Spinner /> : "Login"}
                  </button>
                </div>
              </form>

              <p className="mt-4 text-center text-lg text-gray-100">
                Not a member?{" "}
                <Link
                  to="/"
                  className="font-semibold text-blue-500 hover:text-blue-500 hover:underline"
                >
                  User Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
