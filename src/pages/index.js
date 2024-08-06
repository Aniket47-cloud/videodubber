import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./Components/NavBar";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  return (
    <main className="bg-white h-[100vh] w-[100vw] overflow-none">
      <NavBar />
      <div className="w-full h-full bg-white overflow-none">
        <div className="flex mx-auto p-5 lg:px-36 space-y-5 flex-col w-full lg:w-[80%]">
          <p className="flex items-center gap-1 text-sm md:text-base">
            <span className="text-gray-400 hover:text-blue-300 cursor-pointer">Home</span>
            <span>
              <IoIosArrowForward className="w-[13px] h-[13px]" />
            </span>
            <span className="text-gray-400 hover:text-blue-300 cursor-pointer">Product</span>
            <span>
              <IoIosArrowForward className="w-[13px] h-[13px]" />
            </span>
            <span className="cursor-pointer">VideoDubber-Fast Video Translator</span>
          </p>
          <Image
            src="/lip.avif"
            alt="Logo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
          <div>
            <div className="relative inline-block">
              <div className="inline-flex items-center  lg:gap-2">
                <p className="font-bold text-2xl md:text-4xl">
                  VideoDubber - Fast Video Translator
                </p>
                <IoIosArrowDown
                  onClick={() => setDropdownOpen1(!isDropdownOpen1)}
                  className="w-5 h-5 mt-2 cursor-pointer transition-transform duration-200"
                />
              </div>
              {isDropdownOpen1 && (
                <div className="absolute right-0 mt-2 p-3 w-48 bg-white border border-gray-300 shadow-lg z-10">
                  <button className="flex items-center justify-between w-full px-2 py-1 text-gray-700 bg-gray-100 hover:bg-gray-200">
                    <IoFlagOutline className="w-4 h-4" /> Flag
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center mt-5">
              <div className="text-base md:text-xl lg:text-3xl font-light">
                Translate videos in your own voice, globalize
                <br /> in a click!
              </div>
              <div className="flex mt-2 lg:mt-0 gap-3">
                <div className="relative inline-block text-left">
                  <button
                    onMouseOver={() => setDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-black text-base font-semibold gap-1 p-3 md:p-5 border hover:border-orange-500"
                  >
                    Visit <IoIosArrowDown className="w-5 h-5 transition-transform duration-200 " />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="https://videodubber.ai"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Website videodubber.ai
                        </a>
                        <a
                          href="https://videodubber.ai"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Learn More videodubber.ai
                        </a>
                        <a
                          href="https://videodubber.ai"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Learn More videodubber.ai
                        </a>
                        <a
                          href="https://videodubber.ai"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Learn More videodubber.ai
                        </a>
                        <a
                          href="https://videodubber.ai"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Learn More videodubber.ai
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <button className="flex items-center w-full sm:w-[80vw] lg:w-[190px] text-black text-base font-semibold gap-1 p-3 border-2 border-orange-500">
                  <div className="mx-auto flex gap-1 items-center">
                    <span>
                      <IoMdArrowDropup className="text-orange-500 w-[30px] h-[30px]" />
                    </span>
                    UPVOTED 116
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
