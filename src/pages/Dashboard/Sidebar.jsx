import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import AuthButton from "../../components/buttons/AuthButton";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isSideMenuOpen, closeSideMenu }) => {
  const [isPagesMenuOpen, setPagesMenuOpen] = useState(false);
  const sideMenuRef = useRef();
  const location = useLocation();

  const togglePagesMenu = () => setPagesMenuOpen(!isPagesMenuOpen);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && closeSideMenu();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeSideMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isClickInside =
        sideMenuRef.current && sideMenuRef.current.contains(e.target);
      const isClickOnHamburger = e.target.closest("#hamburger-btn");

      if (!isClickInside && !isClickOnHamburger) {
        closeSideMenu();
      }
    };

    if (isSideMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSideMenuOpen, closeSideMenu]);

  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 bg-gray-800">
        <SidebarContent
          togglePagesMenu={togglePagesMenu}
          isPagesMenuOpen={isPagesMenuOpen}
          closeSideMenu={closeSideMenu}
          currentPath={location.pathname}
        />
      </aside>

      {isSideMenuOpen && <div className="fixed inset-0 z-10 bg-opacity-50" />}

      {isSideMenuOpen && (
        <aside
          ref={sideMenuRef}
          className="fixed inset-y-0 z-20 flex-shrink-0 w-90 mt-16 overflow-y-auto md:hidden bg-gray-800"
        >
          <SidebarContent
            togglePagesMenu={togglePagesMenu}
            isPagesMenuOpen={isPagesMenuOpen}
            closeSideMenu={closeSideMenu}
            currentPath={location.pathname}
          />
        </aside>
      )}
    </>
  );
};

const SidebarContent = ({ closeSideMenu, currentPath }) => (
  <div className="py-4 text-gray-500 dark:text-gray-400">
    <a
      href="#"
      className=" text-white flex items-center gap-2 px-4 py-2 text-lg font-semibold transition-colors duration-300 rounded-md border-0 outline-0 focus:outline-none focus:border-0"
    >
      <FaGraduationCap className="text-4xl" />
      <span className="text-3xl"> Colige</span>
    </a>
    <ul className="mt-6">
      <SidebarItem
        icon={<HiOutlineHome />}
        label="Dashboard"
        to="/layout/status"
        currentPath={currentPath}
        closeSideMenu={closeSideMenu}
      />
    </ul>
    <ul>
      <SidebarItem
        icon={<HiOutlineUserGroup />}
        label="Quizees"
        to="/layout/quizzes"
        currentPath={currentPath}
        closeSideMenu={closeSideMenu}
      />
      <SidebarItem
        icon={<HiOutlineUserCircle />}
        label="Announcements"
        to="/layout/annoncements"
        currentPath={currentPath}
        closeSideMenu={closeSideMenu}
      />
    </ul>
    <div className="absolute bottom-5 left-5">
      <AuthButton />
    </div>
  </div>
);
const SidebarItem = ({ icon, label, to, currentPath, closeSideMenu }) => {
  const isActive = currentPath === to;

  return (
    <li className="relative px-6 py-3">
      {isActive && (
        <span className="absolute inset-y-0 left-0 w-1  rounded-tr-lg rounded-br-lg bg-gray-400" />
      )}
      <Link
        to={to}
        onClick={closeSideMenu}
        className={`inline-flex items-center w-full text-md font-semibold transition-colors duration-150 text-gray-200 ${
          isActive ? "text-gray-800 dark:text-gray-100" : ""
        }`}
      >
        <span className="w-5 h-5">{icon}</span>
        <span className="ml-4">{label}</span>
      </Link>
    </li>
  );
};
export default Sidebar;
