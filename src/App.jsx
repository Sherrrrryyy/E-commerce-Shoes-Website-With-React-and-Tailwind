import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards'
import MoreToShop from './Components/MoreToShop'
import Dibs from './Components/Dibs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <MoreToShop />
      <Dibs />

     

    </>
  )
}

export default App
