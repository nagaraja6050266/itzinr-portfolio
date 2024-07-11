import profileImage from "./assets/profile.jpg";
import instaLogo from "./assets/social-media/insta.png"
import git from "./assets/social-media/git.png"
import linkedin from "./assets/social-media/linkedin.png"
import leetcode from "./assets/social-media/leetcode.png"
function Home() {
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
                    <a href=""><img className="icon insta-icon" src={instaLogo} alt="Instalogo" /></a>
                    <a href=""><img className="icon" src={linkedin} alt="" /></a>
                    <a href=""><img className="icon" src={git} alt="" /></a>
                    <a href=""><img className="icon" src={leetcode} alt="" /></a>
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
                </div>
            </div>
        </section>
    );
}

export default Home;
