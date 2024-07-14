import SkillCard from './SkillCard.jsx';
function SkillsSection({header,set}) {
    return (
        <section id="skills">
            <div>
                <h1 className="section-header blue">{header}</h1>
                <div className="skill-cards-container">
                    {set.map((s, i) => (
                        <SkillCard
                            key={i}
                            iconSource={s.icon}
                            skillName={s.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default SkillsSection;
