import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-xl">
        <main className="pb-20 min-h-screen">
          <Outlet />
        </main>
        <Navigation />
      </div>
    </div>
  )
}

export default Layout