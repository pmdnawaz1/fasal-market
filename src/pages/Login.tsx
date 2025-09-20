import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const sendOtp = async () => {
    if (phone.length === 10) {
      setLoading(true)
      setTimeout(() => {
        setOtpSent(true)
        setLoading(false)
      }, 1500)
    }
  }

  const verifyOtp = async () => {
    if (otp === '1234') {
      setLoading(true)
      setTimeout(() => {
        navigate('/')
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 160, 82, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)'}}>
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 transform rotate-1">
            <span className="text-2xl">🌾</span>
          </div>
          <h1 className="text-2xl font-bold text-green-700 mb-1">
            किसान सुविधा
          </h1>
          <p className="text-gray-500 text-sm">Farmer's Digital Helper</p>
        </div>

        {!otpSent ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📱 Mobile Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="Enter 10-digit mobile number"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                maxLength={10}
              />
            </div>
            <button
              onClick={sendOtp}
              disabled={phone.length !== 10 || loading}
              className="w-full bg-green-600 text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors border border-green-700"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending OTP...
                </div>
              ) : (
                'Send OTP'
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔐 Enter OTP sent to +91 {phone}
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="••••"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-center text-xl tracking-wider font-semibold"
                maxLength={4}
              />
            </div>
            <button
              onClick={verifyOtp}
              disabled={otp.length !== 4 || loading}
              className="w-full bg-green-600 text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors border border-green-700"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Verifying...
                </div>
              ) : (
                'Verify & Login'
              )}
            </button>
            <button
              onClick={() => {
                setOtpSent(false)
                setOtp('')
              }}
              className="w-full text-green-600 py-2 text-sm font-medium hover:bg-green-50 rounded-md transition-colors"
            >
              ← Change Number
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <p className="text-xs text-yellow-700">🔑 Demo OTP: 1234</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login