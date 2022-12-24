import React, {useContext} from 'react';
import CheckOutTable from "../components/CheckOutTable.jsx";
import {CartContext} from "../contexts/cart.context.jsx";

const CheckOut = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <div>
            <CheckOutTable cartItems={cartItems}/>
        </div>
    );
};

export default CheckOut;
