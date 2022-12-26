import {createContext, useEffect, useReducer, useState} from "react";
import {createUserFromGoogleAuth, onAuthUserStateChange} from "../lib/firebase/firebase.js";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, initial_user)

    const setCurrentUser = (user) => {
        dispatch({type: user_reducer_actions.SET_CURRENT_USER, payload: user})
    }


    const value = {currentUser, setCurrentUser}


    useEffect(() => {
        return onAuthUserStateChange(async user => {
            if (user) {
                await createUserFromGoogleAuth(user)
            }
            setCurrentUser(user)
        })
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}