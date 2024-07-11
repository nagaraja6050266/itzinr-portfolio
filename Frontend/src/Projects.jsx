import ActivityCard from "./ActivityCard";
import crud from "./assets/Projects/crud.jpg";
import discover from "./assets/Projects/discover.png";
import searchautomation from "./assets/Projects/searchautomation.jpg";
import ui from "./assets/Projects/ui.webp";

const set = [
    {
        image: discover,
        name: "Discover-Me Quiz App",
        description:
            "A Personalized Quiz app to conduct quiz, and can see their rankings.",
    },
    {
        image: crud,
        name: "Product Management API",
        description:
            "API to manage product data from database and can handle all kind of HTTP requests",
    },
    {
        image: searchautomation,
        name: "Search Automation",
        description:
            "Automated the process of searching in google with keywords and storing search history with single click",
    },
    {
        image: ui,
        name: "UI Designs",
        description:
            "Designed appealing UI designs for both mobiles and desktop using Figma",
    },
];

function Projects() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">Projects</h1>
                <div className="projects-container">
                    {set.map((s, i) => (
                        <ActivityCard
                            key={i}
                            image={s.image}
                            name={s.name}
                            description={s.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
