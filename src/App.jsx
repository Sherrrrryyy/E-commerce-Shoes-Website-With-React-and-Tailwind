import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards'
import MoreToShop from './Components/MoreToShop'
import Dibs from './Components/Dibs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rerun from './Pages/Rerun'
import SignUp from './AuthPages/SignUp'
import Login from './AuthPages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <HeroSection />
            <Cards />
            <MoreToShop />
            <Dibs />
          </>
        } />
        <Route path='/rerun' element={<Rerun />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
