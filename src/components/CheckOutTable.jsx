import {useContext} from "react";
import {CartContext} from "../contexts/cart.context.jsx";

export default function CheckOutTable({cartItems}) {

    const {addItemToCart, removeItemToCart, cleanItemToCart, totalPrice} = useContext(CartContext)

    return (
        <div className="mx-auto mx-4 mt-8 lg:mx-14">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Product
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Quantity
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItems.map(cartItem => <tr className="bg-white border-b" key={cartItem.id}>
                            <td className="p-4 w-32">
                                <img src={cartItem.imageSrc} alt="Apple Watch"/>
                            </td>
                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                {cartItem.name}
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex items-center space-x-3">
                                    <button
                                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                        onClick={() => removeItemToCart(cartItem)}
                                    >
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                    <div>
                                        <input type="number" id="first_product"
                                               className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder={cartItem.quantity} required/>
                                    </div>
                                    <button
                                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                        onClick={() => addItemToCart(cartItem)}
                                    >
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                ${cartItem.price}
                            </td>
                            <td className="py-4 px-6">
                                <button
                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    onClick={() => cleanItemToCart(cartItem)}
                                >Remove
                                </button>
                            </td>
                        </tr>)
                    }
                    <tr className="bg-white border-b">
                        <td colSpan="5" className="py-4 px-6 text-right">
                           <span className="mr-24 inline-flex items-center gap-x-4">
                                <span className="text-medium font-bold">Total Price</span>
                               <span className="text-xl font-bold">
                               ${totalPrice}
                               </span>
                           </span>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}
