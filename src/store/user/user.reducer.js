export const user_reducer_actions = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const initial_user = {
    currentUser: null,
}

export const userReducer = (state = initial_user, action) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload,
            }
        default:
            return state;
    }
}
