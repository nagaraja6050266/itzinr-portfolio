import ActivityCard from "./ActivityCard";


import profile from './assets/profile.jpg';

const set=[{
    image: profile,
    name: 'Project',
    description: "Description"
},
]

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

export default Projects