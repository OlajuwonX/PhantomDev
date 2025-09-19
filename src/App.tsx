import { Routes, Route } from "react-router"
import './App.css'
import Home from "./Pages/home"
import Nav from "./components/nav";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Projects from "./Pages/projects";
import Footer from "./components/footer";

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}
export default App
