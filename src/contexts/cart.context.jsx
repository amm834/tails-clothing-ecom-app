import React, {createContext, useEffect, useState} from 'react';


export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount: 0,
})

const addQuantityToCartItems = (cartItems, product) => {

    const isCartItemExist = cartItems.find(item => item.id === product.id)

    if (isCartItemExist) {
        return cartItems.map(item => {
            if (item.id === product.id) {
                return {
                    ...product,
                    quantity: item.quantity + 1
                }
            }

            return product
        })
    }

    return [...cartItems, {...product, quantity: 1}]
}

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (product) => {
        setCartItems(addQuantityToCartItems(cartItems, product))
    }

    const value = {
        cartItems,
        setCartItems,
        addItemToCart,
        cartCount,
    }

    useEffect(() => {
        const total = cartItems.length
        setCartCount(total)
    }, [cartItems]);


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
