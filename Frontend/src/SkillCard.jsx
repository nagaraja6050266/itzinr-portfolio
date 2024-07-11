function SkillCard(props) {
    return (
        <div className="skill-card">
            <div className="icon-and-caption">
                <img src={props.iconSource} alt="skillicon" />
                <h4>{props.skillName}</h4>
            </div>
        </div>
    );
}
export default SkillCard;
