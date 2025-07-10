import React, { useState } from "react";

const Header = ({ onToggleSidebar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="z-10 py-5 bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-white">
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={onToggleSidebar}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex justify-between items-center  w-full">
          <div className="relative  max-w-xl mr-6">
            <span className=" text-sm md:text-2xl text-white flex items-center gap-2  font-semibold transition-colors duration-300 rounded-md border-0 outline-0 focus:outline-none focus:border-0">
              {" "}
              Wellcome Ebrahim
            </span>
          </div>
          <div className="relative max-w-xl mr-6 hidden md:block">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="w-2xs pl-8 pr-2 py-3 text-sm text-white placeholder-gray-400 border-0 rounded-md bg-gray-600 focus:outline-none  form-input"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>

        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={() => setNotificationsOpen(!isNotificationsOpen)}
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full transform translate-x-1 -translate-y-1 "></span>
            </button>
            {isNotificationsOpen && (
              <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md ">
                <li className="flex justify-between items-center px-2 py-1 text-sm font-semibold rounded-md hover:bg-gray-100 ">
                  <span>Messages</span>
                </li>
                <li className="flex justify-between items-center px-2 py-1 text-sm font-semibold rounded-md hover:bg-gray-100">
                  <span>Sales</span>
                  <span className="px-2 py-1 text-xs font-bold text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                    2
                  </span>
                </li>
                <li className="flex justify-between items-center px-2 py-1 text-sm font-semibold rounded-md hover:bg-gray-100">
                  <span>Alerts</span>
                </li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              className="align-middle rounded-full  p-1 focus:outline-none"
              aria-label="Account"
            >
              <img
                className="object-cover w-6 h-6"
                src="/src/assets/images/user.png"
                alt="Profile"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
