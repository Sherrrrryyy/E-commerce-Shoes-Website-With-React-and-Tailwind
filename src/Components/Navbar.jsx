import React from 'react'

const Navbar = () => {
  return (
    <header className="text-black-600 body-font shadow-lg sticky top-0 bg-white z-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:underline cursor-pointer">MEN</a>
      <a className="mr-5 hover:underline cursor-pointer">WOMEN</a>
      <a className="mr-5 text-red-600 font-bold hover:underline cursor-pointer">SALE</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    
      <span className="ml-3 text-3xl">Snckers</span>
    </a>
    <div className="lg:w-2/5 gap-10 inline-flex lg:justify-end ml-5 lg:ml-0">
    <a className="mr-5 hover:underline cursor-pointer">RERUN</a>
     
    </div>
  </div>
</header>

  )
}

export default Navbar