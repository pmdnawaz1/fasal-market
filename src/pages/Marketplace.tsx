import { useState } from 'react'
import ChatModal from '../components/ChatModal'

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('listings')
  const [showAddListing, setShowAddListing] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState('')
  const [showChatModal, setShowChatModal] = useState(false)
  const [chatData, setChatData] = useState({ buyerName: '', cropName: '' })

  const myListings = [
    { id: 1, crop: 'गेहूं', quantity: '100 कुंतल', price: '₹2,200/कुंतल', status: 'Active', inquiries: 5, image: '🌾' },
    { id: 2, crop: 'सोयाबीन', quantity: '75 कुंतल', price: '₹4,500/कुंतल', status: 'Sold', inquiries: 0, image: '🫘' },
    { id: 3, crop: 'चना', quantity: '50 कुंतल', price: '₹6,800/कुंतल', status: 'Active', inquiries: 3, image: '🫛' }
  ]

  const nearbyListings = [
    { id: 4, crop: 'प्याज', farmer: 'श्याम सिंह', location: '5 km away', quantity: '200 कुंतल', price: '₹1,800/कुंतल', image: '🧅' },
    { id: 5, crop: 'आलू', farmer: 'गीता देवी', location: '8 km away', quantity: '150 कुंतल', price: '₹1,200/कुंतल', image: '🥔' },
    { id: 6, crop: 'टमाटर', farmer: 'विनोद कुमार', location: '12 km away', quantity: '80 कुंतल', price: '₹3,000/कुंतल', image: '🍅' }
  ]

  const openChat = (buyerName: string, cropName: string) => {
    setChatData({ buyerName, cropName })
    setShowChatModal(true)
  }

  const AddListingForm = () => (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">🌾 Add New Crop Listing</h3>
        <button
          onClick={() => setShowAddListing(false)}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">🌱 Crop Type</label>
        <select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all"
        >
          <option value="">Select Crop</option>
          <option value="wheat">🌾 गेहूं (Wheat)</option>
          <option value="soybean">🫘 सोयाबीन (Soybean)</option>
          <option value="chickpea">🫛 चना (Chickpea)</option>
          <option value="corn">🌽 मक्का (Corn)</option>
          <option value="rice">🌾 धान (Rice)</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">⚖️ Quantity (कुंतल)</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">💰 Price per कुंतल</label>
          <input
            type="number"
            placeholder="₹ Price"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">📸 Crop Photos</label>
        <div className="border-2 border-dashed border-green-300 rounded-2xl p-8 text-center hover:border-green-400 transition-colors cursor-pointer bg-green-50">
          <div className="text-5xl mb-3">📷</div>
          <p className="text-gray-700 font-medium">Tap to add photos</p>
          <p className="text-sm text-gray-500 mt-1">Add up to 5 photos of your crop</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">📝 Description (Optional)</label>
        <textarea
          placeholder="Quality details, harvest date, etc."
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all h-24 resize-none"
        />
      </div>

      <div className="flex space-x-3 pt-2">
        <button
          onClick={() => setShowAddListing(false)}
          className="flex-1 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
        <button
          className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
        >
          📤 Post Listing
        </button>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-600 p-4 text-white border-b-2 border-green-700">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">🛒 Marketplace</h1>
            <p className="text-green-100 text-sm">Connect with buyers & sellers</p>
          </div>
          <button
            onClick={() => setShowAddListing(true)}
            className="bg-green-700 text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 transition-colors border border-green-800"
          >
            + Add Listing
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {showAddListing && <AddListingForm />}

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('listings')}
              className={`flex-1 py-4 px-4 font-semibold transition-all ${
                activeTab === 'listings'
                  ? 'text-green-600 bg-green-50 border-b-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              📦 My Listings ({myListings.length})
            </button>
            <button
              onClick={() => setActiveTab('nearby')}
              className={`flex-1 py-4 px-4 font-semibold transition-all ${
                activeTab === 'nearby'
                  ? 'text-green-600 bg-green-50 border-b-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              📍 Nearby Crops
            </button>
          </div>

          <div className="p-4">
            {activeTab === 'listings' ? (
              <div className="space-y-4">
                {myListings.map((listing) => (
                  <div key={listing.id} className="border-2 border-gray-100 rounded-2xl p-5 hover:border-green-200 transition-all bg-gradient-to-r from-white to-green-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <span className="text-3xl">{listing.image}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-800">{listing.crop}</h3>
                          <p className="text-gray-600 font-medium">{listing.quantity}</p>
                          <p className="text-green-600 font-bold text-lg">{listing.price}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-2 rounded-xl text-sm font-bold ${
                        listing.status === 'Active'
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        {listing.status}
                      </span>
                    </div>

                    {listing.status === 'Active' && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">💬</span>
                            <span className="text-sm font-medium text-gray-600">{listing.inquiries} inquiries</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => openChat('Interested Buyer', listing.crop)}
                            className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-sm"
                          >
                            💬 Messages
                          </button>
                          <button className="flex-1 bg-green-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-sm">
                            ✏️ Edit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {nearbyListings.map((listing) => (
                  <div key={listing.id} className="border-2 border-gray-100 rounded-2xl p-5 hover:border-blue-200 transition-all bg-gradient-to-r from-white to-blue-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                          <span className="text-3xl">{listing.image}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-800">{listing.crop}</h3>
                          <p className="text-gray-600 font-medium">{listing.quantity}</p>
                          <p className="text-green-600 font-bold text-lg">{listing.price}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            👨‍🌾 {listing.farmer} • 📍 {listing.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => openChat(listing.farmer, listing.crop)}
                          className="flex-1 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-sm"
                        >
                          📞 Contact Farmer
                        </button>
                        <button className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-sm">
                          👁️ View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ChatModal
        isOpen={showChatModal}
        onClose={() => setShowChatModal(false)}
        buyerName={chatData.buyerName}
        cropName={chatData.cropName}
      />
    </div>
  )
}

export default Marketplace