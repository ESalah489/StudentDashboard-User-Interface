import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import AuthButton from "../buttons/AuthButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const afterClicked = () => setIsOpen(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-800 _Navbar`}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-3 ">
          <a
            href="#"
            className=" text-white flex items-center gap-2 px-4 py-2 text-lg font-semibold transition-colors duration-300 rounded-md border-0 outline-0 focus:outline-none focus:border-0"
          >
            <FaGraduationCap className="text-5xl" />
            <span className="text-3xl"> Bla Bla</span>
          </a>

          <div className="flex items-center lg:order-2 ">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className=" inline-flex items-center p-2 ml-2 text-sm text-white rounded-lg lg:hidden focus:outline-none  focus:ring-gray-200 border-0"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-2 rounded-2xl mt-2 `}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 _Links">
              <li onClick={afterClicked}>
                <AuthButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
