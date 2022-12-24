import {createContext, useEffect, useState} from "react";
import {createUserFromGoogleAuth, onAuthUserStateChange} from "../lib/firebase/firebase.js";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
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