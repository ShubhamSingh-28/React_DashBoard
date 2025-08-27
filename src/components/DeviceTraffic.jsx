
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const data = [
  { name: 'Linux', value: 18000000, color: '#6366F1' },     // Indigo
  { name: 'Mac', value: 22000000, color: '#86EFAC' },       // Light green
  { name: 'iOS', value: 20000000, color: '#111827' },       // Black
  { name: 'Windows', value: 25000000, color: '#93C5FD' },   // Light blue
  { name: 'Android', value: 8000000, color: '#9CA3AF' },    // Grayish blue
  { name: 'Other', value: 21000000, color: '#6EE7B7' }      // Teal green
];
function DeviceTraffic() {
  return (
     <div className="bg-[#F7F9FB] p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
        Traffic by Device
      </h3>
      <div className="w-full h-48 sm:h-64">
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap="40%">  {/* more gap */}
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              domain={[0, 30000000]}   // cap Y-axis at 30M
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `${value / 1000000}M`}
              width={40}
            />
            <Bar 
              dataKey="value" 
              radius={[6, 6, 0, 0]}
              barSize={32}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DeviceTraffic