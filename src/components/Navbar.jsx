import {Fragment, useContext} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, ShoppingBagIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {ArrowRightOnRectangleIcon, UserPlusIcon} from '@heroicons/react/24/solid'
import Button from "./Button.jsx";
import {Link} from "react-router-dom";
import {UserContext} from "./user.context.jsx";
import {signOutUser} from "../lib/firebase/firebase.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const {currentUser} = useContext(UserContext)


    return (
        <Disclosure as="nav" className="bg-light shadow">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="transition ease-in duration-300 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    {/* Active: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link to="/"
                                          href="#"
                                          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                                    >
                                        Home
                                    </Link>
                                    <Link to="/"
                                          href="#"
                                          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">

                                    {!currentUser ? <Link to="/login">
                                            <Button>
                                                <UserPlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true"/>
                                                Login
                                            </Button>
                                        </Link>
                                        : <Link to="/login">
                                            <Button
                                                className="bg-red-600 hover:bg-red-700 focus:ring-red-500 "
                                                onClick={signOutUser}
                                            >
                                                <ArrowRightOnRectangleIcon className="-ml-0.5 mr-2 h-4 w-4"
                                                                           aria-hidden="true"/>
                                                Logout
                                            </Button>
                                        </Link>
                                    }
                                    {/* Cart dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button
                                                className="group flex items-center gap-x-2 text-sm focus:outline-none">
                                                <span className="sr-only">Open cart menu</span>
                                                <ShoppingBagIcon
                                                    className="h-6 w-6 text-gray-500 group-hover:text-gray-700"/>
                                                <span
                                                    className="text-gray-500 group-hover:text-gray-700">Your Cart</span>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile view*/}
                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Active: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                            >
                                Contact
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                            >
                                Sign In
                            </Disclosure.Button>


                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
