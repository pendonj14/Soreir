import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MenuPage } from './pages/MenuPage'
import { Navbar } from './components/NavBar'
import { AboutPage } from './pages/AboutPage'
import { ReservationPage } from './pages/ReservationPage'


function App() {

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[url('/marble.jpg')] bg-cover bg-center bg-fixed">
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content above overlay */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
