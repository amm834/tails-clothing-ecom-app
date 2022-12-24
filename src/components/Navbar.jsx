import {Fragment, useContext} from 'react'
import {MagnifyingGlassIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
import {Popover, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {ArrowRightOnRectangleIcon, UserPlusIcon} from "@heroicons/react/24/solid";
import {UserContext} from "../contexts/user.context.jsx";
import {signOutUser} from "../lib/firebase/firebase.js";

const navigation = [
    {name: 'Home', to: '/'},
    {name: 'Shop', to: '/shop'},
]
const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
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
                            <Popover className="z-10 ml-4 flow-root text-sm lg:relative lg:ml-8">
                                <Popover.Button className="group -m-2 flex items-center p-2">
                                    <ShoppingBagIcon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel
                                        className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                        <h2 className="sr-only">Shopping Cart</h2>

                                        <form className="mx-auto max-w-2xl px-4">
                                            <ul role="list" className="divide-y divide-gray-200">
                                                {products.map((product) => (
                                                    <li key={product.id} className="flex items-center py-6">
                                                        <img
                                                            src={product.imageSrc}
                                                            alt={product.imageAlt}
                                                            className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                                        />
                                                        <div className="ml-4 flex-auto">
                                                            <h3 className="font-medium text-gray-900">
                                                                <a href={product.href}>{product.name}</a>
                                                            </h3>
                                                            <p className="text-gray-500">{product.color}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                type="submit"
                                                className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                            >
                                                Checkout
                                            </button>

                                            <p className="mt-6 text-center">
                                                <a href="#"
                                                   className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                    View Shopping Bag
                                                </a>
                                            </p>
                                        </form>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
