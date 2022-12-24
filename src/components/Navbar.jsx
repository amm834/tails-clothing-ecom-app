import {useContext} from 'react'
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {ArrowRightOnRectangleIcon, UserPlusIcon} from "@heroicons/react/24/solid";
import {UserContext} from "../contexts/user.context.jsx";
import {signOutUser} from "../lib/firebase/firebase.js";
import CartList from "./CartList.jsx";

const navigation = [
    {name: 'Home', to: '/'},
    {name: 'Shop', to: '/shop'},
]

export default function Navbar() {

    const {currentUser} = useContext(UserContext)

    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex flex-1">
                            <Link to="/">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Brand Logo"
                                />
                            </Link>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0">
                            <div className="flex h-14 items-center space-x-8 px-4 sm:h-auto">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.to}
                                          className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-1 items-center justify-end">
                            {/* User Authentication */}
                            {!currentUser ?
                                <Link to="/login"
                                      className="inline-flex gap-x-2 items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
                                    <UserPlusIcon className="h-4 w-4"/>
                                    <span>Login</span>
                                </Link>
                                : <Button
                                    className="gap-x-2 bg-red-500  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    onClick={signOutUser}
                                >
                                    <ArrowRightOnRectangleIcon className="h-4 w-4"/>
                                    <span>Logout</span>
                                </Button>}

                            {/* Cart */}
                            <CartList/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
