import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChartBar, FaTh, FaTrophy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import  {LanguageButton}  from "../HomeFile/LanguageButton";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route path



  return (
    <div className="bg-black">
      <header className="relative inset-x-0  z-50 bg-gray-900/50 border-b-[3px] border-amber-400 backdrop-blur-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-8  py-3 "
        >
          <div className="flex ">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Earn4u</span>
              <div className="flex items-center justify-center w-28 ">
                <img alt="Earn4u Logo" src="/Earn4u2.png" className="w-auto " />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium hover:text-amber-400 relative 
                  ${
                    location.pathname === item.href
                      ? "text-amber-400 border-b-2 border-amber-400 pb-1"
                      : "text-gray-300"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="items-center  gap-4 flex lg:justify-end">
           <LanguageButton/>

            <Link
              to="/user/login"
              className=" hidden gap-4 lg:flex lg:justify-end"
            >
              <button className="bg-yellow-400 text-white p-1 rounded-full flex items-center gap-2">
                <span className="bg-green-800 text-sm px-8 py-2 rounded-full">
                  Log in
                </span>
                <div className="bg-white rounded-full p-2">
                  <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
                </div>
              </button>
            </Link>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm px-6 py-6 bg-gray-900 sm:ring-1  sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Finrain</span>
                <div className="flex items-center justify-center w-28">
                  <img
                    alt="Earn4u Logo"
                    src="/Earn4u2.png"
                    className="w-auto "
                  />
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-semibold hover:bg-gray-800 rounded-lg 
                    ${
                      location.pathname === item.href
                        ? "text-green-400 border-b-2 border-green-400 pb-1"
                        : "text-white"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div>
                <Link onClick={() => setMobileMenuOpen(false)} to="/user/login">
                  <button className=" bg-yellow-400 text-white   p-1 py-1 rounded-full flex items-center gap-2">
                    <span className="bg-green-800 px-8 py-2 rounded-full">
                      {" "}
                      Log in
                    </span>
                    <div className="bg-white rounded-full p-3">
                      <AiOutlineArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
