import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./contexts/user.context.jsx";
import ProductsProvider from "./contexts/products.context";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <App/>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
