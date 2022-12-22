import {Route, Routes} from "react-router-dom";
import WithNavigationLayout from "./layouts/WithNavigationLayout";
import Home from "./pages/Home.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<WithNavigationLayout/>}>
                    <Route index={true} path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
