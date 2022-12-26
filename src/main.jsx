import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./contexts/cart.context";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
