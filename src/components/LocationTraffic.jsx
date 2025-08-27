
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'United States', value: 38.6, color: '#60A5FA' },
  { name: 'Canada', value: 22.5, color: '#34D399' },
  { name: 'Mexico', value: 30.8, color: '#A78BFA' },
  { name: 'Other', value: 8.1, color: '#1F2937' }
];

export default function LocationTraffic() {
  return (
    <div className="bg-[#F7F9FB] p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Traffic by Location</h3>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-3/5 h-48 sm:h-52">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full sm:flex-1 space-y-2 sm:space-y-3 mt-4 sm:mt-0">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs sm:text-sm text-gray-600">{item.name}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
