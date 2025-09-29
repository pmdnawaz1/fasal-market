import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import EnhancedMarketplace from './pages/EnhancedMarketplace'
import GovtConnect from './pages/GovtConnect'
import TokenSystem from './pages/TokenSystem'
import Profile from './pages/Profile'
import Login from './pages/Login'
import ColdStorage from './pages/ColdStorage'
import IndustryConnect from './pages/IndustryConnect'
import PriceTracker from './pages/PriceTracker'
import WeatherAdvisory from './pages/WeatherAdvisory'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="marketplace" element={<EnhancedMarketplace />} />
            <Route path="govt-connect" element={<GovtConnect />} />
            <Route path="token-system" element={<TokenSystem />} />
            <Route path="cold-storage" element={<ColdStorage />} />
            <Route path="industry-connect" element={<IndustryConnect />} />
            <Route path="price-tracker" element={<PriceTracker />} />
            <Route path="weather-advisory" element={<WeatherAdvisory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App