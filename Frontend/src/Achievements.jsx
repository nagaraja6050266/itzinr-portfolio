import ActivityCard from "./ActivityCard";
const set = [
    {
        name: "Name1",
    },
    {
        name: "Name2",
    },
];
function Achievements() {
    return (
        <section id="achievements">
            <div>
                <h1 className="section-header">Achievements</h1>
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
export default Achievements;
