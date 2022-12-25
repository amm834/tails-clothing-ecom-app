import {createContext, useEffect, useState} from "react";
import {getAllCategories} from "../lib/firebase/firebase.js";


export const ProductsContext = createContext({
    products: [],
})

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getAllCategories()
            console.log(categories)
        }
        getCategories()
    })

    const value = {
        products,
        setProducts
    }


    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
