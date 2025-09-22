import { useLanguage } from '../contexts/LanguageContext'

const Profile = () => {
  const { t } = useLanguage()
  const farmer = {
    name: 'राम कुमार',
    phone: '+91 98765 43210',
    village: 'सरिया',
    district: 'मध्य प्रदेश',
    farmSize: '5 एकड़',
    crops: [t('wheat'), t('soybean'), t('chickpea')],
    kccNumber: 'KCC123456789'
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">👨‍🌾</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{farmer.name}</h2>
            <p className="text-gray-600">{farmer.phone}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">{t('village')}</span>
            <span className="font-medium">{farmer.village}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">{t('district')}</span>
            <span className="font-medium">{farmer.district}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">{t('farm-size')}</span>
            <span className="font-medium">{farmer.farmSize}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">{t('kcc-number')}</span>
            <span className="font-medium">{farmer.kccNumber}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{t('crops-grown')}</h3>
        <div className="flex flex-wrap gap-2">
          {farmer.crops.map((crop, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {crop}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">{t('quick-actions')}</h3>
        <div className="space-y-3">
          <button className="w-full bg-green-50 text-green-700 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
            {t('edit-profile')}
          </button>
          <button className="w-full bg-blue-50 text-blue-700 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
            {t('verify-documents')}
          </button>
          <button className="w-full bg-orange-50 text-orange-700 py-3 rounded-lg font-medium hover:bg-orange-100 transition-colors">
            {t('contact-support')}
          </button>
          <button className="w-full bg-red-50 text-red-700 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors">
            {t('logout')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile