import profileImage from "./assets/profile.jpg";
import instaLogo from "./assets/social-media/insta.png";
import git from "./assets/social-media/git.png";
import linkedin from "./assets/social-media/linkedin.png";
import leetcode from "./assets/social-media/leetcode.png";
import { Box, Button } from "@mui/material";
function Home() {
    const handleContact = () => {
        window.location.href =
            "https://mail.google.com/mail/?to=nagaraja6050266@gmail.com&su=Contacting+through+Portfolio&body=Hey+I+want+to+connect+with+you...&fs=1&tf=cm";
    };

    const handleDownloadCV = () => {
        window.location.href =
            "https://drive.google.com/drive/folders/1_q8lIaRZozpa33n-OFbqvAWojxrxHVRZ?usp=sharing";
    };

    return (
        <section id="about" className="home">
            <div className="intro">
                <div className="profile-icons">
                    <img
                        className="profileImage"
                        src={profileImage}
                        alt="image"
                    />
                    <div className="icons">
                        <a href="https://www.instagram.com/itz__inr">
                            <img
                                className="icon insta-icon"
                                src={instaLogo}
                                alt="Instalogo"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/itzinr">
                            <img className="icon" src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/nagaraja6050266">
                            <img className="icon" src={git} alt="" />
                        </a>
                        <a href="https://leetcode.com/itzinr">
                            <img className="icon" src={leetcode} alt="" />
                        </a>
                    </div>
                </div>

                <div className="intro-text">
                    <h2>Nagaraja I</h2>
                    <h3>
                        MERN Stack Developer | Enthusiast Engineer | Captivating
                        Orator | Placement Representative
                    </h3>
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                        I'm Nagaraja, a versatile professional skilled in
                        software develpment, problem solving and critical
                        thinking. With strong communication and ledership
                        abilities, I am passionate about software develpment and
                        technologies. Here you will find highlights of my work,
                        including my projects, achievements and accomplishments.
                        Explore my projects and see how I can contribute to your
                        business's success.
                    </p>
                    <Box sx={{ display: "flex" }} gap={2}>
                        <Button variant="outlined" onClick={handleDownloadCV}>
                            Download CV
                        </Button>
                        <Button variant="contained" onClick={handleContact}>
                            Contact
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default Home;
