import { useState } from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      <header className="w-full px-4 p-3 bg-white flex shadow-md justify-between items-center">
        <div className=" flex md:flex-row flex-row-reverse items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <button
            className="block md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          <div className="hidden md:flex lg:hidden xl:hidden 2xl:hidden gap-2 items-center rounded-full p-2 px-3">
            <PiMagnifyingGlassThin
              onClick={() => setSearchModalOpen(true)}
              className="cursor-pointer"
            />
          </div>
          <div className="hidden lg:flex xl:flex 2xl:flex gap-2 items-center rounded-full bg-gray-100 p-2 px-3">
            <PiMagnifyingGlassThin />
            <input
              type="text"
              placeholder="Search(ctrl+k)"
              className="bg-gray-100 outline-none border-none"
            />
          </div>
        </div>
        <ul className="hidden md:flex text-gray-500 gap-5">
          <li className="hover:text-orange-300 cursor-pointer">Launches</li>
          <li className="hover:text-orange-300 cursor-pointer">Products</li>
          <li className="hover:text-orange-300 cursor-pointer">News</li>
          <li className="hover:text-orange-300 cursor-pointer">Community</li>
          <li className="hover:text-orange-300 cursor-pointer">Advertise</li>
        </ul>
        <div className="flex gap-3 items-center">
          <button className="bg-orange-100 text-orange-500 hover:text-orange-600 p-2 px-3 rounded-lg">
            Submit
          </button>
          <CiBellOn className="w-[25px] h-[25px] hover:animate-wiggle" />
          <Image
            src="/logo.svg"
            alt="Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4">
            <div className="flex gap-2 items-center rounded-full bg-gray-100 p-2 px-3 mb-4">
              <PiMagnifyingGlassThin />
              <input
                type="text"
                placeholder="Search(ctrl+k)"
                className="bg-gray-100 outline-none border-none"
              />
            </div>
            <ul className="text-gray-500">
              <li className="hover:text-orange-300 cursor-pointer py-2">
                Launches
              </li>
              <li className="hover:text-orange-300 cursor-pointer py-2">
                Products
              </li>
              <li className="hover:text-orange-300 cursor-pointer py-2">News</li>
              <li className="hover:text-orange-300 cursor-pointer py-2">
                Community
              </li>
              <li className="hover:text-orange-300 cursor-pointer py-2">
                Advertise
              </li>
            </ul>
          </div>
        )}

        {/* Search Modal */}
        {isSearchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Search</h2>
                <button
                  className="text-gray-500"
                  onClick={() => setSearchModalOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex gap-2 items-center rounded-full bg-gray-100 p-2 px-3">
                <PiMagnifyingGlassThin />
                <input
                  type="text"
                  placeholder="Search(ctrl+k)"
                  className="bg-gray-100 outline-none border-none"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
