import cardimage from "./assets/profile.jpg";
function ActivityCard(props) {
    return (
            <div className="carousel-item">
                <img className="carousel-item__img" src={props.image} alt="people" />
                <div className="carousel-item__details">
                    <div className="card-text">
                        <h2>
                            {props.name}
                        </h2>
                        <h3>
                            {props.description}
                        </h3>
                    </div>
                </div>
            </div>
    );
}
export default ActivityCard;
