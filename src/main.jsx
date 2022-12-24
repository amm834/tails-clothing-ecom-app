import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./contexts/user.context.jsx";
import ProductsProvider from "./contexts/products.context";
import CartProvider from "./contexts/cart.context";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
