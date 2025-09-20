import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import GovtConnect from './pages/GovtConnect'
import TokenSystem from './pages/TokenSystem'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="govt-connect" element={<GovtConnect />} />
          <Route path="token-system" element={<TokenSystem />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App