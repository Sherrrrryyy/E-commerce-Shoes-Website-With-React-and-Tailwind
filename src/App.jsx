import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards'
import MoreToShop from './Components/MoreToShop'
import Dibs from './Components/Dibs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rerun from './Pages/Rerun'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Cards />
      <MoreToShop />
      <Dibs />

        <Routes>
          <Route path='/rerun' element={<Rerun />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
