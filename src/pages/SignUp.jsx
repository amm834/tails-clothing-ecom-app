import React, {useState} from 'react';
import {
    createAuthUserWithEmailAndPassword,
    createUserFromGoogleAuth,
    signInWithGooglePopup
} from "../lib/firebase/firebase.js";

const SignUp = () => {
    const userDefaults = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    const [userFields, setUserFields] = useState({...userDefaults})

    const handleInput = ({target}) => {
        const {name, value} = target
        setUserFields({...userFields, [name]: value})
    }

    const onSignUpFormSubmit = async (event) => {
        event.preventDefault()
        const {email, password} = userFields

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserFromGoogleAuth(user, {displayName: userFields.name})
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert('Your cannot create an account,email  is already in use.')
            } else {
                console.log('Account creating', error)
            }
        }
    }

    const logWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserFromGoogleAuth(user)
    };


    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" method="POST" onSubmit={onSignUpFormSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="text"

                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleInput}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"

                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleInput}/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"

                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password_confirmation"
                                       className="block text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        autoComplete="current-password"

                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        onChange={event => userFields.password_confirmation = event.target.value}
                                    />
                                </div>
                            </div>


                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"/>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            {/* Sign In with service */}
                            <div className="mt-6 grid  gap-3">
                                <div>
                                    <button
                                        className="inline-flex gap-x-3 place-items-center w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                        onClick={logWithGoogle}
                                    >
                                        <span className="sr-only">Sign in with Facebook</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                            <path
                                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                        </svg>
                                        Sign in with Google
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
