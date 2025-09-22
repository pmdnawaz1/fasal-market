import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TokenSystem = () => {
  const { t } = useLanguage()
  const [selectedDrive, setSelectedDrive] = useState('')
  const [quantity, setQuantity] = useState('')
  const [showBooking, setShowBooking] = useState(false)

  const availableSlots = [
    { time: '10:00 AM - 11:00 AM', available: 25, total: 50 },
    { time: '11:00 AM - 12:00 PM', available: 8, total: 50 },
    { time: '12:00 PM - 1:00 PM', available: 0, total: 50 },
    { time: '2:00 PM - 3:00 PM', available: 32, total: 50 },
    { time: '3:00 PM - 4:00 PM', available: 41, total: 50 }
  ]

  const myTokens = [
    {
      id: 1,
      tokenNumber: 'WHT240923-156',
      crop: t('wheat'),
      quantity: `75 ${t('quintal')}`,
      timeSlot: '11:00 AM - 12:00 PM',
      date: 'कल, 23 सितंबर',
      location: t('sariya-mandi'),
      status: 'confirmed',
      qrCode: true
    },
    {
      id: 2,
      tokenNumber: 'SOY240925-089',
      crop: t('soybean'),
      quantity: `50 ${t('quintal')}`,
      timeSlot: '2:00 PM - 3:00 PM',
      date: '25 सितंबर',
      location: t('district-headquarters'),
      status: 'pending',
      qrCode: false
    }
  ]

  const availableDrives = [
    { id: 1, name: `${t('wheat')} ${t('government-procurement')} - ${t('sariya-mandi')} (${t('tomorrow')})`, value: 'wheat-sariya' },
    { id: 2, name: `${t('soybean')} ${t('government-procurement')} - ${t('district-headquarters')}`, value: 'soybean-district' }
  ]

  const bookToken = () => {
    setShowBooking(false)
    setSelectedDrive('')
    setQuantity('')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-orange-100 text-orange-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return t('confirmed')
      case 'pending': return t('pending')
      case 'completed': return t('completed')
      default: return status
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{t('tokens')}</h1>
        <p className="text-purple-100">Book your time slot for government procurement</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{t('my-tokens')}</h2>
        <button
          onClick={() => setShowBooking(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700"
        >
          + {t('book-token')}
        </button>
      </div>

      {showBooking && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-200">
          <h3 className="text-lg font-semibold mb-4">{t('book-new-token')}</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('select-procurement-drive')}</label>
              <select
                value={selectedDrive}
                onChange={(e) => setSelectedDrive(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="">{t('choose-drive')}</option>
                {availableDrives.map((drive) => (
                  <option key={drive.id} value={drive.value}>{drive.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('quantity-quintals')}</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity to sell"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {selectedDrive && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{t('select-time-slot')}</label>
                <div className="grid grid-cols-1 gap-2">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      disabled={slot.available === 0}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        slot.available === 0
                          ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                          : slot.available < 15
                          ? 'border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-800'
                          : 'border-green-200 bg-green-50 hover:bg-green-100 text-green-800'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{slot.time}</span>
                        <span className="text-sm">
                          {slot.available === 0 ? t('slot-full') : `${slot.available} ${t('slots-available')}`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowBooking(false)}
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={bookToken}
                disabled={!selectedDrive || !quantity}
                className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-300"
              >
                {t('book-token')}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {myTokens.map((token) => (
          <div key={token.id} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{token.crop} {t('sale')}</h3>
                <p className="text-gray-600">{token.location}</p>
                <p className="text-sm text-gray-500">{t('token-number')}: {token.tokenNumber}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(token.status)}`}>
                {getStatusText(token.status)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Date & Time</p>
                <p className="font-medium">{token.date}</p>
                <p className="text-sm text-gray-600">{token.timeSlot}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Quantity</p>
                <p className="font-semibold text-purple-600">{token.quantity}</p>
              </div>
            </div>

            {token.status === 'confirmed' && (
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-purple-800">{t('ready-to-sell')}</p>
                    <p className="text-sm text-purple-600">Show this QR code at the center</p>
                  </div>
                  <div className="w-16 h-16 bg-white border-2 border-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-2">
              {token.qrCode && (
                <button className="flex-1 bg-purple-50 text-purple-700 py-2 rounded-lg font-medium hover:bg-purple-100">
                  {t('show-qr-code')}
                </button>
              )}
              <button className="flex-1 bg-gray-50 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100">
                {t('view-details')}
              </button>
              {token.status === 'pending' && (
                <button className="flex-1 bg-red-50 text-red-700 py-2 rounded-lg font-medium hover:bg-red-100">
                  {t('cancel-token')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-4">
        <h3 className="font-semibold text-purple-800 mb-2">🎫 How Token System Works</h3>
        <ul className="space-y-1 text-sm text-purple-700">
          <li>• Book your time slot 1-2 days in advance</li>
          <li>• Arrive 15 minutes before your slot time</li>
          <li>• Show QR code at the procurement center</li>
          <li>• Skip the queue and sell directly</li>
          <li>• Get instant payment confirmation</li>
        </ul>
      </div>
    </div>
  )
}

export default TokenSystem