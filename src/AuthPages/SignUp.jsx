import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../Firebase/firebaseconfig'
import { doc, setDoc } from 'firebase/firestore'

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    useEffect(() => {
        const checkUser = () => {
            const userId = localStorage.setItem('users', user)
            if (userId) {
                navigate('/login', { replace: true })
            }
        }
        checkUser()
    }, [navigate])


    const handleUser = async (e) => {
        e.preventDefault()

        const userSign = await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user.uid
                const userId = localStorage.setItem('users', user)


                const userObject = {
                    name,
                    email,
                }
                setDoc(doc(db, "Signup users", user), userObject)
                navigate('/login', { replace: true })
            })
            .catch((error) => {
                alert(error.message)
            })
    }


    const checkEmail = () => {
        const regex = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0'
        if (regex.test(email)) {
            return true
        } else {
            return false
        }

    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-16 space-y-8 bg-gray-50 rounded-lg shadow-md">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900">Sign Up to your account</h1>
                    </div>
                    <div className="space-y-6">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input

                            value={email}
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={(e) => { setEmail(e.target.value), checkEmail() }}
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            onClick={handleUser}
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