
const websites = [
    { name: 'Google', progress: 85 },
    { name: 'YouTube', progress: 70 },
    { name: 'Instagram', progress: 80 },
    { name: 'Pinterest', progress: 45 },
    { name: 'Facebook', progress: 40 },
    { name: 'Twitter', progress: 35 },
    { name: 'Tumblr', progress: 25 }
  ];
export default function WebSiteTraffic() {
  return (
    <div className="bg-[#F7F9FB] p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm h-[400px]">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Traffic by Website</h3>
      <div className="space-y-3 sm:space-y-4">
        {websites.map((site, key) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-600 w-16 sm:w-20 flex-shrink-0">{site.name}</span>
            <div className="flex-1 mx-2 sm:mx-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${site.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
