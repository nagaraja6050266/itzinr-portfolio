function Navbar() {
    return (
        <div className="nav-bar">
            <a href="#about">
                <div className="nav-bar-item">
                    <h3>About</h3>
                </div>
            </a>
            <a href="#skills">
                <div className="nav-bar-item">
                    <h3>Skills</h3>
                </div>
            </a>
            <a href="#projects">
                <div className="nav-bar-item">
                    <h3>Projects</h3>
                </div>
            </a>
            <a href="#comments">
                <div className="nav-bar-item">
                    <h3>Comments</h3>
                </div>
            </a>
        </div>
    );
}
export default Navbar;
