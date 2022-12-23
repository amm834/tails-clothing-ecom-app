import {Route, Routes} from "react-router-dom";
import WithNavigationLayout from "./layouts/WithNavigationLayout";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<WithNavigationLayout/>}>
                    <Route index={true} path="/" element={<Home/>}/>
                    <Route index={true} path="/login" element={<Login/>}/>
                    <Route index={true} path="/sign-up" element={<SignUp/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
