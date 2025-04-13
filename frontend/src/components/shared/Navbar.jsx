import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90vw] sm:w-[600px] md:w-[707px] lg:w-[907px] p-2 pl-6 font-primary bg-white flex flex-row justify-between items-center rounded-full shadow-lg z-50">
      {/* Logo */}
      <div id="nav-logo" className="w-[40px]">
        <img src="/image/ElevateU.png" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <ul className="flex flex-row justify-between gap-5 font-semibold">
          <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Home</li>
          <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Services</li>
          <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Contact Us</li>
          <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">About Us</li>
        </ul>
      </div>

      {/* Right Section (Buttons & Mobile Menu) */}
      <div className="flex flex-row">
        {/* SignUp & Login (Desktop) */}
        <div className="hidden sm:flex flex-row">
          <Button
            variant="secondary"
            className="w-[90px] flex flex-col items-start border-gray-600 hover:bg-[#a6b8fa] hover:text-white border-r-0 rounded-full cursor-pointer mr-[-20px]"
          >
            SignUp
          </Button>
          <Button
            variant="secondary"
            className="bg-[#3b66ff] hover:bg-[#9fb4ff] rounded-full text-white cursor-pointer ml-[-5px]"
          >
            Login
          </Button>
        </div>

        {/* Mobile Navigation (Popover) */}
        <div className="flex sm:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 cursor-pointer text-[#3b66ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-white p-4 rounded-lg shadow-md w-48">
              <ul className="flex flex-col gap-3 font-semibold">
                <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Home</li>
                <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Services</li>
                <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">Contact Us</li>
                <li className="hover:bg-[#ced9ff] p-2 rounded-3xl transition cursor-pointer">About Us</li>
              </ul>
              <div className="flex flex-row gap-2 mt-4">
                <Button
                  variant="secondary"
                  className="w-[90px] flex flex-col border-gray-600 hover:bg-[#a6b8fa] hover:text-white border-r-0 rounded-full cursor-pointer"
                >
                  SignUp
                </Button>
                <Button
                  variant="secondary"
                  className="w-[90px] bg-[#3b66ff] hover:bg-[#9fb4ff] rounded-full text-white cursor-pointer"
                >
                  Login
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
