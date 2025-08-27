import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiChartPieSliceFill,PiShoppingBagOpen,PiNotebookDuotone,PiChatsCircle  } from "react-icons/pi";
import { RiFolder6Line } from "react-icons/ri";
import { LuBookOpen } from "react-icons/lu";
import { MdOutlineAccountBox } from "react-icons/md";
import { GrGroup } from "react-icons/gr";

export default function LeftSideBar() {
  return (
    // hide the full sidebar on small screens, show from md and up
    <aside className="hidden md:flex md:w-48 border-r-1 border-gray-300 p-4 flex-col text-sm">
      
      <div className="flex items-center gap-1">
        <IoPersonCircleSharp className="w-6 h-6 mb-3" />
      <h1 className=" text-sm font-semibold pb-4">ByeWind</h1>
      </div>

    <div className="font-semibold space-y-1">
        <div className="font-semibold space-x-8 text-gray-300">
          <span>Favorites</span>
          <span>Recently</span>
        </div>

      <ul className="space-y-1 mb-4">
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="text-gray-500 font-extrabold text-lg mr-2">•</span>
            Overview
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="text-gray-500 font-extrabold text-lg mr-2">•</span>
            Projects
        </li>
      </ul>
    </div>


      <div className="font-semibold space-y-1">
        <div className="font-semibold space-x-8 text-gray-300">
          <span>Dashboards</span>
        </div>

      <ul className="space-y-1 mb-4">
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className=" font-extrabold text-lg mr-2"><PiChartPieSliceFill /></span>
            Default
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className=" font-extrabold text-lg mr-2"><PiShoppingBagOpen /></span>
            eCommerce
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className=" font-extrabold text-lg mr-2"><RiFolder6Line /></span>
            Projects
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className=" font-extrabold text-lg mr-2"><LuBookOpen /></span>
            Online Courses
        </li>
      </ul>
    </div>

      <div className="font-semibold space-y-1">
        <div className="font-semibold space-x-8 text-gray-300">
          <span>Pages</span>
        </div>

      <ul className="space-y-1 mb-4">
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className=" font-extrabold text-lg mr-2"><MdOutlineAccountBox /></span>
            User Profile
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-10 py-1 cursor-pointer flex items-center">
            Overview
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-10 py-1 cursor-pointer flex items-center">
          Projects
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-10 py-1 cursor-pointer flex items-center">
    
            Campaigns
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-10 py-1 cursor-pointer flex items-center">
          
            Documents
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-10 py-1 cursor-pointer flex items-center">
          
            Followers
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="font-extrabold text-lg mr-2"><MdOutlineAccountBox/></span>
            Account
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="font-extrabold text-lg mr-2"><GrGroup/></span>
            Corporate
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="font-extrabold text-lg mr-2"><PiNotebookDuotone/></span>
            Blog
        </li>
        <li className="hover:bg-gray-100 rounded-lg px-3 py-1 cursor-pointer flex items-center">
          <span className="font-extrabold text-lg mr-2"><PiChatsCircle/></span>
            Social
        </li>
      </ul>
    </div>

  </aside>
  )
}
