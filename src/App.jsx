// src/App.jsx
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import {Header} from './components/Header'
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Stats from "./components/Stats";
import { FaChevronDown } from "react-icons/fa";
import Chart from "./components/Chart";
import WebSiteTraffic from "./components/WebSiteTraffic";
import DeviceTraffic from "./components/DeviceTraffic";  
import LocationTraffic from "./components/LocationTraffic";

const statsData = [
    {
      title: "Views",
      value: "721K",
      change: "+11.02%",
      trend: "up",
      bgColor: "bg-[#E3F5FF]",
    },
    {
      title: "Visits",
      value: "367K",
      change: "-0.03%",
      trend: "down",
      bgColor: "bg-[#E5ECF6]",
      
    },
    {
      title: "New Users",
      value: "1,156",
      change: "+15.03%",
      trend: "up",
      bgColor: "bg-[#E3F5FF]",
      
    },
    {
      title: "Active Users",
      value: "239K",
      change: "+6.08%",
      trend: "up",
      bgColor: "bg-[#E5ECF6]",
    },
  ];

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <LeftSideBar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center  mb-4">
              <p className="ml-2 text-sm font-semibold">Today </p>
              <div className="mt-2 flex items-center space-x-1 text-gray-500 text-sm ">
                <FaChevronDown />
              </div>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {statsData.map((stat, index) => (
                <Stats
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  trend={stat.trend}
                  bgColor={stat.bgColor}
                />
              ))}
            </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 order-1 lg:order-1">
                <Chart />
              </div>
              <div className="order-1 lg:order-2">
                <WebSiteTraffic />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <DeviceTraffic />
              <LocationTraffic />
            </div>
          </div>
        </main>
      </div>
      <RightSideBar />
    </div>
  );
}
