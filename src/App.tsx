import { Routes, Route } from "react-router"
import './App.css'
import Home from "./Pages/home"
import Nav from "./components/nav";

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
export default App
