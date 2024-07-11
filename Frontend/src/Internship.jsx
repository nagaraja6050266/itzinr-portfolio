import ActivityCard from "./ActivityCard";

import betaaddict from './assets/Internship/betaaddict.png';
import hig from './assets/Internship/hig.jpg';
import ui from './assets/Projects/ui.webp'

const set = [
    {
        image: betaaddict,
        name: "Creative Video Editor Intern - BetaAddict Aquarium, Namakkal",
        description:
            "Used Retention Editing techniques to showcase product and advertisement videos in social media",
    },
    {
        image: ui,
        name: "UI UX Intern - Exposys Data Labs, Bangalore",
        description: "Designed visually appealing UI designs and prototypes for mobile designing."
    },
    {
        image: hig,
        name: "Marketing",
        description:
            "Approaching Business Clients and Explaining services of company",
    }
];

function Internship() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">Internship</h1>
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

export default Internship;
