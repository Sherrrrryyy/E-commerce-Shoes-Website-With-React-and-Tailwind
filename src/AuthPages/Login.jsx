import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Login = () => {
return (
    <>
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-16 space-y-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
                </div>
                <div className="space-y-4">
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                        id="login"
                        className="w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600">
                        Didn't have an account?{' '}
                        <Link to='/signup' className="text-black hover:underline">
                            Signup
                        </Link>{' '}
                        from here
                    </p>
                    <p className="text-center text-gray-600">
                        Go back to{' '}
                        <Link to='/' className="text-black hover:underline">
                            Home
                        </Link>{' '}
                        from here
                    </p>
                </div>
            </div>
        </div>
    </>
)
}

export default Login