import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChartBar, FaTh, FaTrophy } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
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

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
  
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
  
        setTimeout(() => {
          /** Remove unwanted Google text & branding */
          const googleText = document.querySelector(".goog-te-gadget");
          
          if (googleText) {
            googleText.childNodes.forEach((node) => {
              if (node.nodeType === 3) {
                node.nodeValue = ""; // Remove text nodes
              }
            });
          }
        }, 1000);
      };
    };
  
    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div className="bg-black">
      <div className="isolate relative inset-x-0 z-50  flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2 sm:px-3.5">
        {/* Left Gradient Background */}
        <div aria-hidden="true" className="">
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className=""
          />
        </div>

        {/* Right Gradient Background */}
        <div aria-hidden="true" className="">
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className=""
          />
        </div>

        {/* Text & Google Translate */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full justify-center">
          {/* Announcement Text */}
          <p className="text-sm text-gray-900 flex items-center">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>

          {/* Google Translate Dropdown */}
          <div className="lg:flex lg:items-center">
            <div
              id="google_translate_element"
              className="block w-auto text-[12px] font-medium text-gray-800"
            ></div>
          </div>
        </div>

        {/* Hide Google Branding & Unwanted Styles */}
        <style>
  {`
    .goog-te-banner-frame { display: none !important; } /* Hide Google Translate banner */
    .goog-te-gadget img { display: none !important; } /* Hide Google Translate logo */
    .goog-te-gadget span, .goog-text-highlight { display: none !important; } /* Hide "Translate" text */
    .goog-te-gadget-simple span { display: none !important; } /* Hide extra Google text */
    .goog-te-combo {
      background: white;
      border: 1px solid #ccc;
      padding: 6px 4px;
      font-size: 14px;
      color: black;
      border-radius: 5px;
    }
    .goog-logo-link, 
    .goog-te-gadget .goog-te-gadget-simple, 
    .goog-te-gadget .goog-te-gadget-simple span { 
      display: none !important; 
    } /* Hide "Powered by Google" */
    
    .goog-te-banner-frame.skiptranslate { display: none !important; }
    // body { top: 0px !important; }
  `}
</style>
      </div>

      <header className="relative inset-x-0  z-50 bg-gray-900/50 border-b-[3px] border-amber-400 backdrop-blur-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-8  py-3 "
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Earn4u</span>
              <div className="flex items-center justify-center w-28 ">
                <img alt="Earn4u Logo" src="/Earn4u2.png" className="w-auto " />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium hover:text-amber-400 relative 
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
          <div className="items-center hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
            <Link to="/user/login">
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
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm px-6 py-6 bg-gray-900/50 sm:ring-1 sm:ring-white/10">
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
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
