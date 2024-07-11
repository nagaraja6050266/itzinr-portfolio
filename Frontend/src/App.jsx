import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import ActivityCard from "./ActivityCard.jsx";
import TechnicalAchievements from "./TechnicalAchievements.jsx";
import SkillCard from "./SkillCard.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Comments from "./Comments.jsx";
import CommentsCard from "./CommentCard.jsx";
import { BrowserRouter as Router, Route, Routes, ScrollRestoration } from "react-router-dom";
import GossipStation from "./GossipStation.jsx";
import PostGossip from "./PostGossip.jsx";
import ScrollToTopButton from "./ScrollToTop.jsx";
import Internship from "./Internship.jsx";
import Leadership from "./Leadership.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Navbar/><Home/><Skills/><Projects/><Internship/><Leadership/><TechnicalAchievements/><Comments/><ScrollToTopButton/></>} />
                <Route path="/comment" element={<PostGossip />} />
                <Route path="/thank-you" element={<GossipStation/>} />
            </Routes>
        </Router>
    );
}

export default App;
