import { useState } from 'react'

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
  buyerName: string
  cropName: string
}

const ChatModal = ({ isOpen, onClose, buyerName, cropName }: ChatModalProps) => {
  const [message, setMessage] = useState('')

  const messages = [
    { id: 1, sender: 'buyer', text: 'Hello! I am interested in your wheat. What is the quality?', time: '10:30 AM' },
    { id: 2, sender: 'farmer', text: 'Hello! The wheat is of excellent quality, freshly harvested last week.', time: '10:32 AM' },
    { id: 3, sender: 'buyer', text: 'Can you share more photos? Also, is the price negotiable?', time: '10:35 AM' },
    { id: 4, sender: 'farmer', text: 'Yes, I can share more photos. Price is slightly negotiable for bulk orders.', time: '10:37 AM' },
    { id: 5, sender: 'buyer', text: 'I need 50 quintals. What would be your best price?', time: '10:40 AM' }
  ]

  const sendMessage = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end">
      <div className="bg-white w-full max-w-sm mx-auto h-5/6 rounded-t-3xl flex flex-col shadow-2xl border-t border-gray-200">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">{buyerName}</h3>
              <p className="text-sm text-green-100">Interested in {cropName}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
              <span className="text-xl">📞</span>
            </button>
            <button
              onClick={onClose}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors text-xl"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'farmer' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                msg.sender === 'farmer'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-100'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-xs mt-2 ${
                  msg.sender === 'farmer' ? 'text-green-100' : 'text-gray-500'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-xl">📎</span>
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-xl">📷</span>
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="text-lg">➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatModal