import { PiSidebar } from "react-icons/pi";
import { CiSearch  } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-1 border-gray-300 px-4 sm:px-6 py-3">
          <div className="flex items-center space-x-3 text-sm font-semibold text-gray-300 mb-2 sm:mb-0">
            <PiSidebar className="w-5 h-5 font-bold text-black" />
            <FaRegStar className="w-5 h-5 font-extrabold text-black " />
            <span className="hidden sm:inline">Dashboards</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-gray-600 font-medium">Default</span>
          </div>
          <div className="flex items-center space-x-3 font-semibold w-full sm:w-auto">
            <div className="relative text-gray-400 w-full sm:w-auto">
              <CiSearch className="absolute left-2 top-1 w-5 h-5 " />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 py-1 w-full sm:w-36 border-none bg-gray-100 rounded-lg text-sm focus:outline-none"
              />
            </div>
            <FiSun className="w-5 h-5 " />
            <RxCountdownTimer className="w-5 h-5 " />
            <IoIosNotificationsOutline className="w-5 h-5 " />
            <PiSidebar className="w-5 h-5 " />
          </div>
        </header>
  )
}
