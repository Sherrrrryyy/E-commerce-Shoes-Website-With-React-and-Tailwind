import React from 'react'
import HeroImage from '../assets/Images/HeroImage.png'

const HeroSection = () => {
    return (
        <>
            <div className='relative w-full bg-gray-50'>
                <div className="container mx-auto flex px-5 py-22 md:flex-row flex-col items-center">
                    {/* <div className='absolute left-28 top-20 -space-y-16' style={{ fontSize: '10rem', zIndex: '0', }}>
                        <h1 className='text-white hover:text-gray-300 transition-colors duration-300'>SALE</h1>
                        <h1 className='text-white hover:text-gray-300 transition-colors duration-300'>SALE</h1>
                        <h1 className='text-white hover:text-gray-300 transition-colors duration-300'>SALE</h1>
                        <h1 className='text-white hover:text-gray-300 transition-colors duration-300'>SALE</h1>
                    </div> */}

                    <div className="" style={{ zIndex: '1' }}>
                        <img
                            className="object-cover object-center rounded "
                            src={HeroImage}
                            height={'800px'}
                            width={'500px'}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            UP TO
                        </h6>
                        <h1 className='title-font text-9xl mb-4 font-medium text-gray-900'>
                            50% Off
                        </h1>
                        <h6 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>SELECT STYLES</h6>
                        <p>
                            STOCK UP ON BESTSELLERS WHILE <br /> THE PRICES ARE EXTRA NICE.
                        </p>
                        <div className="flex justify-center mt-16 gap-10">
                            <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500">
                                MEN'S SALE
                            </button>
                            <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500">
                                WOMEN'S SALE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection