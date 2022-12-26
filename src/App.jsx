import {Route, Routes} from "react-router-dom";
import WithNavigationLayout from "./layouts/WithNavigationLayout";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Shop from "./pages/Shop.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import {createUserFromGoogleAuth, getAllCategories, onAuthUserStateChange} from "./lib/firebase/firebase.js";
import {useEffect} from "react";
import {setCurrentUser} from "./store/user/user.action.js";
import {useDispatch} from "react-redux";
import {setProducts} from "./store/product/product.action.js";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        return onAuthUserStateChange(async user => {
            if (user) {
                await createUserFromGoogleAuth(user)
            }
            dispatch(setCurrentUser(user))
        })
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getAllCategories()
            dispatch(setProducts(categories))
        }
        getCategories()
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<WithNavigationLayout/>}>
                    <Route index={true} path="/" element={<Home/>}/>
                    <Route index={true} path="/shop" element={<Shop/>}/>
                    <Route index={true} path="/login" element={<Login/>}/>
                    <Route index={true} path="/sign-up" element={<SignUp/>}/>
                    <Route index={true} path="/checkout" element={<CheckOut/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
