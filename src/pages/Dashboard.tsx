import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const { t } = useLanguage()

  const stats = {
    totalEarnings: '₹45,230',
    totalSales: 12,
    pendingOrders: 3,
    govtTokens: 2
  }

  const recentSales = [
    { id: 1, crop: t('wheat'), quantity: `50 ${t('quintal')}`, amount: '₹15,000', buyer: t('private-buyer'), date: `2 ${t('days-ago')}`, icon: '🌾' },
    { id: 2, crop: t('soybean'), quantity: `30 ${t('quintal')}`, amount: '₹12,000', buyer: t('government-purchase'), date: `5 ${t('days-ago')}`, icon: '🫘' },
    { id: 3, crop: t('chickpea'), quantity: `25 ${t('quintal')}`, amount: '₹18,230', buyer: t('private-buyer'), date: `1 ${t('week-ago')}`, icon: '🫛' }
  ]

  const notifications = [
    { id: 1, title: t('govt-wheat-purchase'), message: t('starts-tomorrow-village'), type: 'govt', time: `2 ${t('hours-ago')}`, unread: true },
    { id: 2, title: t('new-buyer-interested'), message: t('wants-to-buy-soybean'), type: 'buyer', time: `5 ${t('hours-ago')}`, unread: true },
    { id: 3, title: t('price-alert'), message: t('wheat-price-increased'), type: 'price', time: `1 ${t('days-ago')}`, unread: false }
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 p-4 text-white border-b-2 border-green-700">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-1">{t('namaste-ram-kumar')}</h1>
            <p className="text-green-100 text-sm">{t('welcome-farming-dashboard')}</p>
          </div>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative bg-green-700 p-2 rounded-md border border-green-800"
          >
            <span className="text-xl">🔔</span>
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">💰</span>
              <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">+15%</span>
            </div>
            <h3 className="text-xs text-gray-500 mb-1">{t('total-earnings')}</h3>
            <p className="text-lg font-bold text-gray-800">{stats.totalEarnings}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">📊</span>
              <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">+3</span>
            </div>
            <h3 className="text-xs text-gray-500 mb-1">{t('total-sales')}</h3>
            <p className="text-lg font-bold text-gray-800">{stats.totalSales}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">⏳</span>
              <span className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded">{t('active')}</span>
            </div>
            <h3 className="text-xs text-gray-500 mb-1">{t('pending-orders')}</h3>
            <p className="text-lg font-bold text-gray-800">{stats.pendingOrders}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">🎫</span>
              <span className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded">{t('ready')}</span>
            </div>
            <h3 className="text-xs text-gray-500 mb-1">{t('govt-tokens')}</h3>
            <p className="text-lg font-bold text-gray-800">{stats.govtTokens}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/marketplace" className="bg-white border-2 border-green-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-2">🛒</div>
              <h3 className="font-semibold text-gray-800 mb-1">{t('marketplace')}</h3>
              <p className="text-xs text-gray-600">{t('sell-to-private-buyers')}</p>
            </div>
          </Link>
          <Link to="/govt-connect" className="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="font-semibold text-gray-800 mb-1">{t('government')}</h3>
              <p className="text-xs text-gray-600">{t('government-procurement')}</p>
            </div>
          </Link>
        </div>

        {/* Recent Sales */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">{t('recent-sales')}</h3>
            <button className="text-green-600 text-sm font-medium">{t('view-all')}</button>
          </div>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{sale.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{sale.crop} - {sale.quantity}</p>
                    <p className="text-xs text-gray-500">{sale.buyer} • {sale.date}</p>
                  </div>
                </div>
                <span className="font-bold text-green-600">{sale.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Panel */}
        {showNotifications && (
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">{t('notifications')}</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className={`flex items-start space-x-3 p-3 rounded-xl ${
                  notification.unread ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'
                }`}>
                  <div className="flex-shrink-0 mt-1">
                    {notification.type === 'govt' && <span className="text-xl">🏛️</span>}
                    {notification.type === 'buyer' && <span className="text-xl">👤</span>}
                    {notification.type === 'price' && <span className="text-xl">💰</span>}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800">{notification.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard