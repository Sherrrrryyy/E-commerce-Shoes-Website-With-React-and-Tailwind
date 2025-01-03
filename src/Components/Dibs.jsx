import React from 'react'

const Dibs = () => {
    return (
        <>
            <div className='bg-gray-100 p-24 text-center'>
                <h1 className='text-5xl font-bold mb-5'>Want First Dibs?</h1>
                <p className='m-5'>Join our email list and be the first to know about new limited edition products, <br /> material innovations, and lots of other fun updates.</p>
                <div className='m-5 '>
                    <input type="text" placeholder='Enter your e-mail address' 
                    className='w-80 border-0 outline-none bg-white p-3 ' />
                    <button className='p-2 text-white bg-black'>SIGN UP</button>
                </div>
                <p>Note: You can opt-out at any time. See our Privacy Policy and Terms.</p>
            </div>
        </>
    )
}

export default Dibs