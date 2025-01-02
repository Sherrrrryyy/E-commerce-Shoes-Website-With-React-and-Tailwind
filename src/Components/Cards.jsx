import React from 'react'
import Image1 from '../assets/Images/Card1.jpg'
import Image2 from '../assets/Images/Card2.jpg'


const Cards = () => {
    return (
        <>
            <div className="container px-5 py-24 mx-auto flex gap-5">
                <div className="transform transition-transform duration-500 hover:scale-105 lg:w-1/3 w-full mb-10 lg:mb-0 overflow-hidden shadow-inner">
                    <img
                        alt="feature"
                        className="object-cover object-center h-full w-full"
                        src={Image1}
                    />
                    <div className="absolute bottom-0 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP MEN
                        </button>
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP WOMEN
                        </button>
                    </div>
                </div>
                <div className="transform transition-transform duration-500 hover:scale-105 lg:w-1/3 w-full mb-10 lg:mb-0 overflow-hidden shadow-inner">
                    <video
                    preload='auto'
                    autoPlay
                    loop
                    playsInline
                    webkit-playsinline
                    x5-playsinline
                    src='//cdn.allbirds.com/video/upload/f_auto,q_auto/cms/6JzgSRWxQcOKC2NjmFgj7k/a8ea972dad08fcb00d8a58804ea1ac55/24Q3_MizzleRelaunch_WorldOfDry_WoolRunnerMizzle_Homepage_Tri-Panel_Module_Desktop_Mobile_1200x1500.mp4'></video>
      <div className="absolute bottom-0 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP MEN
                        </button>
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP WOMEN
                        </button>
                    </div>
                </div>
                <div className="transform transition-transform duration-500 hover:scale-105 lg:w-1/3 w-full mb-10 lg:mb-0 overflow-hidden shadow-inner">
                    <img
                        alt="feature"
                        className="object-cover object-center h-full w-full"
                        src={Image2}
                    />
                    <div className="absolute bottom-0 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP MEN
                        </button>
                        <button className="inline-flex text-black shadow-lg bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg transition-colors duration-500 mx-2">
                            SHOP WOMEN
                        </button>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Cards