import React from "react";
import { AiOutlineForm, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRunning } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white  sidebar">
      <div className=" flex flex-col justify-between flex-grow">
        <ul className="flex flex-col space-y-1">
          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
                  <MdOutlineDashboard size={30}/> 

              <span className="ml-2 tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>
          {/* ... Other list items ... */}
          <li>
            <Link
              to="/userdetail"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
                    <AiOutlineUsergroupAdd size={30}/>

              <span className="ml-2  tracking-wide truncate">User</span>
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
                  <FaRunning size={30} />

              <span className="ml-2  tracking-wide truncate">
                Career
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/enquire"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <AiOutlineForm size={30}/>
              <span className="ml-2 tracking-wide truncate">
                Demo
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <TbDeviceLandlinePhone size={30} />

              <span className="ml-2  tracking-wide truncate">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
