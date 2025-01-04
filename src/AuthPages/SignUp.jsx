import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
return (
    <>
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-16 space-y-8 bg-gray-50 rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Sign Up to your account</h1>
                </div>
                <div className="space-y-6">
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                        id="signUp"
                        className="w-full px-4 py-2 font-bold text-white bg-black rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        Sign Up
                    </button>
                    <p className="text-center text-gray-600">
                        Already have an account? <Link to='/login' className="text-black hover:underline">Login</Link> from here
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

export default SignUp