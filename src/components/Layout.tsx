import { Outlet } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import Navigation from './Navigation'

const Layout = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-xl">
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-green-600 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium flex items-center space-x-2"
            title={t('change-language')}
          >
            <span>🌐</span>
            <span>{language === 'hi' ? 'EN' : 'हिं'}</span>
          </button>
        </div>
        <main className="pb-20 min-h-screen">
          <Outlet />
        </main>
        <Navigation />
      </div>
    </div>
  )
}

export default Layout