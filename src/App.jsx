import {Route, Routes} from "react-router-dom";
import WithNavigationLayout from "./layouts/WithNavigationLayout";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Shop from "./pages/Shop.jsx";
import CheckOut from "./pages/CheckOut.jsx";


function App() {

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
