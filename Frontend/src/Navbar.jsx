import { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const navItems = document.querySelectorAll(".nav-bar-item h3");

            let currentSectionIndex = sections.length - 1;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (window.scrollY + 50 >= sections[i].offsetTop) {
                    currentSectionIndex = i;
                    break;
                }
            }

            navItems.forEach((navItem, index) => {
                if (index === currentSectionIndex) {
                    navItem.classList.add("active");
                } else {
                    navItem.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            <a href="#achievements">
                <div className="nav-bar-item">
                    <h3>Achievements</h3>
                </div>
            </a>
        </div>
    );
}

export default Navbar;
