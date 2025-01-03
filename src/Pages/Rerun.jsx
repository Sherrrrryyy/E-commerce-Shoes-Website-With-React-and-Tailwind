import React from 'react'
import Navbar from '../Components/Navbar'

const Rerun = () => {
    return (
        <>
            <Navbar />
            <div className='flex '>
                <img
                    className='mr-10'
                    style={{ width: "700px" }} src={"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1200/cms/6qdYyIqg2U8ZQHKb6Oqyq4/af5847017a1b1644314547278c58327e/24Q2_EarthDay_ReRun_Site_Thumbnail_1200x1684.jpg"} alt="" />
                <div className='mt-36'>
                    <h1 className='text-4xl flex justify-start font-bold m-2'>Allbirds ReRun™</h1>
                    <h1 className='text-2xl flex justify-start font-bold m-2'>A New Way To Get Old Favorites</h1>
                    <p className='flex m-4'>Allbirds ReRun™ is a marketplace where you can shop slightly imperfect and gently used products, extending their life and lowering our impact on the planet. Allbirds has partnered with Trove, a company that specializes in circular commerce, to run Allbirds ReRun™ on our behalf.</p>

                    <p className='m-4 flex justify-start font-bold'>By clicking the link below, you will be leaving allbirds.com and heading to the ReRun marketplace site.</p>

                    <button className='bg-white text-blck border border-black p-6 font-bold m-5 hover:transform hover:transition-transform duration-500 hover:bg-black hover:text-white'>START SHOPPING RERUN</button>
                </div>
            </div>

        </>
    )
}

export default Rerun