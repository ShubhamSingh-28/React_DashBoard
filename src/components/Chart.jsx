import React from 'react'
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', totalUsers: 15000, totalProjects: 12000, operatingStatus: 8000 },
  { name: 'Feb', totalUsers: 12000, totalProjects: 14000, operatingStatus: 10000 },
  { name: 'Mar', totalUsers: 10000, totalProjects: 16000, operatingStatus: 12000 },
  { name: 'Apr', totalUsers: 8000, totalProjects: 18000, operatingStatus: 14000 },
  { name: 'May', totalUsers: 11000, totalProjects: 20000, operatingStatus: 16000 },
  { name: 'Jun', totalUsers: 14000, totalProjects: 22000, operatingStatus: 18000 },
  { name: 'Jul', totalUsers: 16000, totalProjects: 19000, operatingStatus: 20000 }
];
export default function Chart() {
   const [activeTab, setActiveTab] = useState('totalUsers');
  const [activeYear, setActiveYear] = useState('thisYear');

  return (
    <div className="bg-[#F7F9FB] p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm max-h-100 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-6 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('totalUsers')}
            className={`whitespace-nowrap text-sm font-medium pb-2 transition-colors relative ${
              activeTab === 'totalUsers' 
                ? 'text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Total Users
            {activeTab === 'totalUsers' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('totalProjects')}
            className={`whitespace-nowrap text-sm font-medium pb-2 transition-colors relative ${
              activeTab === 'totalProjects' 
                ? 'text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Total Projects
            {activeTab === 'totalProjects' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('operatingStatus')}
            className={`whitespace-nowrap text-sm font-medium pb-2 transition-colors relative ${
              activeTab === 'operatingStatus' 
                ? 'text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Operating Status
            {activeTab === 'operatingStatus' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <button 
              onClick={() => setActiveYear('thisYear')}
              className={`text-sm font-medium transition-colors ${
                activeYear === 'thisYear' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              This year
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <button 
              onClick={() => setActiveYear('lastYear')}
              className={`text-sm font-medium transition-colors ${
                activeYear === 'lastYear' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Last year
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-64 sm:h-80 relative">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              tickFormatter={(value) => `${value/1000}K`}
              width={40}
              domain={[0, 30000]}
              ticks={[0, 10000, 20000, 30000]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#374151',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: 'white' }}
              formatter={(value) => [`${(value/1000).toFixed(0)}K`, '']}
            />
            <Line 
              type="monotone" 
              dataKey="totalProjects" 
              stroke="#D1D5DB" 
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
            />
            <Line 
              type="monotone" 
              dataKey="totalUsers" 
              stroke="#374151" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Tooltip indicator */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
          18,256,598
        </div>
      </div>
    </div>
  );
};
