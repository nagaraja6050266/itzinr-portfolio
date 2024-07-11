import ActivityCard from "./ActivityCard";




const set = [
    
];

function OtherAchievements() {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">Other Achievements</h1>
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

export default OtherAchievements;
