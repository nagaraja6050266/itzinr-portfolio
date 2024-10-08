function ActivityCard(props) {
    return (
        <div className="carousel-item" id={props.id}>
            <a href={props.link} >
                <img
                    className="carousel-item__img"
                    src={props.image}
                    alt="people"
                />
                <div className="carousel-item__details">
                    <div className="card-text">
                        <h2>{props.name}</h2>
                        <h3>{props.description}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default ActivityCard;
