import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import { HomeScreen } from "../Pages/HomeScreen"
import MyCart from "../Pages/MyCart"
import { AuthProvider } from "./Auth"
import { SucessCart } from "../Pages/SucessCart"

const AppRoutes = () => {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/cart" element={<MyCart />} />
                    <Route path="/Sucess" element={<SucessCart />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes