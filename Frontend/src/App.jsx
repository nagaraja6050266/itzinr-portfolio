import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import ActivityCard from "./ActivityCard.jsx";
import Achievements from "./Achievements.jsx";
import SkillCard from "./SkillCard.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Comments from "./Comments.jsx";
import CommentsCard from "./CommentCard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GossipStation from "./GossipStation.jsx";
import PostGossip from "./PostGossip.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Projects/></>} />
                <Route path="/comment" element={<PostGossip />} />
                <Route path="/thank-you" element={<GossipStation/>} />
            </Routes>
        </Router>
    );
}

export default App;
