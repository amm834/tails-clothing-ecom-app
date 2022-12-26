import {combineReducers} from "redux";
import {userReducer} from "./user/user.reducer.js";
import {productReducer} from "./product/product.reducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
})