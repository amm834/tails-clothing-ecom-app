import {createAction} from "../../lib/reducer/reducer.js";
import PRODUCT_TYPES from "./product.types.js";

export const setProducts = (products) => createAction(PRODUCT_TYPES.GET_ALL_PRODUCTS, products)