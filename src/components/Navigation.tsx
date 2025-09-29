import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navigation = () => {
  const location = useLocation()
  const [showMore, setShowMore] = useState(false)

  const mainNavItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/marketplace', label: 'Market', icon: '🛒' },
    { path: '/govt-connect', label: 'Govt', icon: '🏛️' },
    { path: '/token-system', label: 'Tokens', icon: '🎫' }
  ]

  const moreNavItems = [
    { path: '/cold-storage', label: 'Storage', icon: '🏢' },
    { path: '/industry-connect', label: 'Industry', icon: '🏭' },
    { path: '/price-tracker', label: 'Prices', icon: '📊' },
    { path: '/weather-advisory', label: 'Weather', icon: '🌤️' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ]

  const isMoreItemActive = moreNavItems.some(item => item.path === location.pathname)

  return (
    <>
      {/* More Menu Overlay */}
      {showMore && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMore(false)}
        >
          <div className="fixed bottom-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 z-50">
            <div className="grid grid-cols-3 gap-4">
              {moreNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMore(false)}
                  className={`flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-green-600 bg-gradient-to-t from-green-100 to-green-50 shadow-sm border border-green-200'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <span className="text-xs font-medium text-center">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowMore(false)}
                className="w-full py-2 text-gray-500 text-sm"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-50 shadow-lg">
        <div className="flex justify-around max-w-md mx-auto">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-200 ${
                location.pathname === item.path
                  ? 'text-green-600 bg-gradient-to-t from-green-100 to-green-50 shadow-sm border border-green-200'
                  : 'text-gray-500 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}

          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-200 ${
              isMoreItemActive || showMore
                ? 'text-green-600 bg-gradient-to-t from-green-100 to-green-50 shadow-sm border border-green-200'
                : 'text-gray-500 hover:text-green-600 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg mb-1">⋯</span>
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navigation