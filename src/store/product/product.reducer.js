import PRODUCT_TYPES from "./product.types.js";

const PRODUCT_INITIAL_STATE = {
    products: {},
}
export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case PRODUCT_TYPES.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        default:
            return state
    }

}