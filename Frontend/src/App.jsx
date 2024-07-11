import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Comments from "./Comments.jsx";
import { BrowserRouter as Router, Route, Routes, ScrollRestoration } from "react-router-dom";
import GossipStation from "./GossipStation.jsx";
import PostGossip from "./PostGossip.jsx";
import ScrollToTopButton from "./ScrollToTop.jsx";
import Sections from './Sections.jsx';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Navbar/><Home/><Skills/><Sections/><Comments/><ScrollToTopButton/></>} />
                <Route path="/comment" element={<PostGossip />} />
                <Route path="/thank-you" element={<GossipStation/>} />
            </Routes>
        </Router>
    );
}

export default App;
