import ActivityCard from "./ActivityCard";

import placement from "./assets/leadership/placement.png";
import rep from "./assets/leadership/rep.jpg";
import coordination from "./assets/leadership/coordination.jpg";

const set = [
    {
        image: placement,
        name: "College Placement Representative",
        description:
            "Spearheded the activities of Placement and Training Cell and Managing social college pages.",
    },
    {
        image: rep,
        name: "Class Representative",
        description: "Served as Class Representative for two consecutive years",
    },
    {
        image: coordination,
        name: "Event Coordinator- CSE Association",
        description:
            "Spearheaded the coordination of numerous department events",
    },
];

function Leadership() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">Leadership</h1>
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

export default Leadership;
