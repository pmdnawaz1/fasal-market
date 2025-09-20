import { useState } from 'react'

const GovtConnect = () => {
  const [locationEnabled, setLocationEnabled] = useState(true)

  const upcomingDrives = [
    {
      id: 1,
      crop: 'गेहूं',
      location: 'सरिया मंडी',
      date: 'कल, 23 सितंबर',
      time: '10:00 AM - 4:00 PM',
      price: '₹2,325/कुंतल',
      status: 'upcoming',
      distance: '2 km',
      authority: 'MP State Procurement'
    },
    {
      id: 2,
      crop: 'सोयाबीन',
      location: 'जिला मुख्यालय',
      date: '25 सितंबर',
      time: '9:00 AM - 5:00 PM',
      price: '₹4,892/कुंतल',
      status: 'registration-open',
      distance: '15 km',
      authority: 'Central Warehousing Corp'
    },
    {
      id: 3,
      crop: 'चना',
      location: 'कृषि उपज मंडी',
      date: '28 सितंबर',
      time: '8:00 AM - 3:00 PM',
      price: '₹7,500/कुंतल',
      status: 'coming-soon',
      distance: '8 km',
      authority: 'NAFED'
    }
  ]

  const pastPurchases = [
    {
      id: 1,
      crop: 'गेहूं',
      quantity: '75 कुंतल',
      amount: '₹1,74,375',
      date: '15 अप्रैल 2024',
      location: 'सरिया मंडी',
      tokenNumber: 'WHT240415-089'
    },
    {
      id: 2,
      crop: 'सोयाबीन',
      quantity: '50 कुंतल',
      amount: '₹2,35,000',
      date: '12 नवंबर 2023',
      location: 'जिला मुख्यालय',
      tokenNumber: 'SOY231112-156'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-orange-100 text-orange-800'
      case 'registration-open': return 'bg-green-100 text-green-800'
      case 'coming-soon': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'कल शुरू'
      case 'registration-open': return 'रजिस्ट्रेशन खुला'
      case 'coming-soon': return 'जल्द आएगा'
      default: return status
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Government Connect</h1>
        <p className="text-blue-100">Get notified about procurement drives in your area</p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Location Services</h3>
          <button
            onClick={() => setLocationEnabled(!locationEnabled)}
            className={`w-12 h-6 rounded-full transition-colors ${
              locationEnabled ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
              locationEnabled ? 'translate-x-6' : 'translate-x-1'
            } mt-0.5`} />
          </button>
        </div>
        <p className="text-sm text-gray-600">
          {locationEnabled
            ? '📍 Location enabled - You\'ll receive notifications for drives within 25km'
            : '⚠️ Enable location to get nearby procurement drive notifications'
          }
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Upcoming Drives</h3>
        </div>

        <div className="divide-y divide-gray-200">
          {upcomingDrives.map((drive) => (
            <div key={drive.id} className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{drive.crop} खरीद</h4>
                  <p className="text-gray-600">{drive.location} • {drive.distance}</p>
                  <p className="text-sm text-gray-500">{drive.authority}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(drive.status)}`}>
                  {getStatusText(drive.status)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-medium">{drive.date}</p>
                  <p className="text-sm text-gray-600">{drive.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">MSP Price</p>
                  <p className="font-semibold text-green-600 text-lg">{drive.price}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                {drive.status === 'upcoming' && (
                  <button className="flex-1 bg-orange-50 text-orange-700 py-2 rounded-lg font-medium hover:bg-orange-100">
                    Get Token Tomorrow
                  </button>
                )}
                {drive.status === 'registration-open' && (
                  <button className="flex-1 bg-green-50 text-green-700 py-2 rounded-lg font-medium hover:bg-green-100">
                    Register Now
                  </button>
                )}
                {drive.status === 'coming-soon' && (
                  <button className="flex-1 bg-blue-50 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-100">
                    Set Reminder
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Past Government Purchases</h3>
        </div>

        <div className="divide-y divide-gray-200">
          {pastPurchases.map((purchase) => (
            <div key={purchase.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{purchase.crop} - {purchase.quantity}</h4>
                  <p className="text-gray-600">{purchase.location}</p>
                  <p className="text-sm text-gray-500">Token: {purchase.tokenNumber}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{purchase.amount}</p>
                  <p className="text-sm text-gray-500">{purchase.date}</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">View Receipt</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Tips for Government Procurement</h3>
        <ul className="space-y-1 text-sm text-blue-700">
          <li>• Carry original documents (KCC, Aadhaar, Land records)</li>
          <li>• Ensure crops meet quality standards (moisture, purity)</li>
          <li>• Arrive early to avoid long queues</li>
          <li>• Keep gunny bags clean and properly stitched</li>
        </ul>
      </div>
    </div>
  )
}

export default GovtConnect