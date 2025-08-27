
import { FaArrowTrendDown ,FaArrowTrendUp } from "react-icons/fa6";
function Stats({ title, value, change, trend, bgColor }) {
  return (
    <div className={`${bgColor} p-3 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200`}>
      
        <p className="text-xs sm:text-sm font-medium text-gray-600">{title}</p>
        
      <div className='flex  justify-between items-center gap-2'>

      <div className="space-y-1">
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="flex items-center space-x-1 ">
          <span className="text-xs sm:text-sm font-semibold">{change}</span>

          {trend === 'up' ? (
            <FaArrowTrendUp className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <FaArrowTrendDown className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Stats