import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Rerun from '../Collection/Rerun'

const Navbar = () => {

const navigate = useNavigate()

const handleUser = ()=>{
  navigate('/signup')
}

  return (
    <header className="text-black-600 shadow-lg -mt-5 sticky top-0 bg-white z-10">
  <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 md:mb-0 sm:mb-4 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:underline cursor-pointer">MEN</a>
      <a className="mr-5 hover:underline cursor-pointer">WOMEN</a>
      <a className="mr-5 text-red-600 font-bold hover:underline cursor-pointer">SALE</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    
      <Link to='/' className="ml-3 text-3xl">Snckers</Link>
    </a>
    <div className="lg:w-2/5 gap-10 inline-flex lg:justify-end ml-5 lg:ml-0">
    <Link to={'./Rerun'} className="mr-5 hover:underline cursor-pointer">RERUN</Link>
    <FontAwesomeIcon onClick={handleUser} className='cursor-pointer text-2xl' icon={faUser} />
    <FontAwesomeIcon className='cursor-pointer text-2xl' icon={faMagnifyingGlass} />
    <FontAwesomeIcon className='cursor-pointer text-2xl' icon={faCartShopping} />

     
    </div>
  </div>
</header>

  )
}

export default Navbar