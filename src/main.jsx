import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Cards from './Components/Cards.jsx'
import MoreToShop from './Components/MoreToShop.jsx'
import Dibs from './Components/Dibs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <Cards />
    <MoreToShop />
    <Dibs />

  </StrictMode>,
)
