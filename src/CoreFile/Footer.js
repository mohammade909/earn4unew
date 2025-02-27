import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/" },
  { name: "Contact us", href: "/contact" },
];

const ourServices = [
  { name: "Privacy", href: "/privacy" },
  { name: "Term & Condition ", href: "/" },
  { name: "Our Team", href: "/terms" },
  { name: "Faq", href: "/" },
];

const contactDetails = [
  // { icon: <IoIosCall className="w-5 h-5 text-blue-400 hover:text-blue-500" />, text: "+61 3 8376 6284" },
  {
    icon: <MdEmail className="w-5 h-5 text-blue-400 hover:text-blue-500" />,
    text: (
      <Link href="mailto:info@artelligence.com" className="hover:text-white">
        info@gmail.com
      </Link>
    ),
  },
  // {
  //   icon: (
  //     <GiPositionMarker className="h-5 text-blue-400 lg:w-9 sm:w-5 w-9 hover:text-blue-500" />
  //   ),
  //   text: (
  //     <span>
  //       Sai 2 Soi 16, Muang Pattaya, Bang Lamung District, Chonburi Province
  //       <br />
  //        20150
  //     </span>
  //   ),
  // },
];

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-2 py-12 mx-auto max-w-7xl sm:px-0">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center w-28">
              <Link to="/">
            <img
                  alt="Earn4u Logo"
                  src="/Earn4u2.png"
                  className="w-auto "
                />
                </Link>
            </div>
            <p className="text-base text-justify text-gray-300">
              Powered by Earn4u Smart, Secure, and Automated Trading for
              Everyone.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/profile.php?id=61565903956067"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                to="https://x.com/earn_4u"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.instagram.com/_earn4u_/"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaInstagram className="w-5 h-5 " />
              </Link>
              <Link
                to="https://t.me/earn4uofficial"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaTelegram className="w-5 h-5 " />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-base text-gray-300">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-green-400 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact us</h3>
            <ul className="space-y-4 text-base text-gray-300">
              {contactDetails.map((contact, index) => (
                <li key={index} className="flex gap-3">
                  {contact.icon}
                  {contact.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg ">
            <h3 className="mb-4 text-lg font-semibold text-gray-100">
              Subscribe to our Newsletter
            </h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 text-sm text-white border rounded-md bg-gray-900/50 border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              />
              <button className="px-6 py-2 font-medium text-white transition bg-yellow-600 rounded-md hover:bg-yellow-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 mx-auto border-t border-gray-200 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base text-gray-300">©Earn4u {new Date().getFullYear()}, All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-base text-gray-300 hover:text-green-500 hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="text-base text-gray-300 hover:text-green-500 hover:underline">
              Privacy
            </Link>
            
          </div>
        </div>
        </div>
    </footer>
  );
}
