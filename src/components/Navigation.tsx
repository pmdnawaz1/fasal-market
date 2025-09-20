import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'होम', icon: '🏠' },
    { path: '/marketplace', label: 'बाज़ार', icon: '🛒' },
    { path: '/govt-connect', label: 'सरकार', icon: '🏛️' },
    { path: '/token-system', label: 'टोकन', icon: '🎫' },
    { path: '/profile', label: 'प्रोफाइल', icon: '👤' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-2 z-50 shadow-lg">
      <div className="flex justify-around max-w-sm mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center px-2 py-2 rounded-xl transition-all duration-200 transform hover:scale-105 ${
              location.pathname === item.path
                ? 'text-green-600 bg-gradient-to-t from-green-100 to-green-50 shadow-sm border border-green-200'
                : 'text-gray-500 hover:text-green-600 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation