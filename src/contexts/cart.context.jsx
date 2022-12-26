import React, {createContext, useEffect, useState} from 'react';


export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemToCart: () => {
    },
    cleanItemToCart: () => {

    },
    cartCount: 0,
    totalPrice: 0,
})

const addQuantityToCartItems = (cartItems, product) => {

    const isCartItemExist = cartItems.find(item => item.id === product.id)

    if (isCartItemExist) {
        return cartItems.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }

            return item
        })
    }

    return [...cartItems, {...product, quantity: 1}]
}

const removeQuantityToCartItems = (cartItems, product) => {

    const isCartItemExist = cartItems.find(item => item.id === product.id)


    if (isCartItemExist && product.quantity >= 1) {

        return cartItems.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity === 1 ? item.quantity : item.quantity - 1
                }
            }

            return item
        })
    }
    return cartItems
}

const cleanItemFromCartItems = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id)
}


const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (product) => {
        setCartItems(addQuantityToCartItems(cartItems, product))
    }
    const removeItemToCart = (product) => {
        setCartItems(removeQuantityToCartItems(cartItems, product))
    }

    const cleanItemToCart = (product) => {
        setCartItems(cleanItemFromCartItems(cartItems, product))
    }


    const value = {
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemToCart,
        cleanItemToCart,
        cartCount,
        totalPrice,
    }

    useEffect(() => {
        const total = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(total)

        const totalPriceWithQtys = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        setTotalPrice(totalPriceWithQtys)
    }, [cartItems]);


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
