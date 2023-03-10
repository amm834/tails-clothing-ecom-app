import {useContext} from "react";
import {CartContext} from "../contexts/cart.context.jsx";
import {useSelector} from "react-redux";
import {selectProducts} from "../store/product/product.selector.js";

export default function ProductList() {
    const {products} = useSelector(selectProducts)
    const {addItemToCart} = useContext(CartContext)

    const categories = Object.keys(products)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">

                {categories.map((category, index) => {
                    return (
                        <div as="Fragment" key={index}>
                            <h2 className="text-xl font-bold text-gray-900">{category}</h2>

                            <div
                                className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {products?.[category]?.map((product) => (
                                    <div key={product.id}>
                                        <div className="relative">
                                            <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="relative mt-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                            </div>
                                            <div
                                                className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                />
                                                <p className="relative text-lg font-semibold text-white">${product.price}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <button
                                                className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                                onClick={() => addItemToCart(product)}
                                            >
                                                Add to cart<span className="sr-only">, {product.name}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
