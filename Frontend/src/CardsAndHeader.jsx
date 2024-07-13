import ActivityCard from "./ActivityCard";

function CardsAndHeader({ set, headerName }) {
    return (
        <section id="projects">
            <div>
                <h1 className="section-header">{headerName}</h1>
                    <div className="projects-container">
                        {set.map((s, i) => (
                            <ActivityCard
                                key={i}
                                image={s.image}
                                name={s.name}
                                description={s.description}
                                link={s.link}
                                id={s.id}
                            />
                        ))}
                    </div>
            </div>
        </section>
    );
}

export default CardsAndHeader;
